import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComputeConfig {
    DnsNameServers?: Value<string>;
    KmsKeyId?: Value<string>;
    VpcSecurityGroupIds?: List<Value<string>>;
    MaxCapacityUnits: Value<number>;
    ReplicationSubnetGroupId?: Value<string>;
    AvailabilityZone?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    MinCapacityUnits?: Value<number>;
    MultiAZ?: Value<boolean>;
    constructor(properties: ComputeConfig);
}
export interface ReplicationConfigProperties {
    ReplicationSettings?: {
        [key: string]: any;
    };
    ResourceIdentifier?: Value<string>;
    ReplicationConfigIdentifier?: Value<string>;
    ComputeConfig?: ComputeConfig;
    ReplicationType?: Value<string>;
    TableMappings?: {
        [key: string]: any;
    };
    SourceEndpointArn?: Value<string>;
    ReplicationConfigArn?: Value<string>;
    SupplementalSettings?: {
        [key: string]: any;
    };
    TargetEndpointArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ReplicationConfig extends ResourceBase<ReplicationConfigProperties> {
    static ComputeConfig: typeof ComputeConfig;
    constructor(properties?: ReplicationConfigProperties);
}
