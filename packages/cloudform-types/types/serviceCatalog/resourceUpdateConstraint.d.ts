import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceUpdateConstraintProperties {
    Description?: Value<string>;
    AcceptLanguage?: Value<string>;
    TagUpdateOnProvisionedProduct: Value<string>;
    PortfolioId: Value<string>;
    ProductId: Value<string>;
}
export default class ResourceUpdateConstraint extends ResourceBase<ResourceUpdateConstraintProperties> {
    constructor(properties: ResourceUpdateConstraintProperties);
}
