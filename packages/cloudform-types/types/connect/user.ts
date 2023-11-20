/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class UserIdentityInfo {
    Email?: Value<string>
    FirstName?: Value<string>
    SecondaryEmail?: Value<string>
    LastName?: Value<string>
    Mobile?: Value<string>

    constructor(properties: UserIdentityInfo) {
        Object.assign(this, properties)
    }
}

export class UserPhoneConfig {
    AutoAccept?: Value<boolean>
    PhoneType!: Value<string>
    DeskPhoneNumber?: Value<string>
    AfterContactWorkTimeLimit?: Value<number>

    constructor(properties: UserPhoneConfig) {
        Object.assign(this, properties)
    }
}

export interface UserProperties {
    RoutingProfileArn: Value<string>
    Username: Value<string>
    PhoneConfig: UserPhoneConfig
    InstanceArn: Value<string>
    DirectoryUserId?: Value<string>
    IdentityInfo?: UserIdentityInfo
    HierarchyGroupArn?: Value<string>
    SecurityProfileArns: List<Value<string>>
    Tags?: List<ResourceTag>
    Password?: Value<string>
}

export default class User extends ResourceBase<UserProperties> {
    static UserIdentityInfo = UserIdentityInfo
    static UserPhoneConfig = UserPhoneConfig

    constructor(properties: UserProperties) {
        super('AWS::Connect::User', properties)
    }
}
