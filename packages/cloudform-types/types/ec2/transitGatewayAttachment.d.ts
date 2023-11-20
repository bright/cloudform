import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Options {
    Ipv6Support?: Value<string>;
    ApplianceModeSupport?: Value<string>;
    DnsSupport?: Value<string>;
    constructor(properties: Options);
}
export interface TransitGatewayAttachmentProperties {
    Options?: Options;
    TransitGatewayId: Value<string>;
    VpcId: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayAttachment extends ResourceBase<TransitGatewayAttachmentProperties> {
    static Options: typeof Options;
    constructor(properties: TransitGatewayAttachmentProperties);
}
