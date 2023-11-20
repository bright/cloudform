import DBCluster_ from './dbCluster';
import DBClusterParameterGroup_ from './dbClusterParameterGroup';
import DBInstance_ from './dbInstance';
import DBParameterGroup_ from './dbParameterGroup';
import DBSubnetGroup_ from './dbSubnetGroup';
export declare namespace Neptune {
    const DBCluster: typeof DBCluster_;
    const DBClusterParameterGroup: typeof DBClusterParameterGroup_;
    const DBInstance: typeof DBInstance_;
    const DBParameterGroup: typeof DBParameterGroup_;
    const DBSubnetGroup: typeof DBSubnetGroup_;
    type DBCluster = DBCluster_;
    type DBClusterParameterGroup = DBClusterParameterGroup_;
    type DBInstance = DBInstance_;
    type DBParameterGroup = DBParameterGroup_;
    type DBSubnetGroup = DBSubnetGroup_;
}
