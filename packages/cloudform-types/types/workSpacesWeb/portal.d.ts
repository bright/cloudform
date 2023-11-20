import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PortalProperties {
    TrustStoreArn?: Value<string>;
    UserAccessLoggingSettingsArn?: Value<string>;
    CustomerManagedKey?: Value<string>;
    AdditionalEncryptionContext?: {
        [key: string]: Value<string>;
    };
    DisplayName?: Value<string>;
    UserSettingsArn?: Value<string>;
    BrowserSettingsArn?: Value<string>;
    IpAccessSettingsArn?: Value<string>;
    NetworkSettingsArn?: Value<string>;
    Tags?: List<ResourceTag>;
    AuthenticationType?: Value<string>;
}
export default class Portal extends ResourceBase<PortalProperties> {
    constructor(properties?: PortalProperties);
}
