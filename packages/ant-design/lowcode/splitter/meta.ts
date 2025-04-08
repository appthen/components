import snippets from './snippets';

export default {
  snippets,
  componentName: 'Splitter',
  title: '分割面板',
  category: '布局',
  props: [
    {
      name: 'layout',
      title: { 
        label: '布局方向', 
        tip: '设置分割面板的布局方向' 
      },
      propType: {
        type: 'oneOf',
        value: ['horizontal', 'vertical']
      },
      defaultValue: 'horizontal',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '水平',
                value: 'horizontal'
              },
              {
                title: '垂直',
                value: 'vertical'
              }
            ]
          }
        },
        'VariableSetter'
      ]
    },
    {
      name: 'lazy',
      title: { 
        label: '延迟渲染', 
        tip: '是否启用延迟渲染模式' 
      },
      propType: 'bool',
      defaultValue: false,
      setter: ['BoolSetter', 'VariableSetter']
    }
  ],
  configure: {
    component: { isContainer: true },

    supports: {
      style: true,
      events: [
        {
          name: 'onResizeStart',
          description: "开始拖拽之前回调",
          template: "onResizeStart(sizes,${extParams}){\n// 开始拖拽之前回调\nconsole.log('onResizeStart', sizes);}"
        },
        {
          name: 'onResize',
          description: "面板大小变化回调",
          template: "onResize(sizes,${extParams}){\n// 面板大小变化回调\nconsole.log('onResize', sizes);}"
        },
        {
          name: 'onResizeEnd',
          description: "拖拽结束回调",
          template: "onResizeEnd(sizes,${extParams}){\n// 拖拽结束回调\nconsole.log('onResizeEnd', sizes);}"
        }
      ]
    }
  }
};