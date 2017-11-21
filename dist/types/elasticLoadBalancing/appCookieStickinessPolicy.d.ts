import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AppCookieStickinessPolicyProperties {
    CookieName: Value<string>;
    ApplicationName: Value<string>;
}
export default class AppCookieStickinessPolicy extends ResourceBase {
    constructor(properties: AppCookieStickinessPolicyProperties, dependsOn?: Value<string>);
}
