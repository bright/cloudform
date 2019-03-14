import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PolicyProperties {
    Groups?: List<Value<string>>;
    PolicyDocument: {
        [key: string]: any;
    };
    PolicyName: Value<string>;
    Roles?: List<Value<string>>;
    Users?: List<Value<string>>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    constructor(properties: PolicyProperties);
}
