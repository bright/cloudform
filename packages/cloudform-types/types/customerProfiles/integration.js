"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZendeskSourceProperties = exports.TriggerProperties = exports.TriggerConfig = exports.TaskPropertiesMap = exports.Task = exports.SourceFlowConfig = exports.SourceConnectorProperties = exports.ServiceNowSourceProperties = exports.ScheduledTriggerProperties = exports.SalesforceSourceProperties = exports.S3SourceProperties = exports.ObjectTypeMapping = exports.MarketoSourceProperties = exports.IncrementalPullConfig = exports.FlowDefinition = exports.ConnectorOperator = void 0;
const resource_1 = require("../resource");
class ConnectorOperator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectorOperator = ConnectorOperator;
class FlowDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FlowDefinition = FlowDefinition;
class IncrementalPullConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IncrementalPullConfig = IncrementalPullConfig;
class MarketoSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MarketoSourceProperties = MarketoSourceProperties;
class ObjectTypeMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectTypeMapping = ObjectTypeMapping;
class S3SourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3SourceProperties = S3SourceProperties;
class SalesforceSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SalesforceSourceProperties = SalesforceSourceProperties;
class ScheduledTriggerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScheduledTriggerProperties = ScheduledTriggerProperties;
class ServiceNowSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceNowSourceProperties = ServiceNowSourceProperties;
class SourceConnectorProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceConnectorProperties = SourceConnectorProperties;
class SourceFlowConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceFlowConfig = SourceFlowConfig;
class Task {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Task = Task;
class TaskPropertiesMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskPropertiesMap = TaskPropertiesMap;
class TriggerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggerConfig = TriggerConfig;
class TriggerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggerProperties = TriggerProperties;
class ZendeskSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZendeskSourceProperties = ZendeskSourceProperties;
class Integration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CustomerProfiles::Integration', properties);
    }
}
exports.default = Integration;
Integration.ConnectorOperator = ConnectorOperator;
Integration.FlowDefinition = FlowDefinition;
Integration.IncrementalPullConfig = IncrementalPullConfig;
Integration.MarketoSourceProperties = MarketoSourceProperties;
Integration.ObjectTypeMapping = ObjectTypeMapping;
Integration.S3SourceProperties = S3SourceProperties;
Integration.SalesforceSourceProperties = SalesforceSourceProperties;
Integration.ScheduledTriggerProperties = ScheduledTriggerProperties;
Integration.ServiceNowSourceProperties = ServiceNowSourceProperties;
Integration.SourceConnectorProperties = SourceConnectorProperties;
Integration.SourceFlowConfig = SourceFlowConfig;
Integration.Task = Task;
Integration.TaskPropertiesMap = TaskPropertiesMap;
Integration.TriggerConfig = TriggerConfig;
Integration.TriggerProperties = TriggerProperties;
Integration.ZendeskSourceProperties = ZendeskSourceProperties;
