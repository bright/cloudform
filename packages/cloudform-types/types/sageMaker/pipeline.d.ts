import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PipelineProperties {
    PipelineName: Value<string>;
    PipelineDisplayName?: Value<string>;
    PipelineDescription?: Value<string>;
    PipelineDefinition: {
        [key: string]: any;
    };
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Pipeline extends ResourceBase<PipelineProperties> {
    constructor(properties: PipelineProperties);
}
