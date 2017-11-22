import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SourceBundleProperties {
    S3Bucket: Value<string>;
    S3Key: Value<string>;
}
export declare class SourceBundle extends ResourceBase {
    constructor(properties: SourceBundleProperties, dependsOn?: Value<string>);
}
export interface ApplicationVersionProperties {
    ApplicationName: Value<string>;
    Description?: Value<string>;
    SourceBundle: SourceBundle;
}
export default class ApplicationVersion extends ResourceBase {
    constructor(properties: ApplicationVersionProperties, dependsOn?: Value<string>);
}
