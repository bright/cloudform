import { ResourceBase } from '../resource';
import { Value } from '../internal';
import RedirectAllRequestsTo from './redirectAllRequestsTo';
import RoutingRule from './routingRule';
export interface WebsiteConfigurationProperties {
    ErrorDocument?: Value<string>;
    IndexDocument?: Value<string>;
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    RoutingRules?: RoutingRule[];
}
export default class WebsiteConfiguration extends ResourceBase {
    constructor(properties: WebsiteConfigurationProperties, dependsOn?: Value<string>);
}
