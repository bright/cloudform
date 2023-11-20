/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CloudWatchDestination {
    DimensionConfigurations?: List<DimensionConfiguration>

    constructor(properties: CloudWatchDestination) {
        Object.assign(this, properties)
    }
}

export class DimensionConfiguration {
    DimensionValueSource!: Value<string>
    DefaultDimensionValue!: Value<string>
    DimensionName!: Value<string>

    constructor(properties: DimensionConfiguration) {
        Object.assign(this, properties)
    }
}

export class EventDestination {
    SnsDestination?: SnsDestination
    CloudWatchDestination?: CloudWatchDestination
    Enabled?: Value<boolean>
    MatchingEventTypes!: List<Value<string>>
    PinpointDestination?: PinpointDestination
    KinesisFirehoseDestination?: KinesisFirehoseDestination

    constructor(properties: EventDestination) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseDestination {
    DeliveryStreamArn!: Value<string>
    IamRoleArn!: Value<string>

    constructor(properties: KinesisFirehoseDestination) {
        Object.assign(this, properties)
    }
}

export class PinpointDestination {
    ApplicationArn?: Value<string>

    constructor(properties: PinpointDestination) {
        Object.assign(this, properties)
    }
}

export class SnsDestination {
    TopicArn!: Value<string>

    constructor(properties: SnsDestination) {
        Object.assign(this, properties)
    }
}

export interface ConfigurationSetEventDestinationProperties {
    EventDestinationName: Value<string>
    ConfigurationSetName: Value<string>
    EventDestination?: EventDestination
}

export default class ConfigurationSetEventDestination extends ResourceBase<ConfigurationSetEventDestinationProperties> {
    static CloudWatchDestination = CloudWatchDestination
    static DimensionConfiguration = DimensionConfiguration
    static EventDestination = EventDestination
    static KinesisFirehoseDestination = KinesisFirehoseDestination
    static PinpointDestination = PinpointDestination
    static SnsDestination = SnsDestination

    constructor(properties: ConfigurationSetEventDestinationProperties) {
        super('AWS::PinpointEmail::ConfigurationSetEventDestination', properties)
    }
}
