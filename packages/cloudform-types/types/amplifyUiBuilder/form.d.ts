import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FieldConfig {
    Validations?: List<FieldValidationConfiguration>;
    InputType?: FieldInputConfig;
    Position?: FieldPosition;
    Label?: Value<string>;
    Excluded?: Value<boolean>;
    constructor(properties: FieldConfig);
}
export declare class FieldInputConfig {
    ReadOnly?: Value<boolean>;
    Placeholder?: Value<string>;
    FileUploaderConfig?: FileUploaderFieldConfig;
    IsArray?: Value<boolean>;
    ValueMappings?: ValueMappings;
    DefaultCountryCode?: Value<string>;
    MaxValue?: Value<number>;
    Step?: Value<number>;
    Name?: Value<string>;
    DefaultValue?: Value<string>;
    DescriptiveText?: Value<string>;
    Type: Value<string>;
    Required?: Value<boolean>;
    MinValue?: Value<number>;
    Value?: Value<string>;
    DefaultChecked?: Value<boolean>;
    constructor(properties: FieldInputConfig);
}
export declare class FieldPosition {
    Below?: Value<string>;
    RightOf?: Value<string>;
    Fixed?: Value<string>;
    constructor(properties: FieldPosition);
}
export declare class FieldValidationConfiguration {
    Type: Value<string>;
    ValidationMessage?: Value<string>;
    StrValues?: List<Value<string>>;
    NumValues?: List<Value<number>>;
    constructor(properties: FieldValidationConfiguration);
}
export declare class FileUploaderFieldConfig {
    IsResumable?: Value<boolean>;
    ShowThumbnails?: Value<boolean>;
    AcceptedFileTypes: List<Value<string>>;
    MaxFileCount?: Value<number>;
    MaxSize?: Value<number>;
    AccessLevel: Value<string>;
    constructor(properties: FileUploaderFieldConfig);
}
export declare class FormButton {
    Position?: FieldPosition;
    Children?: Value<string>;
    Excluded?: Value<boolean>;
    constructor(properties: FormButton);
}
export declare class FormCTA {
    Position?: Value<string>;
    Cancel?: FormButton;
    Submit?: FormButton;
    Clear?: FormButton;
    constructor(properties: FormCTA);
}
export declare class FormDataTypeConfig {
    DataSourceType: Value<string>;
    DataTypeName: Value<string>;
    constructor(properties: FormDataTypeConfig);
}
export declare class FormInputValueProperty {
    Value?: Value<string>;
    constructor(properties: FormInputValueProperty);
}
export declare class FormStyle {
    VerticalGap?: FormStyleConfig;
    OuterPadding?: FormStyleConfig;
    HorizontalGap?: FormStyleConfig;
    constructor(properties: FormStyle);
}
export declare class FormStyleConfig {
    Value?: Value<string>;
    TokenReference?: Value<string>;
    constructor(properties: FormStyleConfig);
}
export declare class SectionalElement {
    Type: Value<string>;
    Position?: FieldPosition;
    Text?: Value<string>;
    Level?: Value<number>;
    Orientation?: Value<string>;
    Excluded?: Value<boolean>;
    constructor(properties: SectionalElement);
}
export declare class ValueMapping {
    DisplayValue?: FormInputValueProperty;
    Value: FormInputValueProperty;
    constructor(properties: ValueMapping);
}
export declare class ValueMappings {
    Values: List<ValueMapping>;
    constructor(properties: ValueMappings);
}
export interface FormProperties {
    FormActionType: Value<string>;
    Cta?: FormCTA;
    Fields: {
        [key: string]: FieldConfig;
    };
    SchemaVersion: Value<string>;
    AppId?: Value<string>;
    EnvironmentName?: Value<string>;
    LabelDecorator?: Value<string>;
    SectionalElements: {
        [key: string]: SectionalElement;
    };
    DataType: FormDataTypeConfig;
    Style: FormStyle;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class Form extends ResourceBase<FormProperties> {
    static FieldConfig: typeof FieldConfig;
    static FieldInputConfig: typeof FieldInputConfig;
    static FieldPosition: typeof FieldPosition;
    static FieldValidationConfiguration: typeof FieldValidationConfiguration;
    static FileUploaderFieldConfig: typeof FileUploaderFieldConfig;
    static FormButton: typeof FormButton;
    static FormCTA: typeof FormCTA;
    static FormDataTypeConfig: typeof FormDataTypeConfig;
    static FormInputValueProperty: typeof FormInputValueProperty;
    static FormStyle: typeof FormStyle;
    static FormStyleConfig: typeof FormStyleConfig;
    static SectionalElement: typeof SectionalElement;
    static ValueMapping: typeof ValueMapping;
    static ValueMappings: typeof ValueMappings;
    constructor(properties: FormProperties);
}
