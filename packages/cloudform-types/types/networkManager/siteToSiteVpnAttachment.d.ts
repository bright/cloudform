import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProposedSegmentChange {
    SegmentName?: Value<string>;
    Tags?: List<ResourceTag>;
    AttachmentPolicyRuleNumber?: Value<number>;
    constructor(properties: ProposedSegmentChange);
}
export interface SiteToSiteVpnAttachmentProperties {
    ProposedSegmentChange?: ProposedSegmentChange;
    CoreNetworkId: Value<string>;
    VpnConnectionArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class SiteToSiteVpnAttachment extends ResourceBase<SiteToSiteVpnAttachmentProperties> {
    static ProposedSegmentChange: typeof ProposedSegmentChange;
    constructor(properties: SiteToSiteVpnAttachmentProperties);
}
