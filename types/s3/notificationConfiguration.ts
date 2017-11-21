import {ResourceBase} from '../resource'
import {Value} from '../internal'
import LambdaConfiguration from './lambdaConfiguration'
import QueueConfiguration from './queueConfiguration'
import TopicConfiguration from './topicConfiguration'



export interface NotificationConfigurationProperties {
    LambdaConfigurations: LambdaConfiguration[]
    QueueConfigurations: QueueConfiguration[]
    TopicConfigurations: TopicConfiguration[]
}

export default class NotificationConfiguration extends ResourceBase {
    constructor(properties: NotificationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::NotificationConfiguration', properties, dependsOn)
    }
}