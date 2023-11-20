import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchLogsConfiguration {
    LogGroupArn: Value<string>;
    constructor(properties: CloudWatchLogsConfiguration);
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
export declare class ExperimentTemplateLogConfiguration {
    S3Configuration?: S3Configuration;
    LogSchemaVersion: Value<number>;
    CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    constructor(properties: ExperimentTemplateLogConfiguration);
}
export declare class ExperimentTemplateStopCondition {
    Value?: Value<string>;
    Source: Value<string>;
    constructor(properties: ExperimentTemplateStopCondition);
}
export declare class ExperimentTemplateTarget {
    Filters?: List<ExperimentTemplateTargetFilter>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    ResourceTags?: {
        [key: string]: Value<string>;
    };
    ResourceType: Value<string>;
    ResourceArns?: List<Value<string>>;
    SelectionMode: Value<string>;
    constructor(properties: ExperimentTemplateTarget);
}
export declare class ExperimentTemplateTargetFilter {
    Path: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: ExperimentTemplateTargetFilter);
}
export declare class S3Configuration {
    BucketName: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: S3Configuration);
}
export interface ExperimentTemplateProperties {
    Description: Value<string>;
    Actions?: {
        [key: string]: ExperimentTemplateAction;
    };
    StopConditions: List<ExperimentTemplateStopCondition>;
    Targets: {
        [key: string]: ExperimentTemplateTarget;
    };
    LogConfiguration?: ExperimentTemplateLogConfiguration;
    RoleArn: Value<string>;
    Tags: {
        [key: string]: Value<string>;
    };
}
export default class ExperimentTemplate extends ResourceBase<ExperimentTemplateProperties> {
    static CloudWatchLogsConfiguration: typeof CloudWatchLogsConfiguration;
    static ExperimentTemplateAction: typeof ExperimentTemplateAction;
    static ExperimentTemplateLogConfiguration: typeof ExperimentTemplateLogConfiguration;
    static ExperimentTemplateStopCondition: typeof ExperimentTemplateStopCondition;
    static ExperimentTemplateTarget: typeof ExperimentTemplateTarget;
    static ExperimentTemplateTargetFilter: typeof ExperimentTemplateTargetFilter;
    static S3Configuration: typeof S3Configuration;
    constructor(properties: ExperimentTemplateProperties);
}
