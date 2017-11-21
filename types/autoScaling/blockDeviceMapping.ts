import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Ebs from './ebs'



export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>
    Ebs?: Ebs
    NoDevice?: Value<boolean>
    VirtualName?: Value<string>
}

export default class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string>) {
        super('AWS::AutoScaling::BlockDeviceMapping', properties, dependsOn)
    }
}