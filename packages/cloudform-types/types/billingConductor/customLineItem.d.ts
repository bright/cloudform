import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BillingPeriodRange {
    ExclusiveEndBillingPeriod?: Value<string>;
    InclusiveStartBillingPeriod?: Value<string>;
    constructor(properties: BillingPeriodRange);
}
export declare class CustomLineItemChargeDetails {
    LineItemFilters?: List<LineItemFilter>;
    Type: Value<string>;
    Percentage?: CustomLineItemPercentageChargeDetails;
    Flat?: CustomLineItemFlatChargeDetails;
    constructor(properties: CustomLineItemChargeDetails);
}
export declare class CustomLineItemFlatChargeDetails {
    ChargeValue: Value<number>;
    constructor(properties: CustomLineItemFlatChargeDetails);
}
export declare class CustomLineItemPercentageChargeDetails {
    ChildAssociatedResources?: List<Value<string>>;
    PercentageValue: Value<number>;
    constructor(properties: CustomLineItemPercentageChargeDetails);
}
export declare class LineItemFilter {
    MatchOption: Value<string>;
    Attribute: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: LineItemFilter);
}
export interface CustomLineItemProperties {
    BillingPeriodRange?: BillingPeriodRange;
    Description?: Value<string>;
    BillingGroupArn: Value<string>;
    CustomLineItemChargeDetails?: CustomLineItemChargeDetails;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class CustomLineItem extends ResourceBase<CustomLineItemProperties> {
    static BillingPeriodRange: typeof BillingPeriodRange;
    static CustomLineItemChargeDetails: typeof CustomLineItemChargeDetails;
    static CustomLineItemFlatChargeDetails: typeof CustomLineItemFlatChargeDetails;
    static CustomLineItemPercentageChargeDetails: typeof CustomLineItemPercentageChargeDetails;
    static LineItemFilter: typeof LineItemFilter;
    constructor(properties: CustomLineItemProperties);
}
