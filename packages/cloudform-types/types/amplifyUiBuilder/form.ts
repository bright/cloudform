/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FieldConfig {
    Validations?: List<FieldValidationConfiguration>
    InputType?: FieldInputConfig
    Position?: FieldPosition
    Label?: Value<string>
    Excluded?: Value<boolean>

    constructor(properties: FieldConfig) {
        Object.assign(this, properties)
    }
}

export class FieldInputConfig {
    ReadOnly?: Value<boolean>
    Placeholder?: Value<string>
    FileUploaderConfig?: FileUploaderFieldConfig
    IsArray?: Value<boolean>
    ValueMappings?: ValueMappings
    DefaultCountryCode?: Value<string>
    MaxValue?: Value<number>
    Step?: Value<number>
    Name?: Value<string>
    DefaultValue?: Value<string>
    DescriptiveText?: Value<string>
    Type!: Value<string>
    Required?: Value<boolean>
    MinValue?: Value<number>
    Value?: Value<string>
    DefaultChecked?: Value<boolean>

    constructor(properties: FieldInputConfig) {
        Object.assign(this, properties)
    }
}

export class FieldPosition {
    Below?: Value<string>
    RightOf?: Value<string>
    Fixed?: Value<string>

    constructor(properties: FieldPosition) {
        Object.assign(this, properties)
    }
}

export class FieldValidationConfiguration {
    Type!: Value<string>
    ValidationMessage?: Value<string>
    StrValues?: List<Value<string>>
    NumValues?: List<Value<number>>

    constructor(properties: FieldValidationConfiguration) {
        Object.assign(this, properties)
    }
}

export class FileUploaderFieldConfig {
    IsResumable?: Value<boolean>
    ShowThumbnails?: Value<boolean>
    AcceptedFileTypes!: List<Value<string>>
    MaxFileCount?: Value<number>
    MaxSize?: Value<number>
    AccessLevel!: Value<string>

    constructor(properties: FileUploaderFieldConfig) {
        Object.assign(this, properties)
    }
}

export class FormButton {
    Position?: FieldPosition
    Children?: Value<string>
    Excluded?: Value<boolean>

    constructor(properties: FormButton) {
        Object.assign(this, properties)
    }
}

export class FormCTA {
    Position?: Value<string>
    Cancel?: FormButton
    Submit?: FormButton
    Clear?: FormButton

    constructor(properties: FormCTA) {
        Object.assign(this, properties)
    }
}

export class FormDataTypeConfig {
    DataSourceType!: Value<string>
    DataTypeName!: Value<string>

    constructor(properties: FormDataTypeConfig) {
        Object.assign(this, properties)
    }
}

export class FormInputValueProperty {
    Value?: Value<string>

    constructor(properties: FormInputValueProperty) {
        Object.assign(this, properties)
    }
}

export class FormStyle {
    VerticalGap?: FormStyleConfig
    OuterPadding?: FormStyleConfig
    HorizontalGap?: FormStyleConfig

    constructor(properties: FormStyle) {
        Object.assign(this, properties)
    }
}

export class FormStyleConfig {
    Value?: Value<string>
    TokenReference?: Value<string>

    constructor(properties: FormStyleConfig) {
        Object.assign(this, properties)
    }
}

export class SectionalElement {
    Type!: Value<string>
    Position?: FieldPosition
    Text?: Value<string>
    Level?: Value<number>
    Orientation?: Value<string>
    Excluded?: Value<boolean>

    constructor(properties: SectionalElement) {
        Object.assign(this, properties)
    }
}

export class ValueMapping {
    DisplayValue?: FormInputValueProperty
    Value!: FormInputValueProperty

    constructor(properties: ValueMapping) {
        Object.assign(this, properties)
    }
}

export class ValueMappings {
    Values!: List<ValueMapping>

    constructor(properties: ValueMappings) {
        Object.assign(this, properties)
    }
}

export interface FormProperties {
    FormActionType: Value<string>
    Cta?: FormCTA
    Fields: {[key: string]: FieldConfig}
    SchemaVersion: Value<string>
    AppId?: Value<string>
    EnvironmentName?: Value<string>
    LabelDecorator?: Value<string>
    SectionalElements: {[key: string]: SectionalElement}
    DataType: FormDataTypeConfig
    Style: FormStyle
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
}

export default class Form extends ResourceBase<FormProperties> {
    static FieldConfig = FieldConfig
    static FieldInputConfig = FieldInputConfig
    static FieldPosition = FieldPosition
    static FieldValidationConfiguration = FieldValidationConfiguration
    static FileUploaderFieldConfig = FileUploaderFieldConfig
    static FormButton = FormButton
    static FormCTA = FormCTA
    static FormDataTypeConfig = FormDataTypeConfig
    static FormInputValueProperty = FormInputValueProperty
    static FormStyle = FormStyle
    static FormStyleConfig = FormStyleConfig
    static SectionalElement = SectionalElement
    static ValueMapping = ValueMapping
    static ValueMappings = ValueMappings

    constructor(properties: FormProperties) {
        super('AWS::AmplifyUIBuilder::Form', properties)
    }
}
