import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Switch, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtSwitchProps } from '../../../types/switch'

export default class AtSwitch extends React.Component<AtSwitchProps> {
  public static defaultProps: AtSwitchProps
  public static propTypes: InferProps<AtSwitchProps>

  private handleChange = (event: CommonEvent): void => {
    const { value, checked } = event.detail
    const state = typeof value === 'undefined' ? checked : value
    this.props.onChange && this.props.onChange(state)
  }

  public render(): JSX.Element {
    console.log('[render] ', 121231312)
    const {
      style,
      className,
      disabled,
      border,
      title,
      checked,
      color
    } = this.props

    const rootCls = classNames(
      'at-switch',
      {
        'at-switch--without-border': !border
      },
      className
    )
    const containerCls = classNames('at-switch__container', {
      'at-switch--disabled': disabled
    })
    console.log('[rootCls] ', rootCls, style);
    return (
      <View className={rootCls} style={style || undefined}>
        <View className='at-switch__title'>{title}</View>
        <View className={containerCls}>
          <View className='at-switch__mask'></View>
          <Switch
            className='at-switch__switch'
            checked={checked}
            color={color}
            onChange={this.handleChange}
          />
        </View>
      </View>
    )
  }
}

AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false
}

AtSwitch.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  title: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}
