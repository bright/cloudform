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

export class EcrConfiguration {
    ContainerTags?: List<Value<string>>
    RepositoryName?: Value<string>

    constructor(properties: EcrConfiguration) {
        Object.assign(this, properties)
    }
}

export class ImageScanningConfiguration {
    EcrConfiguration?: EcrConfiguration
    ImageScanningEnabled?: Value<boolean>

    constructor(properties: ImageScanningConfiguration) {
        Object.assign(this, properties)
    }
}

export class ImageTestsConfiguration {
    TimeoutMinutes?: Value<number>
    ImageTestsEnabled?: Value<boolean>

    constructor(properties: ImageTestsConfiguration) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ScheduleExpression?: Value<string>
    PipelineExecutionStartCondition?: Value<string>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export interface ImagePipelineProperties {
    Status?: Value<string>
    ImageScanningConfiguration?: ImageScanningConfiguration
    InfrastructureConfigurationArn: Value<string>
    ImageRecipeArn?: Value<string>
    Description?: Value<string>
    DistributionConfigurationArn?: Value<string>
    ContainerRecipeArn?: Value<string>
    Schedule?: Schedule
    ImageTestsConfiguration?: ImageTestsConfiguration
    EnhancedImageMetadataEnabled?: Value<boolean>
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
}

export default class ImagePipeline extends ResourceBase<ImagePipelineProperties> {
    static EcrConfiguration = EcrConfiguration
    static ImageScanningConfiguration = ImageScanningConfiguration
    static ImageTestsConfiguration = ImageTestsConfiguration
    static Schedule = Schedule

    constructor(properties: ImagePipelineProperties) {
        super('AWS::ImageBuilder::ImagePipeline', properties)
    }
}
