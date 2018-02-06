/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface LogGroupProperties {
    LogGroupName?: Value<string>
    RetentionInDays?: Value<number>
}

export default class LogGroup extends ResourceBase {
    constructor(properties?: LogGroupProperties) {
        super('AWS::Logs::LogGroup', properties)
    }
}
