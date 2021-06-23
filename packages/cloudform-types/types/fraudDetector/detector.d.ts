import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class Model {
    Arn?: Value<string>;
    constructor(properties: Model);
}
export declare class Outcome {
    Arn?: Value<string>;
    Inline?: Value<boolean>;
    Name?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    constructor(properties: Outcome);
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
export declare class Rule {
    RuleId?: Value<string>;
    RuleVersion?: Value<string>;
    DetectorId?: Value<string>;
    Expression?: Value<string>;
    Language?: Value<string>;
    Outcomes?: List<Outcome>;
    Arn?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    constructor(properties: Rule);
}
export declare class EventType {
    Name?: Value<string>;
    Inline?: Value<boolean>;
    Tags?: List<ResourceTag>;
    Description?: Value<string>;
    EventVariables?: List<EventVariable>;
    Labels?: List<Label>;
    EntityTypes?: List<EntityType>;
    Arn?: Value<string>;
    CreatedTime?: Value<string>;
    LastUpdatedTime?: Value<string>;
    constructor(properties: EventType);
}
export interface DetectorProperties {
    DetectorId: Value<string>;
    DetectorVersionStatus?: Value<string>;
    RuleExecutionMode?: Value<string>;
    Tags?: List<ResourceTag>;
    Description?: Value<string>;
    Rules: List<Rule>;
    EventType: EventType;
    AssociatedModels?: List<Model>;
}
export default class Detector extends ResourceBase<DetectorProperties> {
    static Label: typeof Label;
    static EntityType: typeof EntityType;
    static Model: typeof Model;
    static Outcome: typeof Outcome;
    static EventVariable: typeof EventVariable;
    static Rule: typeof Rule;
    static EventType: typeof EventType;
    constructor(properties: DetectorProperties);
}
