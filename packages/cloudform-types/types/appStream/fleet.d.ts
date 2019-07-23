import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>;
    DirectoryName?: Value<string>;
    constructor(properties: DomainJoinInfo);
}
export declare class ComputeCapacity {
    DesiredInstances: Value<number>;
    constructor(properties: ComputeCapacity);
}
export declare class VpcConfig {
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface FleetProperties {
    Description?: Value<string>;
    ComputeCapacity: ComputeCapacity;
    VpcConfig?: VpcConfig;
    FleetType?: Value<string>;
    EnableDefaultInternetAccess?: Value<boolean>;
    DomainJoinInfo?: DomainJoinInfo;
    Name?: Value<string>;
    ImageName?: Value<string>;
    MaxUserDurationInSeconds?: Value<number>;
    IdleDisconnectTimeoutInSeconds?: Value<number>;
    DisconnectTimeoutInSeconds?: Value<number>;
    DisplayName?: Value<string>;
    InstanceType: Value<string>;
    Tags?: List<ResourceTag>;
    ImageArn?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    static DomainJoinInfo: typeof DomainJoinInfo;
    static ComputeCapacity: typeof ComputeCapacity;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: FleetProperties);
}
