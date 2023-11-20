import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ManagedPolicyProperties {
    ManagedPolicyName?: Value<string>;
    Path?: Value<string>;
    Description?: Value<string>;
    Groups?: List<Value<string>>;
    PolicyDocument: {
        [key: string]: any;
    };
    Roles?: List<Value<string>>;
    Users?: List<Value<string>>;
}
export default class ManagedPolicy extends ResourceBase<ManagedPolicyProperties> {
    constructor(properties: ManagedPolicyProperties);
}
