import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface StackSetConstraintProperties {
    Description: Value<string>;
    StackInstanceControl: Value<string>;
    AcceptLanguage?: Value<string>;
    PortfolioId: Value<string>;
    ProductId: Value<string>;
    RegionList: List<Value<string>>;
    AdminRole: Value<string>;
    AccountList: List<Value<string>>;
    ExecutionRole: Value<string>;
}
export default class StackSetConstraint extends ResourceBase<StackSetConstraintProperties> {
    constructor(properties: StackSetConstraintProperties);
}
