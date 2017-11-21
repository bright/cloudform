import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Name = "WebServer" | "Worker";
export declare type Type = "WebServer" | "SQS/HTTP";
export interface TierProperties {
    Name?: Value<Name>;
    Type?: Value<Type>;
    Version?: Value<string>;
}
export default class Tier extends ResourceBase {
    constructor(properties: TierProperties, dependsOn?: Value<string>);
}
