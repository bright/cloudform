import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PromptProperties {
    Description?: Value<string>;
    S3Uri?: Value<string>;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Prompt extends ResourceBase<PromptProperties> {
    constructor(properties: PromptProperties);
}
