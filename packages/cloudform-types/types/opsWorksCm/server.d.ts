import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EngineAttribute {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: EngineAttribute);
}
export interface ServerProperties {
    KeyPair?: Value<string>;
    EngineVersion?: Value<string>;
    ServiceRoleArn: Value<string>;
    DisableAutomatedBackup?: Value<boolean>;
    BackupId?: Value<string>;
    EngineModel?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    AssociatePublicIpAddress?: Value<boolean>;
    InstanceProfileArn: Value<string>;
    PreferredBackupWindow?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    ServerName?: Value<string>;
    EngineAttributes?: List<EngineAttribute>;
    BackupRetentionCount?: Value<number>;
    InstanceType: Value<string>;
    Engine?: Value<string>;
}
export default class Server extends ResourceBase<ServerProperties> {
    static EngineAttribute: typeof EngineAttribute;
    constructor(properties: ServerProperties);
}
