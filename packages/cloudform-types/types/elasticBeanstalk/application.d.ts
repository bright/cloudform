import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ApplicationResourceLifecycleConfig {
    ServiceRole?: Value<string>;
    VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
    constructor(properties: ApplicationResourceLifecycleConfig);
}
export declare class ApplicationVersionLifecycleConfig {
    MaxAgeRule?: MaxAgeRule;
    MaxCountRule?: MaxCountRule;
    constructor(properties: ApplicationVersionLifecycleConfig);
}
export declare class MaxAgeRule {
    DeleteSourceFromS3?: Value<boolean>;
    Enabled?: Value<boolean>;
    MaxAgeInDays?: Value<number>;
    constructor(properties: MaxAgeRule);
}
export declare class MaxCountRule {
    DeleteSourceFromS3?: Value<boolean>;
    Enabled?: Value<boolean>;
    MaxCount?: Value<number>;
    constructor(properties: MaxCountRule);
}
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    Description?: Value<string>;
    ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static ApplicationResourceLifecycleConfig: typeof ApplicationResourceLifecycleConfig;
    static ApplicationVersionLifecycleConfig: typeof ApplicationVersionLifecycleConfig;
    static MaxAgeRule: typeof MaxAgeRule;
    static MaxCountRule: typeof MaxCountRule;
    constructor(properties?: ApplicationProperties);
}
