/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VpcConfig {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export class AccessEndpoint {
    EndpointType!: Value<string>
    VpceId!: Value<string>

    constructor(properties: AccessEndpoint) {
        Object.assign(this, properties)
    }
}

export class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>
    DirectoryName?: Value<string>

    constructor(properties: DomainJoinInfo) {
        Object.assign(this, properties)
    }
}

export interface ImageBuilderProperties {
    ImageName?: Value<string>
    Description?: Value<string>
    VpcConfig?: VpcConfig
    EnableDefaultInternetAccess?: Value<boolean>
    DisplayName?: Value<string>
    DomainJoinInfo?: DomainJoinInfo
    AppstreamAgentVersion?: Value<string>
    InstanceType: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
    ImageArn?: Value<string>
    AccessEndpoints?: List<AccessEndpoint>
}

export default class ImageBuilder extends ResourceBase<ImageBuilderProperties> {
    static VpcConfig = VpcConfig
    static AccessEndpoint = AccessEndpoint
    static DomainJoinInfo = DomainJoinInfo

    constructor(properties: ImageBuilderProperties) {
        super('AWS::AppStream::ImageBuilder', properties)
    }
}
