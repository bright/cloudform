import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface FileSystemTagProperties {
    Key: Value<string>
    Value: Value<string>
}

export default class FileSystemTag extends ResourceBase {
    constructor(properties: FileSystemTagProperties, dependsOn?: Value<string>) {
        super('AWS::EFS::FileSystemTag', properties, dependsOn)
    }
}