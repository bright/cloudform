import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AccessLogSettings {
    Format?: Value<string>;
    DestinationArn?: Value<string>;
    constructor(properties: AccessLogSettings);
}
export declare class RouteSettings {
    LoggingLevel?: Value<string>;
    DataTraceEnabled?: Value<boolean>;
    ThrottlingBurstLimit?: Value<number>;
    DetailedMetricsEnabled?: Value<boolean>;
    ThrottlingRateLimit?: Value<number>;
    constructor(properties: RouteSettings);
}
export interface StageProperties {
    ClientCertificateId?: Value<string>;
    DeploymentId: Value<string>;
    Description?: Value<string>;
    AccessLogSettings?: AccessLogSettings;
    RouteSettings?: {
        [key: string]: any;
    };
    StageName: Value<string>;
    StageVariables?: {
        [key: string]: any;
    };
    ApiId: Value<string>;
    DefaultRouteSettings?: RouteSettings;
    Tags?: {
        [key: string]: any;
    };
}
export default class Stage extends ResourceBase<StageProperties> {
    static AccessLogSettings: typeof AccessLogSettings;
    static RouteSettings: typeof RouteSettings;
    constructor(properties: StageProperties);
}
