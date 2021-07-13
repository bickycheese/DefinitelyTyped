import { ERROR_BOX_TYPES } from './ERROR_BOX_TYPES';
import { Hotkey } from './shapes';
import { WebRequestHeaderConfig } from './WebRequestHeader';
import { WebOptions } from './WebOptions';
import { PreloadScript } from './PreloadScript';
import { Layout } from './Layout';
export interface WindowOptions extends WebOptions {
    'accelerator'?: {
        devtools: boolean;
        reload: boolean;
        reloadIgnoringCache: boolean;
        zoom: boolean;
    } | undefined;
    'alphaMask'?: {
        blue: number;
        green: number;
        red: number;
    } | undefined;
    'alwaysOnBottom'?: boolean | undefined;
    'alwaysOnTop'?: boolean | undefined;
    'api'?: any;
    'applicationIcon'?: string | undefined;
    'appLogFlushInterval'?: number | undefined;
    'aspectRatio'?: number | undefined;
    'autoShow'?: boolean | undefined;
    'backgroundColor'?: string | undefined;
    'backgroundThrottling'?: boolean | undefined;
    'center'?: boolean | undefined;
    'contentNavigation'?: null | {
        whitelist?: string[] | undefined;
        blacklist?: string[] | undefined;
    } | undefined;
    'contextMenu'?: boolean | undefined;
    'contextMenuSettings'?: {
        enable: boolean;
        devtools?: boolean | undefined;
        reload?: boolean | undefined;
    } | undefined;
    'cornerRounding'?: {
        height: number;
        width: number;
    } | undefined;
    'customData'?: string | undefined;
    'customRequestHeaders'?: WebRequestHeaderConfig[] | undefined;
    'defaultCentered'?: boolean | undefined;
    'defaultHeight'?: number | undefined;
    'defaultLeft'?: number | undefined;
    'defaultTop'?: number | undefined;
    'defaultWidth'?: number | undefined;
    'description'?: string | undefined;
    'disableIabSecureLogging'?: boolean | undefined;
    'draggable'?: boolean | undefined;
    'enableAppLogging'?: boolean | undefined;
    'enable-plugins'?: boolean | undefined;
    'enableLargerThanScreen'?: boolean | undefined;
    'exitOnClose'?: boolean | undefined;
    'experimental'?: any;
    'fdc3Api'?: boolean | undefined;
    'fdc3Manifest'?: string | undefined;
    'frame'?: boolean | undefined;
    'frameConnect'?: 'all' | 'last' | 'main-window' | undefined;
    'hasLoaded'?: boolean | undefined;
    'height'?: number | undefined;
    'hideOnBlur'?: boolean | undefined;
    'hideOnClose'?: boolean | undefined;
    'hideWhileChildrenVisible'?: boolean | undefined;
    'hotkeys'?: Hotkey[] | undefined;
    'icon'?: string | undefined;
    'isRawWindowOpen'?: boolean | undefined;
    'launchExternal'?: string | undefined;
    'layout'?: Layout | undefined;
    'loadErrorMessage'?: string | undefined;
    'maxHeight'?: number | undefined;
    'maximizable'?: boolean | undefined;
    'maxWidth'?: number | undefined;
    'minHeight'?: number | undefined;
    'minimizable'?: boolean | undefined;
    'minWidth'?: number | undefined;
    'name': string;
    'nonPersistent'?: boolean | undefined;
    'nonPersistant'?: boolean | undefined;
    'opacity'?: number | undefined;
    'plugins'?: boolean | undefined;
    'preload'?: string | PreloadScript[] | undefined;
    'preloadScripts'?: PreloadScript[] | undefined;
    'resizable'?: boolean | undefined;
    'resize'?: boolean | undefined;
    'resizeRegion'?: {
        bottomRightCorner: number;
        size: number;
        sides?: {
            top?: boolean | undefined;
            right?: boolean | undefined;
            bottom?: boolean | undefined;
            left?: boolean | undefined;
        } | undefined;
    } | undefined;
    'saveWindowState'?: boolean | undefined;
    'shadow'?: boolean | undefined;
    'show'?: boolean | undefined;
    'showBackgroundImages'?: boolean | undefined;
    'showTaskbarIcon'?: boolean | undefined;
    'skipTaskbar'?: boolean | undefined;
    'smallWindow'?: boolean | undefined;
    'state'?: 'maximized' | 'minimized' | 'normal' | undefined;
    'taskbarIcon'?: string | undefined;
    'taskbarIconGroup'?: string | undefined;
    'title'?: string | undefined;
    'toShowOnRun'?: boolean | undefined;
    'transparent'?: boolean | undefined;
    '_type'?: ERROR_BOX_TYPES | undefined;
    'url'?: string | undefined;
    'uuid': string;
    'waitForPageLoad'?: boolean | undefined;
    'webPreferences'?: {
        nodeIntegration: boolean;
        plugins: boolean;
    } | undefined;
    'width'?: number | undefined;
    'x'?: number | undefined;
    'y'?: number | undefined;
}
