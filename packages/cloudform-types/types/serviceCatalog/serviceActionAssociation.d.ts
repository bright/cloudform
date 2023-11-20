import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ServiceActionAssociationProperties {
    ServiceActionId: Value<string>;
    ProductId: Value<string>;
    ProvisioningArtifactId: Value<string>;
}
export default class ServiceActionAssociation extends ResourceBase<ServiceActionAssociationProperties> {
    constructor(properties: ServiceActionAssociationProperties);
}
