import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VPCGatewayAttachmentProperties {
    InternetGatewayId?: Value<string>;
    VpcId: Value<string>;
    VpnGatewayId?: Value<string>;
}
export default class VPCGatewayAttachment extends ResourceBase {
    constructor(properties: VPCGatewayAttachmentProperties, dependsOn?: Value<string>);
}
