"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSingularFilterConstant = exports.TopicRelativeDateFilter = exports.TopicRangeFilterConstant = exports.TopicNumericRangeFilter = exports.TopicNumericEqualityFilter = exports.TopicNamedEntity = exports.TopicFilter = exports.TopicDateRangeFilter = exports.TopicColumn = exports.TopicCategoryFilterConstant = exports.TopicCategoryFilter = exports.TopicCalculatedField = exports.SemanticType = exports.SemanticEntityType = exports.RangeConstant = exports.NegativeFormat = exports.NamedEntityDefinitionMetric = exports.NamedEntityDefinition = exports.DisplayFormatOptions = exports.DefaultFormatting = exports.DatasetMetadata = exports.DataAggregation = exports.ComparativeOrder = exports.CollectiveConstant = exports.CellValueSynonym = void 0;
const resource_1 = require("../resource");
class CellValueSynonym {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CellValueSynonym = CellValueSynonym;
class CollectiveConstant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CollectiveConstant = CollectiveConstant;
class ComparativeOrder {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComparativeOrder = ComparativeOrder;
class DataAggregation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataAggregation = DataAggregation;
class DatasetMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetMetadata = DatasetMetadata;
class DefaultFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultFormatting = DefaultFormatting;
class DisplayFormatOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DisplayFormatOptions = DisplayFormatOptions;
class NamedEntityDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NamedEntityDefinition = NamedEntityDefinition;
class NamedEntityDefinitionMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NamedEntityDefinitionMetric = NamedEntityDefinitionMetric;
class NegativeFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NegativeFormat = NegativeFormat;
class RangeConstant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RangeConstant = RangeConstant;
class SemanticEntityType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SemanticEntityType = SemanticEntityType;
class SemanticType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SemanticType = SemanticType;
class TopicCalculatedField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicCalculatedField = TopicCalculatedField;
class TopicCategoryFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicCategoryFilter = TopicCategoryFilter;
class TopicCategoryFilterConstant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicCategoryFilterConstant = TopicCategoryFilterConstant;
class TopicColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicColumn = TopicColumn;
class TopicDateRangeFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicDateRangeFilter = TopicDateRangeFilter;
class TopicFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicFilter = TopicFilter;
class TopicNamedEntity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicNamedEntity = TopicNamedEntity;
class TopicNumericEqualityFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicNumericEqualityFilter = TopicNumericEqualityFilter;
class TopicNumericRangeFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicNumericRangeFilter = TopicNumericRangeFilter;
class TopicRangeFilterConstant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicRangeFilterConstant = TopicRangeFilterConstant;
class TopicRelativeDateFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicRelativeDateFilter = TopicRelativeDateFilter;
class TopicSingularFilterConstant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicSingularFilterConstant = TopicSingularFilterConstant;
class Topic extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::Topic', properties || {});
    }
}
exports.default = Topic;
Topic.CellValueSynonym = CellValueSynonym;
Topic.CollectiveConstant = CollectiveConstant;
Topic.ComparativeOrder = ComparativeOrder;
Topic.DataAggregation = DataAggregation;
Topic.DatasetMetadata = DatasetMetadata;
Topic.DefaultFormatting = DefaultFormatting;
Topic.DisplayFormatOptions = DisplayFormatOptions;
Topic.NamedEntityDefinition = NamedEntityDefinition;
Topic.NamedEntityDefinitionMetric = NamedEntityDefinitionMetric;
Topic.NegativeFormat = NegativeFormat;
Topic.RangeConstant = RangeConstant;
Topic.SemanticEntityType = SemanticEntityType;
Topic.SemanticType = SemanticType;
Topic.TopicCalculatedField = TopicCalculatedField;
Topic.TopicCategoryFilter = TopicCategoryFilter;
Topic.TopicCategoryFilterConstant = TopicCategoryFilterConstant;
Topic.TopicColumn = TopicColumn;
Topic.TopicDateRangeFilter = TopicDateRangeFilter;
Topic.TopicFilter = TopicFilter;
Topic.TopicNamedEntity = TopicNamedEntity;
Topic.TopicNumericEqualityFilter = TopicNumericEqualityFilter;
Topic.TopicNumericRangeFilter = TopicNumericRangeFilter;
Topic.TopicRangeFilterConstant = TopicRangeFilterConstant;
Topic.TopicRelativeDateFilter = TopicRelativeDateFilter;
Topic.TopicSingularFilterConstant = TopicSingularFilterConstant;
