import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EntityType {
    Arn?: Value<string>;
    Inline?: Value<boolean>;
    Name?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    constructor(properties: EntityType);
}
export declare class EventVariable {
    Arn?: Value<string>;
    Inline?: Value<boolean>;
    Name?: Value<string>;
    DataSource?: Value<string>;
    DataType?: Value<string>;
    DefaultValue?: Value<string>;
    VariableType?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    constructor(properties: EventVariable);
}
export declare class Label {
    Arn?: Value<string>;
    Inline?: Value<boolean>;
    Name?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    constructor(properties: Label);
}
export interface EventTypeProperties {
    Name: Value<string>;
    Tags?: List<ResourceTag>;
    Description?: Value<string>;
    EventVariables: List<EventVariable>;
    Labels: List<Label>;
    EntityTypes: List<EntityType>;
}
export default class EventType extends ResourceBase<EventTypeProperties> {
    static EntityType: typeof EntityType;
    static EventVariable: typeof EventVariable;
    static Label: typeof Label;
    constructor(properties: EventTypeProperties);
}
