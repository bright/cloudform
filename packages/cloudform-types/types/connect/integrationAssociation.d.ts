import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IntegrationAssociationProperties {
    IntegrationArn: Value<string>;
    InstanceId: Value<string>;
    IntegrationType: Value<string>;
}
export default class IntegrationAssociation extends ResourceBase<IntegrationAssociationProperties> {
    constructor(properties: IntegrationAssociationProperties);
}
