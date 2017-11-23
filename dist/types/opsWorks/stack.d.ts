import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface SourceProperties {
    Password?: Value<string>;
    Revision?: Value<string>;
    SshKey?: Value<string>;
    Type?: Value<string>;
    Url?: Value<string>;
    Username?: Value<string>;
}
export declare class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ChefConfigurationProperties {
    BerkshelfVersion?: Value<string>;
    ManageBerkshelf?: Value<boolean>;
}
export declare class ChefConfiguration extends ResourceBase {
    constructor(properties: ChefConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StackConfigurationManagerProperties {
    Name?: Value<string>;
    Version?: Value<string>;
}
export declare class StackConfigurationManager extends ResourceBase {
    constructor(properties: StackConfigurationManagerProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RdsDbInstanceProperties {
    DbPassword: Value<string>;
    DbUser: Value<string>;
    RdsDbInstanceArn: Value<string>;
}
export declare class RdsDbInstance extends ResourceBase {
    constructor(properties: RdsDbInstanceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ElasticIpProperties {
    Ip: Value<string>;
    Name?: Value<string>;
}
export declare class ElasticIp extends ResourceBase {
    constructor(properties: ElasticIpProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StackProperties {
    AgentVersion?: Value<string>;
    Attributes?: {
        [key: string]: Value<string>;
    };
    ChefConfiguration?: ChefConfiguration;
    CloneAppIds?: Value<string>[];
    ClonePermissions?: Value<boolean>;
    ConfigurationManager?: StackConfigurationManager;
    CustomCookbooksSource?: Source;
    CustomJson?: any;
    DefaultAvailabilityZone?: Value<string>;
    DefaultInstanceProfileArn: Value<string>;
    DefaultOs?: Value<string>;
    DefaultRootDeviceType?: Value<string>;
    DefaultSshKeyName?: Value<string>;
    DefaultSubnetId?: Value<string>;
    EcsClusterArn?: Value<string>;
    ElasticIps?: ElasticIp[];
    HostnameTheme?: Value<string>;
    Name: Value<string>;
    RdsDbInstances?: RdsDbInstance[];
    ServiceRoleArn: Value<string>;
    SourceStackId?: Value<string>;
    Tags?: ResourceTag[];
    UseCustomCookbooks?: Value<boolean>;
    UseOpsworksSecurityGroups?: Value<boolean>;
    VpcId?: Value<string>;
}
export default class Stack extends ResourceBase {
    constructor(properties: StackProperties, dependsOn?: Value<string> | Value<string>[]);
}
