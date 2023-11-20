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

export class LoRaWAN {
    NumberOfDevicesRequested?: Value<number>
    NumberOfDevicesInGroup?: Value<number>
    RfRegion!: Value<string>
    DlClass!: Value<string>

    constructor(properties: LoRaWAN) {
        Object.assign(this, properties)
    }
}

export interface MulticastGroupProperties {
    Description?: Value<string>
    LoRaWAN: LoRaWAN
    DisassociateWirelessDevice?: Value<string>
    AssociateWirelessDevice?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class MulticastGroup extends ResourceBase<MulticastGroupProperties> {
    static LoRaWAN = LoRaWAN

    constructor(properties: MulticastGroupProperties) {
        super('AWS::IoTWireless::MulticastGroup', properties)
    }
}
