import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class User {
    Username: Value<string>;
    Groups?: List<Value<string>>;
    ConsoleAccess?: Value<boolean>;
    Password: Value<string>;
    constructor(properties: User);
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
export declare class ConfigurationId {
    Revision: Value<number>;
    Id: Value<string>;
    constructor(properties: ConfigurationId);
}
export interface BrokerProperties {
    SecurityGroups?: List<Value<string>>;
    EngineVersion: Value<string>;
    Configuration?: ConfigurationId;
    MaintenanceWindowStartTime?: MaintenanceWindow;
    HostInstanceType: Value<string>;
    AutoMinorVersionUpgrade: Value<boolean>;
    Users: List<User>;
    Logs?: LogList;
    SubnetIds?: List<Value<string>>;
    BrokerName: Value<string>;
    DeploymentMode: Value<string>;
    EngineType: Value<string>;
    PubliclyAccessible: Value<boolean>;
    Tags?: List<TagsEntry>;
}
export default class Broker extends ResourceBase {
    static User: typeof User;
    static MaintenanceWindow: typeof MaintenanceWindow;
    static LogList: typeof LogList;
    static TagsEntry: typeof TagsEntry;
    static ConfigurationId: typeof ConfigurationId;
    constructor(properties?: BrokerProperties);
}
