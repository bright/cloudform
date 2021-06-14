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

export class SheetControlsOption {
    VisibilityState?: Value<string>

    constructor(properties: SheetControlsOption) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class DashboardSourceEntity {


    constructor(properties: DashboardSourceEntity) {
        Object.assign(this, properties)
    }
}

export class Parameters {


    constructor(properties: Parameters) {
        Object.assign(this, properties)
    }
}

export class DashboardSourceTemplate {
    Arn!: Value<string>

    constructor(properties: DashboardSourceTemplate) {
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

export class StringParameter {
    Name!: Value<string>

    constructor(properties: StringParameter) {
        Object.assign(this, properties)
    }
}

export class IntegerParameter {
    Name!: Value<string>

    constructor(properties: IntegerParameter) {
        Object.assign(this, properties)
    }
}

export class ExportToCSVOption {
    AvailabilityStatus?: Value<string>

    constructor(properties: ExportToCSVOption) {
        Object.assign(this, properties)
    }
}

export class DashboardPublishOptions {


    constructor(properties: DashboardPublishOptions) {
        Object.assign(this, properties)
    }
}

export class DecimalParameter {
    Name!: Value<string>

    constructor(properties: DecimalParameter) {
        Object.assign(this, properties)
    }
}

export class DateTimeParameter {
    Name!: Value<string>

    constructor(properties: DateTimeParameter) {
        Object.assign(this, properties)
    }
}

export class AdHocFilteringOption {
    AvailabilityStatus?: Value<string>

    constructor(properties: AdHocFilteringOption) {
        Object.assign(this, properties)
    }
}

export interface DashboardProperties {
    AwsAccountId: Value<string>
    DashboardId: Value<string>
    Name?: Value<string>
    ThemeArn?: Value<string>
    VersionDescription?: Value<string>
}

export default class Dashboard extends ResourceBase<DashboardProperties> {
    static SheetControlsOption = SheetControlsOption
    static ResourcePermission = ResourcePermission
    static DashboardSourceEntity = DashboardSourceEntity
    static Parameters = Parameters
    static DashboardSourceTemplate = DashboardSourceTemplate
    static DataSetReference = DataSetReference
    static StringParameter = StringParameter
    static IntegerParameter = IntegerParameter
    static ExportToCSVOption = ExportToCSVOption
    static DashboardPublishOptions = DashboardPublishOptions
    static DecimalParameter = DecimalParameter
    static DateTimeParameter = DateTimeParameter
    static AdHocFilteringOption = AdHocFilteringOption

    constructor(properties: DashboardProperties) {
        super('AWS::QuickSight::Dashboard', properties)
    }
}
