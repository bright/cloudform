import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ElasticFileSystemTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class ElasticFileSystemTag extends ResourceBase {
    constructor(properties: ElasticFileSystemTagProperties, dependsOn?: Value<string>);
}
export interface FileSystemProperties {
    Encrypted?: Value<boolean>;
    FileSystemTags?: ElasticFileSystemTag[];
    KmsKeyId?: Value<string>;
    PerformanceMode?: Value<string>;
}
export default class FileSystem extends ResourceBase {
    constructor(properties: FileSystemProperties, dependsOn?: Value<string>);
}
