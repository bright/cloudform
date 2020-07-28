import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CostCategoryProperties {
    Name: Value<string>;
    RuleVersion: Value<string>;
    Rules: Value<string>;
}
export default class CostCategory extends ResourceBase<CostCategoryProperties> {
    constructor(properties: CostCategoryProperties);
}
