import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DataSource {
    DataLocation?: Value<string>;
    constructor(properties: DataSource);
}
export declare class DatasetImportJob {
    DatasetArn?: Value<string>;
    JobName?: Value<string>;
    DatasetImportJobArn?: Value<string>;
    RoleArn?: Value<string>;
    DataSource?: DataSource;
    constructor(properties: DatasetImportJob);
}
export interface DatasetProperties {
    DatasetGroupArn: Value<string>;
    DatasetType: Value<string>;
    DatasetImportJob?: DatasetImportJob;
    SchemaArn: Value<string>;
    Name: Value<string>;
}
export default class Dataset extends ResourceBase<DatasetProperties> {
    static DataSource: typeof DataSource;
    static DatasetImportJob: typeof DatasetImportJob;
    constructor(properties: DatasetProperties);
}
