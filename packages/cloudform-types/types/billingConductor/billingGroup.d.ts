import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccountGrouping {
    LinkedAccountIds: List<Value<string>>;
    AutoAssociate?: Value<boolean>;
    constructor(properties: AccountGrouping);
}
export declare class ComputationPreference {
    PricingPlanArn: Value<string>;
    constructor(properties: ComputationPreference);
}
export interface BillingGroupProperties {
    Description?: Value<string>;
    PrimaryAccountId: Value<string>;
    ComputationPreference: ComputationPreference;
    AccountGrouping: AccountGrouping;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class BillingGroup extends ResourceBase<BillingGroupProperties> {
    static AccountGrouping: typeof AccountGrouping;
    static ComputationPreference: typeof ComputationPreference;
    constructor(properties: BillingGroupProperties);
}
