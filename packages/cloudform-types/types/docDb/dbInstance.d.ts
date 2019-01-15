import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface DBInstanceProperties {
    DBInstanceClass: Value<string>;
    DBClusterIdentifier: Value<string>;
    AvailabilityZone?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    DBInstanceIdentifier?: Value<string>;
    Tags?: ResourceTag[];
}
export default class DBInstance extends ResourceBase {
    constructor(properties?: DBInstanceProperties);
}
