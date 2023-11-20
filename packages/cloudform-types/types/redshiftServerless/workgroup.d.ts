import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConfigParameter {
    ParameterValue?: Value<string>;
    ParameterKey?: Value<string>;
    constructor(properties: ConfigParameter);
}
export declare class Endpoint {
    Address?: Value<string>;
    VpcEndpoints?: List<VpcEndpoint>;
    Port?: Value<number>;
    constructor(properties: Endpoint);
}
export declare class NetworkInterface {
    PrivateIpAddress?: Value<string>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    constructor(properties: NetworkInterface);
}
export declare class VpcEndpoint {
    VpcId?: Value<string>;
    NetworkInterfaces?: List<NetworkInterface>;
    VpcEndpointId?: Value<string>;
    constructor(properties: VpcEndpoint);
}
export declare class WorkgroupInner {
    Status?: Value<string>;
    CreationDate?: Value<string>;
    WorkgroupName?: Value<string>;
    WorkgroupArn?: Value<string>;
    BaseCapacity?: Value<number>;
    EnhancedVpcRouting?: Value<boolean>;
    WorkgroupId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    NamespaceName?: Value<string>;
    Endpoint?: Endpoint;
    ConfigParameters?: List<ConfigParameter>;
    PubliclyAccessible?: Value<boolean>;
    constructor(properties: WorkgroupInner);
}
export interface WorkgroupProperties {
    NamespaceName?: Value<string>;
    ConfigParameters?: List<ConfigParameter>;
    Port?: Value<number>;
    WorkgroupName: Value<string>;
    BaseCapacity?: Value<number>;
    EnhancedVpcRouting?: Value<boolean>;
    PubliclyAccessible?: Value<boolean>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class Workgroup extends ResourceBase<WorkgroupProperties> {
    static ConfigParameter: typeof ConfigParameter;
    static Endpoint: typeof Endpoint;
    static NetworkInterface: typeof NetworkInterface;
    static VpcEndpoint: typeof VpcEndpoint;
    static Workgroup: typeof WorkgroupInner;
    constructor(properties: WorkgroupProperties);
}
