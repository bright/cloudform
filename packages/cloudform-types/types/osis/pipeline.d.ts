import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchLogDestination {
    LogGroup?: Value<string>;
    constructor(properties: CloudWatchLogDestination);
}
export declare class LogPublishingOptions {
    CloudWatchLogDestination?: CloudWatchLogDestination;
    IsLoggingEnabled?: Value<boolean>;
    constructor(properties: LogPublishingOptions);
}
export declare class VpcEndpoint {
    VpcId?: Value<string>;
    VpcOptions?: VpcOptions;
    VpcEndpointId?: Value<string>;
    constructor(properties: VpcEndpoint);
}
export declare class VpcOptions {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcOptions);
}
export interface PipelineProperties {
    PipelineConfigurationBody: Value<string>;
    MinUnits: Value<number>;
    PipelineName: Value<string>;
    VpcOptions?: VpcOptions;
    MaxUnits: Value<number>;
    LogPublishingOptions?: LogPublishingOptions;
    Tags?: List<ResourceTag>;
}
export default class Pipeline extends ResourceBase<PipelineProperties> {
    static CloudWatchLogDestination: typeof CloudWatchLogDestination;
    static LogPublishingOptions: typeof LogPublishingOptions;
    static VpcEndpoint: typeof VpcEndpoint;
    static VpcOptions: typeof VpcOptions;
    constructor(properties: PipelineProperties);
}
