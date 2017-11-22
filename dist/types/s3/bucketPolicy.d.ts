import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface BucketPolicyProperties {
    Bucket: Value<string>;
    PolicyDocument: any;
}
export default class BucketPolicy extends ResourceBase {
    constructor(properties: BucketPolicyProperties, dependsOn?: Value<string>);
}
