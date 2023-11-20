import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DatabaseProperties {
    KmsKeyId?: Value<string>;
    DatabaseName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Database extends ResourceBase<DatabaseProperties> {
    constructor(properties?: DatabaseProperties);
}
