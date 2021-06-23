import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface StreamKeyProperties {
    ChannelArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class StreamKey extends ResourceBase<StreamKeyProperties> {
    constructor(properties: StreamKeyProperties);
}
