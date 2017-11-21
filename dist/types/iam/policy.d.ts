import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PolicyProperties {
    PolicyName: Value<string>;
    PolicyDocument: any;
    Groups?: Value<string>[];
    Users?: Value<string>[];
    Roles?: Value<string>[];
}
export default class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>);
}
