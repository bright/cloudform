/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StackInstances {


    constructor(properties: StackInstances) {
        Object.assign(this, properties)
    }
}

export class AutoDeployment {
    Enabled?: Value<boolean>
    RetainStacksOnAccountRemoval?: Value<boolean>

    constructor(properties: AutoDeployment) {
        Object.assign(this, properties)
    }
}

export class DeploymentTargets {


    constructor(properties: DeploymentTargets) {
        Object.assign(this, properties)
    }
}

export class OperationPreferences {
    FailureToleranceCount?: Value<number>
    FailureTolerancePercentage?: Value<number>
    MaxConcurrentCount?: Value<number>
    MaxConcurrentPercentage?: Value<number>
    RegionConcurrencyType?: Value<string>

    constructor(properties: OperationPreferences) {
        Object.assign(this, properties)
    }
}

export class Parameter {
    ParameterKey!: Value<string>
    ParameterValue!: Value<string>

    constructor(properties: Parameter) {
        Object.assign(this, properties)
    }
}

export interface StackSetProperties {
    StackSetName: Value<string>
    AdministrationRoleARN?: Value<string>
    Description?: Value<string>
    ExecutionRoleName?: Value<string>
    PermissionModel: Value<string>
    TemplateBody?: Value<string>
    TemplateURL?: Value<string>
    CallAs?: Value<string>
}

export default class StackSet extends ResourceBase<StackSetProperties> {
    static StackInstances = StackInstances
    static AutoDeployment = AutoDeployment
    static DeploymentTargets = DeploymentTargets
    static OperationPreferences = OperationPreferences
    static Parameter = Parameter

    constructor(properties: StackSetProperties) {
        super('AWS::CloudFormation::StackSet', properties)
    }
}
