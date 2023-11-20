import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProposedSegmentChange {
    SegmentName?: Value<string>;
    Tags?: List<ResourceTag>;
    AttachmentPolicyRuleNumber?: Value<number>;
    constructor(properties: ProposedSegmentChange);
}
export interface TransitGatewayRouteTableAttachmentProperties {
    ProposedSegmentChange?: ProposedSegmentChange;
    TransitGatewayRouteTableArn: Value<string>;
    PeeringId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayRouteTableAttachment extends ResourceBase<TransitGatewayRouteTableAttachmentProperties> {
    static ProposedSegmentChange: typeof ProposedSegmentChange;
    constructor(properties: TransitGatewayRouteTableAttachmentProperties);
}
