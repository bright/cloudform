import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApplicationSettings {
    SettingsGroup?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: ApplicationSettings);
}
export declare class StorageConnector {
    Domains?: List<Value<string>>;
    ResourceIdentifier?: Value<string>;
    ConnectorType: Value<string>;
    constructor(properties: StorageConnector);
}
export declare class UserSetting {
    Action: Value<string>;
    Permission: Value<string>;
    constructor(properties: UserSetting);
}
export interface StackProperties {
    ApplicationSettings?: ApplicationSettings;
    Description?: Value<string>;
    StorageConnectors?: List<StorageConnector>;
    DeleteStorageConnectors?: Value<boolean>;
    UserSettings?: List<UserSetting>;
    AttributesToDelete?: List<Value<string>>;
    DisplayName?: Value<string>;
    RedirectURL?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    FeedbackURL?: Value<string>;
}
export default class Stack extends ResourceBase<StackProperties> {
    static ApplicationSettings: typeof ApplicationSettings;
    static StorageConnector: typeof StorageConnector;
    static UserSetting: typeof UserSetting;
    constructor(properties?: StackProperties);
}
