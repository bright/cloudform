/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SubComponentConfigurationDetails {
    AlarmMetrics?: List<AlarmMetric>
    Logs?: List<Log>
    WindowsEvents?: List<WindowsEvent>

    constructor(properties: SubComponentConfigurationDetails) {
        Object.assign(this, properties)
    }
}

export class ComponentMonitoringSetting {
    ComponentName?: Value<string>
    ComponentARN?: Value<string>
    Tier!: Value<string>
    ComponentConfigurationMode!: Value<string>
    DefaultOverwriteComponentConfiguration?: ComponentConfiguration
    CustomComponentConfiguration?: ComponentConfiguration

    constructor(properties: ComponentMonitoringSetting) {
        Object.assign(this, properties)
    }
}

export class LogPattern {
    PatternName!: Value<string>
    Pattern!: Value<string>
    Rank!: Value<number>

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

export class Alarm {
    AlarmName!: Value<string>
    Severity?: Value<string>

    constructor(properties: Alarm) {
        Object.assign(this, properties)
    }
}

export class WindowsEvent {
    LogGroupName!: Value<string>
    EventName!: Value<string>
    EventLevels!: List<Value<string>>
    PatternSet?: Value<string>

    constructor(properties: WindowsEvent) {
        Object.assign(this, properties)
    }
}

export class ComponentConfiguration {
    ConfigurationDetails?: ConfigurationDetails
    SubComponentTypeConfigurations?: List<SubComponentTypeConfiguration>

    constructor(properties: ComponentConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomComponent {
    ComponentName!: Value<string>
    ResourceList!: List<Value<string>>

    constructor(properties: CustomComponent) {
        Object.assign(this, properties)
    }
}

export class JMXPrometheusExporter {
    JMXURL?: Value<string>
    HostPort?: Value<string>
    PrometheusPort?: Value<string>

    constructor(properties: JMXPrometheusExporter) {
        Object.assign(this, properties)
    }
}

export class AlarmMetric {
    AlarmMetricName!: Value<string>

    constructor(properties: AlarmMetric) {
        Object.assign(this, properties)
    }
}

export class ConfigurationDetails {
    AlarmMetrics?: List<AlarmMetric>
    Logs?: List<Log>
    WindowsEvents?: List<WindowsEvent>
    Alarms?: List<Alarm>
    JMXPrometheusExporter?: JMXPrometheusExporter

    constructor(properties: ConfigurationDetails) {
        Object.assign(this, properties)
    }
}

export class Log {
    LogGroupName?: Value<string>
    LogPath?: Value<string>
    LogType!: Value<string>
    Encoding?: Value<string>
    PatternSet?: Value<string>

    constructor(properties: Log) {
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

export interface ApplicationProperties {
    ResourceGroupName: Value<string>
    CWEMonitorEnabled?: Value<boolean>
    OpsCenterEnabled?: Value<boolean>
    OpsItemSNSTopicArn?: Value<string>
    Tags?: List<ResourceTag>
    CustomComponents?: List<CustomComponent>
    LogPatternSets?: List<LogPatternSet>
    AutoConfigurationEnabled?: Value<boolean>
    ComponentMonitoringSettings?: List<ComponentMonitoringSetting>
}

export default class Application extends ResourceBase<ApplicationProperties> {
    static SubComponentConfigurationDetails = SubComponentConfigurationDetails
    static ComponentMonitoringSetting = ComponentMonitoringSetting
    static LogPattern = LogPattern
    static LogPatternSet = LogPatternSet
    static Alarm = Alarm
    static WindowsEvent = WindowsEvent
    static ComponentConfiguration = ComponentConfiguration
    static CustomComponent = CustomComponent
    static JMXPrometheusExporter = JMXPrometheusExporter
    static AlarmMetric = AlarmMetric
    static ConfigurationDetails = ConfigurationDetails
    static Log = Log
    static SubComponentTypeConfiguration = SubComponentTypeConfiguration

    constructor(properties: ApplicationProperties) {
        super('AWS::ApplicationInsights::Application', properties)
    }
}
