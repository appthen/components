// @ts-nocheck

import classNames from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import React from 'react';
import { Button, View } from '@tarojs/components';
import { ButtonProps } from '@tarojs/components/types/Button';
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common';
import Taro from '@tarojs/taro';
import { AtButtonProps, AtButtonState } from '../../../types/button';
import AtLoading from '../loading/index';

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
};

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
};

export default class AtButton extends React.Component<AtButtonProps, AtButtonState> {
  public static defaultProps: AtButtonProps;
  public static propTypes: InferProps<AtButtonProps>;

  public constructor(props: AtButtonProps) {
    super(props);
    this.state = {
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
    };
  }

  private onClick(event: CommonEvent): void {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(event);
    }
  }

  private onGetUserInfo(event: CommonEvent): void {
    this.props.onGetUserInfo && this.props.onGetUserInfo(event);
  }

  private onContact(event: BaseEventOrig<ButtonProps.onContactEventDetail>): void {
    this.props.onContact && this.props.onContact(event);
  }

  private onGetPhoneNumber(event: CommonEvent): void {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
  }

  private onChooseAvatar(event: CommonEvent): void {
    this.props.onChooseAvatar && this.props.onChooseAvatar(event);
  }

  private onError(event: CommonEvent): void {
    this.props.onError && this.props.onError(event);
  }

  private onOpenSetting(event: CommonEvent): void {
    this.props.onOpenSetting && this.props.onOpenSetting(event);
  }

  public render(): JSX.Element {
    const {
      size = 'normal',
      type = '',
      circle,
      full,
      loading,
      disabled,
      style,
      formType,
      openType,
      lang,
      sessionFrom,
      sendMessageTitle,
      sendMessagePath,
      sendMessageImg,
      showMessageCard,
      appParameter,
    } = this.props;
    const { isWEAPP, isALIPAY, isWEB } = this.state;
    const rootClassName = ['at-button'];
    const classObject = {
      [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-button--disabled': disabled,
      [`at-button--${type}`]: TYPE_CLASS[type],
      'at-button--circle': circle,
      'at-button--full': full,
    };
    const loadingColor = type === 'primary' ? '#fff' : '';
    const loadingSize = size === 'small' ? '30' : 0;

    let loadingComponent: JSX.Element | null = null;
    if (loading) {
      loadingComponent = (
        <View className="at-button__icon">
          <AtLoading color={loadingColor} size={loadingSize} />
        </View>
      );
      rootClassName.push('at-button--icon');
    }

    const webButton = (
      <Button className="at-button__wxbutton" lang={lang} formType={formType}></Button>
    );

    const button = (
      <Button
        className="at-button__wxbutton"
        formType={formType}
        openType={openType}
        lang={lang}
        sessionFrom={sessionFrom}
        sendMessageTitle={sendMessageTitle}
        sendMessagePath={sendMessagePath}
        sendMessageImg={sendMessageImg}
        showMessageCard={showMessageCard}
        appParameter={appParameter}
        onGetUserInfo={this.onGetUserInfo.bind(this)}
        onGetPhoneNumber={this.onGetPhoneNumber.bind(this)}
        onChooseAvatar={this.onChooseAvatar.bind(this)}
        onOpenSetting={this.onOpenSetting.bind(this)}
        onError={this.onError.bind(this)}
        onContact={this.onContact.bind(this)}
      ></Button>
    );

    const { __designMode } = this.props as any;

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={style}
        onClick={this.onClick.bind(this)}
      >
        {!__designMode && isWEB && !disabled && webButton}
        {!__designMode && isWEAPP && !disabled && button}
        {!__designMode && isALIPAY && !disabled && button}
        {loadingComponent}
        {typeof this.props.children === 'string' ? (
          <View className="at-button__text">{this.props.children}</View>
        ) : (
          this.props.children
        )}
      </View>
    );
  }
}

AtButton.defaultProps = {
  size: 'normal',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  // Button props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
};

AtButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', '']),
  circle: PropTypes.bool,
  full: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf([
    'contact',
    'share',
    'getUserInfo',
    'getPhoneNumber',
    'launchApp',
    'openSetting',
    'feedback',
    'getRealnameAuthInfo',
    'getAuthorize',
    'contactShare',
    '',
  ]),
  lang: PropTypes.string,
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func,
};
