/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EntityType {
    Description?: Value<string>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>
    Inline?: Value<boolean>
    Arn?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>

    constructor(properties: EntityType) {
        Object.assign(this, properties)
    }
}

export class EventType {
    EntityTypes?: List<EntityType>
    Description?: Value<string>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>
    Labels?: List<Label>
    Inline?: Value<boolean>
    EventVariables?: List<EventVariable>
    Arn?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>

    constructor(properties: EventType) {
        Object.assign(this, properties)
    }
}

export class EventVariable {
    DefaultValue?: Value<string>
    Description?: Value<string>
    CreatedTime?: Value<string>
    VariableType?: Value<string>
    DataType?: Value<string>
    LastUpdatedTime?: Value<string>
    Inline?: Value<boolean>
    Arn?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
    DataSource?: Value<string>

    constructor(properties: EventVariable) {
        Object.assign(this, properties)
    }
}

export class Label {
    Description?: Value<string>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>
    Inline?: Value<boolean>
    Arn?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>

    constructor(properties: Label) {
        Object.assign(this, properties)
    }
}

export class Model {
    Arn?: Value<string>

    constructor(properties: Model) {
        Object.assign(this, properties)
    }
}

export class Outcome {
    Description?: Value<string>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>
    Inline?: Value<boolean>
    Arn?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>

    constructor(properties: Outcome) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Description?: Value<string>
    CreatedTime?: Value<string>
    Language?: Value<string>
    Expression?: Value<string>
    RuleId?: Value<string>
    DetectorId?: Value<string>
    RuleVersion?: Value<string>
    LastUpdatedTime?: Value<string>
    Arn?: Value<string>
    Outcomes?: List<Outcome>
    Tags?: List<ResourceTag>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export interface DetectorProperties {
    Description?: Value<string>
    DetectorVersionStatus?: Value<string>
    EventType: EventType
    DetectorId: Value<string>
    AssociatedModels?: List<Model>
    RuleExecutionMode?: Value<string>
    Rules: List<Rule>
    Tags?: List<ResourceTag>
}

export default class Detector extends ResourceBase<DetectorProperties> {
    static EntityType = EntityType
    static EventType = EventType
    static EventVariable = EventVariable
    static Label = Label
    static Model = Model
    static Outcome = Outcome
    static Rule = Rule

    constructor(properties: DetectorProperties) {
        super('AWS::FraudDetector::Detector', properties)
    }
}
