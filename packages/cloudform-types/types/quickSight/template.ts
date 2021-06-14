/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourcePermission {
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class TemplateSourceTemplate {
    Arn!: Value<string>

    constructor(properties: TemplateSourceTemplate) {
        Object.assign(this, properties)
    }
}

export class DataSetReference {
    DataSetArn!: Value<string>
    DataSetPlaceholder!: Value<string>

    constructor(properties: DataSetReference) {
        Object.assign(this, properties)
    }
}

export class TemplateSourceEntity {


    constructor(properties: TemplateSourceEntity) {
        Object.assign(this, properties)
    }
}

export class TemplateSourceAnalysis {
    Arn!: Value<string>

    constructor(properties: TemplateSourceAnalysis) {
        Object.assign(this, properties)
    }
}

export interface TemplateProperties {
    AwsAccountId: Value<string>
    Name?: Value<string>
    TemplateId: Value<string>
    VersionDescription?: Value<string>
}

export default class Template extends ResourceBase<TemplateProperties> {
    static ResourcePermission = ResourcePermission
    static TemplateSourceTemplate = TemplateSourceTemplate
    static DataSetReference = DataSetReference
    static TemplateSourceEntity = TemplateSourceEntity
    static TemplateSourceAnalysis = TemplateSourceAnalysis

    constructor(properties: TemplateProperties) {
        super('AWS::QuickSight::Template', properties)
    }
}
