import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IEMap {
    ACCOUNT?: List<Value<string>>;
    ORGUNIT?: List<Value<string>>;
    constructor(properties: IEMap);
}
export declare class NetworkFirewallPolicy {
    FirewallDeploymentModel: Value<string>;
    constructor(properties: NetworkFirewallPolicy);
}
export declare class PolicyOption {
    NetworkFirewallPolicy?: NetworkFirewallPolicy;
    ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
    constructor(properties: PolicyOption);
}
export declare class PolicyTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: PolicyTag);
}
export declare class ResourceTag {
    Value?: Value<string>;
    Key: Value<string>;
    constructor(properties: ResourceTag);
}
export declare class SecurityServicePolicyData {
    ManagedServiceData?: Value<string>;
    Type: Value<string>;
    PolicyOption?: PolicyOption;
    constructor(properties: SecurityServicePolicyData);
}
export declare class ThirdPartyFirewallPolicy {
    FirewallDeploymentModel: Value<string>;
    constructor(properties: ThirdPartyFirewallPolicy);
}
export interface PolicyProperties {
    ResourcesCleanUp?: Value<boolean>;
    ResourceTags?: List<ResourceTag>;
    ExcludeResourceTags: Value<boolean>;
    ResourceType?: Value<string>;
    ResourceSetIds?: List<Value<string>>;
    SecurityServicePolicyData: SecurityServicePolicyData;
    RemediationEnabled: Value<boolean>;
    DeleteAllPolicyResources?: Value<boolean>;
    ExcludeMap?: IEMap;
    IncludeMap?: IEMap;
    PolicyDescription?: Value<string>;
    PolicyName: Value<string>;
    ResourceTypeList?: List<Value<string>>;
    Tags?: List<PolicyTag>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    static IEMap: typeof IEMap;
    static NetworkFirewallPolicy: typeof NetworkFirewallPolicy;
    static PolicyOption: typeof PolicyOption;
    static PolicyTag: typeof PolicyTag;
    static ResourceTag: typeof import("./policy").ResourceTag;
    static SecurityServicePolicyData: typeof SecurityServicePolicyData;
    static ThirdPartyFirewallPolicy: typeof ThirdPartyFirewallPolicy;
    constructor(properties: PolicyProperties);
}
