import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export declare type Type = "ipsec.1";
export interface VPNGatewayProperties {
    Type: Value<Type>;
    Tags?: ResourceTag[];
}
export default class VPNGateway extends ResourceBase {
    constructor(properties: VPNGatewayProperties, dependsOn?: Value<string>);
}
