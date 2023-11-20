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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AugmentedManifestsListItem {
    S3Uri!: Value<string>
    AttributeNames!: List<Value<string>>
    Split?: Value<string>

    constructor(properties: AugmentedManifestsListItem) {
        Object.assign(this, properties)
    }
}

export class DocumentClassifierDocuments {
    S3Uri!: Value<string>
    TestS3Uri?: Value<string>

    constructor(properties: DocumentClassifierDocuments) {
        Object.assign(this, properties)
    }
}

export class DocumentClassifierInputDataConfig {
    DocumentReaderConfig?: DocumentReaderConfig
    S3Uri?: Value<string>
    Documents?: DocumentClassifierDocuments
    DataFormat?: Value<string>
    DocumentType?: Value<string>
    AugmentedManifests?: List<AugmentedManifestsListItem>
    LabelDelimiter?: Value<string>
    TestS3Uri?: Value<string>

    constructor(properties: DocumentClassifierInputDataConfig) {
        Object.assign(this, properties)
    }
}

export class DocumentClassifierOutputDataConfig {
    KmsKeyId?: Value<string>
    S3Uri?: Value<string>

    constructor(properties: DocumentClassifierOutputDataConfig) {
        Object.assign(this, properties)
    }
}

export class DocumentReaderConfig {
    FeatureTypes?: List<Value<string>>
    DocumentReadMode?: Value<string>
    DocumentReadAction!: Value<string>

    constructor(properties: DocumentReaderConfig) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    Subnets!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface DocumentClassifierProperties {
    LanguageCode: Value<string>
    DataAccessRoleArn: Value<string>
    OutputDataConfig?: DocumentClassifierOutputDataConfig
    VpcConfig?: VpcConfig
    DocumentClassifierName: Value<string>
    Mode?: Value<string>
    VolumeKmsKeyId?: Value<string>
    ModelKmsKeyId?: Value<string>
    VersionName?: Value<string>
    ModelPolicy?: Value<string>
    InputDataConfig: DocumentClassifierInputDataConfig
    Tags?: List<ResourceTag>
}

export default class DocumentClassifier extends ResourceBase<DocumentClassifierProperties> {
    static AugmentedManifestsListItem = AugmentedManifestsListItem
    static DocumentClassifierDocuments = DocumentClassifierDocuments
    static DocumentClassifierInputDataConfig = DocumentClassifierInputDataConfig
    static DocumentClassifierOutputDataConfig = DocumentClassifierOutputDataConfig
    static DocumentReaderConfig = DocumentReaderConfig
    static VpcConfig = VpcConfig

    constructor(properties: DocumentClassifierProperties) {
        super('AWS::Comprehend::DocumentClassifier', properties)
    }
}
