/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AbpV11 {
    DevAddr!: Value<string>

    constructor(properties: AbpV11) {
        Object.assign(this, properties)
    }
}

export class LoRaWANDevice {
    DevEui?: Value<string>
    DeviceProfileId?: Value<string>
    ServiceProfileId?: Value<string>

    constructor(properties: LoRaWANDevice) {
        Object.assign(this, properties)
    }
}

export class SessionKeysAbpV11 {
    FNwkSIntKey!: Value<string>
    SNwkSIntKey!: Value<string>
    NwkSEncKey!: Value<string>
    AppSKey!: Value<string>

    constructor(properties: SessionKeysAbpV11) {
        Object.assign(this, properties)
    }
}

export class AbpV10x {
    DevAddr!: Value<string>

    constructor(properties: AbpV10x) {
        Object.assign(this, properties)
    }
}

export class OtaaV11 {
    AppKey!: Value<string>
    NwkKey!: Value<string>
    JoinEui!: Value<string>

    constructor(properties: OtaaV11) {
        Object.assign(this, properties)
    }
}

export class SessionKeysAbpV10x {
    NwkSKey!: Value<string>
    AppSKey!: Value<string>

    constructor(properties: SessionKeysAbpV10x) {
        Object.assign(this, properties)
    }
}

export class OtaaV10x {
    AppKey!: Value<string>
    AppEui!: Value<string>

    constructor(properties: OtaaV10x) {
        Object.assign(this, properties)
    }
}

export interface WirelessDeviceProperties {
    Type: Value<string>
    Name?: Value<string>
    Description?: Value<string>
    DestinationName: Value<string>
    ThingArn?: Value<string>
    LastUplinkReceivedAt?: Value<string>
}

export default class WirelessDevice extends ResourceBase<WirelessDeviceProperties> {
    static AbpV11 = AbpV11
    static LoRaWANDevice = LoRaWANDevice
    static SessionKeysAbpV11 = SessionKeysAbpV11
    static AbpV10x = AbpV10x
    static OtaaV11 = OtaaV11
    static SessionKeysAbpV10x = SessionKeysAbpV10x
    static OtaaV10x = OtaaV10x

    constructor(properties: WirelessDeviceProperties) {
        super('AWS::IoTWireless::WirelessDevice', properties)
    }
}
