import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ReplicationTaskProperties {
    ReplicationTaskSettings?: Value<string>;
    CdcStartPosition?: Value<string>;
    CdcStopPosition?: Value<string>;
    MigrationType: Value<string>;
    TargetEndpointArn: Value<string>;
    ReplicationInstanceArn: Value<string>;
    TaskData?: Value<string>;
    CdcStartTime?: Value<number>;
    ResourceIdentifier?: Value<string>;
    TableMappings: Value<string>;
    ReplicationTaskIdentifier?: Value<string>;
    SourceEndpointArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ReplicationTask extends ResourceBase<ReplicationTaskProperties> {
    constructor(properties: ReplicationTaskProperties);
}
