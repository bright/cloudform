import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ImageProperties {
    ImageName: Value<string>;
    ImageDisplayName?: Value<string>;
    ImageRoleArn: Value<string>;
    ImageDescription?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Image extends ResourceBase<ImageProperties> {
    constructor(properties: ImageProperties);
}
