import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ReadinessCheckProperties {
    ResourceSetName?: Value<string>;
    ReadinessCheckName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ReadinessCheck extends ResourceBase<ReadinessCheckProperties> {
    constructor(properties?: ReadinessCheckProperties);
}
