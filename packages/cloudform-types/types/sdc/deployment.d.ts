import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DeploymentProperties {
    ConfigName: Value<string>;
    S3Bucket: Value<string>;
    TargetRegionOverride?: Value<string>;
    S3Key: Value<string>;
    Stage: Value<string>;
    PipelineId?: Value<string>;
    Dimension: Value<string>;
}
export default class Deployment extends ResourceBase<DeploymentProperties> {
    constructor(properties: DeploymentProperties);
}
