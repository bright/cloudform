import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type VolumeType = "*" | "standard" | "io1" | "gp2";
export interface VolumeConfigurationsProperties {
    Iops: Value<number>;
    MountPoint?: Value<string>;
    NumberOfDisks: Value<number>;
    RaidLevel: Value<number>;
    Size: Value<number>;
    VolumeType?: Value<VolumeType>;
}
export default class VolumeConfigurations extends ResourceBase {
    constructor(properties: VolumeConfigurationsProperties, dependsOn?: Value<string>);
}
