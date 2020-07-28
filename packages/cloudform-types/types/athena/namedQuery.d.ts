import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface NamedQueryProperties {
    Name?: Value<string>;
    Database: Value<string>;
    Description?: Value<string>;
    QueryString: Value<string>;
}
export default class NamedQuery extends ResourceBase<NamedQueryProperties> {
    constructor(properties: NamedQueryProperties);
}
