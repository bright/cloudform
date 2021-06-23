import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TransitGatewayConnectOptions {
    Protocol?: Value<string>;
    constructor(properties: TransitGatewayConnectOptions);
}
export interface TransitGatewayConnectProperties {
    TransportTransitGatewayAttachmentId: Value<string>;
    Tags?: List<ResourceTag>;
    Options: TransitGatewayConnectOptions;
}
export default class TransitGatewayConnect extends ResourceBase<TransitGatewayConnectProperties> {
    static TransitGatewayConnectOptions: typeof TransitGatewayConnectOptions;
    constructor(properties: TransitGatewayConnectProperties);
}
