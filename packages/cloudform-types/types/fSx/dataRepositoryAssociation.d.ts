import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoExportPolicy {
    Events: List<Value<string>>;
    constructor(properties: AutoExportPolicy);
}
export declare class AutoImportPolicy {
    Events: List<Value<string>>;
    constructor(properties: AutoImportPolicy);
}
export declare class S3 {
    AutoImportPolicy?: AutoImportPolicy;
    AutoExportPolicy?: AutoExportPolicy;
    constructor(properties: S3);
}
export interface DataRepositoryAssociationProperties {
    FileSystemPath: Value<string>;
    DataRepositoryPath: Value<string>;
    BatchImportMetaDataOnCreate?: Value<boolean>;
    S3?: S3;
    FileSystemId: Value<string>;
    ImportedFileChunkSize?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class DataRepositoryAssociation extends ResourceBase<DataRepositoryAssociationProperties> {
    static AutoExportPolicy: typeof AutoExportPolicy;
    static AutoImportPolicy: typeof AutoImportPolicy;
    static S3: typeof S3;
    constructor(properties: DataRepositoryAssociationProperties);
}
