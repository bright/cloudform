import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface UserAccessLoggingSettingsProperties {
    KinesisStreamArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class UserAccessLoggingSettings extends ResourceBase<UserAccessLoggingSettingsProperties> {
    constructor(properties: UserAccessLoggingSettingsProperties);
}
