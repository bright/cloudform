import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TransitGatewayAttachmentProperties {
    TransitGatewayId: Value<string>;
    VpcId: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayAttachment extends ResourceBase<TransitGatewayAttachmentProperties> {
    constructor(properties: TransitGatewayAttachmentProperties);
}
