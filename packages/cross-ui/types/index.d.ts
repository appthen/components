import { PickerViewProps, SwitchProps } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Props } from '../src/components/calendar/interface'

export { default as AtActionSheet, AtActionSheetItem } from './action-sheet'
export { default as AtActivityIndicator } from './activity-indicator'
export { default as AtAvatar } from './avatar'
export { default as AtBadge } from './badge'
export { default as AtButton } from './button'
export { default as AtCard } from './card'
export { default as AtCheckbox } from './checkbox'
export { default as AtDrawer } from './drawer'
export { default as AtFab } from './fab'
export { default as AtFloatLayout } from './float-layout'
export { default as AtForm } from './form'
export { default as AtGrid } from './grid'
export { default as AtIcon } from './icon'
export { default as AtInputNumber } from './input-number'
export { default as AtInput } from './input'
export { default as AtListItem, AtList } from './list'
export { default as AtModal } from './modal'
export { default as AtNavBar } from './nav-bar'
export { default as AtNoticebar } from './noticebar'
export { default as AtPagination } from './pagination'
export { default as AtProgress } from './progress'
export { default as AtRadio } from './radio'
export { default as AtRate } from './rate'
export { default as AtSegmentedControl } from './segmented-control'
export { default as AtSwitch } from './switch'
export { default as AtSearchBar } from './search-bar'
export { default as AtTabBar } from './tab-bar'
export { default as AtTabs } from './tabs'
export { default as AtTag } from './tag'
export { default as AtTextarea } from './textarea'
export { default as AtTimeline } from './timeline'
export { default as AtToast } from './toast'
export { default as AtTabsPane } from './tabs-pane'
export { default as AtSwipeAction } from './swipe-action'
export { default as AtAccordion } from './accordion'
export { default as AtLoadMore } from './load-more'
export { default as AtDivider } from './divider'
export { default as AtCountdown } from './countdown'
export { default as AtSteps } from './steps'
export { default as AtCurtain } from './curtain'
export { default as AtSlider } from './slider'
export { AtMessage, message } from './message'
export { default as AtImagePicker } from './image-picker'
export { default as AtIndexes } from './indexes'
export { default as AtRange } from './range'
export { default as AtFloatButton } from './float-button'

export { default as View } from './base/view'
export { default as ScrollView } from './base/scroll-view'
export { default as Text } from './base/text'
export { default as Image } from './base/image'
export { default as ImageBackground } from './base/image-background'
export { default as Page } from './base/page'
export { default as Modal } from './base/modal'
export { default as TopView } from './base/top-view'
export { default as Overlay } from './base/overlay'
export { default as TabView } from './base/tab-view'
export { default as SafeView } from './base/safe-view'
export { default as Input } from './base/input'
export { default as Textarea } from './base/textarea'
export { default as HeaderBar } from './base/header-bar'
export { default as FooterBar } from './base/footer-bar'
export { default as StatusBar } from './base/status-bar'
export { default as AutoList } from './base/autolist'

export declare const AtCalendar: ComponentClass<Props>

export declare const AtModalHeader: ComponentClass
export declare const AtModalAction: ComponentClass
export declare const AtModalContent: ComponentClass

export declare const Switch: ComponentClass<SwitchProps>
export declare const Picker: ComponentClass<any>
export declare const PickerView: ComponentClass<PickerViewProps>

export declare const utils: any;
export declare const config: Map;
