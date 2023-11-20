import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface SlackChannelConfigurationProperties {
    UserRoleRequired?: Value<boolean>;
    LoggingLevel?: Value<string>;
    SnsTopicArns?: List<Value<string>>;
    GuardrailPolicies?: List<Value<string>>;
    SlackWorkspaceId: Value<string>;
    SlackChannelId: Value<string>;
    IamRoleArn: Value<string>;
    ConfigurationName: Value<string>;
}
export default class SlackChannelConfiguration extends ResourceBase<SlackChannelConfigurationProperties> {
    constructor(properties: SlackChannelConfigurationProperties);
}
