import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ThrottleProperties {
    BurstLimit?: Value<number>;
    RateLimit?: Value<number>;
}
export default class Throttle extends ResourceBase {
    constructor(properties: ThrottleProperties, dependsOn?: Value<string>);
}
