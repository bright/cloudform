import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ContainerInner {
    ContainerName?: Value<string>;
    Command?: List<Value<string>>;
    Environment?: List<EnvironmentVariable>;
    Ports?: List<PortInfo>;
    Image?: Value<string>;
    constructor(properties: ContainerInner);
}
export declare class ContainerServiceDeployment {
    Containers?: List<Container>;
    PublicEndpoint?: PublicEndpoint;
    constructor(properties: ContainerServiceDeployment);
}
export declare class EcrImagePullerRole {
    PrincipalArn?: Value<string>;
    IsActive?: Value<boolean>;
    constructor(properties: EcrImagePullerRole);
}
export declare class EnvironmentVariable {
    Variable?: Value<string>;
    Value?: Value<string>;
    constructor(properties: EnvironmentVariable);
}
export declare class HealthCheckConfig {
    Path?: Value<string>;
    TimeoutSeconds?: Value<number>;
    SuccessCodes?: Value<string>;
    UnhealthyThreshold?: Value<number>;
    HealthyThreshold?: Value<number>;
    IntervalSeconds?: Value<number>;
    constructor(properties: HealthCheckConfig);
}
export declare class PortInfo {
    Port?: Value<string>;
    Protocol?: Value<string>;
    constructor(properties: PortInfo);
}
export declare class PrivateRegistryAccess {
    EcrImagePullerRole?: EcrImagePullerRole;
    constructor(properties: PrivateRegistryAccess);
}
export declare class PublicDomainName {
    CertificateName?: Value<string>;
    DomainNames?: List<Value<string>>;
    constructor(properties: PublicDomainName);
}
export declare class PublicEndpoint {
    ContainerName?: Value<string>;
    ContainerPort?: Value<number>;
    HealthCheckConfig?: HealthCheckConfig;
    constructor(properties: PublicEndpoint);
}
export interface ContainerProperties {
    PublicDomainNames?: List<PublicDomainName>;
    ServiceName: Value<string>;
    PrivateRegistryAccess?: PrivateRegistryAccess;
    ContainerServiceDeployment?: ContainerServiceDeployment;
    IsDisabled?: Value<boolean>;
    Scale: Value<number>;
    Power: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Container extends ResourceBase<ContainerProperties> {
    static Container: typeof ContainerInner;
    static ContainerServiceDeployment: typeof ContainerServiceDeployment;
    static EcrImagePullerRole: typeof EcrImagePullerRole;
    static EnvironmentVariable: typeof EnvironmentVariable;
    static HealthCheckConfig: typeof HealthCheckConfig;
    static PortInfo: typeof PortInfo;
    static PrivateRegistryAccess: typeof PrivateRegistryAccess;
    static PublicDomainName: typeof PublicDomainName;
    static PublicEndpoint: typeof PublicEndpoint;
    constructor(properties: ContainerProperties);
}
