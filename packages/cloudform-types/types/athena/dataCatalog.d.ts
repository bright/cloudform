import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DataCatalogProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    Tags?: List<ResourceTag>;
    Type: Value<string>;
}
export default class DataCatalog extends ResourceBase<DataCatalogProperties> {
    constructor(properties: DataCatalogProperties);
}
