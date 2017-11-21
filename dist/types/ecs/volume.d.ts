import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VolumeProperties {
    Name: Value<string>;
    Host?: Value<string>;
}
export default class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string>);
}
