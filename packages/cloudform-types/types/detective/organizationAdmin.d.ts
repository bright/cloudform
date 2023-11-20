import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface OrganizationAdminProperties {
    AccountId: Value<string>;
}
export default class OrganizationAdmin extends ResourceBase<OrganizationAdminProperties> {
    constructor(properties: OrganizationAdminProperties);
}
