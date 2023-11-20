import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RouteCalculatorProperties {
    CalculatorName: Value<string>;
    Description?: Value<string>;
    PricingPlan?: Value<string>;
    DataSource: Value<string>;
}
export default class RouteCalculator extends ResourceBase<RouteCalculatorProperties> {
    constructor(properties: RouteCalculatorProperties);
}
