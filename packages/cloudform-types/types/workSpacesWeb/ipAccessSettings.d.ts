import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IpRule {
    IpRange: Value<string>;
    Description?: Value<string>;
    constructor(properties: IpRule);
}
export interface IpAccessSettingsProperties {
    IpRules: List<IpRule>;
    Description?: Value<string>;
    CustomerManagedKey?: Value<string>;
    AdditionalEncryptionContext?: {
        [key: string]: Value<string>;
    };
    DisplayName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class IpAccessSettings extends ResourceBase<IpAccessSettingsProperties> {
    static IpRule: typeof IpRule;
    constructor(properties: IpAccessSettingsProperties);
}
