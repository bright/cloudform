import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SubnetMapping {
    IPAddressType?: Value<string>;
    SubnetId: Value<string>;
    constructor(properties: SubnetMapping);
}
export interface FirewallProperties {
    FirewallPolicyArn: Value<string>;
    SubnetChangeProtection?: Value<boolean>;
    Description?: Value<string>;
    FirewallName: Value<string>;
    VpcId: Value<string>;
    DeleteProtection?: Value<boolean>;
    FirewallPolicyChangeProtection?: Value<boolean>;
    Tags?: List<ResourceTag>;
    SubnetMappings: List<SubnetMapping>;
}
export default class Firewall extends ResourceBase<FirewallProperties> {
    static SubnetMapping: typeof SubnetMapping;
    constructor(properties: FirewallProperties);
}
