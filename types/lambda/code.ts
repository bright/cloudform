import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface CodeProperties {
    S3Bucket?: Value<string>
    S3Key?: Value<string>
    S3ObjectVersion?: Value<string>
    ZipFile?: Value<string>
}

export default class Code extends ResourceBase {
    constructor(properties: CodeProperties, dependsOn?: Value<string>) {
        super('AWS::Lambda::Code', properties, dependsOn)
    }
}