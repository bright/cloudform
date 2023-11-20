"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.ZendeskSourceProperties = exports.ZendeskDestinationProperties = exports.VeevaSourceProperties = exports.UpsolverS3OutputFormatConfig = exports.UpsolverDestinationProperties = exports.TriggerConfig = exports.TrendmicroSourceProperties = exports.TaskPropertiesObject = exports.Task = exports.SuccessResponseHandlingConfig = exports.SourceFlowConfig = exports.SourceConnectorProperties = exports.SnowflakeDestinationProperties = exports.SlackSourceProperties = exports.SingularSourceProperties = exports.ServiceNowSourceProperties = exports.ScheduledTriggerProperties = exports.SalesforceSourceProperties = exports.SalesforceDestinationProperties = exports.SAPODataSourceProperties = exports.SAPODataParallelismConfig = exports.SAPODataPaginationConfig = exports.SAPODataDestinationProperties = exports.S3SourceProperties = exports.S3OutputFormatConfig = exports.S3InputFormatConfig = exports.S3DestinationProperties = exports.RedshiftDestinationProperties = exports.PrefixConfig = exports.PardotSourceProperties = exports.MetadataCatalogConfig = exports.MarketoSourceProperties = exports.MarketoDestinationProperties = exports.LookoutMetricsDestinationProperties = exports.InforNexusSourceProperties = exports.IncrementalPullConfig = exports.GoogleAnalyticsSourceProperties = exports.GlueDataCatalog = exports.EventBridgeDestinationProperties = exports.ErrorHandlingConfig = exports.DynatraceSourceProperties = exports.DestinationFlowConfig = exports.DestinationConnectorProperties = exports.DatadogSourceProperties = exports.DataTransferApi = exports.CustomConnectorSourceProperties = exports.CustomConnectorDestinationProperties = exports.ConnectorOperator = exports.AmplitudeSourceProperties = exports.AggregationConfig = void 0;
const resource_1 = require("../resource");
class AggregationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AggregationConfig = AggregationConfig;
class AmplitudeSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmplitudeSourceProperties = AmplitudeSourceProperties;
class ConnectorOperator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectorOperator = ConnectorOperator;
class CustomConnectorDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomConnectorDestinationProperties = CustomConnectorDestinationProperties;
class CustomConnectorSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomConnectorSourceProperties = CustomConnectorSourceProperties;
class DataTransferApi {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataTransferApi = DataTransferApi;
class DatadogSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatadogSourceProperties = DatadogSourceProperties;
class DestinationConnectorProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationConnectorProperties = DestinationConnectorProperties;
class DestinationFlowConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationFlowConfig = DestinationFlowConfig;
class DynatraceSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynatraceSourceProperties = DynatraceSourceProperties;
class ErrorHandlingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ErrorHandlingConfig = ErrorHandlingConfig;
class EventBridgeDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventBridgeDestinationProperties = EventBridgeDestinationProperties;
class GlueDataCatalog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlueDataCatalog = GlueDataCatalog;
class GoogleAnalyticsSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GoogleAnalyticsSourceProperties = GoogleAnalyticsSourceProperties;
class IncrementalPullConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IncrementalPullConfig = IncrementalPullConfig;
class InforNexusSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InforNexusSourceProperties = InforNexusSourceProperties;
class LookoutMetricsDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LookoutMetricsDestinationProperties = LookoutMetricsDestinationProperties;
class MarketoDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MarketoDestinationProperties = MarketoDestinationProperties;
class MarketoSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MarketoSourceProperties = MarketoSourceProperties;
class MetadataCatalogConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetadataCatalogConfig = MetadataCatalogConfig;
class PardotSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PardotSourceProperties = PardotSourceProperties;
class PrefixConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrefixConfig = PrefixConfig;
class RedshiftDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftDestinationProperties = RedshiftDestinationProperties;
class S3DestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationProperties = S3DestinationProperties;
class S3InputFormatConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3InputFormatConfig = S3InputFormatConfig;
class S3OutputFormatConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3OutputFormatConfig = S3OutputFormatConfig;
class S3SourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3SourceProperties = S3SourceProperties;
class SAPODataDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SAPODataDestinationProperties = SAPODataDestinationProperties;
class SAPODataPaginationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SAPODataPaginationConfig = SAPODataPaginationConfig;
class SAPODataParallelismConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SAPODataParallelismConfig = SAPODataParallelismConfig;
class SAPODataSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SAPODataSourceProperties = SAPODataSourceProperties;
class SalesforceDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SalesforceDestinationProperties = SalesforceDestinationProperties;
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
class SingularSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SingularSourceProperties = SingularSourceProperties;
class SlackSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlackSourceProperties = SlackSourceProperties;
class SnowflakeDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnowflakeDestinationProperties = SnowflakeDestinationProperties;
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
class SuccessResponseHandlingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SuccessResponseHandlingConfig = SuccessResponseHandlingConfig;
class Task {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Task = Task;
class TaskPropertiesObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskPropertiesObject = TaskPropertiesObject;
class TrendmicroSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrendmicroSourceProperties = TrendmicroSourceProperties;
class TriggerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggerConfig = TriggerConfig;
class UpsolverDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UpsolverDestinationProperties = UpsolverDestinationProperties;
class UpsolverS3OutputFormatConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UpsolverS3OutputFormatConfig = UpsolverS3OutputFormatConfig;
class VeevaSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VeevaSourceProperties = VeevaSourceProperties;
class ZendeskDestinationProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZendeskDestinationProperties = ZendeskDestinationProperties;
class ZendeskSourceProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZendeskSourceProperties = ZendeskSourceProperties;
class Flow extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppFlow::Flow', properties);
    }
}
exports.default = Flow;
Flow.AggregationConfig = AggregationConfig;
Flow.AmplitudeSourceProperties = AmplitudeSourceProperties;
Flow.ConnectorOperator = ConnectorOperator;
Flow.CustomConnectorDestinationProperties = CustomConnectorDestinationProperties;
Flow.CustomConnectorSourceProperties = CustomConnectorSourceProperties;
Flow.DataTransferApi = DataTransferApi;
Flow.DatadogSourceProperties = DatadogSourceProperties;
Flow.DestinationConnectorProperties = DestinationConnectorProperties;
Flow.DestinationFlowConfig = DestinationFlowConfig;
Flow.DynatraceSourceProperties = DynatraceSourceProperties;
Flow.ErrorHandlingConfig = ErrorHandlingConfig;
Flow.EventBridgeDestinationProperties = EventBridgeDestinationProperties;
Flow.GlueDataCatalog = GlueDataCatalog;
Flow.GoogleAnalyticsSourceProperties = GoogleAnalyticsSourceProperties;
Flow.IncrementalPullConfig = IncrementalPullConfig;
Flow.InforNexusSourceProperties = InforNexusSourceProperties;
Flow.LookoutMetricsDestinationProperties = LookoutMetricsDestinationProperties;
Flow.MarketoDestinationProperties = MarketoDestinationProperties;
Flow.MarketoSourceProperties = MarketoSourceProperties;
Flow.MetadataCatalogConfig = MetadataCatalogConfig;
Flow.PardotSourceProperties = PardotSourceProperties;
Flow.PrefixConfig = PrefixConfig;
Flow.RedshiftDestinationProperties = RedshiftDestinationProperties;
Flow.S3DestinationProperties = S3DestinationProperties;
Flow.S3InputFormatConfig = S3InputFormatConfig;
Flow.S3OutputFormatConfig = S3OutputFormatConfig;
Flow.S3SourceProperties = S3SourceProperties;
Flow.SAPODataDestinationProperties = SAPODataDestinationProperties;
Flow.SAPODataPaginationConfig = SAPODataPaginationConfig;
Flow.SAPODataParallelismConfig = SAPODataParallelismConfig;
Flow.SAPODataSourceProperties = SAPODataSourceProperties;
Flow.SalesforceDestinationProperties = SalesforceDestinationProperties;
Flow.SalesforceSourceProperties = SalesforceSourceProperties;
Flow.ScheduledTriggerProperties = ScheduledTriggerProperties;
Flow.ServiceNowSourceProperties = ServiceNowSourceProperties;
Flow.SingularSourceProperties = SingularSourceProperties;
Flow.SlackSourceProperties = SlackSourceProperties;
Flow.SnowflakeDestinationProperties = SnowflakeDestinationProperties;
Flow.SourceConnectorProperties = SourceConnectorProperties;
Flow.SourceFlowConfig = SourceFlowConfig;
Flow.SuccessResponseHandlingConfig = SuccessResponseHandlingConfig;
Flow.Task = Task;
Flow.TaskPropertiesObject = TaskPropertiesObject;
Flow.TrendmicroSourceProperties = TrendmicroSourceProperties;
Flow.TriggerConfig = TriggerConfig;
Flow.UpsolverDestinationProperties = UpsolverDestinationProperties;
Flow.UpsolverS3OutputFormatConfig = UpsolverS3OutputFormatConfig;
Flow.VeevaSourceProperties = VeevaSourceProperties;
Flow.ZendeskDestinationProperties = ZendeskDestinationProperties;
Flow.ZendeskSourceProperties = ZendeskSourceProperties;
