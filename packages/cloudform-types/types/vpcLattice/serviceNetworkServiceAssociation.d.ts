import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DnsEntry {
    DomainName?: Value<string>;
    HostedZoneId?: Value<string>;
    constructor(properties: DnsEntry);
}
export interface ServiceNetworkServiceAssociationProperties {
    ServiceNetworkIdentifier?: Value<string>;
    DnsEntry?: DnsEntry;
    ServiceIdentifier?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ServiceNetworkServiceAssociation extends ResourceBase<ServiceNetworkServiceAssociationProperties> {
    static DnsEntry: typeof DnsEntry;
    constructor(properties?: ServiceNetworkServiceAssociationProperties);
}
