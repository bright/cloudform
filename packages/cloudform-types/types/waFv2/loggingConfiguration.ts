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

export class ActionCondition {
    Action!: Value<string>

    constructor(properties: ActionCondition) {
        Object.assign(this, properties)
    }
}

export class Condition {
    LabelNameCondition?: LabelNameCondition
    ActionCondition?: ActionCondition

    constructor(properties: Condition) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    JsonBody?: JsonBody
    QueryString?: {[key: string]: any}
    UriPath?: {[key: string]: any}
    Method?: {[key: string]: any}
    SingleHeader?: SingleHeader

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export class Filter {
    Requirement!: Value<string>
    Behavior!: Value<string>
    Conditions!: List<Condition>

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class JsonBody {
    MatchScope!: Value<string>
    InvalidFallbackBehavior?: Value<string>
    MatchPattern!: MatchPattern

    constructor(properties: JsonBody) {
        Object.assign(this, properties)
    }
}

export class LabelNameCondition {
    LabelName!: Value<string>

    constructor(properties: LabelNameCondition) {
        Object.assign(this, properties)
    }
}

export class LoggingFilter {
    Filters!: List<Filter>
    DefaultBehavior!: Value<string>

    constructor(properties: LoggingFilter) {
        Object.assign(this, properties)
    }
}

export class MatchPattern {
    All?: {[key: string]: any}
    IncludedPaths?: List<Value<string>>

    constructor(properties: MatchPattern) {
        Object.assign(this, properties)
    }
}

export class SingleHeader {
    Name!: Value<string>

    constructor(properties: SingleHeader) {
        Object.assign(this, properties)
    }
}

export interface LoggingConfigurationProperties {
    ResourceArn: Value<string>
    LogDestinationConfigs: List<Value<string>>
    RedactedFields?: List<FieldToMatch>
    LoggingFilter?: LoggingFilter
}

export default class LoggingConfiguration extends ResourceBase<LoggingConfigurationProperties> {
    static ActionCondition = ActionCondition
    static Condition = Condition
    static FieldToMatch = FieldToMatch
    static Filter = Filter
    static JsonBody = JsonBody
    static LabelNameCondition = LabelNameCondition
    static LoggingFilter = LoggingFilter
    static MatchPattern = MatchPattern
    static SingleHeader = SingleHeader

    constructor(properties: LoggingConfigurationProperties) {
        super('AWS::WAFv2::LoggingConfiguration', properties)
    }
}
