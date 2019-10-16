import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export interface OrganizationConfigRuleProperties {
    OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
    OrganizationConfigRuleName: Value<string>;
    OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
    ExcludedAccounts?: List<Value<string>>;
}
export default class OrganizationConfigRule extends ResourceBase<OrganizationConfigRuleProperties> {
    static OrganizationManagedRuleMetadata: typeof OrganizationManagedRuleMetadata;
    static OrganizationCustomRuleMetadata: typeof OrganizationCustomRuleMetadata;
    constructor(properties: OrganizationConfigRuleProperties);
}
