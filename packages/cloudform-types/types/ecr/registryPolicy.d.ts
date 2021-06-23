import { ResourceBase } from '../resource';
export interface RegistryPolicyProperties {
    PolicyText: {
        [key: string]: any;
    };
}
export default class RegistryPolicy extends ResourceBase<RegistryPolicyProperties> {
    constructor(properties: RegistryPolicyProperties);
}
