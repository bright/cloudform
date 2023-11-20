import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ContactFlowModuleProperties {
    Description?: Value<string>;
    Content: Value<string>;
    State?: Value<string>;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ContactFlowModule extends ResourceBase<ContactFlowModuleProperties> {
    constructor(properties: ContactFlowModuleProperties);
}
