import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface KMSEncryptionConfigProperties {
    AWSKMSKeyARN: Value<string>
}

export default class KMSEncryptionConfig extends ResourceBase {
    constructor(properties: KMSEncryptionConfigProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::KMSEncryptionConfig', properties, dependsOn)
    }
}