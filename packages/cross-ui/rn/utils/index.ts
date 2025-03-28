export {
  Current,
  navigateToMiniProgram,
  navigateBackMiniProgram,
  exitMiniProgram,
  // showShareImageMenu,
  // shareVideoMessage,
  // shareFileMessage,
  // onCopyUrl,
  // offCopyUrl,
  // authPrivateMessage,
  showToast,
  showModal,
  showActionSheet,
  hideToast,
  hideLoading,
  enableAlertBeforeUnload,
  disableAlertBeforeUnload,
  showNavigationBarLoading,
  setNavigationBarTitle,
  setNavigationBarColor,
  hideNavigationBarLoading,
  hideHomeButton,
  setBackgroundTextStyle,
  setBackgroundColor,
  showTabBarRedDot,
  showTabBar,
  setTabBarStyle,
  setTabBarItem,
  setTabBarBadge,
  removeTabBarBadge,
  hideTabBarRedDot,
  hideTabBar,
  stopPullDownRefresh,
  startPullDownRefresh,
  pageScrollTo,
  createAnimation,
  // Animation,
  setTopBarText,
  // setWindowSize,
  onWindowResize,
  offWindowResize,
  request,
  // requestOrderPayment,
  setStorage,
  setStorageSync,
  removeStorage,
  removeSavedFile,
  removeStorageSync,
  getStorage,
  getStorageInfo,
  getStorageInfoSync,
  getStorageSync,
  clearStorage,
  clearStorageSync,
  chooseAddress,
  chooseLocation,
  chooseMedia,
  compressImage,
  saveFile,
  // saveFileToDisk,
  env,
  getEnv,
  onMemoryWarning,
  getApp,
  getCurrentPages,
  // navigateTo,
  // redirectTo,
  // switchTab,
  createSelectorQuery,
  createIntersectionObserver,
  createAudioContext,
  createInnerAudioContext,
  createVideoContext,
  createCameraContext,
  createLivePlayerContext,
  createLivePusherContext,
  createMapContext,
  canIUse,
  startAccelerometer,
  stopAccelerometer,
  onAccelerometerChange,
  startCompass,
  stopCompass,
  onCompassChange,
  makePhoneCall,
  scanCode,
  setClipboardData,
  getClipboardData,
  openBluetoothAdapter,
  closeBluetoothAdapter,
  getBluetoothAdapterState,
  onBluetoothAdapterStateChange,
  startBluetoothDevicesDiscovery,
  stopBluetoothDevicesDiscovery,
  getBluetoothDevices,
  getConnectedBluetoothDevices,
  createBLEConnection,
  closeBLEConnection,
  getBLEDeviceServices,
  getBLEDeviceCharacteristics,
  readBLECharacteristicValue,
  writeBLECharacteristicValue,
  notifyBLECharacteristicValueChange,
  onBLEConnectionStateChange,
  onBLECharacteristicValueChange,
  startBeaconDiscovery,
  stopBeaconDiscovery,
  getBeacons,
  setScreenBrightness,
  getScreenBrightness,
  setKeepScreenOn,
  vibrateLong,
  vibrateShort,
  addPhoneContact,
  getSystemInfo,
  getUpdateManager,
  getLaunchOptionsSync,
  onPageNotFound,
  onError,
  offError,
  offPageNotFound,
  onAppShow,
  onAppHide,
  offAppShow,
  offAppHide,
  login,
  checkSession,
  authorize,
  getSetting,
  openSetting,
  getUserInfo,
  requestPayment,
  showShareMenu,
  hideShareMenu,
  updateShareMenu,
  getShareInfo,
  chooseImage,
  previewImage,
  getImageInfo,
  saveImageToPhotosAlbum,
  startRecord,
  stopRecord,
  playVoice,
  pauseVoice,
  stopVoice,
  getAvailableAudioSources,
  setInnerAudioOption,
  chooseVideo,
  saveVideoToPhotosAlbum,
  loadFontFace,
  createCanvasContext,
  canvasToTempFilePath,
  base64ToArrayBuffer,
  arrayBufferToBase64,
  getMenuButtonBoundingClientRect,
  nextTick,
  getSelectedTextRange,
  getBackgroundAudioManager,
  createWorker,
  uploadFile,
  downloadFile,
  connectSocket,
  closeSocket,
  sendSocketMessage,
  onSocketOpen,
  onSocketError,
  onSocketClose,
  onSocketMessage,
} from '@tarojs/taro';
import Taro from '@tarojs/taro';

export { getFileSystemManager } from './file/getFileSystemManager';

export const showLoading: typeof Taro.showLoading = (opts) => {
  return Taro.showLoading(opts || { title: '请稍等' });
};

export * from './utils';
export * from './storage';
export * from './ui';
export * from './event';
export * from './data';
export * from './uuid';
export * from './loadsh';
export * from './time';
export * from './navigation';
export * from './safeValue';
export * from './dataSourceLib';
