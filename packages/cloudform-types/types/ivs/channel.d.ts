import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ChannelProperties {
    Type?: Value<string>;
    RecordingConfigurationArn?: Value<string>;
    Authorized?: Value<boolean>;
    Preset?: Value<string>;
    InsecureIngest?: Value<boolean>;
    LatencyMode?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    constructor(properties?: ChannelProperties);
}
