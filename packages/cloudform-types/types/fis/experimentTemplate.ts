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
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ExperimentTemplateStopCondition {
    Source!: Value<string>
    Value?: Value<string>

    constructor(properties: ExperimentTemplateStopCondition) {
        Object.assign(this, properties)
    }
}

export class ExperimentTemplateTarget {
    ResourceType!: Value<string>
    ResourceArns?: List<Value<string>>
    ResourceTags?: {[key: string]: Value<string>}
    Filters?: List<ExperimentTemplateTargetFilter>
    SelectionMode!: Value<string>

    constructor(properties: ExperimentTemplateTarget) {
        Object.assign(this, properties)
    }
}

export class ExperimentTemplateAction {
    ActionId!: Value<string>
    Description?: Value<string>
    Parameters?: {[key: string]: Value<string>}
    Targets?: {[key: string]: Value<string>}
    StartAfter?: List<Value<string>>

    constructor(properties: ExperimentTemplateAction) {
        Object.assign(this, properties)
    }
}

export class ExperimentTemplateTargetFilter {
    Path!: Value<string>
    Values!: List<Value<string>>

    constructor(properties: ExperimentTemplateTargetFilter) {
        Object.assign(this, properties)
    }
}

export interface ExperimentTemplateProperties {
    Description: Value<string>
    Targets: {[key: string]: ExperimentTemplateTarget}
    Actions?: {[key: string]: ExperimentTemplateAction}
    StopConditions: List<ExperimentTemplateStopCondition>
    RoleArn: Value<string>
    Tags: {[key: string]: Value<string>}
}

export default class ExperimentTemplate extends ResourceBase<ExperimentTemplateProperties> {
    static ExperimentTemplateStopCondition = ExperimentTemplateStopCondition
    static ExperimentTemplateTarget = ExperimentTemplateTarget
    static ExperimentTemplateAction = ExperimentTemplateAction
    static ExperimentTemplateTargetFilter = ExperimentTemplateTargetFilter

    constructor(properties: ExperimentTemplateProperties) {
        super('AWS::FIS::ExperimentTemplate', properties)
    }
}
