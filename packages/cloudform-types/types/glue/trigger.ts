/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    JobName?: Value<string>
    Arguments?: {[key: string]: any}

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class Condition {
    State?: Value<string>
    LogicalOperator?: Value<string>
    JobName?: Value<string>

    constructor(properties: Condition) {
        Object.assign(this, properties)
    }
}

export class Predicate {
    Logical?: Value<string>
    Conditions?: List<Condition>

    constructor(properties: Predicate) {
        Object.assign(this, properties)
    }
}

export interface TriggerProperties {
    Type: Value<string>
    Description?: Value<string>
    Actions: List<Action>
    Schedule?: Value<string>
    Name?: Value<string>
    Predicate?: Predicate
}

export default class Trigger extends ResourceBase {
    static Action = Action
    static Condition = Condition
    static Predicate = Predicate

    constructor(properties?: TriggerProperties) {
        super('AWS::Glue::Trigger', properties)
    }
}
