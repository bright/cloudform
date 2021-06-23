import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TransitGatewayPeeringAttachmentProperties {
    TransitGatewayId: Value<string>;
    PeerTransitGatewayId: Value<string>;
    PeerAccountId: Value<string>;
    PeerRegion: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayPeeringAttachment extends ResourceBase<TransitGatewayPeeringAttachmentProperties> {
    constructor(properties: TransitGatewayPeeringAttachmentProperties);
}
