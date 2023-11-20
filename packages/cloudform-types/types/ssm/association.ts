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

export class InstanceAssociationOutputLocation {
    S3Location?: S3OutputLocation

    constructor(properties: InstanceAssociationOutputLocation) {
        Object.assign(this, properties)
    }
}

export class S3OutputLocation {
    OutputS3KeyPrefix?: Value<string>
    OutputS3Region?: Value<string>
    OutputS3BucketName?: Value<string>

    constructor(properties: S3OutputLocation) {
        Object.assign(this, properties)
    }
}

export class Target {
    Values!: List<Value<string>>
    Key!: Value<string>

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export interface AssociationProperties {
    AssociationName?: Value<string>
    CalendarNames?: List<Value<string>>
    ScheduleExpression?: Value<string>
    MaxErrors?: Value<string>
    Parameters?: {[key: string]: any}
    InstanceId?: Value<string>
    WaitForSuccessTimeoutSeconds?: Value<number>
    MaxConcurrency?: Value<string>
    ComplianceSeverity?: Value<string>
    Targets?: List<Target>
    SyncCompliance?: Value<string>
    OutputLocation?: InstanceAssociationOutputLocation
    ScheduleOffset?: Value<number>
    Name: Value<string>
    ApplyOnlyAtCronInterval?: Value<boolean>
    DocumentVersion?: Value<string>
    AutomationTargetParameterName?: Value<string>
}

export default class Association extends ResourceBase<AssociationProperties> {
    static InstanceAssociationOutputLocation = InstanceAssociationOutputLocation
    static S3OutputLocation = S3OutputLocation
    static Target = Target

    constructor(properties: AssociationProperties) {
        super('AWS::SSM::Association', properties)
    }
}
