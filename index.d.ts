declare const _default: {
    install: (Vue: any) => void;
    TinyMceEditor: import("vue").DefineComponent<{
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        plugins: {
            type: (StringConstructor | ArrayConstructor)[];
            default: string;
        };
        toolbar: {
            type: (StringConstructor | ArrayConstructor)[];
            default: string;
        };
        toolbarMode: {
            type: StringConstructor;
            default: string;
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        statusbar: {
            type: BooleanConstructor;
            default: boolean;
        };
        fontTypeList: {
            type: StringConstructor;
            default: string;
        };
        fontSizeList: {
            type: StringConstructor;
            default: string;
        };
        LineHightList: {
            type: StringConstructor;
            default: string;
        };
        contentStyle: {
            type: StringConstructor;
            default: string;
        };
        language: {
            type: StringConstructor;
        };
    }, {
        modelValue: import("vue").Ref<string>;
        contentValue: import("vue").Ref<string>;
        onClick: (e: any) => void;
        init: {
            language: string | undefined;
            skin_url: string;
            content_css: string;
            emoticons_database_url: string;
            toolbar_mode: string;
            plugins: string | unknown[];
            toolbar: string | unknown[];
            fontsize_formats: string;
            font_formats: string;
            lineheight_formats: string;
            height: string;
            placeholder: string;
            branding: boolean;
            resize: boolean;
            statusbar: boolean;
            elementpath: boolean;
            content_style: string;
            paste_data_images: boolean;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "onClick")[], "update:modelValue" | "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        plugins: {
            type: (StringConstructor | ArrayConstructor)[];
            default: string;
        };
        toolbar: {
            type: (StringConstructor | ArrayConstructor)[];
            default: string;
        };
        toolbarMode: {
            type: StringConstructor;
            default: string;
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        statusbar: {
            type: BooleanConstructor;
            default: boolean;
        };
        fontTypeList: {
            type: StringConstructor;
            default: string;
        };
        fontSizeList: {
            type: StringConstructor;
            default: string;
        };
        LineHightList: {
            type: StringConstructor;
            default: string;
        };
        contentStyle: {
            type: StringConstructor;
            default: string;
        };
        language: {
            type: StringConstructor;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onOnClick?: ((...args: any[]) => any) | undefined;
    }, {
        plugins: string | unknown[];
        toolbar: string | unknown[];
        modelValue: string;
        disabled: boolean;
        toolbarMode: string;
        height: string;
        placeholder: string;
        statusbar: boolean;
        fontTypeList: string;
        fontSizeList: string;
        LineHightList: string;
        contentStyle: string;
    }>;
};
export default _default;
