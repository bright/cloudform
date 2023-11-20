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

export class ActionParameters {
    Type?: ComponentProperty
    Anchor?: ComponentProperty
    Target?: ComponentProperty
    Fields?: {[key: string]: ComponentProperty}
    State?: MutationActionSetStateParameter
    Model?: Value<string>
    Id?: ComponentProperty
    Url?: ComponentProperty
    Global?: ComponentProperty

    constructor(properties: ActionParameters) {
        Object.assign(this, properties)
    }
}

export class ComponentBindingPropertiesValue {
    DefaultValue?: Value<string>
    Type?: Value<string>
    BindingProperties?: ComponentBindingPropertiesValueProperties

    constructor(properties: ComponentBindingPropertiesValue) {
        Object.assign(this, properties)
    }
}

export class ComponentBindingPropertiesValueProperties {
    Field?: Value<string>
    DefaultValue?: Value<string>
    Bucket?: Value<string>
    UserAttribute?: Value<string>
    Model?: Value<string>
    Predicates?: List<Predicate>
    Key?: Value<string>

    constructor(properties: ComponentBindingPropertiesValueProperties) {
        Object.assign(this, properties)
    }
}

export class ComponentChild {
    ComponentType!: Value<string>
    Events?: {[key: string]: ComponentEvent}
    Children?: List<ComponentChild>
    Properties!: {[key: string]: ComponentProperty}
    Name!: Value<string>

    constructor(properties: ComponentChild) {
        Object.assign(this, properties)
    }
}

export class ComponentConditionProperty {
    Operator?: Value<string>
    Field?: Value<string>
    Operand?: Value<string>
    OperandType?: Value<string>
    Else?: ComponentProperty
    Then?: ComponentProperty
    Property?: Value<string>

    constructor(properties: ComponentConditionProperty) {
        Object.assign(this, properties)
    }
}

export class ComponentDataConfiguration {
    Model!: Value<string>
    Sort?: List<SortProperty>
    Identifiers?: List<Value<string>>
    Predicate?: Predicate

    constructor(properties: ComponentDataConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComponentEvent {
    Action?: Value<string>
    Parameters?: ActionParameters

    constructor(properties: ComponentEvent) {
        Object.assign(this, properties)
    }
}

export class ComponentProperty {
    Condition?: ComponentConditionProperty
    UserAttribute?: Value<string>
    ImportedValue?: Value<string>
    BindingProperties?: ComponentPropertyBindingProperties
    Bindings?: {[key: string]: FormBindingElement}
    Configured?: Value<boolean>
    Concat?: List<ComponentProperty>
    DefaultValue?: Value<string>
    Type?: Value<string>
    Value?: Value<string>
    Model?: Value<string>
    CollectionBindingProperties?: ComponentPropertyBindingProperties
    Event?: Value<string>
    ComponentName?: Value<string>
    Property?: Value<string>

    constructor(properties: ComponentProperty) {
        Object.assign(this, properties)
    }
}

export class ComponentPropertyBindingProperties {
    Field?: Value<string>
    Property!: Value<string>

    constructor(properties: ComponentPropertyBindingProperties) {
        Object.assign(this, properties)
    }
}

export class ComponentVariant {
    VariantValues?: {[key: string]: Value<string>}
    Overrides?: {[key: string]: any}

    constructor(properties: ComponentVariant) {
        Object.assign(this, properties)
    }
}

export class FormBindingElement {
    Element!: Value<string>
    Property!: Value<string>

    constructor(properties: FormBindingElement) {
        Object.assign(this, properties)
    }
}

export class MutationActionSetStateParameter {
    Set!: ComponentProperty
    ComponentName!: Value<string>
    Property!: Value<string>

    constructor(properties: MutationActionSetStateParameter) {
        Object.assign(this, properties)
    }
}

export class Predicate {
    Operator?: Value<string>
    Field?: Value<string>
    Or?: List<Predicate>
    And?: List<Predicate>
    Operand?: Value<string>

    constructor(properties: Predicate) {
        Object.assign(this, properties)
    }
}

export class SortProperty {
    Field!: Value<string>
    Direction!: Value<string>

    constructor(properties: SortProperty) {
        Object.assign(this, properties)
    }
}

export interface ComponentProperties {
    ComponentType: Value<string>
    SchemaVersion?: Value<string>
    EnvironmentName?: Value<string>
    BindingProperties: {[key: string]: ComponentBindingPropertiesValue}
    SourceId?: Value<string>
    Properties: {[key: string]: ComponentProperty}
    CollectionProperties?: {[key: string]: ComponentDataConfiguration}
    Name: Value<string>
    Variants: List<ComponentVariant>
    AppId?: Value<string>
    Events?: {[key: string]: ComponentEvent}
    Overrides: {[key: string]: any}
    Children?: List<ComponentChild>
    Tags?: {[key: string]: Value<string>}
}

export default class Component extends ResourceBase<ComponentProperties> {
    static ActionParameters = ActionParameters
    static ComponentBindingPropertiesValue = ComponentBindingPropertiesValue
    static ComponentBindingPropertiesValueProperties = ComponentBindingPropertiesValueProperties
    static ComponentChild = ComponentChild
    static ComponentConditionProperty = ComponentConditionProperty
    static ComponentDataConfiguration = ComponentDataConfiguration
    static ComponentEvent = ComponentEvent
    static ComponentProperty = ComponentProperty
    static ComponentPropertyBindingProperties = ComponentPropertyBindingProperties
    static ComponentVariant = ComponentVariant
    static FormBindingElement = FormBindingElement
    static MutationActionSetStateParameter = MutationActionSetStateParameter
    static Predicate = Predicate
    static SortProperty = SortProperty

    constructor(properties: ComponentProperties) {
        super('AWS::AmplifyUIBuilder::Component', properties)
    }
}
