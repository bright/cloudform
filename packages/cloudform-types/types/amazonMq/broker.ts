/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LdapServerMetadata {
    Hosts!: List<Value<string>>
    UserRoleName?: Value<string>
    UserSearchMatching!: Value<string>
    RoleName?: Value<string>
    UserBase!: Value<string>
    UserSearchSubtree?: Value<boolean>
    RoleSearchMatching!: Value<string>
    ServiceAccountUsername!: Value<string>
    RoleBase!: Value<string>
    ServiceAccountPassword!: Value<string>
    RoleSearchSubtree?: Value<boolean>

    constructor(properties: LdapServerMetadata) {
        Object.assign(this, properties)
    }
}

export class EncryptionOptions {
    KmsKeyId?: Value<string>
    UseAwsOwnedKey!: Value<boolean>

    constructor(properties: EncryptionOptions) {
        Object.assign(this, properties)
    }
}

export class ServerMetadata {
    Hosts!: List<Value<string>>
    UserRoleName?: Value<string>
    UserSearchMatching!: Value<string>
    RoleName?: Value<string>
    UserBase!: Value<string>
    UserSearchSubtree?: Value<boolean>
    RoleSearchMatching!: Value<string>
    ServiceAccountUsername!: Value<string>
    RoleBase!: Value<string>
    ServiceAccountPassword!: Value<string>
    RoleSearchSubtree?: Value<boolean>

    constructor(properties: ServerMetadata) {
        Object.assign(this, properties)
    }
}

export class MaintenanceWindow {
    DayOfWeek!: Value<string>
    TimeOfDay!: Value<string>
    TimeZone!: Value<string>

    constructor(properties: MaintenanceWindow) {
        Object.assign(this, properties)
    }
}

export class LogList {
    Audit?: Value<boolean>
    General?: Value<boolean>

    constructor(properties: LogList) {
        Object.assign(this, properties)
    }
}

export class TagsEntry {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: TagsEntry) {
        Object.assign(this, properties)
    }
}

export class LdapMetadata {
    InterBrokerCreds?: List<InterBrokerCred>
    ServerMetadata!: ServerMetadata

    constructor(properties: LdapMetadata) {
        Object.assign(this, properties)
    }
}

export class User {
    Username!: Value<string>
    Groups?: List<Value<string>>
    ConsoleAccess?: Value<boolean>
    Password!: Value<string>

    constructor(properties: User) {
        Object.assign(this, properties)
    }
}

export class ConfigurationId {
    Revision!: Value<number>
    Id!: Value<string>

    constructor(properties: ConfigurationId) {
        Object.assign(this, properties)
    }
}

export class InterBrokerCred {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: InterBrokerCred) {
        Object.assign(this, properties)
    }
}

export interface BrokerProperties {
    SecurityGroups?: List<Value<string>>
    StorageType?: Value<string>
    EngineVersion: Value<string>
    Configuration?: ConfigurationId
    AuthenticationStrategy?: Value<string>
    MaintenanceWindowStartTime?: MaintenanceWindow
    LdapMetadata?: LdapMetadata
    HostInstanceType: Value<string>
    AutoMinorVersionUpgrade: Value<boolean>
    Users: List<User>
    Logs?: LogList
    SubnetIds?: List<Value<string>>
    BrokerName: Value<string>
    LdapServerMetadata?: LdapServerMetadata
    DeploymentMode: Value<string>
    EngineType: Value<string>
    PubliclyAccessible: Value<boolean>
    EncryptionOptions?: EncryptionOptions
    Tags?: List<TagsEntry>
}

export default class Broker extends ResourceBase<BrokerProperties> {
    static LdapServerMetadata = LdapServerMetadata
    static EncryptionOptions = EncryptionOptions
    static ServerMetadata = ServerMetadata
    static MaintenanceWindow = MaintenanceWindow
    static LogList = LogList
    static TagsEntry = TagsEntry
    static LdapMetadata = LdapMetadata
    static User = User
    static ConfigurationId = ConfigurationId
    static InterBrokerCred = InterBrokerCred

    constructor(properties: BrokerProperties) {
        super('AWS::AmazonMQ::Broker', properties)
    }
}
