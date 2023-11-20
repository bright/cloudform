import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OrganizationCustomPolicyRuleMetadata {
    TagKeyScope?: Value<string>;
    TagValueScope?: Value<string>;
    Runtime: Value<string>;
    PolicyText: Value<string>;
    Description?: Value<string>;
    ResourceIdScope?: Value<string>;
    OrganizationConfigRuleTriggerTypes?: List<Value<string>>;
    DebugLogDeliveryAccounts?: List<Value<string>>;
    ResourceTypesScope?: List<Value<string>>;
    MaximumExecutionFrequency?: Value<string>;
    InputParameters?: Value<string>;
    constructor(properties: OrganizationCustomPolicyRuleMetadata);
}
export declare class OrganizationCustomRuleMetadata {
    TagKeyScope?: Value<string>;
    TagValueScope?: Value<string>;
    Description?: Value<string>;
    ResourceIdScope?: Value<string>;
    LambdaFunctionArn: Value<string>;
    OrganizationConfigRuleTriggerTypes: List<Value<string>>;
    ResourceTypesScope?: List<Value<string>>;
    MaximumExecutionFrequency?: Value<string>;
    InputParameters?: Value<string>;
    constructor(properties: OrganizationCustomRuleMetadata);
}
export declare class OrganizationManagedRuleMetadata {
    TagKeyScope?: Value<string>;
    TagValueScope?: Value<string>;
    Description?: Value<string>;
    ResourceIdScope?: Value<string>;
    RuleIdentifier: Value<string>;
    ResourceTypesScope?: List<Value<string>>;
    MaximumExecutionFrequency?: Value<string>;
    InputParameters?: Value<string>;
    constructor(properties: OrganizationManagedRuleMetadata);
}
export interface OrganizationConfigRuleProperties {
    OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
    OrganizationConfigRuleName: Value<string>;
    OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
    ExcludedAccounts?: List<Value<string>>;
    OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
}
export default class OrganizationConfigRule extends ResourceBase<OrganizationConfigRuleProperties> {
    static OrganizationCustomPolicyRuleMetadata: typeof OrganizationCustomPolicyRuleMetadata;
    static OrganizationCustomRuleMetadata: typeof OrganizationCustomRuleMetadata;
    static OrganizationManagedRuleMetadata: typeof OrganizationManagedRuleMetadata;
    constructor(properties: OrganizationConfigRuleProperties);
}
