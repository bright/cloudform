import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PeeringAttachmentStatus {
    Message?: Value<string>;
    Code?: Value<string>;
    constructor(properties: PeeringAttachmentStatus);
}
export interface TransitGatewayPeeringAttachmentProperties {
    TransitGatewayId: Value<string>;
    PeerTransitGatewayId: Value<string>;
    PeerAccountId: Value<string>;
    PeerRegion: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayPeeringAttachment extends ResourceBase<TransitGatewayPeeringAttachmentProperties> {
    static PeeringAttachmentStatus: typeof PeeringAttachmentStatus;
    constructor(properties: TransitGatewayPeeringAttachmentProperties);
}
