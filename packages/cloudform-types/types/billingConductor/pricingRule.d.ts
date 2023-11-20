import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FreeTier {
    Activated: Value<boolean>;
    constructor(properties: FreeTier);
}
export declare class Tiering {
    FreeTier?: FreeTier;
    constructor(properties: Tiering);
}
export interface PricingRuleProperties {
    Type: Value<string>;
    Description?: Value<string>;
    Scope: Value<string>;
    Service?: Value<string>;
    ModifierPercentage?: Value<number>;
    Operation?: Value<string>;
    Tiering?: Tiering;
    BillingEntity?: Value<string>;
    UsageType?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class PricingRule extends ResourceBase<PricingRuleProperties> {
    static FreeTier: typeof FreeTier;
    static Tiering: typeof Tiering;
    constructor(properties: PricingRuleProperties);
}
