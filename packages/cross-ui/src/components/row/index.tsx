import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from './UserContext'
import { BasicComponent, ComponentDefaults } from '../../types/common'

export type RowEventType = 'row' | 'col'

export interface RowProps extends BasicComponent {
  type: string
  justify: string
  align: string
  wrap: string
  gutter: string | number
  onClick: (e: any, type: RowEventType) => void
}

const classPrefix = 'ds-row'

const defaultProps = {
  ...ComponentDefaults,
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0',
} as RowProps
export const Row: FunctionComponent<
  Partial<RowProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    className,
    style,
    children,
    type,
    justify,
    align,
    wrap,
    gutter,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const getClass = (prefix: string, type: string) => {
    const classType = type ? `ds-row-${prefix}-${type}` : ''
    const className = prefix ? classType : `ds-row-${type}`
    return className
  }
  const getClasses = () => {
    return `
    ${getClass('', type)}
    ${getClass('justify', justify)}
    ${getClass('align', align)}
    ${getClass('flex', wrap)}
    ${classPrefix}
    `
  }
  const parentRow = {
    gutter,
  }

  return (
    <DataContext.Provider value={parentRow}>
      {React.createElement(
        'div',
        {
          className: classNames(getClasses(), className),
          style,
          onClick: (e: any) => {
            onClick && onClick(e, 'row')
          },
        },
        children
      )}
    </DataContext.Provider>
  )
}

Row.defaultProps = defaultProps
Row.displayName = 'Row'