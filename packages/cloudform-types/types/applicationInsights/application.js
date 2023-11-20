"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsEvent = exports.SubComponentTypeConfiguration = exports.SubComponentConfigurationDetails = exports.LogPatternSet = exports.LogPattern = exports.Log = exports.JMXPrometheusExporter = exports.HANAPrometheusExporter = exports.HAClusterPrometheusExporter = exports.CustomComponent = exports.ConfigurationDetails = exports.ComponentMonitoringSetting = exports.ComponentConfiguration = exports.AlarmMetric = exports.Alarm = void 0;
const resource_1 = require("../resource");
class Alarm {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Alarm = Alarm;
class AlarmMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmMetric = AlarmMetric;
class ComponentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentConfiguration = ComponentConfiguration;
class ComponentMonitoringSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentMonitoringSetting = ComponentMonitoringSetting;
class ConfigurationDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationDetails = ConfigurationDetails;
class CustomComponent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomComponent = CustomComponent;
class HAClusterPrometheusExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HAClusterPrometheusExporter = HAClusterPrometheusExporter;
class HANAPrometheusExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HANAPrometheusExporter = HANAPrometheusExporter;
class JMXPrometheusExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JMXPrometheusExporter = JMXPrometheusExporter;
class Log {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Log = Log;
class LogPattern {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogPattern = LogPattern;
class LogPatternSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogPatternSet = LogPatternSet;
class SubComponentConfigurationDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubComponentConfigurationDetails = SubComponentConfigurationDetails;
class SubComponentTypeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubComponentTypeConfiguration = SubComponentTypeConfiguration;
class WindowsEvent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WindowsEvent = WindowsEvent;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ApplicationInsights::Application', properties);
    }
}
exports.default = Application;
Application.Alarm = Alarm;
Application.AlarmMetric = AlarmMetric;
Application.ComponentConfiguration = ComponentConfiguration;
Application.ComponentMonitoringSetting = ComponentMonitoringSetting;
Application.ConfigurationDetails = ConfigurationDetails;
Application.CustomComponent = CustomComponent;
Application.HAClusterPrometheusExporter = HAClusterPrometheusExporter;
Application.HANAPrometheusExporter = HANAPrometheusExporter;
Application.JMXPrometheusExporter = JMXPrometheusExporter;
Application.Log = Log;
Application.LogPattern = LogPattern;
Application.LogPatternSet = LogPatternSet;
Application.SubComponentConfigurationDetails = SubComponentConfigurationDetails;
Application.SubComponentTypeConfiguration = SubComponentTypeConfiguration;
Application.WindowsEvent = WindowsEvent;
