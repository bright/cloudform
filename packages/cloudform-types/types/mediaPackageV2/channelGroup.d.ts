import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ChannelGroupProperties {
    Description?: Value<string>;
    ChannelGroupName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ChannelGroup extends ResourceBase<ChannelGroupProperties> {
    constructor(properties?: ChannelGroupProperties);
}
