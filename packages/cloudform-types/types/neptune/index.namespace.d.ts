import DBCluster_ from './dbCluster';
import DBClusterParameterGroup_ from './dbClusterParameterGroup';
import DBSubnetGroup_ from './dbSubnetGroup';
import DBInstance_ from './dbInstance';
import DBParameterGroup_ from './dbParameterGroup';
export declare namespace Neptune {
    const DBCluster: typeof DBCluster_;
    const DBClusterParameterGroup: typeof DBClusterParameterGroup_;
    const DBSubnetGroup: typeof DBSubnetGroup_;
    const DBInstance: typeof DBInstance_;
    const DBParameterGroup: typeof DBParameterGroup_;
    type DBCluster = DBCluster_;
    type DBClusterParameterGroup = DBClusterParameterGroup_;
    type DBSubnetGroup = DBSubnetGroup_;
    type DBInstance = DBInstance_;
    type DBParameterGroup = DBParameterGroup_;
}
