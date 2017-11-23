import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ElasticFileSystemTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class ElasticFileSystemTag extends ResourceBase {
    constructor(properties: ElasticFileSystemTagProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FileSystemProperties {
    Encrypted?: Value<boolean>;
    FileSystemTags?: List<ElasticFileSystemTag>;
    KmsKeyId?: Value<string>;
    PerformanceMode?: Value<string>;
}
export default class FileSystem extends ResourceBase {
    constructor(properties: FileSystemProperties, dependsOn?: Value<string> | Value<string>[]);
}
