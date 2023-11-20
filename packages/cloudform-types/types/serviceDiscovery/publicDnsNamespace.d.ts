import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Properties {
    DnsProperties?: PublicDnsPropertiesMutable;
    constructor(properties: Properties);
}
export declare class PublicDnsPropertiesMutable {
    SOA?: SOA;
    constructor(properties: PublicDnsPropertiesMutable);
}
export declare class SOA {
    TTL?: Value<number>;
    constructor(properties: SOA);
}
export interface PublicDnsNamespaceProperties {
    Description?: Value<string>;
    Properties?: Properties;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class PublicDnsNamespace extends ResourceBase<PublicDnsNamespaceProperties> {
    static Properties: typeof Properties;
    static PublicDnsPropertiesMutable: typeof PublicDnsPropertiesMutable;
    static SOA: typeof SOA;
    constructor(properties: PublicDnsNamespaceProperties);
}
