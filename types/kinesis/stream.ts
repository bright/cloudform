/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'



export interface StreamProperties {
    Name?: Value<string>
    RetentionPeriodHours?: Value<number>
    ShardCount: Value<number>
    Tags?: ResourceTag[]
}

export default class Stream extends ResourceBase {
    constructor(properties: StreamProperties, dependsOn?: Value<string>) {
        super('AWS::Kinesis::Stream', properties, dependsOn)
    }
}