import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PolicyProperties {
    PolicyName?: Value<string>;
    PolicyDocument: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    constructor(properties: PolicyProperties);
}
