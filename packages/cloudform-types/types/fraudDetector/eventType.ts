/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

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

export interface EventTypeProperties {
    Name: Value<string>
    Tags?: List<ResourceTag>
    Description?: Value<string>
    EventVariables: List<EventVariable>
    Labels: List<Label>
    EntityTypes: List<EntityType>
}

export default class EventType extends ResourceBase<EventTypeProperties> {
    static EntityType = EntityType
    static EventVariable = EventVariable
    static Label = Label

    constructor(properties: EventTypeProperties) {
        super('AWS::FraudDetector::EventType', properties)
    }
}
