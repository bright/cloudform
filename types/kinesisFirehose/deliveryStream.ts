import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ElasticsearchDestinationConfiguration from './elasticsearchDestinationConfiguration'
import RedshiftDestinationConfiguration from './redshiftDestinationConfiguration'
import S3DestinationConfiguration from './s3DestinationConfiguration'



export interface DeliveryStreamProperties {
    DeliveryStreamName?: Value<string>
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration
    S3DestinationConfiguration: S3DestinationConfiguration
}

export default class DeliveryStream extends ResourceBase {
    constructor(properties: DeliveryStreamProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::DeliveryStream', properties, dependsOn)
    }
}