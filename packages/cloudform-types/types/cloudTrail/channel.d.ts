import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Destination {
    Type: Value<string>;
    Location: Value<string>;
    constructor(properties: Destination);
}
export interface ChannelProperties {
    Destinations?: List<Destination>;
    Source?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static Destination: typeof Destination;
    constructor(properties?: ChannelProperties);
}
