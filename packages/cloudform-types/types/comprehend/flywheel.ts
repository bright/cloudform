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

export class DataSecurityConfig {
    VpcConfig?: VpcConfig
    VolumeKmsKeyId?: Value<string>
    ModelKmsKeyId?: Value<string>
    DataLakeKmsKeyId?: Value<string>

    constructor(properties: DataSecurityConfig) {
        Object.assign(this, properties)
    }
}

export class DocumentClassificationConfig {
    Mode!: Value<string>
    Labels?: List<Value<string>>

    constructor(properties: DocumentClassificationConfig) {
        Object.assign(this, properties)
    }
}

export class EntityRecognitionConfig {
    EntityTypes?: List<EntityTypesListItem>

    constructor(properties: EntityRecognitionConfig) {
        Object.assign(this, properties)
    }
}

export class EntityTypesListItem {
    Type!: Value<string>

    constructor(properties: EntityTypesListItem) {
        Object.assign(this, properties)
    }
}

export class TaskConfig {
    LanguageCode!: Value<string>
    DocumentClassificationConfig?: DocumentClassificationConfig
    EntityRecognitionConfig?: EntityRecognitionConfig

    constructor(properties: TaskConfig) {
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

export interface FlywheelProperties {
    DataLakeS3Uri: Value<string>
    DataAccessRoleArn: Value<string>
    FlywheelName: Value<string>
    ModelType?: Value<string>
    TaskConfig?: TaskConfig
    ActiveModelArn?: Value<string>
    DataSecurityConfig?: DataSecurityConfig
    Tags?: List<ResourceTag>
}

export default class Flywheel extends ResourceBase<FlywheelProperties> {
    static DataSecurityConfig = DataSecurityConfig
    static DocumentClassificationConfig = DocumentClassificationConfig
    static EntityRecognitionConfig = EntityRecognitionConfig
    static EntityTypesListItem = EntityTypesListItem
    static TaskConfig = TaskConfig
    static VpcConfig = VpcConfig

    constructor(properties: FlywheelProperties) {
        super('AWS::Comprehend::Flywheel', properties)
    }
}
