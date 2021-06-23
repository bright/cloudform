import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ServiceActionAssociationProperties {
    ProductId: Value<string>;
    ProvisioningArtifactId: Value<string>;
    ServiceActionId: Value<string>;
}
export default class ServiceActionAssociation extends ResourceBase<ServiceActionAssociationProperties> {
    constructor(properties: ServiceActionAssociationProperties);
}
