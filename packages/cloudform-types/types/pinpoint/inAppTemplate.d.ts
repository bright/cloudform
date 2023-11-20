import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BodyConfig {
    Alignment?: Value<string>;
    TextColor?: Value<string>;
    Body?: Value<string>;
    constructor(properties: BodyConfig);
}
export declare class ButtonConfig {
    Web?: OverrideButtonConfiguration;
    DefaultConfig?: DefaultButtonConfiguration;
    IOS?: OverrideButtonConfiguration;
    Android?: OverrideButtonConfiguration;
    constructor(properties: ButtonConfig);
}
export declare class DefaultButtonConfiguration {
    BorderRadius?: Value<number>;
    ButtonAction?: Value<string>;
    Text?: Value<string>;
    TextColor?: Value<string>;
    Link?: Value<string>;
    BackgroundColor?: Value<string>;
    constructor(properties: DefaultButtonConfiguration);
}
export declare class HeaderConfig {
    Alignment?: Value<string>;
    Header?: Value<string>;
    TextColor?: Value<string>;
    constructor(properties: HeaderConfig);
}
export declare class InAppMessageContent {
    BodyConfig?: BodyConfig;
    SecondaryBtn?: ButtonConfig;
    ImageUrl?: Value<string>;
    PrimaryBtn?: ButtonConfig;
    HeaderConfig?: HeaderConfig;
    BackgroundColor?: Value<string>;
    constructor(properties: InAppMessageContent);
}
export declare class OverrideButtonConfiguration {
    ButtonAction?: Value<string>;
    Link?: Value<string>;
    constructor(properties: OverrideButtonConfiguration);
}
export interface InAppTemplateProperties {
    CustomConfig?: {
        [key: string]: any;
    };
    Layout?: Value<string>;
    Content?: List<InAppMessageContent>;
    TemplateName: Value<string>;
    TemplateDescription?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class InAppTemplate extends ResourceBase<InAppTemplateProperties> {
    static BodyConfig: typeof BodyConfig;
    static ButtonConfig: typeof ButtonConfig;
    static DefaultButtonConfiguration: typeof DefaultButtonConfiguration;
    static HeaderConfig: typeof HeaderConfig;
    static InAppMessageContent: typeof InAppMessageContent;
    static OverrideButtonConfiguration: typeof OverrideButtonConfiguration;
    constructor(properties: InAppTemplateProperties);
}
