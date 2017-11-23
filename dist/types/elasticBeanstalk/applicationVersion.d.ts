import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SourceBundleProperties {
    S3Bucket: Value<string>;
    S3Key: Value<string>;
}
export declare class SourceBundle extends ResourceBase {
    constructor(properties: SourceBundleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ApplicationVersionProperties {
    ApplicationName: Value<string>;
    Description?: Value<string>;
    SourceBundle: SourceBundle;
}
export default class ApplicationVersion extends ResourceBase {
    constructor(properties: ApplicationVersionProperties, dependsOn?: Value<string> | Value<string>[]);
}
