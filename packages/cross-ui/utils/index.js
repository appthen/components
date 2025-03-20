import * as lceDataSource from '@alilc/lowcode-datasource-engine/runtime';
export const dataSource = lceDataSource.create;
export { Current, reLaunch, 
// openEmbeddedMiniProgram,
navigateToMiniProgram, navigateBackMiniProgram, exitMiniProgram, 
// showShareImageMenu,
// shareVideoMessage,
// shareFileMessage,
// onCopyUrl,
// offCopyUrl,
// authPrivateMessage,
showToast, showModal, showActionSheet, hideToast, hideLoading, enableAlertBeforeUnload, disableAlertBeforeUnload, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, hideHomeButton, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, 
// Animation,
setTopBarText, 
// setWindowSize,
onWindowResize, offWindowResize, request, 
// requestOrderPayment,
setStorage, setStorageSync, removeStorage, removeSavedFile, removeStorageSync, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, clearStorage, clearStorageSync, chooseAddress, chooseLocation, chooseMedia, saveFile, compressImage, 
// saveFileToDisk,
getEnv, onMemoryWarning, getApp, getCurrentPages, 
// navigateTo,
// redirectTo,
// switchTab,
createSelectorQuery, createIntersectionObserver, createAudioContext, createInnerAudioContext, createVideoContext, createCameraContext, createLivePlayerContext, createLivePusherContext, createMapContext, canIUse, startAccelerometer, stopAccelerometer, onAccelerometerChange, startCompass, stopCompass, onCompassChange, makePhoneCall, scanCode, setClipboardData, getClipboardData, openBluetoothAdapter, closeBluetoothAdapter, getBluetoothAdapterState, onBluetoothAdapterStateChange, startBluetoothDevicesDiscovery, stopBluetoothDevicesDiscovery, getBluetoothDevices, getConnectedBluetoothDevices, createBLEConnection, closeBLEConnection, getBLEDeviceServices, getBLEDeviceCharacteristics, readBLECharacteristicValue, writeBLECharacteristicValue, notifyBLECharacteristicValueChange, onBLEConnectionStateChange, onBLECharacteristicValueChange, startBeaconDiscovery, stopBeaconDiscovery, getBeacons, setScreenBrightness, getScreenBrightness, setKeepScreenOn, vibrateLong, vibrateShort, addPhoneContact, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, offError, offPageNotFound, onAppShow, onAppHide, offAppShow, offAppHide, login, checkSession, authorize, getUserInfo, requestPayment, showShareMenu, hideShareMenu, updateShareMenu, getShareInfo, chooseImage, chooseMessageFile, previewImage, getImageInfo, saveImageToPhotosAlbum, startRecord, stopRecord, playVoice, pauseVoice, stopVoice, getAvailableAudioSources, setInnerAudioOption, chooseVideo, saveVideoToPhotosAlbum, loadFontFace, createCanvasContext, canvasToTempFilePath, base64ToArrayBuffer, arrayBufferToBase64, getFileSystemManager, getMenuButtonBoundingClientRect, nextTick, getSelectedTextRange, getBackgroundAudioManager, createWorker, uploadFile, downloadFile, connectSocket, closeSocket, sendSocketMessage, onSocketOpen, onSocketError, onSocketClose, onSocketMessage, getRecorderManager, } from '@tarojs/taro';
import { showLoading as TShowLoading } from '@tarojs/taro';
export * from './storage';
export * from './ui';
export * from './event';
export * from './data';
export * from './uuid';
export * from './loadsh';
export * from './time';
export * from './navigation';
export * from './safeValue';
export function showLoading(opts) {
    return TShowLoading(opts || { title: '请稍等' });
}
//# sourceMappingURL=index.js.map