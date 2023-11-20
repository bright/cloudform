/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface PricingPlanProperties {
    Description?: Value<string>
    PricingRuleArns?: List<Value<string>>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class PricingPlan extends ResourceBase<PricingPlanProperties> {


    constructor(properties: PricingPlanProperties) {
        super('AWS::BillingConductor::PricingPlan', properties)
    }
}
