import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SubComponentConfigurationDetails {
    AlarmMetrics?: List<AlarmMetric>;
    Logs?: List<Log>;
    WindowsEvents?: List<WindowsEvent>;
    constructor(properties: SubComponentConfigurationDetails);
}
export declare class ComponentMonitoringSetting {
    ComponentName?: Value<string>;
    ComponentARN?: Value<string>;
    Tier: Value<string>;
    ComponentConfigurationMode: Value<string>;
    DefaultOverwriteComponentConfiguration?: ComponentConfiguration;
    CustomComponentConfiguration?: ComponentConfiguration;
    constructor(properties: ComponentMonitoringSetting);
}
export declare class LogPattern {
    PatternName: Value<string>;
    Pattern: Value<string>;
    Rank: Value<number>;
    constructor(properties: LogPattern);
}
export declare class LogPatternSet {
    PatternSetName: Value<string>;
    LogPatterns: List<LogPattern>;
    constructor(properties: LogPatternSet);
}
export declare class Alarm {
    AlarmName: Value<string>;
    Severity?: Value<string>;
    constructor(properties: Alarm);
}
export declare class WindowsEvent {
    LogGroupName: Value<string>;
    EventName: Value<string>;
    EventLevels: List<Value<string>>;
    PatternSet?: Value<string>;
    constructor(properties: WindowsEvent);
}
export declare class ComponentConfiguration {
    ConfigurationDetails?: ConfigurationDetails;
    SubComponentTypeConfigurations?: List<SubComponentTypeConfiguration>;
    constructor(properties: ComponentConfiguration);
}
export declare class CustomComponent {
    ComponentName: Value<string>;
    ResourceList: List<Value<string>>;
    constructor(properties: CustomComponent);
}
export declare class JMXPrometheusExporter {
    JMXURL?: Value<string>;
    HostPort?: Value<string>;
    PrometheusPort?: Value<string>;
    constructor(properties: JMXPrometheusExporter);
}
export declare class AlarmMetric {
    AlarmMetricName: Value<string>;
    constructor(properties: AlarmMetric);
}
export declare class ConfigurationDetails {
    AlarmMetrics?: List<AlarmMetric>;
    Logs?: List<Log>;
    WindowsEvents?: List<WindowsEvent>;
    Alarms?: List<Alarm>;
    JMXPrometheusExporter?: JMXPrometheusExporter;
    constructor(properties: ConfigurationDetails);
}
export declare class Log {
    LogGroupName?: Value<string>;
    LogPath?: Value<string>;
    LogType: Value<string>;
    Encoding?: Value<string>;
    PatternSet?: Value<string>;
    constructor(properties: Log);
}
export declare class SubComponentTypeConfiguration {
    SubComponentType: Value<string>;
    SubComponentConfigurationDetails: SubComponentConfigurationDetails;
    constructor(properties: SubComponentTypeConfiguration);
}
export interface ApplicationProperties {
    ResourceGroupName: Value<string>;
    CWEMonitorEnabled?: Value<boolean>;
    OpsCenterEnabled?: Value<boolean>;
    OpsItemSNSTopicArn?: Value<string>;
    Tags?: List<ResourceTag>;
    CustomComponents?: List<CustomComponent>;
    LogPatternSets?: List<LogPatternSet>;
    AutoConfigurationEnabled?: Value<boolean>;
    ComponentMonitoringSettings?: List<ComponentMonitoringSetting>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static SubComponentConfigurationDetails: typeof SubComponentConfigurationDetails;
    static ComponentMonitoringSetting: typeof ComponentMonitoringSetting;
    static LogPattern: typeof LogPattern;
    static LogPatternSet: typeof LogPatternSet;
    static Alarm: typeof Alarm;
    static WindowsEvent: typeof WindowsEvent;
    static ComponentConfiguration: typeof ComponentConfiguration;
    static CustomComponent: typeof CustomComponent;
    static JMXPrometheusExporter: typeof JMXPrometheusExporter;
    static AlarmMetric: typeof AlarmMetric;
    static ConfigurationDetails: typeof ConfigurationDetails;
    static Log: typeof Log;
    static SubComponentTypeConfiguration: typeof SubComponentTypeConfiguration;
    constructor(properties: ApplicationProperties);
}
