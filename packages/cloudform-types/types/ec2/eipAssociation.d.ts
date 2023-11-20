import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EIPAssociationProperties {
    PrivateIpAddress?: Value<string>;
    InstanceId?: Value<string>;
    AllocationId?: Value<string>;
    NetworkInterfaceId?: Value<string>;
}
export default class EIPAssociation extends ResourceBase<EIPAssociationProperties> {
    constructor(properties?: EIPAssociationProperties);
}
