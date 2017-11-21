import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VPCCidrBlockProperties {
    AmazonProvidedIpv6CidrBlock?: Value<boolean>;
    VpcId: Value<string>;
}
export default class VPCCidrBlock extends ResourceBase {
    constructor(properties: VPCCidrBlockProperties, dependsOn?: Value<string>);
}
