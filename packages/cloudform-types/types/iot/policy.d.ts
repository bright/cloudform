import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PolicyProperties {
    PolicyDocument: {
        [key: string]: any;
    };
    PolicyName?: Value<string>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    constructor(properties: PolicyProperties);
}
