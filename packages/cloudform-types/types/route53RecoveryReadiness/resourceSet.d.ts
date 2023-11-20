import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DNSTargetResource {
    TargetResource?: TargetResource;
    RecordType?: Value<string>;
    DomainName?: Value<string>;
    HostedZoneArn?: Value<string>;
    RecordSetId?: Value<string>;
    constructor(properties: DNSTargetResource);
}
export declare class NLBResource {
    Arn?: Value<string>;
    constructor(properties: NLBResource);
}
export declare class R53ResourceRecord {
    DomainName?: Value<string>;
    RecordSetId?: Value<string>;
    constructor(properties: R53ResourceRecord);
}
export declare class Resource {
    ResourceArn?: Value<string>;
    DnsTargetResource?: DNSTargetResource;
    ReadinessScopes?: List<Value<string>>;
    ComponentId?: Value<string>;
    constructor(properties: Resource);
}
export declare class TargetResource {
    R53Resource?: R53ResourceRecord;
    NLBResource?: NLBResource;
    constructor(properties: TargetResource);
}
export interface ResourceSetProperties {
    ResourceSetType: Value<string>;
    ResourceSetName?: Value<string>;
    Resources: List<Resource>;
    Tags?: List<ResourceTag>;
}
export default class ResourceSet extends ResourceBase<ResourceSetProperties> {
    static DNSTargetResource: typeof DNSTargetResource;
    static NLBResource: typeof NLBResource;
    static R53ResourceRecord: typeof R53ResourceRecord;
    static Resource: typeof Resource;
    static TargetResource: typeof TargetResource;
    constructor(properties: ResourceSetProperties);
}
