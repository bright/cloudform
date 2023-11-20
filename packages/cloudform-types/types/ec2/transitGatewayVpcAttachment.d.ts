import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Options {
    Ipv6Support?: Value<string>;
    ApplianceModeSupport?: Value<string>;
    DnsSupport?: Value<string>;
    constructor(properties: Options);
}
export interface TransitGatewayVpcAttachmentProperties {
    Options?: Options;
    TransitGatewayId: Value<string>;
    VpcId: Value<string>;
    RemoveSubnetIds?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    AddSubnetIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayVpcAttachment extends ResourceBase<TransitGatewayVpcAttachmentProperties> {
    static Options: typeof Options;
    constructor(properties: TransitGatewayVpcAttachmentProperties);
}
