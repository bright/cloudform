import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ExperimentTemplateStopCondition {
    Source: Value<string>;
    Value?: Value<string>;
    constructor(properties: ExperimentTemplateStopCondition);
}
export declare class ExperimentTemplateTarget {
    ResourceType: Value<string>;
    ResourceArns?: List<Value<string>>;
    ResourceTags?: {
        [key: string]: Value<string>;
    };
    Filters?: List<ExperimentTemplateTargetFilter>;
    SelectionMode: Value<string>;
    constructor(properties: ExperimentTemplateTarget);
}
export declare class ExperimentTemplateAction {
    ActionId: Value<string>;
    Description?: Value<string>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    Targets?: {
        [key: string]: Value<string>;
    };
    StartAfter?: List<Value<string>>;
    constructor(properties: ExperimentTemplateAction);
}
export declare class ExperimentTemplateTargetFilter {
    Path: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: ExperimentTemplateTargetFilter);
}
export interface ExperimentTemplateProperties {
    Description: Value<string>;
    Targets: {
        [key: string]: ExperimentTemplateTarget;
    };
    Actions?: {
        [key: string]: ExperimentTemplateAction;
    };
    StopConditions: List<ExperimentTemplateStopCondition>;
    RoleArn: Value<string>;
    Tags: {
        [key: string]: Value<string>;
    };
}
export default class ExperimentTemplate extends ResourceBase<ExperimentTemplateProperties> {
    static ExperimentTemplateStopCondition: typeof ExperimentTemplateStopCondition;
    static ExperimentTemplateTarget: typeof ExperimentTemplateTarget;
    static ExperimentTemplateAction: typeof ExperimentTemplateAction;
    static ExperimentTemplateTargetFilter: typeof ExperimentTemplateTargetFilter;
    constructor(properties: ExperimentTemplateProperties);
}
