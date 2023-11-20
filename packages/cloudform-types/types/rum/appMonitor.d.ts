import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AppMonitorConfiguration {
    MetricDestinations?: List<MetricDestination>;
    IncludedPages?: List<Value<string>>;
    ExcludedPages?: List<Value<string>>;
    FavoritePages?: List<Value<string>>;
    SessionSampleRate?: Value<number>;
    AllowCookies?: Value<boolean>;
    Telemetries?: List<Value<string>>;
    IdentityPoolId?: Value<string>;
    GuestRoleArn?: Value<string>;
    EnableXRay?: Value<boolean>;
    constructor(properties: AppMonitorConfiguration);
}
export declare class CustomEvents {
    Status?: Value<string>;
    constructor(properties: CustomEvents);
}
export declare class MetricDefinition {
    EventPattern?: Value<string>;
    ValueKey?: Value<string>;
    UnitLabel?: Value<string>;
    DimensionKeys?: {
        [key: string]: Value<string>;
    };
    Namespace?: Value<string>;
    Name: Value<string>;
    constructor(properties: MetricDefinition);
}
export declare class MetricDestination {
    Destination: Value<string>;
    IamRoleArn?: Value<string>;
    MetricDefinitions?: List<MetricDefinition>;
    DestinationArn?: Value<string>;
    constructor(properties: MetricDestination);
}
export interface AppMonitorProperties {
    CustomEvents?: CustomEvents;
    CwLogEnabled?: Value<boolean>;
    Domain: Value<string>;
    AppMonitorConfiguration?: AppMonitorConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class AppMonitor extends ResourceBase<AppMonitorProperties> {
    static AppMonitorConfiguration: typeof AppMonitorConfiguration;
    static CustomEvents: typeof CustomEvents;
    static MetricDefinition: typeof MetricDefinition;
    static MetricDestination: typeof MetricDestination;
    constructor(properties: AppMonitorProperties);
}
