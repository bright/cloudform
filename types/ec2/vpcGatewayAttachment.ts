import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface VPCGatewayAttachmentProperties {
    VpcId: Value<string>
    InternetGatewayId: Value<string>
    VpnGatewayId: Value<string>
}

export default class VPCGatewayAttachment extends ResourceBase {
    constructor(properties: VPCGatewayAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPCGatewayAttachment', properties, dependsOn)
    }
}