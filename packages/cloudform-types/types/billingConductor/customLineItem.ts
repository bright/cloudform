/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class BillingPeriodRange {
    ExclusiveEndBillingPeriod?: Value<string>
    InclusiveStartBillingPeriod?: Value<string>

    constructor(properties: BillingPeriodRange) {
        Object.assign(this, properties)
    }
}

export class CustomLineItemChargeDetails {
    LineItemFilters?: List<LineItemFilter>
    Type!: Value<string>
    Percentage?: CustomLineItemPercentageChargeDetails
    Flat?: CustomLineItemFlatChargeDetails

    constructor(properties: CustomLineItemChargeDetails) {
        Object.assign(this, properties)
    }
}

export class CustomLineItemFlatChargeDetails {
    ChargeValue!: Value<number>

    constructor(properties: CustomLineItemFlatChargeDetails) {
        Object.assign(this, properties)
    }
}

export class CustomLineItemPercentageChargeDetails {
    ChildAssociatedResources?: List<Value<string>>
    PercentageValue!: Value<number>

    constructor(properties: CustomLineItemPercentageChargeDetails) {
        Object.assign(this, properties)
    }
}

export class LineItemFilter {
    MatchOption!: Value<string>
    Attribute!: Value<string>
    Values!: List<Value<string>>

    constructor(properties: LineItemFilter) {
        Object.assign(this, properties)
    }
}

export interface CustomLineItemProperties {
    BillingPeriodRange?: BillingPeriodRange
    Description?: Value<string>
    BillingGroupArn: Value<string>
    CustomLineItemChargeDetails?: CustomLineItemChargeDetails
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class CustomLineItem extends ResourceBase<CustomLineItemProperties> {
    static BillingPeriodRange = BillingPeriodRange
    static CustomLineItemChargeDetails = CustomLineItemChargeDetails
    static CustomLineItemFlatChargeDetails = CustomLineItemFlatChargeDetails
    static CustomLineItemPercentageChargeDetails = CustomLineItemPercentageChargeDetails
    static LineItemFilter = LineItemFilter

    constructor(properties: CustomLineItemProperties) {
        super('AWS::BillingConductor::CustomLineItem', properties)
    }
}
