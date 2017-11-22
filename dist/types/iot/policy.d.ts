import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PolicyProperties {
    PolicyDocument: any;
    PolicyName?: Value<string>;
}
export default class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>);
}
