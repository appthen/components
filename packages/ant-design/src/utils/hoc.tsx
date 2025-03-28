import React, { ComponentType, forwardRef, Ref } from 'react';
import dayjs from 'dayjs';
import { get, set, has } from 'lodash';

function convertProps(
  props: Record<string, any>,
  list: string[],
  mapper: (v: any, key: string) => any,
) {
  const out: Record<string, any> = {};
  list.forEach((key) => {
    if (has(props, key)) {
      set(out, key, mapper(get(props, key), key));
    }
  });
  return out;
}

/**
 * 简单包装，不做任何处理
 * 部分组件ref比较特殊，包一层会解决这个问题
 */
export function withWrap(Comp: ComponentType<any>) {
  return forwardRef((props: any, ref: Ref<any>) => {
    return <Comp {...props} ref={ref} />;
  });
}

/**
 * 某些组件会用React.Children.only检查子节点
 * 需要做处理避免报错
 */
export function withSingleChild(Comp: ComponentType<any>, needsConvert = ['children']) {
  return (props: any) => {
    const convertedProps = convertProps(props, needsConvert, (prop) => {
      let node = React.Children.toArray(prop)[0];
      if (node === null || typeof node !== 'object') {
        node = <div>{node}</div>;
      }
      return node;
    });

    return <Comp {...(props as any)} {...(convertedProps as any)} />;
  };
}

export function withSingleFunctionChild(Comp: ComponentType<any>) {
  return (props: any) => {
    const { children } = props;

    let node;
    if (typeof children === 'function') {
      node = children;
    }
    if (Array.isArray(children) && children.length === 1 && typeof children[0] === 'function') {
      node = children[0];
    }

    if (node) {
      return <Comp {...(props as any)}>{node}</Comp>;
    }
    return <div>{children}</div>;
  };
}

/**
 * Dayjs 对象在序列化后会被转为字符串
 * 需要让日期类组件支持接受字符串值
 */
export function withMomentProps(
  Comp: ComponentType<any>,
  needsConvert = ['value', 'defaultValue'],
) {
  // console.log('withMomentProps: ', Comp, needsConvert);
  return (props: any) => {
    const formatValue = (value: number | string) => {
      let val = dayjs(value);
      // 判断是否是日期字符串，不是时间
      if (typeof value === 'string' && isNaN(val.year())) {
        val = dayjs(`2024-01-01 ${value.trim()}`);
      }
      return val;
    };
    const convertedProps = convertProps(props, needsConvert, (prop: any) => {
      if (prop) {
        // console.log('prop: ', prop, prop?.format);
        if (Array.isArray(prop)) {
          return prop.map((v) => (v?.format ? v : formatValue(v)));
        }
        return prop?.format ? prop : formatValue(prop);
      }
    });
    // console.log('convertedProps: ', Comp, props, convertedProps, needsConvert);
    return <Comp {...(props as any)} {...(convertedProps as any)} />;
  };
}
