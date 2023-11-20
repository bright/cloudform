/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CookieSpecification {
    Path?: Value<string>
    Domain!: Value<string>
    Name?: Value<string>

    constructor(properties: CookieSpecification) {
        Object.assign(this, properties)
    }
}

export class CookieSynchronizationConfiguration {
    Blocklist?: List<CookieSpecification>
    Allowlist!: List<CookieSpecification>

    constructor(properties: CookieSynchronizationConfiguration) {
        Object.assign(this, properties)
    }
}

export interface UserSettingsProperties {
    IdleDisconnectTimeoutInMinutes?: Value<number>
    UploadAllowed: Value<string>
    CustomerManagedKey?: Value<string>
    AdditionalEncryptionContext?: {[key: string]: Value<string>}
    DisconnectTimeoutInMinutes?: Value<number>
    PrintAllowed: Value<string>
    CopyAllowed: Value<string>
    CookieSynchronizationConfiguration?: CookieSynchronizationConfiguration
    DownloadAllowed: Value<string>
    PasteAllowed: Value<string>
    Tags?: List<ResourceTag>
}

export default class UserSettings extends ResourceBase<UserSettingsProperties> {
    static CookieSpecification = CookieSpecification
    static CookieSynchronizationConfiguration = CookieSynchronizationConfiguration

    constructor(properties: UserSettingsProperties) {
        super('AWS::WorkSpacesWeb::UserSettings', properties)
    }
}
