/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ScopeProperties {
    ComplianceResourceId?: Value<string>
    ComplianceResourceTypes?: Value<string>[]
    TagKey?: Value<string>
    TagValue?: Value<string>
}

export class Scope extends ResourceBase {
    constructor(properties: ScopeProperties, dependsOn?: Value<string>) {
        super('AWS::Config::Scope', properties, dependsOn)
    }
}

export interface SourceProperties {
    Owner: Value<string>
    SourceDetails?: SourceDetail[]
    SourceIdentifier: Value<string>
}

export class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string>) {
        super('AWS::Config::Source', properties, dependsOn)
    }
}

export interface SourceDetailProperties {
    EventSource: Value<string>
    MaximumExecutionFrequency?: Value<string>
    MessageType: Value<string>
}

export class SourceDetail extends ResourceBase {
    constructor(properties: SourceDetailProperties, dependsOn?: Value<string>) {
        super('AWS::Config::SourceDetail', properties, dependsOn)
    }
}

export interface ConfigRuleProperties {
    ConfigRuleName?: Value<string>
    Description?: Value<string>
    InputParameters?: any
    MaximumExecutionFrequency?: Value<string>
    Scope?: Scope
    Source: Source
}

export default class ConfigRule extends ResourceBase {
    constructor(properties: ConfigRuleProperties, dependsOn?: Value<string>) {
        super('AWS::Config::ConfigRule', properties, dependsOn)
    }
}
