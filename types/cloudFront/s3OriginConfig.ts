import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface S3OriginConfigProperties {
    OriginAccessIdentity?: Value<string>
}

export default class S3OriginConfig extends ResourceBase {
    constructor(properties: S3OriginConfigProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::S3OriginConfig', properties, dependsOn)
    }
}