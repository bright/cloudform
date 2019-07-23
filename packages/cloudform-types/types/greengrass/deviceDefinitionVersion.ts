/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Device {
    SyncShadow?: Value<boolean>
    ThingArn!: Value<string>
    Id!: Value<string>
    CertificateArn!: Value<string>

    constructor(properties: Device) {
        Object.assign(this, properties)
    }
}

export interface DeviceDefinitionVersionProperties {
    DeviceDefinitionId: Value<string>
    Devices: List<Device>
}

export default class DeviceDefinitionVersion extends ResourceBase<DeviceDefinitionVersionProperties> {
    static Device = Device

    constructor(properties: DeviceDefinitionVersionProperties) {
        super('AWS::Greengrass::DeviceDefinitionVersion', properties)
    }
}
