/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Label {
    Arn?: Value<string>
    Inline?: Value<boolean>
    Name?: Value<string>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>

    constructor(properties: Label) {
        Object.assign(this, properties)
    }
}

export class EntityType {
    Arn?: Value<string>
    Inline?: Value<boolean>
    Name?: Value<string>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>

    constructor(properties: EntityType) {
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
    Arn?: Value<string>
    Inline?: Value<boolean>
    Name?: Value<string>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>

    constructor(properties: Outcome) {
        Object.assign(this, properties)
    }
}

export class EventVariable {
    Arn?: Value<string>
    Inline?: Value<boolean>
    Name?: Value<string>
    DataSource?: Value<string>
    DataType?: Value<string>
    DefaultValue?: Value<string>
    VariableType?: Value<string>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>

    constructor(properties: EventVariable) {
        Object.assign(this, properties)
    }
}

export class Rule {
    RuleId?: Value<string>
    RuleVersion?: Value<string>
    DetectorId?: Value<string>
    Expression?: Value<string>
    Language?: Value<string>
    Outcomes?: List<Outcome>
    Arn?: Value<string>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class EventType {
    Name?: Value<string>
    Inline?: Value<boolean>
    Tags?: List<ResourceTag>
    Description?: Value<string>
    EventVariables?: List<EventVariable>
    Labels?: List<Label>
    EntityTypes?: List<EntityType>
    Arn?: Value<string>
    CreatedTime?: Value<string>
    LastUpdatedTime?: Value<string>

    constructor(properties: EventType) {
        Object.assign(this, properties)
    }
}

export interface DetectorProperties {
    DetectorId: Value<string>
    DetectorVersionStatus?: Value<string>
    RuleExecutionMode?: Value<string>
    Tags?: List<ResourceTag>
    Description?: Value<string>
    Rules: List<Rule>
    EventType: EventType
    AssociatedModels?: List<Model>
}

export default class Detector extends ResourceBase<DetectorProperties> {
    static Label = Label
    static EntityType = EntityType
    static Model = Model
    static Outcome = Outcome
    static EventVariable = EventVariable
    static Rule = Rule
    static EventType = EventType

    constructor(properties: DetectorProperties) {
        super('AWS::FraudDetector::Detector', properties)
    }
}
