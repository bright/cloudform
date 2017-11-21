import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EIPProperties {
    InstanceId?: Value<string>;
    Domain?: Value<string>;
}
export default class EIP extends ResourceBase {
    constructor(properties: EIPProperties, dependsOn?: Value<string>);
}
