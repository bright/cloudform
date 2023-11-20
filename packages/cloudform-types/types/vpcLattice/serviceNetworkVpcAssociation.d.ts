import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ServiceNetworkVpcAssociationProperties {
    ServiceNetworkIdentifier?: Value<string>;
    VpcIdentifier?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class ServiceNetworkVpcAssociation extends ResourceBase<ServiceNetworkVpcAssociationProperties> {
    constructor(properties?: ServiceNetworkVpcAssociationProperties);
}
