import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConfigurationId {
    Revision: Value<number>;
    Id: Value<string>;
    constructor(properties: ConfigurationId);
}
export declare class EncryptionOptions {
    KmsKeyId?: Value<string>;
    UseAwsOwnedKey: Value<boolean>;
    constructor(properties: EncryptionOptions);
}
export declare class LdapServerMetadata {
    Hosts: List<Value<string>>;
    UserRoleName?: Value<string>;
    UserSearchMatching: Value<string>;
    RoleName?: Value<string>;
    UserBase: Value<string>;
    UserSearchSubtree?: Value<boolean>;
    RoleSearchMatching: Value<string>;
    ServiceAccountUsername: Value<string>;
    RoleBase: Value<string>;
    ServiceAccountPassword: Value<string>;
    RoleSearchSubtree?: Value<boolean>;
    constructor(properties: LdapServerMetadata);
}
export declare class LogList {
    Audit?: Value<boolean>;
    General?: Value<boolean>;
    constructor(properties: LogList);
}
export declare class MaintenanceWindow {
    DayOfWeek: Value<string>;
    TimeOfDay: Value<string>;
    TimeZone: Value<string>;
    constructor(properties: MaintenanceWindow);
}
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export declare class User {
    Username: Value<string>;
    Groups?: List<Value<string>>;
    ConsoleAccess?: Value<boolean>;
    Password: Value<string>;
    constructor(properties: User);
}
export interface BrokerProperties {
    SecurityGroups?: List<Value<string>>;
    DataReplicationPrimaryBrokerArn?: Value<string>;
    StorageType?: Value<string>;
    EngineVersion: Value<string>;
    Configuration?: ConfigurationId;
    AuthenticationStrategy?: Value<string>;
    MaintenanceWindowStartTime?: MaintenanceWindow;
    HostInstanceType: Value<string>;
    AutoMinorVersionUpgrade: Value<boolean>;
    Users: List<User>;
    Logs?: LogList;
    SubnetIds?: List<Value<string>>;
    DataReplicationMode?: Value<string>;
    BrokerName: Value<string>;
    LdapServerMetadata?: LdapServerMetadata;
    DeploymentMode: Value<string>;
    EngineType: Value<string>;
    PubliclyAccessible: Value<boolean>;
    EncryptionOptions?: EncryptionOptions;
    Tags?: List<TagsEntry>;
}
export default class Broker extends ResourceBase<BrokerProperties> {
    static ConfigurationId: typeof ConfigurationId;
    static EncryptionOptions: typeof EncryptionOptions;
    static LdapServerMetadata: typeof LdapServerMetadata;
    static LogList: typeof LogList;
    static MaintenanceWindow: typeof MaintenanceWindow;
    static TagsEntry: typeof TagsEntry;
    static User: typeof User;
    constructor(properties: BrokerProperties);
}
