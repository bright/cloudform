import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type BundleType = "tar" | "tgz" | "zip" | "*"

export interface S3LocationProperties {
    Bucket?: Value<string>
    BundleType?: Value<BundleType>
    ETag?: Value<string>
    Key?: Value<string>
    Version?: Value<string>
}

export default class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::S3Location', properties, dependsOn)
    }
}