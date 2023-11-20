import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class StreamingImageEncryptionConfiguration {
    KeyType: Value<string>;
    KeyArn?: Value<string>;
    constructor(properties: StreamingImageEncryptionConfiguration);
}
export interface StreamingImageProperties {
    Description?: Value<string>;
    Ec2ImageId: Value<string>;
    StudioId: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class StreamingImage extends ResourceBase<StreamingImageProperties> {
    static StreamingImageEncryptionConfiguration: typeof StreamingImageEncryptionConfiguration;
    constructor(properties: StreamingImageProperties);
}
