/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ElasticFileSystemTagProperties {
    Key: Value<string>
    Value: Value<string>
}

export class ElasticFileSystemTag extends ResourceBase {
    constructor(properties: ElasticFileSystemTagProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EFS::ElasticFileSystemTag', properties, dependsOn)
    }
}

export interface FileSystemProperties {
    Encrypted?: Value<boolean>
    FileSystemTags?: ElasticFileSystemTag[]
    KmsKeyId?: Value<string>
    PerformanceMode?: Value<string>
}

export default class FileSystem extends ResourceBase {
    constructor(properties: FileSystemProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EFS::FileSystem', properties, dependsOn)
    }
}
