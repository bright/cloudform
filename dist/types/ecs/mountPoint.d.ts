import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MountPointProperties {
    ContainerPath: Value<string>;
    SourceVolume: Value<string>;
    ReadOnly?: Value<boolean>;
}
export default class MountPoint extends ResourceBase {
    constructor(properties: MountPointProperties, dependsOn?: Value<string>);
}
