import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Tags?: List<ResourceTag>;
    constructor(properties: Tags);
}
export interface DataCatalogProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    Tags?: Tags;
    Type: Value<string>;
}
export default class DataCatalog extends ResourceBase<DataCatalogProperties> {
    static Tags: typeof Tags;
    constructor(properties: DataCatalogProperties);
}
