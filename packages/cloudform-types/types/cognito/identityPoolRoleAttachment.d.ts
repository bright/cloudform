import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MappingRule {
    MatchType: Value<string>;
    Value: Value<string>;
    Claim: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: MappingRule);
}
export declare class RoleMapping {
    Type: Value<string>;
    AmbiguousRoleResolution?: Value<string>;
    RulesConfiguration?: RulesConfigurationType;
    IdentityProvider?: Value<string>;
    constructor(properties: RoleMapping);
}
export declare class RulesConfigurationType {
    Rules: List<MappingRule>;
    constructor(properties: RulesConfigurationType);
}
export interface IdentityPoolRoleAttachmentProperties {
    RoleMappings?: {
        [key: string]: any;
    };
    IdentityPoolId: Value<string>;
    Roles?: {
        [key: string]: any;
    };
}
export default class IdentityPoolRoleAttachment extends ResourceBase<IdentityPoolRoleAttachmentProperties> {
    static MappingRule: typeof MappingRule;
    static RoleMapping: typeof RoleMapping;
    static RulesConfigurationType: typeof RulesConfigurationType;
    constructor(properties: IdentityPoolRoleAttachmentProperties);
}
