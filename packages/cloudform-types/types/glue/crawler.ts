/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Targets {
    S3Targets?: List<S3Target>
    JdbcTargets?: List<JdbcTarget>

    constructor(properties: Targets) {
        Object.assign(this, properties)
    }
}

export class JdbcTarget {
    ConnectionName?: Value<string>
    Path?: Value<string>
    Exclusions?: List<Value<string>>

    constructor(properties: JdbcTarget) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ScheduleExpression?: Value<string>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export class S3Target {
    Path?: Value<string>
    Exclusions?: List<Value<string>>

    constructor(properties: S3Target) {
        Object.assign(this, properties)
    }
}

export class SchemaChangePolicy {
    UpdateBehavior?: Value<string>
    DeleteBehavior?: Value<string>

    constructor(properties: SchemaChangePolicy) {
        Object.assign(this, properties)
    }
}

export interface CrawlerProperties {
    Role: Value<string>
    Classifiers?: List<Value<string>>
    Description?: Value<string>
    SchemaChangePolicy?: SchemaChangePolicy
    Configuration?: Value<string>
    Schedule?: Schedule
    DatabaseName: Value<string>
    Targets: Targets
    TablePrefix?: Value<string>
    Name?: Value<string>
}

export default class Crawler extends ResourceBase {
    static Targets = Targets
    static JdbcTarget = JdbcTarget
    static Schedule = Schedule
    static S3Target = S3Target
    static SchemaChangePolicy = SchemaChangePolicy

    constructor(properties?: CrawlerProperties) {
        super('AWS::Glue::Crawler', properties)
    }
}
