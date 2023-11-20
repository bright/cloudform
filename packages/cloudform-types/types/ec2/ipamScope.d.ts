import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface IPAMScopeProperties {
    Description?: Value<string>;
    IpamId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class IPAMScope extends ResourceBase<IPAMScopeProperties> {
    constructor(properties: IPAMScopeProperties);
}
