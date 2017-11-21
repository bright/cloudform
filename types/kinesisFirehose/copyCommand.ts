import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface CopyCommandProperties {
    CopyOptions?: Value<string>
    DataTableColumns?: Value<string>
    DataTableName: Value<string>
}

export default class CopyCommand extends ResourceBase {
    constructor(properties: CopyCommandProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::CopyCommand', properties, dependsOn)
    }
}