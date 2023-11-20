import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisioningHook {
    TargetArn?: Value<string>;
    PayloadVersion?: Value<string>;
    constructor(properties: ProvisioningHook);
}
export interface ProvisioningTemplateProperties {
    ProvisioningRoleArn: Value<string>;
    Description?: Value<string>;
    PreProvisioningHook?: ProvisioningHook;
    TemplateName?: Value<string>;
    Enabled?: Value<boolean>;
    TemplateBody: Value<string>;
    TemplateType?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ProvisioningTemplate extends ResourceBase<ProvisioningTemplateProperties> {
    static ProvisioningHook: typeof ProvisioningHook;
    constructor(properties: ProvisioningTemplateProperties);
}
