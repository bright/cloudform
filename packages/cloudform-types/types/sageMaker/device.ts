/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DeviceInner {
    Description?: Value<string>
    DeviceName!: Value<string>
    IotThingName?: Value<string>

    constructor(properties: DeviceInner) {
        Object.assign(this, properties)
    }
}

export interface DeviceProperties {
    DeviceFleetName: Value<string>
    Device?: Device
    Tags?: List<ResourceTag>
}

export default class Device extends ResourceBase<DeviceProperties> {
    static Device = DeviceInner

    constructor(properties: DeviceProperties) {
        super('AWS::SageMaker::Device', properties)
    }
}
