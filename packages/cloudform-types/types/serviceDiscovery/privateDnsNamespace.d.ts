import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PrivateDnsPropertiesMutable {
    SOA?: SOA;
    constructor(properties: PrivateDnsPropertiesMutable);
}
export declare class Properties {
    DnsProperties?: PrivateDnsPropertiesMutable;
    constructor(properties: Properties);
}
export declare class SOA {
    TTL?: Value<number>;
    constructor(properties: SOA);
}
export interface PrivateDnsNamespaceProperties {
    Description?: Value<string>;
    Vpc: Value<string>;
    Properties?: Properties;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class PrivateDnsNamespace extends ResourceBase<PrivateDnsNamespaceProperties> {
    static PrivateDnsPropertiesMutable: typeof PrivateDnsPropertiesMutable;
    static Properties: typeof Properties;
    static SOA: typeof SOA;
    constructor(properties: PrivateDnsNamespaceProperties);
}
