import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VolumesFromProperties {
    SourceContainer: Value<string>;
    HostPort?: Value<boolean>;
}
export default class VolumesFrom extends ResourceBase {
    constructor(properties: VolumesFromProperties, dependsOn?: Value<string>);
}
