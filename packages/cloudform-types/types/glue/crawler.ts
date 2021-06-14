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

export class CatalogTarget {
    DatabaseName?: Value<string>

    constructor(properties: CatalogTarget) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ScheduleExpression?: Value<string>

    constructor(properties: Schedule) {
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

export class Targets {


    constructor(properties: Targets) {
        Object.assign(this, properties)
    }
}

export class JdbcTarget {
    ConnectionName?: Value<string>
    Path?: Value<string>

    constructor(properties: JdbcTarget) {
        Object.assign(this, properties)
    }
}

export class DynamoDBTarget {
    Path?: Value<string>

    constructor(properties: DynamoDBTarget) {
        Object.assign(this, properties)
    }
}

export class S3Target {
    ConnectionName?: Value<string>
    Path?: Value<string>

    constructor(properties: S3Target) {
        Object.assign(this, properties)
    }
}

export interface CrawlerProperties {
    Role: Value<string>
    Description?: Value<string>
    Configuration?: Value<string>
    DatabaseName?: Value<string>
    CrawlerSecurityConfiguration?: Value<string>
    TablePrefix?: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class Crawler extends ResourceBase<CrawlerProperties> {
    static CatalogTarget = CatalogTarget
    static Schedule = Schedule
    static SchemaChangePolicy = SchemaChangePolicy
    static Targets = Targets
    static JdbcTarget = JdbcTarget
    static DynamoDBTarget = DynamoDBTarget
    static S3Target = S3Target

    constructor(properties: CrawlerProperties) {
        super('AWS::Glue::Crawler', properties)
    }
}
