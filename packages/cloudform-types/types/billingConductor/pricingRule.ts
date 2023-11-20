/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FreeTier {
    Activated!: Value<boolean>

    constructor(properties: FreeTier) {
        Object.assign(this, properties)
    }
}

export class Tiering {
    FreeTier?: FreeTier

    constructor(properties: Tiering) {
        Object.assign(this, properties)
    }
}

export interface PricingRuleProperties {
    Type: Value<string>
    Description?: Value<string>
    Scope: Value<string>
    Service?: Value<string>
    ModifierPercentage?: Value<number>
    Operation?: Value<string>
    Tiering?: Tiering
    BillingEntity?: Value<string>
    UsageType?: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class PricingRule extends ResourceBase<PricingRuleProperties> {
    static FreeTier = FreeTier
    static Tiering = Tiering

    constructor(properties: PricingRuleProperties) {
        super('AWS::BillingConductor::PricingRule', properties)
    }
}
