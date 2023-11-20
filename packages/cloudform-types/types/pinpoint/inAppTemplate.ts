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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class BodyConfig {
    Alignment?: Value<string>
    TextColor?: Value<string>
    Body?: Value<string>

    constructor(properties: BodyConfig) {
        Object.assign(this, properties)
    }
}

export class ButtonConfig {
    Web?: OverrideButtonConfiguration
    DefaultConfig?: DefaultButtonConfiguration
    IOS?: OverrideButtonConfiguration
    Android?: OverrideButtonConfiguration

    constructor(properties: ButtonConfig) {
        Object.assign(this, properties)
    }
}

export class DefaultButtonConfiguration {
    BorderRadius?: Value<number>
    ButtonAction?: Value<string>
    Text?: Value<string>
    TextColor?: Value<string>
    Link?: Value<string>
    BackgroundColor?: Value<string>

    constructor(properties: DefaultButtonConfiguration) {
        Object.assign(this, properties)
    }
}

export class HeaderConfig {
    Alignment?: Value<string>
    Header?: Value<string>
    TextColor?: Value<string>

    constructor(properties: HeaderConfig) {
        Object.assign(this, properties)
    }
}

export class InAppMessageContent {
    BodyConfig?: BodyConfig
    SecondaryBtn?: ButtonConfig
    ImageUrl?: Value<string>
    PrimaryBtn?: ButtonConfig
    HeaderConfig?: HeaderConfig
    BackgroundColor?: Value<string>

    constructor(properties: InAppMessageContent) {
        Object.assign(this, properties)
    }
}

export class OverrideButtonConfiguration {
    ButtonAction?: Value<string>
    Link?: Value<string>

    constructor(properties: OverrideButtonConfiguration) {
        Object.assign(this, properties)
    }
}

export interface InAppTemplateProperties {
    CustomConfig?: {[key: string]: any}
    Layout?: Value<string>
    Content?: List<InAppMessageContent>
    TemplateName: Value<string>
    TemplateDescription?: Value<string>
    Tags?: {[key: string]: any}
}

export default class InAppTemplate extends ResourceBase<InAppTemplateProperties> {
    static BodyConfig = BodyConfig
    static ButtonConfig = ButtonConfig
    static DefaultButtonConfiguration = DefaultButtonConfiguration
    static HeaderConfig = HeaderConfig
    static InAppMessageContent = InAppMessageContent
    static OverrideButtonConfiguration = OverrideButtonConfiguration

    constructor(properties: InAppTemplateProperties) {
        super('AWS::Pinpoint::InAppTemplate', properties)
    }
}
