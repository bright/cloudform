import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface MicrosoftTeamsChannelConfigurationProperties {
    UserRoleRequired?: Value<boolean>;
    LoggingLevel?: Value<string>;
    SnsTopicArns?: List<Value<string>>;
    GuardrailPolicies?: List<Value<string>>;
    IamRoleArn: Value<string>;
    TeamId: Value<string>;
    ConfigurationName: Value<string>;
    TeamsTenantId: Value<string>;
    TeamsChannelId: Value<string>;
}
export default class MicrosoftTeamsChannelConfiguration extends ResourceBase<MicrosoftTeamsChannelConfigurationProperties> {
    constructor(properties: MicrosoftTeamsChannelConfigurationProperties);
}
