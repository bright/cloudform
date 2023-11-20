/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessEndpoint {
    EndpointType!: Value<string>
    VpceId!: Value<string>

    constructor(properties: AccessEndpoint) {
        Object.assign(this, properties)
    }
}

export class ApplicationSettings {
    SettingsGroup?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: ApplicationSettings) {
        Object.assign(this, properties)
    }
}

export class StorageConnector {
    Domains?: List<Value<string>>
    ResourceIdentifier?: Value<string>
    ConnectorType!: Value<string>

    constructor(properties: StorageConnector) {
        Object.assign(this, properties)
    }
}

export class StreamingExperienceSettings {
    PreferredProtocol?: Value<string>

    constructor(properties: StreamingExperienceSettings) {
        Object.assign(this, properties)
    }
}

export class UserSetting {
    Action!: Value<string>
    MaximumLength?: Value<number>
    Permission!: Value<string>

    constructor(properties: UserSetting) {
        Object.assign(this, properties)
    }
}

export interface StackProperties {
    Description?: Value<string>
    StorageConnectors?: List<StorageConnector>
    DeleteStorageConnectors?: Value<boolean>
    EmbedHostDomains?: List<Value<string>>
    UserSettings?: List<UserSetting>
    AttributesToDelete?: List<Value<string>>
    RedirectURL?: Value<string>
    StreamingExperienceSettings?: StreamingExperienceSettings
    Name?: Value<string>
    FeedbackURL?: Value<string>
    ApplicationSettings?: ApplicationSettings
    DisplayName?: Value<string>
    Tags?: List<ResourceTag>
    AccessEndpoints?: List<AccessEndpoint>
}

export default class Stack extends ResourceBase<StackProperties> {
    static AccessEndpoint = AccessEndpoint
    static ApplicationSettings = ApplicationSettings
    static StorageConnector = StorageConnector
    static StreamingExperienceSettings = StreamingExperienceSettings
    static UserSetting = UserSetting

    constructor(properties?: StackProperties) {
        super('AWS::AppStream::Stack', properties || {})
    }
}
