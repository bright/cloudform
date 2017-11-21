import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PolicieProperties {
    Attributes?: any[];
    InstancePorts?: Value<string>[];
    LoadBalancerPorts: Value<string>[];
    PolicyName: Value<string>;
    PolicyType: Value<string>;
}
export default class Policie extends ResourceBase {
    constructor(properties: PolicieProperties, dependsOn?: Value<string>);
}
