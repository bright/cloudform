import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PortfolioShareProperties {
    AccountId: Value<string>;
    AcceptLanguage?: Value<string>;
    PortfolioId: Value<string>;
}
export default class PortfolioShare extends ResourceBase<PortfolioShareProperties> {
    constructor(properties: PortfolioShareProperties);
}
