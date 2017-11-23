import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RulesConfigurationTypeProperties {
    Rules: MappingRule[];
}
export declare class RulesConfigurationType extends ResourceBase {
    constructor(properties: RulesConfigurationTypeProperties, dependsOn?: Value<string>);
}
export interface RoleMappingProperties {
    Type: Value<string>;
    AmbiguousRoleResolution?: Value<string>;
    RulesConfiguration?: RulesConfigurationType;
}
export declare class RoleMapping extends ResourceBase {
    constructor(properties: RoleMappingProperties, dependsOn?: Value<string>);
}
export interface MappingRuleProperties {
    MatchType: Value<string>;
    Value: Value<string>;
    Claim: Value<string>;
    RoleARN: Value<string>;
}
export declare class MappingRule extends ResourceBase {
    constructor(properties: MappingRuleProperties, dependsOn?: Value<string>);
}
export interface IdentityPoolRoleAttachmentProperties {
    RoleMappings?: any;
    IdentityPoolId: Value<string>;
    Roles?: any;
}
export default class IdentityPoolRoleAttachment extends ResourceBase {
    constructor(properties: IdentityPoolRoleAttachmentProperties, dependsOn?: Value<string>);
}
