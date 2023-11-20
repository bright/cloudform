import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DatastoreProperties {
    KmsKeyArn?: Value<string>;
    DatastoreName?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Datastore extends ResourceBase<DatastoreProperties> {
    constructor(properties?: DatastoreProperties);
}
