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

export class LoRaWANGatewayVersion {
    Station?: Value<string>
    Model?: Value<string>
    PackageVersion?: Value<string>

    constructor(properties: LoRaWANGatewayVersion) {
        Object.assign(this, properties)
    }
}

export class LoRaWANUpdateGatewayTaskCreate {
    UpdateSignature?: Value<string>
    SigKeyCrc?: Value<number>
    UpdateVersion?: LoRaWANGatewayVersion
    CurrentVersion?: LoRaWANGatewayVersion

    constructor(properties: LoRaWANUpdateGatewayTaskCreate) {
        Object.assign(this, properties)
    }
}

export class LoRaWANUpdateGatewayTaskEntry {
    UpdateVersion?: LoRaWANGatewayVersion
    CurrentVersion?: LoRaWANGatewayVersion

    constructor(properties: LoRaWANUpdateGatewayTaskEntry) {
        Object.assign(this, properties)
    }
}

export class UpdateWirelessGatewayTaskCreate {
    LoRaWAN?: LoRaWANUpdateGatewayTaskCreate
    UpdateDataSource?: Value<string>
    UpdateDataRole?: Value<string>

    constructor(properties: UpdateWirelessGatewayTaskCreate) {
        Object.assign(this, properties)
    }
}

export interface TaskDefinitionProperties {
    AutoCreateTasks: Value<boolean>
    LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntry
    Update?: UpdateWirelessGatewayTaskCreate
    TaskDefinitionType?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static LoRaWANGatewayVersion = LoRaWANGatewayVersion
    static LoRaWANUpdateGatewayTaskCreate = LoRaWANUpdateGatewayTaskCreate
    static LoRaWANUpdateGatewayTaskEntry = LoRaWANUpdateGatewayTaskEntry
    static UpdateWirelessGatewayTaskCreate = UpdateWirelessGatewayTaskCreate

    constructor(properties: TaskDefinitionProperties) {
        super('AWS::IoTWireless::TaskDefinition', properties)
    }
}
