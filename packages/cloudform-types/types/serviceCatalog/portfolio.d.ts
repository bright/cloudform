import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PortfolioProperties {
    ProviderName: Value<string>;
    Description?: Value<string>;
    DisplayName: Value<string>;
    AcceptLanguage?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Portfolio extends ResourceBase<PortfolioProperties> {
    constructor(properties: PortfolioProperties);
}
