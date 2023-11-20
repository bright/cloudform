import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CookieSpecification {
    Path?: Value<string>;
    Domain: Value<string>;
    Name?: Value<string>;
    constructor(properties: CookieSpecification);
}
export declare class CookieSynchronizationConfiguration {
    Blocklist?: List<CookieSpecification>;
    Allowlist: List<CookieSpecification>;
    constructor(properties: CookieSynchronizationConfiguration);
}
export interface UserSettingsProperties {
    IdleDisconnectTimeoutInMinutes?: Value<number>;
    UploadAllowed: Value<string>;
    CustomerManagedKey?: Value<string>;
    AdditionalEncryptionContext?: {
        [key: string]: Value<string>;
    };
    DisconnectTimeoutInMinutes?: Value<number>;
    PrintAllowed: Value<string>;
    CopyAllowed: Value<string>;
    CookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
    DownloadAllowed: Value<string>;
    PasteAllowed: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class UserSettings extends ResourceBase<UserSettingsProperties> {
    static CookieSpecification: typeof CookieSpecification;
    static CookieSynchronizationConfiguration: typeof CookieSynchronizationConfiguration;
    constructor(properties: UserSettingsProperties);
}
