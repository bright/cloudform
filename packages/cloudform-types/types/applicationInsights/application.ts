/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Alarm {
    AlarmName!: Value<string>
    Severity?: Value<string>

    constructor(properties: Alarm) {
        Object.assign(this, properties)
    }
}

export class AlarmMetric {
    AlarmMetricName!: Value<string>

    constructor(properties: AlarmMetric) {
        Object.assign(this, properties)
    }
}

export class ComponentConfiguration {
    SubComponentTypeConfigurations?: List<SubComponentTypeConfiguration>
    ConfigurationDetails?: ConfigurationDetails

    constructor(properties: ComponentConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComponentMonitoringSetting {
    CustomComponentConfiguration?: ComponentConfiguration
    Tier!: Value<string>
    ComponentConfigurationMode!: Value<string>
    DefaultOverwriteComponentConfiguration?: ComponentConfiguration
    ComponentName?: Value<string>
    ComponentARN?: Value<string>

    constructor(properties: ComponentMonitoringSetting) {
        Object.assign(this, properties)
    }
}

export class ConfigurationDetails {
    WindowsEvents?: List<WindowsEvent>
    AlarmMetrics?: List<AlarmMetric>
    Alarms?: List<Alarm>
    HAClusterPrometheusExporter?: HAClusterPrometheusExporter
    HANAPrometheusExporter?: HANAPrometheusExporter
    Logs?: List<Log>
    JMXPrometheusExporter?: JMXPrometheusExporter

    constructor(properties: ConfigurationDetails) {
        Object.assign(this, properties)
    }
}

export class CustomComponent {
    ResourceList!: List<Value<string>>
    ComponentName!: Value<string>

    constructor(properties: CustomComponent) {
        Object.assign(this, properties)
    }
}

export class HAClusterPrometheusExporter {
    PrometheusPort?: Value<string>

    constructor(properties: HAClusterPrometheusExporter) {
        Object.assign(this, properties)
    }
}

export class HANAPrometheusExporter {
    HANAPort!: Value<string>
    PrometheusPort?: Value<string>
    HANASecretName!: Value<string>
    HANASID!: Value<string>
    AgreeToInstallHANADBClient!: Value<boolean>

    constructor(properties: HANAPrometheusExporter) {
        Object.assign(this, properties)
    }
}

export class JMXPrometheusExporter {
    PrometheusPort?: Value<string>
    JMXURL?: Value<string>
    HostPort?: Value<string>

    constructor(properties: JMXPrometheusExporter) {
        Object.assign(this, properties)
    }
}

export class Log {
    LogType!: Value<string>
    Encoding?: Value<string>
    LogGroupName?: Value<string>
    LogPath?: Value<string>
    PatternSet?: Value<string>

    constructor(properties: Log) {
        Object.assign(this, properties)
    }
}

export class LogPattern {
    Pattern!: Value<string>
    Rank!: Value<number>
    PatternName!: Value<string>

    constructor(properties: LogPattern) {
        Object.assign(this, properties)
    }
}

export class LogPatternSet {
    PatternSetName!: Value<string>
    LogPatterns!: List<LogPattern>

    constructor(properties: LogPatternSet) {
        Object.assign(this, properties)
    }
}

export class SubComponentConfigurationDetails {
    WindowsEvents?: List<WindowsEvent>
    AlarmMetrics?: List<AlarmMetric>
    Logs?: List<Log>

    constructor(properties: SubComponentConfigurationDetails) {
        Object.assign(this, properties)
    }
}

export class SubComponentTypeConfiguration {
    SubComponentType!: Value<string>
    SubComponentConfigurationDetails!: SubComponentConfigurationDetails

    constructor(properties: SubComponentTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class WindowsEvent {
    EventLevels!: List<Value<string>>
    LogGroupName!: Value<string>
    EventName!: Value<string>
    PatternSet?: Value<string>

    constructor(properties: WindowsEvent) {
        Object.assign(this, properties)
    }
}

export interface ApplicationProperties {
    AutoConfigurationEnabled?: Value<boolean>
    OpsItemSNSTopicArn?: Value<string>
    OpsCenterEnabled?: Value<boolean>
    CustomComponents?: List<CustomComponent>
    LogPatternSets?: List<LogPatternSet>
    GroupingType?: Value<string>
    ComponentMonitoringSettings?: List<ComponentMonitoringSetting>
    CWEMonitorEnabled?: Value<boolean>
    Tags?: List<ResourceTag>
    ResourceGroupName: Value<string>
}

export default class Application extends ResourceBase<ApplicationProperties> {
    static Alarm = Alarm
    static AlarmMetric = AlarmMetric
    static ComponentConfiguration = ComponentConfiguration
    static ComponentMonitoringSetting = ComponentMonitoringSetting
    static ConfigurationDetails = ConfigurationDetails
    static CustomComponent = CustomComponent
    static HAClusterPrometheusExporter = HAClusterPrometheusExporter
    static HANAPrometheusExporter = HANAPrometheusExporter
    static JMXPrometheusExporter = JMXPrometheusExporter
    static Log = Log
    static LogPattern = LogPattern
    static LogPatternSet = LogPatternSet
    static SubComponentConfigurationDetails = SubComponentConfigurationDetails
    static SubComponentTypeConfiguration = SubComponentTypeConfiguration
    static WindowsEvent = WindowsEvent

    constructor(properties: ApplicationProperties) {
        super('AWS::ApplicationInsights::Application', properties)
    }
}
