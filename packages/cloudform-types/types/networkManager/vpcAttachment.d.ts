import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProposedSegmentChange {
    SegmentName?: Value<string>;
    Tags?: List<ResourceTag>;
    AttachmentPolicyRuleNumber?: Value<number>;
    constructor(properties: ProposedSegmentChange);
}
export declare class VpcOptions {
    Ipv6Support?: Value<boolean>;
    ApplianceModeSupport?: Value<boolean>;
    constructor(properties: VpcOptions);
}
export interface VpcAttachmentProperties {
    ProposedSegmentChange?: ProposedSegmentChange;
    SubnetArns: List<Value<string>>;
    Options?: VpcOptions;
    CoreNetworkId: Value<string>;
    VpcArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VpcAttachment extends ResourceBase<VpcAttachmentProperties> {
    static ProposedSegmentChange: typeof ProposedSegmentChange;
    static VpcOptions: typeof VpcOptions;
    constructor(properties: VpcAttachmentProperties);
}
