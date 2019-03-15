import SecurityGroup_ from './securityGroup';
import SubnetGroup_ from './subnetGroup';
import SecurityGroupIngress_ from './securityGroupIngress';
import ReplicationGroup_ from './replicationGroup';
import ParameterGroup_ from './parameterGroup';
import CacheCluster_ from './cacheCluster';
export declare namespace ElastiCache {
    const SecurityGroup: typeof SecurityGroup_;
    const SubnetGroup: typeof SubnetGroup_;
    const SecurityGroupIngress: typeof SecurityGroupIngress_;
    const ReplicationGroup: typeof ReplicationGroup_;
    const ParameterGroup: typeof ParameterGroup_;
    const CacheCluster: typeof CacheCluster_;
    type SecurityGroup = SecurityGroup_;
    type SubnetGroup = SubnetGroup_;
    type SecurityGroupIngress = SecurityGroupIngress_;
    type ReplicationGroup = ReplicationGroup_;
    type ParameterGroup = ParameterGroup_;
    type CacheCluster = CacheCluster_;
}
