import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CostCategoryProperties {
    DefaultValue?: Value<string>;
    SplitChargeRules?: Value<string>;
    RuleVersion: Value<string>;
    Rules: Value<string>;
    Name: Value<string>;
}
export default class CostCategory extends ResourceBase<CostCategoryProperties> {
    constructor(properties: CostCategoryProperties);
}
