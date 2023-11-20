import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>;
    Subnets: List<Value<string>>;
    AssignPublicIp?: Value<string>;
    constructor(properties: AwsVpcConfiguration);
}
export declare class LoadBalancer {
    TargetGroupArn?: Value<string>;
    ContainerName?: Value<string>;
    ContainerPort?: Value<number>;
    constructor(properties: LoadBalancer);
}
export declare class NetworkConfiguration {
    AwsVpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class Scale {
    Value?: Value<number>;
    Unit?: Value<string>;
    constructor(properties: Scale);
}
export declare class ServiceRegistry {
    ContainerName?: Value<string>;
    Port?: Value<number>;
    ContainerPort?: Value<number>;
    RegistryArn?: Value<string>;
    constructor(properties: ServiceRegistry);
}
export interface TaskSetProperties {
    PlatformVersion?: Value<string>;
    TaskDefinition: Value<string>;
    ExternalId?: Value<string>;
    Cluster: Value<string>;
    LoadBalancers?: List<LoadBalancer>;
    Service: Value<string>;
    NetworkConfiguration?: NetworkConfiguration;
    Scale?: Scale;
    ServiceRegistries?: List<ServiceRegistry>;
    LaunchType?: Value<string>;
}
export default class TaskSet extends ResourceBase<TaskSetProperties> {
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static LoadBalancer: typeof LoadBalancer;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static Scale: typeof Scale;
    static ServiceRegistry: typeof ServiceRegistry;
    constructor(properties: TaskSetProperties);
}
