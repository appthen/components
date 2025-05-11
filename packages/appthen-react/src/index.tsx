import {
  Video as TVideo,
  WebView as TWebView,
  Canvas as TCanvas,
  RichText as TRichText,
} from '@tarojs/components';

import { configure } from 'mobx';
import React from 'react';

import { portalRef } from './components/root-portal/auto-portal';

export { default as AtAvatar } from './components/avatar';
export { default as AtBadge } from './components/badge';
export { default as AtIcon } from './components/icon';
export { default as AtNoticebar } from './components/noticebar';
export { default as AtTag } from './components/tag';

export { default as Text } from './components/base/Text';
export { default as Image } from './components/base/Image';
export { default as ImageBackground } from './components/base/ImageBackground';
export { default as View } from './components/base/View';
export { default as ScrollView } from './components/base/ScrollView';

export { default as Sortable } from './components/sortable';

export { default as Page } from './components/base/Layout/Page';
export { default as Modal } from './components/base/Modal';
export { default as AutoList } from './components/base/List/AutoList';

export { default as Component } from './components/base/Layout/Component';
export { SlotRender } from './components/slot-render';

export const Video = TVideo;
export const WebView = TWebView;
export const Canvas = TCanvas;
export const RichText = TRichText;

export {
  addPortal,
  removePortal,
  registerPartalComponent,
  showComponentModal,
  renderComponentPortal,
  renderComponent,
} from './components/root-portal/auto-portal';

export const getComponent = (componentName: string) => {
  const PartalComponent = portalRef.componentMap[componentName];
  if (!PartalComponent) throw new Error(`${componentName} is not registered`);
  return PartalComponent;
};

export { default as withRouter } from './components/react-router/withRouter';

export { default as H1 } from './components/base/H1';
export { default as H2 } from './components/base/H2';
export { default as H3 } from './components/base/H3';
export { default as P } from './components/base/P';
export { default as Ul } from './components/base/Ul';
export { default as Li } from './components/base/Li';

export { default as Strong } from './components/base/Strong';
export { default as Em } from './components/base/Em';
export { default as Br } from './components/base/Br';

export { default as A } from './components/base/A';

export { default as Link } from './components/base/Link';

configure({ isolateGlobalState: true });
