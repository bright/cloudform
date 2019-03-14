import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBInstanceProperties {
    DBParameterGroupName?: Value<string>;
    DBInstanceClass: Value<string>;
    AllowMajorVersionUpgrade?: Value<boolean>;
    DBClusterIdentifier?: Value<string>;
    AvailabilityZone?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    DBSubnetGroupName?: Value<string>;
    DBInstanceIdentifier?: Value<string>;
    DBSnapshotIdentifier?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DBInstance extends ResourceBase<DBInstanceProperties> {
    constructor(properties: DBInstanceProperties);
}
