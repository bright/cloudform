/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWANDeviceProfile {
    SupportsClassB?: Value<boolean>
    ClassBTimeout?: Value<number>
    PingSlotPeriod?: Value<number>
    PingSlotDr?: Value<number>
    PingSlotFreq?: Value<number>
    SupportsClassC?: Value<boolean>
    ClassCTimeout?: Value<number>
    MacVersion?: Value<string>
    RegParamsRevision?: Value<string>
    MaxEirp?: Value<number>
    MaxDutyCycle?: Value<number>
    SupportsJoin?: Value<boolean>
    RfRegion?: Value<string>
    Supports32BitFCnt?: Value<boolean>

    constructor(properties: LoRaWANDeviceProfile) {
        Object.assign(this, properties)
    }
}

export interface DeviceProfileProperties {
    Name?: Value<string>
}

export default class DeviceProfile extends ResourceBase<DeviceProfileProperties> {
    static LoRaWANDeviceProfile = LoRaWANDeviceProfile

    constructor(properties?: DeviceProfileProperties) {
        super('AWS::IoTWireless::DeviceProfile', properties || {})
    }
}
