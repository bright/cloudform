/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessPointTag {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: AccessPointTag) {
        Object.assign(this, properties)
    }
}

export class CreationInfo {
    OwnerGid!: Value<string>
    OwnerUid!: Value<string>
    Permissions!: Value<string>

    constructor(properties: CreationInfo) {
        Object.assign(this, properties)
    }
}

export class PosixUser {
    Uid!: Value<string>
    SecondaryGids?: List<Value<string>>
    Gid!: Value<string>

    constructor(properties: PosixUser) {
        Object.assign(this, properties)
    }
}

export class RootDirectory {
    Path?: Value<string>
    CreationInfo?: CreationInfo

    constructor(properties: RootDirectory) {
        Object.assign(this, properties)
    }
}

export interface AccessPointProperties {
    FileSystemId: Value<string>
    RootDirectory?: RootDirectory
    ClientToken?: Value<string>
    AccessPointTags?: List<AccessPointTag>
    PosixUser?: PosixUser
}

export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static AccessPointTag = AccessPointTag
    static CreationInfo = CreationInfo
    static PosixUser = PosixUser
    static RootDirectory = RootDirectory

    constructor(properties: AccessPointProperties) {
        super('AWS::EFS::AccessPoint', properties)
    }
}
