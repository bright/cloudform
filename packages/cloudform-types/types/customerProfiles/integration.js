"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Task {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Task = Task;
class TriggerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggerProperties = TriggerProperties;
class ScheduledTriggerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScheduledTriggerProperties = ScheduledTriggerProperties;
class S3SourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3SourceProperties = S3SourceProperties;
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
class TaskPropertiesMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskPropertiesMap = TaskPropertiesMap;
class ConnectorOperator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectorOperator = ConnectorOperator;
class ZendeskSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZendeskSourceProperties = ZendeskSourceProperties;
class SourceConnectorProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceConnectorProperties = SourceConnectorProperties;
class ServiceNowSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceNowSourceProperties = ServiceNowSourceProperties;
class SalesforceSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SalesforceSourceProperties = SalesforceSourceProperties;
class TriggerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggerConfig = TriggerConfig;
class SourceFlowConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceFlowConfig = SourceFlowConfig;
class Integration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CustomerProfiles::Integration', properties);
    }
}
exports.default = Integration;
Integration.Task = Task;
Integration.TriggerProperties = TriggerProperties;
Integration.ScheduledTriggerProperties = ScheduledTriggerProperties;
Integration.S3SourceProperties = S3SourceProperties;
Integration.FlowDefinition = FlowDefinition;
Integration.IncrementalPullConfig = IncrementalPullConfig;
Integration.MarketoSourceProperties = MarketoSourceProperties;
Integration.TaskPropertiesMap = TaskPropertiesMap;
Integration.ConnectorOperator = ConnectorOperator;
Integration.ZendeskSourceProperties = ZendeskSourceProperties;
Integration.SourceConnectorProperties = SourceConnectorProperties;
Integration.ServiceNowSourceProperties = ServiceNowSourceProperties;
Integration.SalesforceSourceProperties = SalesforceSourceProperties;
Integration.TriggerConfig = TriggerConfig;
Integration.SourceFlowConfig = SourceFlowConfig;
