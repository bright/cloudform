/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ConfigSnapshotDeliveryPropertiesProperties {
    DeliveryFrequency?: Value<string>
}

export class ConfigSnapshotDeliveryProperties extends ResourceBase {
    constructor(properties: ConfigSnapshotDeliveryPropertiesProperties, dependsOn?: Value<string>) {
        super('AWS::Config::ConfigSnapshotDeliveryProperties', properties, dependsOn)
    }
}

export interface DeliveryChannelProperties {
    ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties
    Name?: Value<string>
    S3BucketName: Value<string>
    S3KeyPrefix?: Value<string>
    SnsTopicARN?: Value<string>
}

export default class DeliveryChannel extends ResourceBase {
    constructor(properties: DeliveryChannelProperties, dependsOn?: Value<string>) {
        super('AWS::Config::DeliveryChannel', properties, dependsOn)
    }
}