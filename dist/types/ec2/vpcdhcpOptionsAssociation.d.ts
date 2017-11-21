import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VPCDHCPOptionsAssociationProperties {
    VpcId: Value<string>;
    DhcpOptionsId: Value<string>;
}
export default class VPCDHCPOptionsAssociation extends ResourceBase {
    constructor(properties: VPCDHCPOptionsAssociationProperties, dependsOn?: Value<string>);
}
