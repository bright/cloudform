import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PolicyProperties {
    Type: Value<string>;
    TargetIds?: List<Value<string>>;
    Description?: Value<string>;
    Content: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    constructor(properties: PolicyProperties);
}
