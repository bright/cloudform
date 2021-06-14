/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWANGateway {
    GatewayEui!: Value<string>
    RfRegion!: Value<string>

    constructor(properties: LoRaWANGateway) {
        Object.assign(this, properties)
    }
}

export interface WirelessGatewayProperties {
    Name?: Value<string>
    Description?: Value<string>
    ThingArn?: Value<string>
    LastUplinkReceivedAt?: Value<string>
}

export default class WirelessGateway extends ResourceBase<WirelessGatewayProperties> {
    static LoRaWANGateway = LoRaWANGateway

    constructor(properties: WirelessGatewayProperties) {
        super('AWS::IoTWireless::WirelessGateway', properties)
    }
}
