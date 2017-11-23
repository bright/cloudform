import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ScopeProperties {
    ComplianceResourceId?: Value<string>;
    ComplianceResourceTypes?: Value<string>[];
    TagKey?: Value<string>;
    TagValue?: Value<string>;
}
export declare class Scope extends ResourceBase {
    constructor(properties: ScopeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SourceProperties {
    Owner: Value<string>;
    SourceDetails?: SourceDetail[];
    SourceIdentifier: Value<string>;
}
export declare class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SourceDetailProperties {
    EventSource: Value<string>;
    MaximumExecutionFrequency?: Value<string>;
    MessageType: Value<string>;
}
export declare class SourceDetail extends ResourceBase {
    constructor(properties: SourceDetailProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ConfigRuleProperties {
    ConfigRuleName?: Value<string>;
    Description?: Value<string>;
    InputParameters?: any;
    MaximumExecutionFrequency?: Value<string>;
    Scope?: Scope;
    Source: Source;
}
export default class ConfigRule extends ResourceBase {
    constructor(properties: ConfigRuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
