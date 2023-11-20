import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApplicationEntitlementAssociationProperties {
    EntitlementName: Value<string>;
    ApplicationIdentifier: Value<string>;
    StackName: Value<string>;
}
export default class ApplicationEntitlementAssociation extends ResourceBase<ApplicationEntitlementAssociationProperties> {
    constructor(properties: ApplicationEntitlementAssociationProperties);
}
