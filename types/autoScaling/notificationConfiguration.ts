import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type NotificationTypes = "autoscaling:EC2_INSTANCE_LAUNCH" | "autoscaling:EC2_INSTANCE_LAUNCH_ERROR" | "autoscaling:EC2_INSTANCE_TERMINATE" | "autoscaling:EC2_INSTANCE_TERMINATE_ERROR" | "autoscaling:TEST_NOTIFICATION"

export interface NotificationConfigurationProperties {
    TopicARN: Value<string>
    NotificationTypes: Value<NotificationTypes>
}

export default class NotificationConfiguration extends ResourceBase {
    constructor(properties: NotificationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::AutoScaling::NotificationConfiguration', properties, dependsOn)
    }
}