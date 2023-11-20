import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBInstanceProperties {
    DBInstanceClass: Value<string>;
    DBClusterIdentifier: Value<string>;
    AvailabilityZone?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    EnablePerformanceInsights?: Value<boolean>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    DBInstanceIdentifier?: Value<string>;
    Tags?: List<ResourceTag>;
    CACertificateIdentifier?: Value<string>;
    CertificateRotationRestart?: Value<boolean>;
}
export default class DBInstance extends ResourceBase<DBInstanceProperties> {
    constructor(properties: DBInstanceProperties);
}
