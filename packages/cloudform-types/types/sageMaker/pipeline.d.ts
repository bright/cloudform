import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ParallelismConfiguration {
    MaxParallelExecutionSteps: Value<number>;
    constructor(properties: ParallelismConfiguration);
}
export declare class PipelineDefinition {
    PipelineDefinitionBody?: Value<string>;
    PipelineDefinitionS3Location?: S3Location;
    constructor(properties: PipelineDefinition);
}
export declare class S3Location {
    Bucket: Value<string>;
    Version?: Value<string>;
    ETag?: Value<string>;
    Key: Value<string>;
    constructor(properties: S3Location);
}
export interface PipelineProperties {
    PipelineName: Value<string>;
    ParallelismConfiguration?: ParallelismConfiguration;
    PipelineDescription?: Value<string>;
    PipelineDisplayName?: Value<string>;
    PipelineDefinition: PipelineDefinition;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Pipeline extends ResourceBase<PipelineProperties> {
    static ParallelismConfiguration: typeof ParallelismConfiguration;
    static PipelineDefinition: typeof PipelineDefinition;
    static S3Location: typeof S3Location;
    constructor(properties: PipelineProperties);
}
