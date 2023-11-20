import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TrafficDistributionGroupProperties {
    Description?: Value<string>;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class TrafficDistributionGroup extends ResourceBase<TrafficDistributionGroupProperties> {
    constructor(properties: TrafficDistributionGroupProperties);
}
