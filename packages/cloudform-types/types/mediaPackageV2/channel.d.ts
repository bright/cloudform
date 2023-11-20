import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IngestEndpoint {
    Id?: Value<string>;
    Url?: Value<string>;
    constructor(properties: IngestEndpoint);
}
export interface ChannelProperties {
    ChannelName?: Value<string>;
    Description?: Value<string>;
    ChannelGroupName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static IngestEndpoint: typeof IngestEndpoint;
    constructor(properties?: ChannelProperties);
}
