import DBInstance_ from './dbInstance';
import DBCluster_ from './dbCluster';
import DBSubnetGroup_ from './dbSubnetGroup';
import DBClusterParameterGroup_ from './dbClusterParameterGroup';
export declare namespace DocDB {
    const DBInstance: typeof DBInstance_;
    const DBCluster: typeof DBCluster_;
    const DBSubnetGroup: typeof DBSubnetGroup_;
    const DBClusterParameterGroup: typeof DBClusterParameterGroup_;
    type DBInstance = DBInstance_;
    type DBCluster = DBCluster_;
    type DBSubnetGroup = DBSubnetGroup_;
    type DBClusterParameterGroup = DBClusterParameterGroup_;
}
