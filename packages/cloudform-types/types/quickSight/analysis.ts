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

export class DecimalParameter {
    Name!: Value<string>

    constructor(properties: DecimalParameter) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class AnalysisSourceTemplate {
    Arn!: Value<string>

    constructor(properties: AnalysisSourceTemplate) {
        Object.assign(this, properties)
    }
}

export class Sheet {
    SheetId?: Value<string>
    Name?: Value<string>

    constructor(properties: Sheet) {
        Object.assign(this, properties)
    }
}

export class AnalysisSourceEntity {


    constructor(properties: AnalysisSourceEntity) {
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

export class DateTimeParameter {
    Name!: Value<string>

    constructor(properties: DateTimeParameter) {
        Object.assign(this, properties)
    }
}

export class IntegerParameter {
    Name!: Value<string>

    constructor(properties: IntegerParameter) {
        Object.assign(this, properties)
    }
}

export class Parameters {


    constructor(properties: Parameters) {
        Object.assign(this, properties)
    }
}

export class StringParameter {
    Name!: Value<string>

    constructor(properties: StringParameter) {
        Object.assign(this, properties)
    }
}

export class AnalysisError {
    Type?: Value<string>
    Message?: Value<string>

    constructor(properties: AnalysisError) {
        Object.assign(this, properties)
    }
}

export interface AnalysisProperties {
    AnalysisId: Value<string>
    AwsAccountId: Value<string>
    Name?: Value<string>
    ThemeArn?: Value<string>
}

export default class Analysis extends ResourceBase<AnalysisProperties> {
    static DecimalParameter = DecimalParameter
    static ResourcePermission = ResourcePermission
    static AnalysisSourceTemplate = AnalysisSourceTemplate
    static Sheet = Sheet
    static AnalysisSourceEntity = AnalysisSourceEntity
    static DataSetReference = DataSetReference
    static DateTimeParameter = DateTimeParameter
    static IntegerParameter = IntegerParameter
    static Parameters = Parameters
    static StringParameter = StringParameter
    static AnalysisError = AnalysisError

    constructor(properties: AnalysisProperties) {
        super('AWS::QuickSight::Analysis', properties)
    }
}
