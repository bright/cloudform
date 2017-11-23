import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApplicationResourceLifecycleConfigProperties {
    ServiceRole?: Value<string>;
    VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}
export declare class ApplicationResourceLifecycleConfig extends ResourceBase {
    constructor(properties: ApplicationResourceLifecycleConfigProperties, dependsOn?: Value<string>);
}
export interface ApplicationVersionLifecycleConfigProperties {
    MaxAgeRule?: MaxAgeRule;
    MaxCountRule?: MaxCountRule;
}
export declare class ApplicationVersionLifecycleConfig extends ResourceBase {
    constructor(properties: ApplicationVersionLifecycleConfigProperties, dependsOn?: Value<string>);
}
export interface MaxCountRuleProperties {
    DeleteSourceFromS3?: Value<boolean>;
    Enabled?: Value<boolean>;
    MaxCount?: Value<number>;
}
export declare class MaxCountRule extends ResourceBase {
    constructor(properties: MaxCountRuleProperties, dependsOn?: Value<string>);
}
export interface MaxAgeRuleProperties {
    DeleteSourceFromS3?: Value<boolean>;
    Enabled?: Value<boolean>;
    MaxAgeInDays?: Value<number>;
}
export declare class MaxAgeRule extends ResourceBase {
    constructor(properties: MaxAgeRuleProperties, dependsOn?: Value<string>);
}
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    Description?: Value<string>;
    ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>);
}
