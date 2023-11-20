import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectAttachmentOptions {
    Protocol?: Value<string>;
    constructor(properties: ConnectAttachmentOptions);
}
export declare class ProposedSegmentChange {
    SegmentName?: Value<string>;
    Tags?: List<ResourceTag>;
    AttachmentPolicyRuleNumber?: Value<number>;
    constructor(properties: ProposedSegmentChange);
}
export interface ConnectAttachmentProperties {
    ProposedSegmentChange?: ProposedSegmentChange;
    Options: ConnectAttachmentOptions;
    TransportAttachmentId: Value<string>;
    CoreNetworkId: Value<string>;
    Tags?: List<ResourceTag>;
    EdgeLocation: Value<string>;
}
export default class ConnectAttachment extends ResourceBase<ConnectAttachmentProperties> {
    static ConnectAttachmentOptions: typeof ConnectAttachmentOptions;
    static ProposedSegmentChange: typeof ProposedSegmentChange;
    constructor(properties: ConnectAttachmentProperties);
}
