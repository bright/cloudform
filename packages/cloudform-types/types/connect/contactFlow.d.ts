import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ContactFlowProperties {
    Type: Value<string>;
    Description?: Value<string>;
    Content: Value<string>;
    State?: Value<string>;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ContactFlow extends ResourceBase<ContactFlowProperties> {
    constructor(properties: ContactFlowProperties);
}
