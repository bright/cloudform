import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SubnetMapping {
    SubnetId: Value<string>;
    constructor(properties: SubnetMapping);
}
export interface FirewallProperties {
    FirewallName: Value<string>;
    FirewallPolicyArn: Value<string>;
    VpcId: Value<string>;
    SubnetMappings: List<SubnetMapping>;
    DeleteProtection?: Value<boolean>;
    SubnetChangeProtection?: Value<boolean>;
    FirewallPolicyChangeProtection?: Value<boolean>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Firewall extends ResourceBase<FirewallProperties> {
    static SubnetMapping: typeof SubnetMapping;
    constructor(properties: FirewallProperties);
}
