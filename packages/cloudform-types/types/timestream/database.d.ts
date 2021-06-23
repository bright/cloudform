import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DatabaseProperties {
    DatabaseName?: Value<string>;
    KmsKeyId?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Database extends ResourceBase<DatabaseProperties> {
    constructor(properties?: DatabaseProperties);
}
