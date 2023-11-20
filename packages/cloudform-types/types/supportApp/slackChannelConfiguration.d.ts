import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SlackChannelConfigurationProperties {
    ChannelName?: Value<string>;
    NotifyOnAddCorrespondenceToCase?: Value<boolean>;
    ChannelRoleArn: Value<string>;
    NotifyOnResolveCase?: Value<boolean>;
    NotifyOnCaseSeverity: Value<string>;
    TeamId: Value<string>;
    ChannelId: Value<string>;
    NotifyOnCreateOrReopenCase?: Value<boolean>;
}
export default class SlackChannelConfiguration extends ResourceBase<SlackChannelConfigurationProperties> {
    constructor(properties: SlackChannelConfigurationProperties);
}
