/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MountOptions {
    Version?: Value<string>

    constructor(properties: MountOptions) {
        Object.assign(this, properties)
    }
}

export class NFS {
    MountOptions!: MountOptions

    constructor(properties: NFS) {
        Object.assign(this, properties)
    }
}

export class Protocol {
    NFS?: NFS

    constructor(properties: Protocol) {
        Object.assign(this, properties)
    }
}

export interface LocationFSxOpenZFSProperties {
    Subdirectory?: Value<string>
    FsxFilesystemArn?: Value<string>
    Protocol: Protocol
    SecurityGroupArns: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class LocationFSxOpenZFS extends ResourceBase<LocationFSxOpenZFSProperties> {
    static MountOptions = MountOptions
    static NFS = NFS
    static Protocol = Protocol

    constructor(properties: LocationFSxOpenZFSProperties) {
        super('AWS::DataSync::LocationFSxOpenZFS', properties)
    }
}
