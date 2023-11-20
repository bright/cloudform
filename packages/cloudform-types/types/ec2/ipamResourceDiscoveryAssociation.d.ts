import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface IPAMResourceDiscoveryAssociationProperties {
    IpamId: Value<string>;
    Tags?: List<ResourceTag>;
    IpamResourceDiscoveryId: Value<string>;
}
export default class IPAMResourceDiscoveryAssociation extends ResourceBase<IPAMResourceDiscoveryAssociationProperties> {
    constructor(properties: IPAMResourceDiscoveryAssociationProperties);
}
