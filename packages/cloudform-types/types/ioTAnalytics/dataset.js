"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersioningConfiguration = exports.Variable = exports.TriggeringDataset = exports.Trigger = exports.Schedule = exports.S3DestinationConfiguration = exports.RetentionPeriod = exports.ResourceConfiguration = exports.QueryAction = exports.OutputFileUriValue = exports.LateDataRuleConfiguration = exports.LateDataRule = exports.IotEventsDestinationConfiguration = exports.GlueConfiguration = exports.Filter = exports.DeltaTimeSessionWindowConfiguration = exports.DeltaTime = exports.DatasetContentVersionValue = exports.DatasetContentDeliveryRuleDestination = exports.DatasetContentDeliveryRule = exports.ContainerAction = exports.Action = void 0;
const resource_1 = require("../resource");
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class ContainerAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerAction = ContainerAction;
class DatasetContentDeliveryRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetContentDeliveryRule = DatasetContentDeliveryRule;
class DatasetContentDeliveryRuleDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetContentDeliveryRuleDestination = DatasetContentDeliveryRuleDestination;
class DatasetContentVersionValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetContentVersionValue = DatasetContentVersionValue;
class DeltaTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeltaTime = DeltaTime;
class DeltaTimeSessionWindowConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeltaTimeSessionWindowConfiguration = DeltaTimeSessionWindowConfiguration;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class GlueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlueConfiguration = GlueConfiguration;
class IotEventsDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotEventsDestinationConfiguration = IotEventsDestinationConfiguration;
class LateDataRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LateDataRule = LateDataRule;
class LateDataRuleConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LateDataRuleConfiguration = LateDataRuleConfiguration;
class OutputFileUriValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputFileUriValue = OutputFileUriValue;
class QueryAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryAction = QueryAction;
class ResourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceConfiguration = ResourceConfiguration;
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
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class Trigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Trigger = Trigger;
class TriggeringDataset {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggeringDataset = TriggeringDataset;
class Variable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Variable = Variable;
class VersioningConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VersioningConfiguration = VersioningConfiguration;
class Dataset extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTAnalytics::Dataset', properties);
    }
}
exports.default = Dataset;
Dataset.Action = Action;
Dataset.ContainerAction = ContainerAction;
Dataset.DatasetContentDeliveryRule = DatasetContentDeliveryRule;
Dataset.DatasetContentDeliveryRuleDestination = DatasetContentDeliveryRuleDestination;
Dataset.DatasetContentVersionValue = DatasetContentVersionValue;
Dataset.DeltaTime = DeltaTime;
Dataset.DeltaTimeSessionWindowConfiguration = DeltaTimeSessionWindowConfiguration;
Dataset.Filter = Filter;
Dataset.GlueConfiguration = GlueConfiguration;
Dataset.IotEventsDestinationConfiguration = IotEventsDestinationConfiguration;
Dataset.LateDataRule = LateDataRule;
Dataset.LateDataRuleConfiguration = LateDataRuleConfiguration;
Dataset.OutputFileUriValue = OutputFileUriValue;
Dataset.QueryAction = QueryAction;
Dataset.ResourceConfiguration = ResourceConfiguration;
Dataset.RetentionPeriod = RetentionPeriod;
Dataset.S3DestinationConfiguration = S3DestinationConfiguration;
Dataset.Schedule = Schedule;
Dataset.Trigger = Trigger;
Dataset.TriggeringDataset = TriggeringDataset;
Dataset.Variable = Variable;
Dataset.VersioningConfiguration = VersioningConfiguration;
