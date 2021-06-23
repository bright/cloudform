"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DatasetContentVersionValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetContentVersionValue = DatasetContentVersionValue;
class GlueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlueConfiguration = GlueConfiguration;
class DeltaTimeSessionWindowConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeltaTimeSessionWindowConfiguration = DeltaTimeSessionWindowConfiguration;
class OutputFileUriValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputFileUriValue = OutputFileUriValue;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class DatasetContentDeliveryRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetContentDeliveryRule = DatasetContentDeliveryRule;
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class LateDataRuleConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LateDataRuleConfiguration = LateDataRuleConfiguration;
class ContainerAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerAction = ContainerAction;
class LateDataRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LateDataRule = LateDataRule;
class QueryAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryAction = QueryAction;
class DatasetContentDeliveryRuleDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetContentDeliveryRuleDestination = DatasetContentDeliveryRuleDestination;
class VersioningConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VersioningConfiguration = VersioningConfiguration;
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class RetentionPeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetentionPeriod = RetentionPeriod;
class S3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class Variable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Variable = Variable;
class DeltaTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeltaTime = DeltaTime;
class Trigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Trigger = Trigger;
class IotEventsDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotEventsDestinationConfiguration = IotEventsDestinationConfiguration;
class ResourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceConfiguration = ResourceConfiguration;
class TriggeringDataset {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggeringDataset = TriggeringDataset;
class Dataset extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTAnalytics::Dataset', properties);
    }
}
exports.default = Dataset;
Dataset.DatasetContentVersionValue = DatasetContentVersionValue;
Dataset.GlueConfiguration = GlueConfiguration;
Dataset.DeltaTimeSessionWindowConfiguration = DeltaTimeSessionWindowConfiguration;
Dataset.OutputFileUriValue = OutputFileUriValue;
Dataset.Filter = Filter;
Dataset.DatasetContentDeliveryRule = DatasetContentDeliveryRule;
Dataset.Action = Action;
Dataset.LateDataRuleConfiguration = LateDataRuleConfiguration;
Dataset.ContainerAction = ContainerAction;
Dataset.LateDataRule = LateDataRule;
Dataset.QueryAction = QueryAction;
Dataset.DatasetContentDeliveryRuleDestination = DatasetContentDeliveryRuleDestination;
Dataset.VersioningConfiguration = VersioningConfiguration;
Dataset.Schedule = Schedule;
Dataset.RetentionPeriod = RetentionPeriod;
Dataset.S3DestinationConfiguration = S3DestinationConfiguration;
Dataset.Variable = Variable;
Dataset.DeltaTime = DeltaTime;
Dataset.Trigger = Trigger;
Dataset.IotEventsDestinationConfiguration = IotEventsDestinationConfiguration;
Dataset.ResourceConfiguration = ResourceConfiguration;
Dataset.TriggeringDataset = TriggeringDataset;
