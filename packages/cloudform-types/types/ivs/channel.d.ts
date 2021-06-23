import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ChannelProperties {
    Name?: Value<string>;
    Authorized?: Value<boolean>;
    LatencyMode?: Value<string>;
    Type?: Value<string>;
    Tags?: List<ResourceTag>;
    RecordingConfigurationArn?: Value<string>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    constructor(properties?: ChannelProperties);
}
