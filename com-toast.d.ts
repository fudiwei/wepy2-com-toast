export interface ComponentToast {
    /**
     * 显示消息对话框。
     * @param {String | Object} options 
     */
    show(
        options:
            | string
            | {
                  content: string;
                  position?: 'top' | 'center' | 'bottom';
                  duration?: number;
              }
    ): void;
    
    /**
     * 隐藏消息对话框。
     */
    hide(): void;
}
