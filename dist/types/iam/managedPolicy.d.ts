import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ManagedPolicyProperties {
    Description?: Value<string>;
    Groups?: Value<string>[];
    ManagedPolicyName?: Value<string>;
    Path?: Value<string>;
    PolicyDocument: any;
    Roles?: Value<string>[];
    Users?: Value<string>[];
}
export default class ManagedPolicy extends ResourceBase {
    constructor(properties: ManagedPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
