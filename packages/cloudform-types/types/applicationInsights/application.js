"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SubComponentConfigurationDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubComponentConfigurationDetails = SubComponentConfigurationDetails;
class ComponentMonitoringSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentMonitoringSetting = ComponentMonitoringSetting;
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
class Alarm {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Alarm = Alarm;
class WindowsEvent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WindowsEvent = WindowsEvent;
class ComponentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentConfiguration = ComponentConfiguration;
class CustomComponent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomComponent = CustomComponent;
class JMXPrometheusExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JMXPrometheusExporter = JMXPrometheusExporter;
class AlarmMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmMetric = AlarmMetric;
class ConfigurationDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationDetails = ConfigurationDetails;
class Log {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Log = Log;
class SubComponentTypeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubComponentTypeConfiguration = SubComponentTypeConfiguration;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ApplicationInsights::Application', properties);
    }
}
exports.default = Application;
Application.SubComponentConfigurationDetails = SubComponentConfigurationDetails;
Application.ComponentMonitoringSetting = ComponentMonitoringSetting;
Application.LogPattern = LogPattern;
Application.LogPatternSet = LogPatternSet;
Application.Alarm = Alarm;
Application.WindowsEvent = WindowsEvent;
Application.ComponentConfiguration = ComponentConfiguration;
Application.CustomComponent = CustomComponent;
Application.JMXPrometheusExporter = JMXPrometheusExporter;
Application.AlarmMetric = AlarmMetric;
Application.ConfigurationDetails = ConfigurationDetails;
Application.Log = Log;
Application.SubComponentTypeConfiguration = SubComponentTypeConfiguration;
