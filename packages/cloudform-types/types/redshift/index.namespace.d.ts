import Cluster_ from './cluster';
import ClusterParameterGroup_ from './clusterParameterGroup';
import ClusterSubnetGroup_ from './clusterSubnetGroup';
import ClusterSecurityGroup_ from './clusterSecurityGroup';
import ClusterSecurityGroupIngress_ from './clusterSecurityGroupIngress';
export declare namespace Redshift {
    const Cluster: typeof Cluster_;
    const ClusterParameterGroup: typeof ClusterParameterGroup_;
    const ClusterSubnetGroup: typeof ClusterSubnetGroup_;
    const ClusterSecurityGroup: typeof ClusterSecurityGroup_;
    const ClusterSecurityGroupIngress: typeof ClusterSecurityGroupIngress_;
    type Cluster = Cluster_;
    type ClusterParameterGroup = ClusterParameterGroup_;
    type ClusterSubnetGroup = ClusterSubnetGroup_;
    type ClusterSecurityGroup = ClusterSecurityGroup_;
    type ClusterSecurityGroupIngress = ClusterSecurityGroupIngress_;
}
