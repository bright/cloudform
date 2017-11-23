/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ApplicationResourceLifecycleConfigProperties {
    ServiceRole?: Value<string>
    VersionLifecycleConfig?: ApplicationVersionLifecycleConfig
}

export class ApplicationResourceLifecycleConfig extends ResourceBase {
    constructor(properties: ApplicationResourceLifecycleConfigProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::ApplicationResourceLifecycleConfig', properties, dependsOn)
    }
}

export interface ApplicationVersionLifecycleConfigProperties {
    MaxAgeRule?: MaxAgeRule
    MaxCountRule?: MaxCountRule
}

export class ApplicationVersionLifecycleConfig extends ResourceBase {
    constructor(properties: ApplicationVersionLifecycleConfigProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::ApplicationVersionLifecycleConfig', properties, dependsOn)
    }
}

export interface MaxCountRuleProperties {
    DeleteSourceFromS3?: Value<boolean>
    Enabled?: Value<boolean>
    MaxCount?: Value<number>
}

export class MaxCountRule extends ResourceBase {
    constructor(properties: MaxCountRuleProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::MaxCountRule', properties, dependsOn)
    }
}

export interface MaxAgeRuleProperties {
    DeleteSourceFromS3?: Value<boolean>
    Enabled?: Value<boolean>
    MaxAgeInDays?: Value<number>
}

export class MaxAgeRule extends ResourceBase {
    constructor(properties: MaxAgeRuleProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::MaxAgeRule', properties, dependsOn)
    }
}

export interface ApplicationProperties {
    ApplicationName?: Value<string>
    Description?: Value<string>
    ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig
}

export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::Application', properties, dependsOn)
    }
}
