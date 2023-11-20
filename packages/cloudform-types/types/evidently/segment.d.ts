import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SegmentProperties {
    Pattern?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Segment extends ResourceBase<SegmentProperties> {
    constructor(properties: SegmentProperties);
}
