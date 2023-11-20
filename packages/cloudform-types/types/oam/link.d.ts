import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface LinkProperties {
    SinkIdentifier: Value<string>;
    LabelTemplate?: Value<string>;
    ResourceTypes: List<Value<string>>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Link extends ResourceBase<LinkProperties> {
    constructor(properties: LinkProperties);
}
