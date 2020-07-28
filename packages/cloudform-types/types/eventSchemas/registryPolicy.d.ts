import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RegistryPolicyProperties {
    Policy: {
        [key: string]: any;
    };
    RegistryName: Value<string>;
    RevisionId?: Value<string>;
}
export default class RegistryPolicy extends ResourceBase<RegistryPolicyProperties> {
    constructor(properties: RegistryPolicyProperties);
}
