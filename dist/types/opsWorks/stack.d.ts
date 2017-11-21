import { ResourceBase } from '../resource';
import { Value } from '../internal';
import ChefConfiguration from './chefConfiguration';
import ConfigurationManager from './configurationManager';
import CustomCookbooksSource from './customCookbooksSource';
import ElasticIp from './elasticIp';
import RdsDbInstance from './rdsDbInstance';
export interface StackProperties {
    AgentVersion?: Value<string>;
    Attributes?: any;
    ChefConfiguration?: ChefConfiguration;
    CloneAppIds?: Value<string>[];
    ClonePermissions?: Value<boolean>;
    ConfigurationManager?: ConfigurationManager;
    CustomCookbooksSource?: CustomCookbooksSource;
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
    SourceStackId: Value<string>;
    UseCustomCookbooks?: Value<boolean>;
    UseOpsworksSecurityGroups?: Value<boolean>;
    VpcId?: Value<string>;
}
export default class Stack extends ResourceBase {
    constructor(properties: StackProperties, dependsOn?: Value<string>);
}
