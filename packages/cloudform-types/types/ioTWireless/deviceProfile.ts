/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWANDeviceProfile {
    PingSlotPeriod?: Value<number>
    ClassCTimeout?: Value<number>
    RxFreq2?: Value<number>
    RfRegion?: Value<string>
    ClassBTimeout?: Value<number>
    RxDelay1?: Value<number>
    SupportsClassC?: Value<boolean>
    SupportsClassB?: Value<boolean>
    RxDrOffset1?: Value<number>
    MaxEirp?: Value<number>
    FactoryPresetFreqsList?: List<Value<number>>
    SupportsJoin?: Value<boolean>
    PingSlotDr?: Value<number>
    MacVersion?: Value<string>
    PingSlotFreq?: Value<number>
    RegParamsRevision?: Value<string>
    RxDataRate2?: Value<number>
    Supports32BitFCnt?: Value<boolean>
    MaxDutyCycle?: Value<number>

    constructor(properties: LoRaWANDeviceProfile) {
        Object.assign(this, properties)
    }
}

export interface DeviceProfileProperties {
    LoRaWAN?: LoRaWANDeviceProfile
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class DeviceProfile extends ResourceBase<DeviceProfileProperties> {
    static LoRaWANDeviceProfile = LoRaWANDeviceProfile

    constructor(properties?: DeviceProfileProperties) {
        super('AWS::IoTWireless::DeviceProfile', properties || {})
    }
}
