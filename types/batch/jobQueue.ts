/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ComputeEnvironmentOrder {
    ComputeEnvironment!: Value<string>
    Order!: Value<number>

    constructor(properties: ComputeEnvironmentOrder) {
        Object.assign(this, properties)
    }
}

export interface JobQueueProperties {
    ComputeEnvironmentOrder: List<ComputeEnvironmentOrder>
    Priority: Value<number>
    State?: Value<string>
    JobQueueName?: Value<string>
}

export default class JobQueue extends ResourceBase {
    static ComputeEnvironmentOrder = ComputeEnvironmentOrder

    constructor(properties?: JobQueueProperties) {
        super('AWS::Batch::JobQueue', properties)
    }
}
