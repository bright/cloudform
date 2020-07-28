/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class EventDestination {
    CloudWatchDestination?: CloudWatchDestination
    Enabled?: Value<boolean>
    MatchingEventTypes!: List<Value<string>>
    Name?: Value<string>
    KinesisFirehoseDestination?: KinesisFirehoseDestination

    constructor(properties: EventDestination) {
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

export class CloudWatchDestination {
    DimensionConfigurations?: List<DimensionConfiguration>

    constructor(properties: CloudWatchDestination) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseDestination {
    IAMRoleARN!: Value<string>
    DeliveryStreamARN!: Value<string>

    constructor(properties: KinesisFirehoseDestination) {
        Object.assign(this, properties)
    }
}

export interface ConfigurationSetEventDestinationProperties {
    ConfigurationSetName: Value<string>
    EventDestination: EventDestination
}

export default class ConfigurationSetEventDestination extends ResourceBase<ConfigurationSetEventDestinationProperties> {
    static EventDestination = EventDestination
    static DimensionConfiguration = DimensionConfiguration
    static CloudWatchDestination = CloudWatchDestination
    static KinesisFirehoseDestination = KinesisFirehoseDestination

    constructor(properties: ConfigurationSetEventDestinationProperties) {
        super('AWS::SES::ConfigurationSetEventDestination', properties)
    }
}
