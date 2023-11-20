import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ClusterProperties {
    AdminUserName: Value<string>;
    KmsKeyId?: Value<string>;
    ShardCapacity: Value<number>;
    VpcSecurityGroupIds?: List<Value<string>>;
    AdminUserPassword?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    ClusterName: Value<string>;
    AuthType: Value<string>;
    SubnetIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    ShardCount: Value<number>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    constructor(properties: ClusterProperties);
}
