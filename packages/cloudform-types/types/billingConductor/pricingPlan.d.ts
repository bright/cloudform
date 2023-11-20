import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PricingPlanProperties {
    Description?: Value<string>;
    PricingRuleArns?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class PricingPlan extends ResourceBase<PricingPlanProperties> {
    constructor(properties: PricingPlanProperties);
}
