import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EntityType {
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    Inline?: Value<boolean>;
    Arn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    constructor(properties: EntityType);
}
export declare class EventVariable {
    DefaultValue?: Value<string>;
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    VariableType?: Value<string>;
    DataType?: Value<string>;
    LastUpdatedTime?: Value<string>;
    Inline?: Value<boolean>;
    Arn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    DataSource?: Value<string>;
    constructor(properties: EventVariable);
}
export declare class Label {
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    Inline?: Value<boolean>;
    Arn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    constructor(properties: Label);
}
export interface EventTypeProperties {
    EntityTypes: List<EntityType>;
    Description?: Value<string>;
    Labels: List<Label>;
    EventVariables: List<EventVariable>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class EventType extends ResourceBase<EventTypeProperties> {
    static EntityType: typeof EntityType;
    static EventVariable: typeof EventVariable;
    static Label: typeof Label;
    constructor(properties: EventTypeProperties);
}
