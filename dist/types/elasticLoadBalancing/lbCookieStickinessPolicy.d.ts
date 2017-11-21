import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface LBCookieStickinessPolicyProperties {
    CookieExpirationPeriod?: Value<string>;
    PolicyName: Value<string>;
}
export default class LBCookieStickinessPolicy extends ResourceBase {
    constructor(properties: LBCookieStickinessPolicyProperties, dependsOn?: Value<string>);
}
