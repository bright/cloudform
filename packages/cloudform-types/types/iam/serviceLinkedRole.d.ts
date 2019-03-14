import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ServiceLinkedRoleProperties {
    CustomSuffix?: Value<string>;
    Description?: Value<string>;
    AWSServiceName: Value<string>;
}
export default class ServiceLinkedRole extends ResourceBase<ServiceLinkedRoleProperties> {
    constructor(properties: ServiceLinkedRoleProperties);
}
