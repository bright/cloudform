import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Ebs from './ebs';
import NoDevice from './noDevice';
export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>;
    Ebs?: Ebs;
    NoDevice?: NoDevice;
    VirtualName: Value<string>;
}
export default class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string>);
}
