import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Content {
    S3ObjectVersion?: Value<string>;
    S3Bucket: Value<string>;
    S3Key: Value<string>;
    constructor(properties: Content);
}
export interface LayerVersionProperties {
    CompatibleRuntimes?: List<Value<string>>;
    LicenseInfo?: Value<string>;
    Description?: Value<string>;
    LayerName?: Value<string>;
    Content: Content;
}
export default class LayerVersion extends ResourceBase<LayerVersionProperties> {
    static Content: typeof Content;
    constructor(properties: LayerVersionProperties);
}
