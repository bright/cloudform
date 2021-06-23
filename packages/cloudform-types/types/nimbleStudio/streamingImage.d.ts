import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StreamingImageProperties {
    StudioId: Value<string>;
    Ec2ImageId: Value<string>;
    Name: Value<string>;
    Description?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class StreamingImage extends ResourceBase<StreamingImageProperties> {
    constructor(properties: StreamingImageProperties);
}
