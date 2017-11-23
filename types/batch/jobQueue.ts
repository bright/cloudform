/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ComputeEnvironmentOrderProperties {
    ComputeEnvironment: Value<string>
    Order: Value<number>
}

export class ComputeEnvironmentOrder extends ResourceBase {
    constructor(properties: ComputeEnvironmentOrderProperties, dependsOn?: Value<string>) {
        super('AWS::Batch::ComputeEnvironmentOrder', properties, dependsOn)
    }
}

export interface JobQueueProperties {
    ComputeEnvironmentOrder: ComputeEnvironmentOrder[]
    Priority: Value<number>
    State?: Value<string>
    JobQueueName?: Value<string>
}

export default class JobQueue extends ResourceBase {
    constructor(properties: JobQueueProperties, dependsOn?: Value<string>) {
        super('AWS::Batch::JobQueue', properties, dependsOn)
    }
}
