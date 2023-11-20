import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ServiceTemplateProperties {
    Description?: Value<string>;
    DisplayName?: Value<string>;
    PipelineProvisioning?: Value<string>;
    EncryptionKey?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ServiceTemplate extends ResourceBase<ServiceTemplateProperties> {
    constructor(properties?: ServiceTemplateProperties);
}
