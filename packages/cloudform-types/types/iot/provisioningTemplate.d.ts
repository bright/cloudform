import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisioningHook {
    TargetArn?: Value<string>;
    PayloadVersion?: Value<string>;
    constructor(properties: ProvisioningHook);
}
export interface ProvisioningTemplateProperties {
    TemplateName?: Value<string>;
    Description?: Value<string>;
    Enabled?: Value<boolean>;
    ProvisioningRoleArn: Value<string>;
    TemplateBody: Value<string>;
    PreProvisioningHook?: ProvisioningHook;
    Tags?: List<ResourceTag>;
}
export default class ProvisioningTemplate extends ResourceBase<ProvisioningTemplateProperties> {
    static ProvisioningHook: typeof ProvisioningHook;
    constructor(properties: ProvisioningTemplateProperties);
}
