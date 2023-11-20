import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AutoScalingConfigurationProperties {
    MinSize?: Value<number>;
    MaxConcurrency?: Value<number>;
    AutoScalingConfigurationName?: Value<string>;
    MaxSize?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class AutoScalingConfiguration extends ResourceBase<AutoScalingConfigurationProperties> {
    constructor(properties?: AutoScalingConfigurationProperties);
}
