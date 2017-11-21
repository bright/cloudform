import { ResourceBase } from '../resource';
import { Value } from '../internal';
import VolumeSpecification from './volumeSpecification';
export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification?: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
}
export default class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string>);
}
