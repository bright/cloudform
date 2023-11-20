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

export class Alias {
    Status?: Value<string>
    Value!: Value<string>

    constructor(properties: Alias) {
        Object.assign(this, properties)
    }
}

export class AwsLambda {
    FunctionArn!: Value<string>
    FunctionPayload?: Value<string>

    constructor(properties: AwsLambda) {
        Object.assign(this, properties)
    }
}

export class ContentTransformation {
    AwsLambda!: AwsLambda

    constructor(properties: ContentTransformation) {
        Object.assign(this, properties)
    }
}

export class ObjectLambdaConfiguration {
    SupportingAccessPoint!: Value<string>
    TransformationConfigurations!: List<TransformationConfiguration>
    AllowedFeatures?: List<Value<string>>
    CloudWatchMetricsEnabled?: Value<boolean>

    constructor(properties: ObjectLambdaConfiguration) {
        Object.assign(this, properties)
    }
}

export class PublicAccessBlockConfiguration {
    RestrictPublicBuckets?: Value<boolean>
    BlockPublicPolicy?: Value<boolean>
    BlockPublicAcls?: Value<boolean>
    IgnorePublicAcls?: Value<boolean>

    constructor(properties: PublicAccessBlockConfiguration) {
        Object.assign(this, properties)
    }
}

export class TransformationConfiguration {
    Actions!: List<Value<string>>
    ContentTransformation!: ContentTransformation

    constructor(properties: TransformationConfiguration) {
        Object.assign(this, properties)
    }
}

export interface AccessPointProperties {
    ObjectLambdaConfiguration: ObjectLambdaConfiguration
    Name?: Value<string>
}

export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static Alias = Alias
    static AwsLambda = AwsLambda
    static ContentTransformation = ContentTransformation
    static ObjectLambdaConfiguration = ObjectLambdaConfiguration
    static PublicAccessBlockConfiguration = PublicAccessBlockConfiguration
    static TransformationConfiguration = TransformationConfiguration

    constructor(properties: AccessPointProperties) {
        super('AWS::S3ObjectLambda::AccessPoint', properties)
    }
}
