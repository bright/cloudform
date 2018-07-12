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
    DeploymentMode: Value<string>;
    HostInstanceType: Value<string>;
    EngineType: Value<string>;
    AutoMinorVersionUpgrade: Value<boolean>;
    Users: List<User>;
    PubliclyAccessible: Value<boolean>;
    SubnetIds?: List<Value<string>>;
    BrokerName: Value<string>;
}
export default class Broker extends ResourceBase {
    static User: typeof User;
    static MaintenanceWindow: typeof MaintenanceWindow;
    static ConfigurationId: typeof ConfigurationId;
    constructor(properties?: BrokerProperties);
}
