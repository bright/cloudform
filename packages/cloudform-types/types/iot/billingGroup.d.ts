import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BillingGroupProperties {
    BillingGroupDescription?: Value<string>;
    constructor(properties: BillingGroupProperties);
}
export interface BillingGroupProperties {
    BillingGroupName?: Value<string>;
    BillingGroupProperties?: BillingGroupProperties;
    Tags?: List<ResourceTag>;
}
export default class BillingGroup extends ResourceBase<BillingGroupProperties> {
    static BillingGroupProperties: typeof BillingGroupProperties;
    constructor(properties?: BillingGroupProperties);
}
