import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface NamedQueryProperties {
    WorkGroup?: Value<string>;
    Description?: Value<string>;
    QueryString: Value<string>;
    Database: Value<string>;
    Name?: Value<string>;
}
export default class NamedQuery extends ResourceBase<NamedQueryProperties> {
    constructor(properties: NamedQueryProperties);
}
