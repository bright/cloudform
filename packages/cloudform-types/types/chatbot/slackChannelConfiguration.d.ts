import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface SlackChannelConfigurationProperties {
    SlackWorkspaceId: Value<string>;
    SlackChannelId: Value<string>;
    ConfigurationName: Value<string>;
    IamRoleArn: Value<string>;
    SnsTopicArns?: List<Value<string>>;
    LoggingLevel?: Value<string>;
    Arn?: Value<string>;
}
export default class SlackChannelConfiguration extends ResourceBase<SlackChannelConfigurationProperties> {
    constructor(properties: SlackChannelConfigurationProperties);
}
