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

export class AbpV10x {
    SessionKeys!: SessionKeysAbpV10x
    DevAddr!: Value<string>

    constructor(properties: AbpV10x) {
        Object.assign(this, properties)
    }
}

export class AbpV11 {
    SessionKeys!: SessionKeysAbpV11
    DevAddr!: Value<string>

    constructor(properties: AbpV11) {
        Object.assign(this, properties)
    }
}

export class LoRaWANDevice {
    AbpV10x?: AbpV10x
    OtaaV11?: OtaaV11
    AbpV11?: AbpV11
    DeviceProfileId?: Value<string>
    DevEui?: Value<string>
    OtaaV10x?: OtaaV10x
    ServiceProfileId?: Value<string>

    constructor(properties: LoRaWANDevice) {
        Object.assign(this, properties)
    }
}

export class OtaaV10x {
    AppEui!: Value<string>
    AppKey!: Value<string>

    constructor(properties: OtaaV10x) {
        Object.assign(this, properties)
    }
}

export class OtaaV11 {
    NwkKey!: Value<string>
    AppKey!: Value<string>
    JoinEui!: Value<string>

    constructor(properties: OtaaV11) {
        Object.assign(this, properties)
    }
}

export class SessionKeysAbpV10x {
    AppSKey!: Value<string>
    NwkSKey!: Value<string>

    constructor(properties: SessionKeysAbpV10x) {
        Object.assign(this, properties)
    }
}

export class SessionKeysAbpV11 {
    FNwkSIntKey!: Value<string>
    AppSKey!: Value<string>
    SNwkSIntKey!: Value<string>
    NwkSEncKey!: Value<string>

    constructor(properties: SessionKeysAbpV11) {
        Object.assign(this, properties)
    }
}

export interface WirelessDeviceProperties {
    LastUplinkReceivedAt?: Value<string>
    Type: Value<string>
    Description?: Value<string>
    LoRaWAN?: LoRaWANDevice
    DestinationName: Value<string>
    ThingArn?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class WirelessDevice extends ResourceBase<WirelessDeviceProperties> {
    static AbpV10x = AbpV10x
    static AbpV11 = AbpV11
    static LoRaWANDevice = LoRaWANDevice
    static OtaaV10x = OtaaV10x
    static OtaaV11 = OtaaV11
    static SessionKeysAbpV10x = SessionKeysAbpV10x
    static SessionKeysAbpV11 = SessionKeysAbpV11

    constructor(properties: WirelessDeviceProperties) {
        super('AWS::IoTWireless::WirelessDevice', properties)
    }
}
