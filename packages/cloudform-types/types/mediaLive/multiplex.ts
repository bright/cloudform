/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MultiplexMediaConnectOutputDestinationSettings {
    EntitlementArn?: Value<string>

    constructor(properties: MultiplexMediaConnectOutputDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class MultiplexOutputDestination {
    MultiplexMediaConnectOutputDestinationSettings?: MultiplexMediaConnectOutputDestinationSettings

    constructor(properties: MultiplexOutputDestination) {
        Object.assign(this, properties)
    }
}

export class MultiplexSettings {
    TransportStreamBitrate!: Value<number>
    MaximumVideoBufferDelayMilliseconds?: Value<number>
    TransportStreamId!: Value<number>
    TransportStreamReservedBitrate?: Value<number>

    constructor(properties: MultiplexSettings) {
        Object.assign(this, properties)
    }
}

export class Tags {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: Tags) {
        Object.assign(this, properties)
    }
}

export interface MultiplexProperties {
    MultiplexSettings: MultiplexSettings
    AvailabilityZones: List<Value<string>>
    Destinations?: List<MultiplexOutputDestination>
    Tags?: List<Tags>
    Name: Value<string>
}

export default class Multiplex extends ResourceBase<MultiplexProperties> {
    static MultiplexMediaConnectOutputDestinationSettings = MultiplexMediaConnectOutputDestinationSettings
    static MultiplexOutputDestination = MultiplexOutputDestination
    static MultiplexSettings = MultiplexSettings
    static Tags = Tags

    constructor(properties: MultiplexProperties) {
        super('AWS::MediaLive::Multiplex', properties)
    }
}