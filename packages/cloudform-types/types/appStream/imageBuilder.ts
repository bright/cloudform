/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class VpcConfig {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
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
    Name?: Value<string>
    ImageArn?: Value<string>
}

export default class ImageBuilder extends ResourceBase {
    static VpcConfig = VpcConfig
    static DomainJoinInfo = DomainJoinInfo

    constructor(properties?: ImageBuilderProperties) {
        super('AWS::AppStream::ImageBuilder', properties)
    }
}
