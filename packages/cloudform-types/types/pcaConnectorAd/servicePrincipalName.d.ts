import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ServicePrincipalNameProperties {
    ConnectorArn?: Value<string>;
    DirectoryRegistrationArn?: Value<string>;
}
export default class ServicePrincipalName extends ResourceBase<ServicePrincipalNameProperties> {
    constructor(properties?: ServicePrincipalNameProperties);
}
