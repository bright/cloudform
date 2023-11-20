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
export declare class EventType {
    EntityTypes?: List<EntityType>;
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    Labels?: List<Label>;
    Inline?: Value<boolean>;
    EventVariables?: List<EventVariable>;
    Arn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    constructor(properties: EventType);
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
export declare class Model {
    Arn?: Value<string>;
    constructor(properties: Model);
}
export declare class Outcome {
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    Inline?: Value<boolean>;
    Arn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    constructor(properties: Outcome);
}
export declare class Rule {
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    Language?: Value<string>;
    Expression?: Value<string>;
    RuleId?: Value<string>;
    DetectorId?: Value<string>;
    RuleVersion?: Value<string>;
    LastUpdatedTime?: Value<string>;
    Arn?: Value<string>;
    Outcomes?: List<Outcome>;
    Tags?: List<ResourceTag>;
    constructor(properties: Rule);
}
export interface DetectorProperties {
    Description?: Value<string>;
    DetectorVersionStatus?: Value<string>;
    EventType: EventType;
    DetectorId: Value<string>;
    AssociatedModels?: List<Model>;
    RuleExecutionMode?: Value<string>;
    Rules: List<Rule>;
    Tags?: List<ResourceTag>;
}
export default class Detector extends ResourceBase<DetectorProperties> {
    static EntityType: typeof EntityType;
    static EventType: typeof EventType;
    static EventVariable: typeof EventVariable;
    static Label: typeof Label;
    static Model: typeof Model;
    static Outcome: typeof Outcome;
    static Rule: typeof Rule;
    constructor(properties: DetectorProperties);
}
