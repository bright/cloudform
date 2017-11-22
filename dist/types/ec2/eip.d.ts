import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EIPProperties {
    Domain?: Value<string>;
    InstanceId?: Value<string>;
}
export default class EIP extends ResourceBase {
    constructor(properties: EIPProperties, dependsOn?: Value<string>);
}
