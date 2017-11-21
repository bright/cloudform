import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ManagedPolicyProperties {
    Description?: Value<string>;
    Groups?: Value<string>[];
    Path?: Value<string>;
    PolicyDocument: any;
    Roles?: Value<string>[];
    Users?: Value<string>[];
    ManagedPolicyName?: Value<string>;
}
export default class ManagedPolicy extends ResourceBase {
    constructor(properties: ManagedPolicyProperties, dependsOn?: Value<string>);
}
