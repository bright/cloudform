/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface ApiStageProperties {
    ApiId?: Value<string>
    Stage?: Value<string>
}

export class ApiStage extends ResourceBase {
    constructor(properties: ApiStageProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::ApiStage', properties, dependsOn)
    }
}

export interface ThrottleSettingsProperties {
    BurstLimit?: Value<number>
    RateLimit?: Value<number>
}

export class ThrottleSettings extends ResourceBase {
    constructor(properties: ThrottleSettingsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::ThrottleSettings', properties, dependsOn)
    }
}

export interface QuotaSettingsProperties {
    Limit?: Value<number>
    Offset?: Value<number>
    Period?: Value<string>
}

export class QuotaSettings extends ResourceBase {
    constructor(properties: QuotaSettingsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::QuotaSettings', properties, dependsOn)
    }
}

export interface UsagePlanProperties {
    ApiStages?: List<ApiStage>
    Description?: Value<string>
    Quota?: QuotaSettings
    Throttle?: ThrottleSettings
    UsagePlanName?: Value<string>
}

export default class UsagePlan extends ResourceBase {
    constructor(properties: UsagePlanProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::UsagePlan', properties, dependsOn)
    }
}
