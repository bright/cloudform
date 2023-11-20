import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GeofenceCollectionProperties {
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    CollectionName: Value<string>;
}
export default class GeofenceCollection extends ResourceBase<GeofenceCollectionProperties> {
    constructor(properties: GeofenceCollectionProperties);
}
