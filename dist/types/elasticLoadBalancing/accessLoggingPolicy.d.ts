import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AccessLoggingPolicyProperties {
    EmitInterval?: Value<string>;
    Enabled: Value<boolean>;
    S3BucketName?: Value<string>;
    S3BucketPrefix?: Value<string>;
}
export default class AccessLoggingPolicy extends ResourceBase {
    constructor(properties: AccessLoggingPolicyProperties, dependsOn?: Value<string>);
}
