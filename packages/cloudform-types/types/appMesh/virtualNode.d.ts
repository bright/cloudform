import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Logging {
    AccessLog?: AccessLog;
    constructor(properties: Logging);
}
export declare class ServiceDiscovery {
    DNS?: DnsServiceDiscovery;
    AWSCloudMap?: AwsCloudMapServiceDiscovery;
    constructor(properties: ServiceDiscovery);
}
export declare class FileAccessLog {
    Path: Value<string>;
    constructor(properties: FileAccessLog);
}
export declare class AwsCloudMapInstanceAttribute {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: AwsCloudMapInstanceAttribute);
}
export declare class Backend {
    VirtualService?: VirtualServiceBackend;
    constructor(properties: Backend);
}
export declare class PortMapping {
    Port: Value<number>;
    Protocol: Value<string>;
    constructor(properties: PortMapping);
}
export declare class VirtualServiceBackend {
    VirtualServiceName: Value<string>;
    constructor(properties: VirtualServiceBackend);
}
export declare class HealthCheck {
    Path?: Value<string>;
    UnhealthyThreshold: Value<number>;
    Port?: Value<number>;
    HealthyThreshold: Value<number>;
    TimeoutMillis: Value<number>;
    Protocol: Value<string>;
    IntervalMillis: Value<number>;
    constructor(properties: HealthCheck);
}
export declare class AwsCloudMapServiceDiscovery {
    NamespaceName: Value<string>;
    ServiceName: Value<string>;
    Attributes?: List<AwsCloudMapInstanceAttribute>;
    constructor(properties: AwsCloudMapServiceDiscovery);
}
export declare class AccessLog {
    File?: FileAccessLog;
    constructor(properties: AccessLog);
}
export declare class VirtualNodeSpec {
    Logging?: Logging;
    Backends?: List<Backend>;
    Listeners?: List<Listener>;
    ServiceDiscovery?: ServiceDiscovery;
    constructor(properties: VirtualNodeSpec);
}
export declare class Listener {
    HealthCheck?: HealthCheck;
    PortMapping: PortMapping;
    constructor(properties: Listener);
}
export declare class DnsServiceDiscovery {
    Hostname: Value<string>;
    constructor(properties: DnsServiceDiscovery);
}
export interface VirtualNodeProperties {
    MeshName: Value<string>;
    Spec: VirtualNodeSpec;
    VirtualNodeName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VirtualNode extends ResourceBase<VirtualNodeProperties> {
    static Logging: typeof Logging;
    static ServiceDiscovery: typeof ServiceDiscovery;
    static FileAccessLog: typeof FileAccessLog;
    static AwsCloudMapInstanceAttribute: typeof AwsCloudMapInstanceAttribute;
    static Backend: typeof Backend;
    static PortMapping: typeof PortMapping;
    static VirtualServiceBackend: typeof VirtualServiceBackend;
    static HealthCheck: typeof HealthCheck;
    static AwsCloudMapServiceDiscovery: typeof AwsCloudMapServiceDiscovery;
    static AccessLog: typeof AccessLog;
    static VirtualNodeSpec: typeof VirtualNodeSpec;
    static Listener: typeof Listener;
    static DnsServiceDiscovery: typeof DnsServiceDiscovery;
    constructor(properties: VirtualNodeProperties);
}
