import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InputWhitelistRuleCidr {
    Cidr?: Value<string>;
    constructor(properties: InputWhitelistRuleCidr);
}
export interface InputSecurityGroupProperties {
    WhitelistRules?: List<InputWhitelistRuleCidr>;
    Tags?: {
        [key: string]: any;
    };
}
export default class InputSecurityGroup extends ResourceBase<InputSecurityGroupProperties> {
    static InputWhitelistRuleCidr: typeof InputWhitelistRuleCidr;
    constructor(properties?: InputSecurityGroupProperties);
}
