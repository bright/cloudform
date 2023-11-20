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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CodeStarParameters {
    ArtifactPath!: Value<string>
    Repository!: Value<string>
    Branch!: Value<string>
    ConnectionArn!: Value<string>

    constructor(properties: CodeStarParameters) {
        Object.assign(this, properties)
    }
}

export class ConnectionParameters {
    CodeStar?: CodeStarParameters

    constructor(properties: ConnectionParameters) {
        Object.assign(this, properties)
    }
}

export class ProvisioningArtifactProperties {
    Type?: Value<string>
    Description?: Value<string>
    DisableTemplateValidation?: Value<boolean>
    Info!: {[key: string]: any}
    Name?: Value<string>

    constructor(properties: ProvisioningArtifactProperties) {
        Object.assign(this, properties)
    }
}

export class SourceConnection {
    Type!: Value<string>
    ConnectionParameters!: ConnectionParameters

    constructor(properties: SourceConnection) {
        Object.assign(this, properties)
    }
}

export interface CloudFormationProductProperties {
    Owner: Value<string>
    Description?: Value<string>
    SupportEmail?: Value<string>
    ProductType?: Value<string>
    Name: Value<string>
    ReplaceProvisioningArtifacts?: Value<boolean>
    SupportDescription?: Value<string>
    Distributor?: Value<string>
    AcceptLanguage?: Value<string>
    SupportUrl?: Value<string>
    SourceConnection?: SourceConnection
    Tags?: List<ResourceTag>
    ProvisioningArtifactParameters?: List<ProvisioningArtifactProperties>
}

export default class CloudFormationProduct extends ResourceBase<CloudFormationProductProperties> {
    static CodeStarParameters = CodeStarParameters
    static ConnectionParameters = ConnectionParameters
    static ProvisioningArtifactProperties = ProvisioningArtifactProperties
    static SourceConnection = SourceConnection

    constructor(properties: CloudFormationProductProperties) {
        super('AWS::ServiceCatalog::CloudFormationProduct', properties)
    }
}
