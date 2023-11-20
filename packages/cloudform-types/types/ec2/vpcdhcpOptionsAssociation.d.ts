import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VPCDHCPOptionsAssociationProperties {
    VpcId: Value<string>;
    DhcpOptionsId: Value<string>;
}
export default class VPCDHCPOptionsAssociation extends ResourceBase<VPCDHCPOptionsAssociationProperties> {
    constructor(properties: VPCDHCPOptionsAssociationProperties);
}
