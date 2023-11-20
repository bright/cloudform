import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface OutpostResolverProperties {
    InstanceCount?: Value<number>;
    OutpostArn: Value<string>;
    PreferredInstanceType: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class OutpostResolver extends ResourceBase<OutpostResolverProperties> {
    constructor(properties: OutpostResolverProperties);
}
