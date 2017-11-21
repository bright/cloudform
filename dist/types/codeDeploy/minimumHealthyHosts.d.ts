import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MinimumHealthyHostsProperties {
    Type?: Value<string>;
    Value?: Value<number>;
}
export default class MinimumHealthyHosts extends ResourceBase {
    constructor(properties: MinimumHealthyHostsProperties, dependsOn?: Value<string>);
}
