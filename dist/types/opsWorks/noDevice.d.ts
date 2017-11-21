import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface NoDeviceProperties {
}
export default class NoDevice extends ResourceBase {
    constructor(properties: NoDeviceProperties, dependsOn?: Value<string>);
}
