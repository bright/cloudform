import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RouteCalculatorProperties {
    CalculatorName: Value<string>;
    DataSource: Value<string>;
    Description?: Value<string>;
    PricingPlan: Value<string>;
}
export default class RouteCalculator extends ResourceBase<RouteCalculatorProperties> {
    constructor(properties: RouteCalculatorProperties);
}
