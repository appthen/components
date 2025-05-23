import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtCheckboxProps } from '../../../types/checkbox'

export default class AtCheckbox extends React.Component<AtCheckboxProps<any>> {
  public static defaultProps: AtCheckboxProps<any>
  public static propTypes: InferProps<AtCheckboxProps<any>>

  private handleClick(idx: number): void {
    const { selectedList, options } = this.props
    const option = options[idx]
    const { disabled, value } = option
    if (disabled) return

    const selectedSet = new Set(selectedList)
    if (!selectedSet.has(value)) {
      selectedSet.add(value)
    } else {
      selectedSet.delete(value)
    }
    this.props.onChange([...selectedSet])
  }

  public render(): JSX.Element {
    const { style, className, options, selectedList } = this.props

    const rootCls = classNames('at-checkbox', className)

    return (
      <View className={rootCls} style={style}>
        {options.map((option, idx) => {
          const { value, disabled, label, desc } = option
          const optionCls = classNames('at-checkbox__option', {
            'at-checkbox__option--disabled': disabled,
            'at-checkbox__option--selected': selectedList.includes(value)
          })

          return (
            <View
              className={optionCls}
              key={value}
              onClick={this.handleClick.bind(this, idx)}
            >
              <View className='at-checkbox__option-wrap'>
                <View className='at-checkbox__option-cnt'>
                  <View className='at-checkbox__icon-cnt'>
                    <Text className='at-icon at-icon-check'></Text>
                  </View>
                  <View className='at-checkbox__title'>{label}</View>
                </View>
                {desc && <View className='at-checkbox__desc'>{desc}</View>}
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

AtCheckbox.defaultProps = {
  className: '',
  options: [],
  selectedList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
}

AtCheckbox.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func
}
