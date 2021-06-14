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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Condition {
    CrawlerName?: Value<string>
    State?: Value<string>
    CrawlState?: Value<string>
    LogicalOperator?: Value<string>
    JobName?: Value<string>

    constructor(properties: Condition) {
        Object.assign(this, properties)
    }
}

export class Predicate {
    Logical?: Value<string>

    constructor(properties: Predicate) {
        Object.assign(this, properties)
    }
}

export class Action {
    CrawlerName?: Value<string>
    Timeout?: Value<number>
    JobName?: Value<string>
    Arguments?: {[key: string]: any}
    SecurityConfiguration?: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class NotificationProperty {
    NotifyDelayAfter?: Value<number>

    constructor(properties: NotificationProperty) {
        Object.assign(this, properties)
    }
}

export interface TriggerProperties {
    Type: Value<string>
    StartOnCreation?: Value<boolean>
    Description?: Value<string>
    WorkflowName?: Value<string>
    Schedule?: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class Trigger extends ResourceBase<TriggerProperties> {
    static Condition = Condition
    static Predicate = Predicate
    static Action = Action
    static NotificationProperty = NotificationProperty

    constructor(properties: TriggerProperties) {
        super('AWS::Glue::Trigger', properties)
    }
}
