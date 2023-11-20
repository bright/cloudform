import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EnvironmentTemplateProperties {
    Description?: Value<string>;
    DisplayName?: Value<string>;
    EncryptionKey?: Value<string>;
    Provisioning?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class EnvironmentTemplate extends ResourceBase<EnvironmentTemplateProperties> {
    constructor(properties?: EnvironmentTemplateProperties);
}
