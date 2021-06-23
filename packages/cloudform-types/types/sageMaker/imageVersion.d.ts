import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ImageVersionProperties {
    ImageName: Value<string>;
    BaseImage: Value<string>;
}
export default class ImageVersion extends ResourceBase<ImageVersionProperties> {
    constructor(properties: ImageVersionProperties);
}
