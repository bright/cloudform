/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class OrganizationManagedRuleMetadata {
    TagKeyScope?: Value<string>
    TagValueScope?: Value<string>
    Description?: Value<string>
    ResourceIdScope?: Value<string>
    RuleIdentifier!: Value<string>
    ResourceTypesScope?: List<Value<string>>
    MaximumExecutionFrequency?: Value<string>
    InputParameters?: Value<string>

    constructor(properties: OrganizationManagedRuleMetadata) {
        Object.assign(this, properties)
    }
}

export class OrganizationCustomRuleMetadata {
    TagKeyScope?: Value<string>
    TagValueScope?: Value<string>
    Description?: Value<string>
    ResourceIdScope?: Value<string>
    LambdaFunctionArn!: Value<string>
    OrganizationConfigRuleTriggerTypes!: List<Value<string>>
    ResourceTypesScope?: List<Value<string>>
    MaximumExecutionFrequency?: Value<string>
    InputParameters?: Value<string>

    constructor(properties: OrganizationCustomRuleMetadata) {
        Object.assign(this, properties)
    }
}

export interface OrganizationConfigRuleProperties {
    OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata
    OrganizationConfigRuleName: Value<string>
    OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata
    ExcludedAccounts?: List<Value<string>>
}

export default class OrganizationConfigRule extends ResourceBase<OrganizationConfigRuleProperties> {
    static OrganizationManagedRuleMetadata = OrganizationManagedRuleMetadata
    static OrganizationCustomRuleMetadata = OrganizationCustomRuleMetadata

    constructor(properties: OrganizationConfigRuleProperties) {
        super('AWS::Config::OrganizationConfigRule', properties)
    }
}
