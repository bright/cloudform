import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Event = "s3:ObjectCreated:*" | "s3:ObjectCreated:Put" | "s3:ObjectCreated:Post" | "s3:ObjectCreated:Copy" | "s3:ObjectCreated:CompleteMultipartUpload" | "s3:ObjectRemoved:*" | "s3:ObjectRemoved:Delete" | "s3:ObjectRemoved:DeleteMarkerCreated" | "s3:ReducedRedundancyLostObject" | "*"

export interface QueueConfigurationProperties {
    Event: Value<Event>
    Queue: Value<string>
}

export default class QueueConfiguration extends ResourceBase {
    constructor(properties: QueueConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::QueueConfiguration', properties, dependsOn)
    }
}