import Taro from '@tarojs/taro';
import React from 'react';

import SafeView from '../SafeView';

import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { PageContext } from '../../../../utils/context';

import { Image, ImageBackground, Text, View } from '../../../..';

import { HeaderBarProps } from './HeaderBar.PropType';

import StatusBar from '../StatusBar';
import Icon from '../../../icon';

import { px } from '../../../../utils';
import config from '../../../../config';

// @ts-ignore
import BackLight from './images/back_light.png';
// @ts-ignore
import BackDark from './images/back_dark.png';
import { observable } from 'mobx';

const DarkBackIcon = (
  <Image src={BackLight} className="header_bar__back_button__image M-display-block" />
);
const LightBackIcon = (
  <Image src={BackDark} className="header_bar__back_button__image M-display-block" />
);
@observer
class HeaderBar extends React.Component<HeaderBarProps> {
  static contextType = PageContext;
  static propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    // titleTrans: PropTypes.oneOf(['left', 'center']),
    showBack: PropTypes.bool,
    translucent: PropTypes.bool,
    imageBackground: PropTypes.bool,
    leftContent: PropTypes.element,
    rightContent: PropTypes.element,
    bottomContentHeight: PropTypes.number,
    loginIcon: PropTypes.bool,
    onBack: PropTypes.func,
  };

  componentDidMount(): void {
    // 判断是否可以返回，否则首页按钮
    this.isCanBack = this.canBack();
    this.canBackHome = !!config.get('homePath');
  }

  @observable isCanBack = true;
  @observable canBackHome = false;
  onBackHome?: () => void;

  handleBack = () => {
    if (!this.canBack() && config.get('homePath')) {
      return Taro.reLaunch({
        url: config.get('homePath')
      });
    }
    if (this.props.onBack) {
      return this.props.onBack();
    } else {
      Taro.navigateBack();
    }
  };

  canBack = () => {
    const pages = Taro.getCurrentPages();
    return !!pages[pages.length - 2];
  };

  render() {
    const {
      mode = 'dark',
      backgroundColor,
      imageBackground,
      title,
      titleAlign,
      showBack = true,
      translucent,
      leftContent,
      rightContent,
      fixed,
      bottomContentHeight,
      capsulePadding,
      onLayout,
    } = this.props;
    const titleEle = title || this.props.children;
    const bgColor = backgroundColor || (mode === 'dark' ? '' : '#fff');

    const Container: any = imageBackground ? ImageBackground : View;
    const headerHeight = px(88 + (bottomContentHeight || 0));
    const isCanBack = this.isCanBack;
    const canBackHome = this.canBackHome;
    return (
      <PageContext.Consumer>
        {({}) => {
          const isWeapp = Taro.getEnv() !== Taro.ENV_TYPE.RN && Taro.getEnv() !== Taro.ENV_TYPE.WEB;
          return (
            <View className="header_bar__view">
              <StatusBar mode={mode === 'light' ? 'dark' : 'light'} />
              <Container
                className={`header_bar ${fixed ? 'header_bar__fixed' : ''} ${
                  isWeapp && capsulePadding === 'right' ? 'header_bar--capsule-padding-right' : ''
                }`}
                style={{ backgroundColor: translucent ? '' : bgColor }}
                onLayout={onLayout}
              >
                {isWeapp && capsulePadding === 'top' && <View style={{ height: px(88) }} />}
                <SafeView forceInset={{ top: 'always', bottom: 'never' }} />

                <View className="header_bar__body M-flexbox-horizontal M-vertical-middle">
                  <View
                    className={`header_bar__left M-vertical-middle ${
                      titleAlign === 'left'
                        ? 'header_bar__left__relative'
                        : 'header_bar__left__absolute'
                    }`}
                  >
                    {showBack && (
                      <View
                        activeOpacity={1}
                        onClick={this.handleBack}
                        className={`header_bar__back_button M-gb-click M-center-all`}
                      >
                        {isCanBack
                          ? mode === 'dark'
                            ? DarkBackIcon
                            : LightBackIcon
                          : canBackHome && (
                              <Icon
                                value="home"
                                size={20}
                                color={mode === 'dark' ? '#fff' : '#333'}
                              ></Icon>
                            )}
                      </View>
                    )}
                    {leftContent === null ? (
                      showBack ? null : (
                        <View className="M-p-l-15" />
                      )
                    ) : (
                      leftContent
                    )}
                  </View>
                  <View
                    className={`header_bar__title M-flex-item M-vertical-middle ${
                      titleAlign === 'left' ? 'M-horizontal-left' : 'M-center-all'
                    }`}
                  >
                    {typeof titleEle === 'string' ? (
                      <Text
                        className="M-f-s-16"
                        style={{
                          color: mode === 'dark' ? '#fff' : '#333',
                          fontWeight: 'bold',
                        }}
                      >
                        {titleEle}
                      </Text>
                    ) : (
                      titleEle
                    )}
                  </View>
                  <View className="header_bar__right M-vertical-middle">{rightContent}</View>
                </View>

                <View>{this.props.bottomContent}</View>
              </Container>
              {/* fixed 模式占位 */}
              {fixed && (
                <View>
                  {isWeapp && capsulePadding === 'top' && <View style={{ height: px(88) }} />}
                  <SafeView forceInset={{ top: 'always', bottom: 'never' }} />
                  <View style={{ height: headerHeight }} />
                </View>
              )}
            </View>
          );
        }}
      </PageContext.Consumer>
    );
  }
}

export default HeaderBar;
