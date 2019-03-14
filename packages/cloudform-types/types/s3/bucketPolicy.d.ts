import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface BucketPolicyProperties {
    Bucket: Value<string>;
    PolicyDocument: {
        [key: string]: any;
    };
}
export default class BucketPolicy extends ResourceBase<BucketPolicyProperties> {
    constructor(properties: BucketPolicyProperties);
}
