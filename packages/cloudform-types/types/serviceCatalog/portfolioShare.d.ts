import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PortfolioShareProperties {
    AccountId: Value<string>;
    AcceptLanguage?: Value<string>;
    PortfolioId: Value<string>;
    ShareTagOptions?: Value<boolean>;
}
export default class PortfolioShare extends ResourceBase<PortfolioShareProperties> {
    constructor(properties: PortfolioShareProperties);
}
