import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Protocol = "http" | "https";
export interface RedirectAllRequestsToProperties {
    HostName: Value<string>;
    Protocol?: Value<Protocol>;
}
export default class RedirectAllRequestsTo extends ResourceBase {
    constructor(properties: RedirectAllRequestsToProperties, dependsOn?: Value<string>);
}
