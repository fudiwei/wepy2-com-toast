import { WepyComponent } from "@wepy/core/types/wepy";

export interface WepyComponentToast extends WepyComponent {
    /**
     * 显示消息对话框。
     * @param {String | Object} options 
     */
    show(options: string | WepyComponentToast.ToastOptions): void;
    
    /**
     * 隐藏消息对话框。
     */
    hide(): void;
}

export namespace WepyComponentToast {
    export type ToastPositions = 'top' | 'center' | 'bottom';

    export interface ToastOptions {
        content: string;
        position?: ToastPositions;
        duration?: number;
    }
}