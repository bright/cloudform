import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PrimaryTaskSetProperties {
    TaskSetId: Value<string>;
    Cluster: Value<string>;
    Service: Value<string>;
}
export default class PrimaryTaskSet extends ResourceBase<PrimaryTaskSetProperties> {
    constructor(properties: PrimaryTaskSetProperties);
}
