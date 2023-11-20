import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface BrowserSettingsProperties {
    BrowserPolicy?: Value<string>;
    CustomerManagedKey?: Value<string>;
    AdditionalEncryptionContext?: {
        [key: string]: Value<string>;
    };
    Tags?: List<ResourceTag>;
}
export default class BrowserSettings extends ResourceBase<BrowserSettingsProperties> {
    constructor(properties?: BrowserSettingsProperties);
}
