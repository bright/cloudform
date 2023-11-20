/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MembershipProtectedQueryOutputConfiguration {
    S3!: ProtectedQueryS3OutputConfiguration

    constructor(properties: MembershipProtectedQueryOutputConfiguration) {
        Object.assign(this, properties)
    }
}

export class MembershipProtectedQueryResultConfiguration {
    OutputConfiguration!: MembershipProtectedQueryOutputConfiguration
    RoleArn?: Value<string>

    constructor(properties: MembershipProtectedQueryResultConfiguration) {
        Object.assign(this, properties)
    }
}

export class ProtectedQueryS3OutputConfiguration {
    Bucket!: Value<string>
    ResultFormat!: Value<string>
    KeyPrefix?: Value<string>

    constructor(properties: ProtectedQueryS3OutputConfiguration) {
        Object.assign(this, properties)
    }
}

export interface MembershipProperties {
    CollaborationIdentifier: Value<string>
    DefaultResultConfiguration?: MembershipProtectedQueryResultConfiguration
    QueryLogStatus: Value<string>
    Tags?: List<ResourceTag>
}

export default class Membership extends ResourceBase<MembershipProperties> {
    static MembershipProtectedQueryOutputConfiguration = MembershipProtectedQueryOutputConfiguration
    static MembershipProtectedQueryResultConfiguration = MembershipProtectedQueryResultConfiguration
    static ProtectedQueryS3OutputConfiguration = ProtectedQueryS3OutputConfiguration

    constructor(properties: MembershipProperties) {
        super('AWS::CleanRooms::Membership', properties)
    }
}
