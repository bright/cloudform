import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class EncryptionOptions {
    KmsKeyId?: Value<string>;
    UseAwsOwnedKey: Value<boolean>;
    constructor(properties: EncryptionOptions);
}
export declare class ServerMetadata {
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
    constructor(properties: ServerMetadata);
}
export declare class MaintenanceWindow {
    DayOfWeek: Value<string>;
    TimeOfDay: Value<string>;
    TimeZone: Value<string>;
    constructor(properties: MaintenanceWindow);
}
export declare class LogList {
    Audit?: Value<boolean>;
    General?: Value<boolean>;
    constructor(properties: LogList);
}
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export declare class LdapMetadata {
    InterBrokerCreds?: List<InterBrokerCred>;
    ServerMetadata: ServerMetadata;
    constructor(properties: LdapMetadata);
}
export declare class User {
    Username: Value<string>;
    Groups?: List<Value<string>>;
    ConsoleAccess?: Value<boolean>;
    Password: Value<string>;
    constructor(properties: User);
}
export declare class ConfigurationId {
    Revision: Value<number>;
    Id: Value<string>;
    constructor(properties: ConfigurationId);
}
export declare class InterBrokerCred {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: InterBrokerCred);
}
export interface BrokerProperties {
    SecurityGroups?: List<Value<string>>;
    StorageType?: Value<string>;
    EngineVersion: Value<string>;
    Configuration?: ConfigurationId;
    AuthenticationStrategy?: Value<string>;
    MaintenanceWindowStartTime?: MaintenanceWindow;
    LdapMetadata?: LdapMetadata;
    HostInstanceType: Value<string>;
    AutoMinorVersionUpgrade: Value<boolean>;
    Users: List<User>;
    Logs?: LogList;
    SubnetIds?: List<Value<string>>;
    BrokerName: Value<string>;
    LdapServerMetadata?: LdapServerMetadata;
    DeploymentMode: Value<string>;
    EngineType: Value<string>;
    PubliclyAccessible: Value<boolean>;
    EncryptionOptions?: EncryptionOptions;
    Tags?: List<TagsEntry>;
}
export default class Broker extends ResourceBase<BrokerProperties> {
    static LdapServerMetadata: typeof LdapServerMetadata;
    static EncryptionOptions: typeof EncryptionOptions;
    static ServerMetadata: typeof ServerMetadata;
    static MaintenanceWindow: typeof MaintenanceWindow;
    static LogList: typeof LogList;
    static TagsEntry: typeof TagsEntry;
    static LdapMetadata: typeof LdapMetadata;
    static User: typeof User;
    static ConfigurationId: typeof ConfigurationId;
    static InterBrokerCred: typeof InterBrokerCred;
    constructor(properties: BrokerProperties);
}
