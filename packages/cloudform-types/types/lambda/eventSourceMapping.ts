/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SelfManagedEventSource {
    Endpoints?: Endpoints

    constructor(properties: SelfManagedEventSource) {
        Object.assign(this, properties)
    }
}

export class OnFailure {
    Destination?: Value<string>

    constructor(properties: OnFailure) {
        Object.assign(this, properties)
    }
}

export class SourceAccessConfiguration {
    Type?: Value<string>
    URI?: Value<string>

    constructor(properties: SourceAccessConfiguration) {
        Object.assign(this, properties)
    }
}

export class Endpoints {
    KafkaBootstrapServers?: List<Value<string>>

    constructor(properties: Endpoints) {
        Object.assign(this, properties)
    }
}

export class DestinationConfig {
    OnFailure?: OnFailure

    constructor(properties: DestinationConfig) {
        Object.assign(this, properties)
    }
}

export interface EventSourceMappingProperties {
    BatchSize?: Value<number>
    BisectBatchOnFunctionError?: Value<boolean>
    DestinationConfig?: DestinationConfig
    Enabled?: Value<boolean>
    EventSourceArn?: Value<string>
    FunctionName: Value<string>
    MaximumBatchingWindowInSeconds?: Value<number>
    MaximumRecordAgeInSeconds?: Value<number>
    MaximumRetryAttempts?: Value<number>
    ParallelizationFactor?: Value<number>
    StartingPosition?: Value<string>
    Topics?: List<Value<string>>
    Queues?: List<Value<string>>
    SourceAccessConfigurations?: List<SourceAccessConfiguration>
    TumblingWindowInSeconds?: Value<number>
    FunctionResponseTypes?: List<Value<string>>
    SelfManagedEventSource?: SelfManagedEventSource
}

export default class EventSourceMapping extends ResourceBase<EventSourceMappingProperties> {
    static SelfManagedEventSource = SelfManagedEventSource
    static OnFailure = OnFailure
    static SourceAccessConfiguration = SourceAccessConfiguration
    static Endpoints = Endpoints
    static DestinationConfig = DestinationConfig

    constructor(properties: EventSourceMappingProperties) {
        super('AWS::Lambda::EventSourceMapping', properties)
    }
}
