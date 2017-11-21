import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SourceBundleProperties {
    S3Bucket: Value<string>;
    S3Key: Value<string>;
}
export default class SourceBundle extends ResourceBase {
    constructor(properties: SourceBundleProperties, dependsOn?: Value<string>);
}
