/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccountGrouping {
    LinkedAccountIds!: List<Value<string>>
    AutoAssociate?: Value<boolean>

    constructor(properties: AccountGrouping) {
        Object.assign(this, properties)
    }
}

export class ComputationPreference {
    PricingPlanArn!: Value<string>

    constructor(properties: ComputationPreference) {
        Object.assign(this, properties)
    }
}

export interface BillingGroupProperties {
    Description?: Value<string>
    PrimaryAccountId: Value<string>
    ComputationPreference: ComputationPreference
    AccountGrouping: AccountGrouping
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class BillingGroup extends ResourceBase<BillingGroupProperties> {
    static AccountGrouping = AccountGrouping
    static ComputationPreference = ComputationPreference

    constructor(properties: BillingGroupProperties) {
        super('AWS::BillingConductor::BillingGroup', properties)
    }
}
