import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessEndpoint {
    EndpointType: Value<string>;
    VpceId: Value<string>;
    constructor(properties: AccessEndpoint);
}
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
export declare class StreamingExperienceSettings {
    PreferredProtocol?: Value<string>;
    constructor(properties: StreamingExperienceSettings);
}
export declare class UserSetting {
    Action: Value<string>;
    MaximumLength?: Value<number>;
    Permission: Value<string>;
    constructor(properties: UserSetting);
}
export interface StackProperties {
    Description?: Value<string>;
    StorageConnectors?: List<StorageConnector>;
    DeleteStorageConnectors?: Value<boolean>;
    EmbedHostDomains?: List<Value<string>>;
    UserSettings?: List<UserSetting>;
    AttributesToDelete?: List<Value<string>>;
    RedirectURL?: Value<string>;
    StreamingExperienceSettings?: StreamingExperienceSettings;
    Name?: Value<string>;
    FeedbackURL?: Value<string>;
    ApplicationSettings?: ApplicationSettings;
    DisplayName?: Value<string>;
    Tags?: List<ResourceTag>;
    AccessEndpoints?: List<AccessEndpoint>;
}
export default class Stack extends ResourceBase<StackProperties> {
    static AccessEndpoint: typeof AccessEndpoint;
    static ApplicationSettings: typeof ApplicationSettings;
    static StorageConnector: typeof StorageConnector;
    static StreamingExperienceSettings: typeof StreamingExperienceSettings;
    static UserSetting: typeof UserSetting;
    constructor(properties?: StackProperties);
}
