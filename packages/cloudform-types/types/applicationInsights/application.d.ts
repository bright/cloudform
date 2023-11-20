import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Alarm {
    AlarmName: Value<string>;
    Severity?: Value<string>;
    constructor(properties: Alarm);
}
export declare class AlarmMetric {
    AlarmMetricName: Value<string>;
    constructor(properties: AlarmMetric);
}
export declare class ComponentConfiguration {
    SubComponentTypeConfigurations?: List<SubComponentTypeConfiguration>;
    ConfigurationDetails?: ConfigurationDetails;
    constructor(properties: ComponentConfiguration);
}
export declare class ComponentMonitoringSetting {
    CustomComponentConfiguration?: ComponentConfiguration;
    Tier: Value<string>;
    ComponentConfigurationMode: Value<string>;
    DefaultOverwriteComponentConfiguration?: ComponentConfiguration;
    ComponentName?: Value<string>;
    ComponentARN?: Value<string>;
    constructor(properties: ComponentMonitoringSetting);
}
export declare class ConfigurationDetails {
    WindowsEvents?: List<WindowsEvent>;
    AlarmMetrics?: List<AlarmMetric>;
    Alarms?: List<Alarm>;
    HAClusterPrometheusExporter?: HAClusterPrometheusExporter;
    HANAPrometheusExporter?: HANAPrometheusExporter;
    Logs?: List<Log>;
    JMXPrometheusExporter?: JMXPrometheusExporter;
    constructor(properties: ConfigurationDetails);
}
export declare class CustomComponent {
    ResourceList: List<Value<string>>;
    ComponentName: Value<string>;
    constructor(properties: CustomComponent);
}
export declare class HAClusterPrometheusExporter {
    PrometheusPort?: Value<string>;
    constructor(properties: HAClusterPrometheusExporter);
}
export declare class HANAPrometheusExporter {
    HANAPort: Value<string>;
    PrometheusPort?: Value<string>;
    HANASecretName: Value<string>;
    HANASID: Value<string>;
    AgreeToInstallHANADBClient: Value<boolean>;
    constructor(properties: HANAPrometheusExporter);
}
export declare class JMXPrometheusExporter {
    PrometheusPort?: Value<string>;
    JMXURL?: Value<string>;
    HostPort?: Value<string>;
    constructor(properties: JMXPrometheusExporter);
}
export declare class Log {
    LogType: Value<string>;
    Encoding?: Value<string>;
    LogGroupName?: Value<string>;
    LogPath?: Value<string>;
    PatternSet?: Value<string>;
    constructor(properties: Log);
}
export declare class LogPattern {
    Pattern: Value<string>;
    Rank: Value<number>;
    PatternName: Value<string>;
    constructor(properties: LogPattern);
}
export declare class LogPatternSet {
    PatternSetName: Value<string>;
    LogPatterns: List<LogPattern>;
    constructor(properties: LogPatternSet);
}
export declare class SubComponentConfigurationDetails {
    WindowsEvents?: List<WindowsEvent>;
    AlarmMetrics?: List<AlarmMetric>;
    Logs?: List<Log>;
    constructor(properties: SubComponentConfigurationDetails);
}
export declare class SubComponentTypeConfiguration {
    SubComponentType: Value<string>;
    SubComponentConfigurationDetails: SubComponentConfigurationDetails;
    constructor(properties: SubComponentTypeConfiguration);
}
export declare class WindowsEvent {
    EventLevels: List<Value<string>>;
    LogGroupName: Value<string>;
    EventName: Value<string>;
    PatternSet?: Value<string>;
    constructor(properties: WindowsEvent);
}
export interface ApplicationProperties {
    AutoConfigurationEnabled?: Value<boolean>;
    OpsItemSNSTopicArn?: Value<string>;
    OpsCenterEnabled?: Value<boolean>;
    CustomComponents?: List<CustomComponent>;
    LogPatternSets?: List<LogPatternSet>;
    GroupingType?: Value<string>;
    ComponentMonitoringSettings?: List<ComponentMonitoringSetting>;
    CWEMonitorEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    ResourceGroupName: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static Alarm: typeof Alarm;
    static AlarmMetric: typeof AlarmMetric;
    static ComponentConfiguration: typeof ComponentConfiguration;
    static ComponentMonitoringSetting: typeof ComponentMonitoringSetting;
    static ConfigurationDetails: typeof ConfigurationDetails;
    static CustomComponent: typeof CustomComponent;
    static HAClusterPrometheusExporter: typeof HAClusterPrometheusExporter;
    static HANAPrometheusExporter: typeof HANAPrometheusExporter;
    static JMXPrometheusExporter: typeof JMXPrometheusExporter;
    static Log: typeof Log;
    static LogPattern: typeof LogPattern;
    static LogPatternSet: typeof LogPatternSet;
    static SubComponentConfigurationDetails: typeof SubComponentConfigurationDetails;
    static SubComponentTypeConfiguration: typeof SubComponentTypeConfiguration;
    static WindowsEvent: typeof WindowsEvent;
    constructor(properties: ApplicationProperties);
}
