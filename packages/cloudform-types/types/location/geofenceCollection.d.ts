import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GeofenceCollectionProperties {
    CollectionName: Value<string>;
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    PricingPlan: Value<string>;
    PricingPlanDataSource?: Value<string>;
}
export default class GeofenceCollection extends ResourceBase<GeofenceCollectionProperties> {
    constructor(properties: GeofenceCollectionProperties);
}
