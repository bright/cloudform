import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Options {
    StaticSourcesSupport?: Value<string>;
    AutoAcceptSharedAssociations?: Value<string>;
    Igmpv2Support?: Value<string>;
    constructor(properties: Options);
}
export interface TransitGatewayMulticastDomainProperties {
    Options?: Options;
    TransitGatewayId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayMulticastDomain extends ResourceBase<TransitGatewayMulticastDomainProperties> {
    static Options: typeof Options;
    constructor(properties: TransitGatewayMulticastDomainProperties);
}
