import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComputeCapacity {
    DesiredInstances?: Value<number>;
    DesiredSessions?: Value<number>;
    constructor(properties: ComputeCapacity);
}
export declare class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>;
    DirectoryName?: Value<string>;
    constructor(properties: DomainJoinInfo);
}
export declare class S3Location {
    S3Bucket: Value<string>;
    S3Key: Value<string>;
    constructor(properties: S3Location);
}
export declare class VpcConfig {
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface FleetProperties {
    Description?: Value<string>;
    ComputeCapacity?: ComputeCapacity;
    Platform?: Value<string>;
    VpcConfig?: VpcConfig;
    FleetType?: Value<string>;
    EnableDefaultInternetAccess?: Value<boolean>;
    DomainJoinInfo?: DomainJoinInfo;
    SessionScriptS3Location?: S3Location;
    Name: Value<string>;
    ImageName?: Value<string>;
    MaxUserDurationInSeconds?: Value<number>;
    IdleDisconnectTimeoutInSeconds?: Value<number>;
    UsbDeviceFilterStrings?: List<Value<string>>;
    DisconnectTimeoutInSeconds?: Value<number>;
    DisplayName?: Value<string>;
    StreamView?: Value<string>;
    IamRoleArn?: Value<string>;
    MaxSessionsPerInstance?: Value<number>;
    InstanceType: Value<string>;
    MaxConcurrentSessions?: Value<number>;
    Tags?: List<ResourceTag>;
    ImageArn?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    static ComputeCapacity: typeof ComputeCapacity;
    static DomainJoinInfo: typeof DomainJoinInfo;
    static S3Location: typeof S3Location;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: FleetProperties);
}
