import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface LogGroupProperties {
    LogGroupName?: Value<string>
    RetentionInDays?: Value<number>
}

export default class LogGroup extends ResourceBase {
    constructor(properties: LogGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Logs::LogGroup', properties, dependsOn)
    }
}