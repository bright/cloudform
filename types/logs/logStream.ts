/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface LogStreamProperties {
    LogGroupName: Value<string>
    LogStreamName?: Value<string>
}

export default class LogStream extends ResourceBase {
    constructor(properties: LogStreamProperties, dependsOn?: Value<string>) {
        super('AWS::Logs::LogStream', properties, dependsOn)
    }
}
