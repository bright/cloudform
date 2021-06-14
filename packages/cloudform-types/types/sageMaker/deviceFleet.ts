/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EdgeOutputConfig {
    S3OutputLocation!: Value<string>
    KmsKeyId?: Value<string>

    constructor(properties: EdgeOutputConfig) {
        Object.assign(this, properties)
    }
}

export interface DeviceFleetProperties {
    Description?: Value<string>
    DeviceFleetName: Value<string>
    RoleArn: Value<string>
}

export default class DeviceFleet extends ResourceBase<DeviceFleetProperties> {
    static EdgeOutputConfig = EdgeOutputConfig

    constructor(properties: DeviceFleetProperties) {
        super('AWS::SageMaker::DeviceFleet', properties)
    }
}
