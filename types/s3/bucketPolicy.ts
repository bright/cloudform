import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface BucketPolicyProperties {
    PolicyDocument: any
    Bucket: Value<string>
}

export default class BucketPolicy extends ResourceBase {
    constructor(properties: BucketPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::S3::BucketPolicy', properties, dependsOn)
    }
}