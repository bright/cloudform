import { ResourceBase } from '../resource';
import { Value } from '../internal';
import EbsBlockDeviceConfig from './ebsBlockDeviceConfig';
export interface EbsConfigurationProperties {
    EbsBlockDeviceConfig?: EbsBlockDeviceConfig;
    EbsOptimized?: Value<boolean>;
}
export default class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string>);
}
