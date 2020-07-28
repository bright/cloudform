import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceTag {
    Key: Value<string>;
    Value?: Value<string>;
    constructor(properties: ResourceTag);
}
export declare class IEMap {
    ACCOUNT?: List<Value<string>>;
    constructor(properties: IEMap);
}
export declare class PolicyTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: PolicyTag);
}
export interface PolicyProperties {
    ExcludeMap?: IEMap;
    ExcludeResourceTags: Value<boolean>;
    IncludeMap?: IEMap;
    PolicyName: Value<string>;
    RemediationEnabled: Value<boolean>;
    ResourceTags?: List<ResourceTag>;
    ResourceType: Value<string>;
    ResourceTypeList?: List<Value<string>>;
    SecurityServicePolicyData: {
        [key: string]: any;
    };
    DeleteAllPolicyResources?: Value<boolean>;
    Tags?: List<PolicyTag>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    static ResourceTag: typeof import("./policy").ResourceTag;
    static IEMap: typeof IEMap;
    static PolicyTag: typeof PolicyTag;
    constructor(properties: PolicyProperties);
}
