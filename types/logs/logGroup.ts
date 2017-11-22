/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
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