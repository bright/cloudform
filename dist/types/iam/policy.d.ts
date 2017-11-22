import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PolicyProperties {
    Groups?: Value<string>[];
    PolicyDocument: any;
    PolicyName: Value<string>;
    Roles?: Value<string>[];
    Users?: Value<string>[];
}
export default class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>);
}
