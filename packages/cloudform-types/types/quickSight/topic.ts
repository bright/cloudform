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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CellValueSynonym {
    Synonyms?: List<Value<string>>
    CellValue?: Value<string>

    constructor(properties: CellValueSynonym) {
        Object.assign(this, properties)
    }
}

export class CollectiveConstant {
    ValueList?: List<Value<string>>

    constructor(properties: CollectiveConstant) {
        Object.assign(this, properties)
    }
}

export class ComparativeOrder {
    SpecifedOrder?: List<Value<string>>
    UseOrdering?: Value<string>
    TreatUndefinedSpecifiedValues?: Value<string>

    constructor(properties: ComparativeOrder) {
        Object.assign(this, properties)
    }
}

export class DataAggregation {
    DatasetRowDateGranularity?: Value<string>
    DefaultDateColumnName?: Value<string>

    constructor(properties: DataAggregation) {
        Object.assign(this, properties)
    }
}

export class DatasetMetadata {
    DatasetArn!: Value<string>
    Filters?: List<TopicFilter>
    NamedEntities?: List<TopicNamedEntity>
    DatasetName?: Value<string>
    CalculatedFields?: List<TopicCalculatedField>
    Columns?: List<TopicColumn>
    DataAggregation?: DataAggregation
    DatasetDescription?: Value<string>

    constructor(properties: DatasetMetadata) {
        Object.assign(this, properties)
    }
}

export class DefaultFormatting {
    DisplayFormatOptions?: DisplayFormatOptions
    DisplayFormat?: Value<string>

    constructor(properties: DefaultFormatting) {
        Object.assign(this, properties)
    }
}

export class DisplayFormatOptions {
    DecimalSeparator?: Value<string>
    FractionDigits?: Value<number>
    Suffix?: Value<string>
    DateFormat?: Value<string>
    UnitScaler?: Value<string>
    NegativeFormat?: NegativeFormat
    UseBlankCellFormat?: Value<boolean>
    Prefix?: Value<string>
    BlankCellFormat?: Value<string>
    CurrencySymbol?: Value<string>
    GroupingSeparator?: Value<string>
    UseGrouping?: Value<boolean>

    constructor(properties: DisplayFormatOptions) {
        Object.assign(this, properties)
    }
}

export class NamedEntityDefinition {
    PropertyName?: Value<string>
    PropertyUsage?: Value<string>
    PropertyRole?: Value<string>
    Metric?: NamedEntityDefinitionMetric
    FieldName?: Value<string>

    constructor(properties: NamedEntityDefinition) {
        Object.assign(this, properties)
    }
}

export class NamedEntityDefinitionMetric {
    Aggregation?: Value<string>
    AggregationFunctionParameters?: {[key: string]: Value<string>}

    constructor(properties: NamedEntityDefinitionMetric) {
        Object.assign(this, properties)
    }
}

export class NegativeFormat {
    Suffix?: Value<string>
    Prefix?: Value<string>

    constructor(properties: NegativeFormat) {
        Object.assign(this, properties)
    }
}

export class RangeConstant {
    Minimum?: Value<string>
    Maximum?: Value<string>

    constructor(properties: RangeConstant) {
        Object.assign(this, properties)
    }
}

export class SemanticEntityType {
    TypeName?: Value<string>
    TypeParameters?: {[key: string]: Value<string>}
    SubTypeName?: Value<string>

    constructor(properties: SemanticEntityType) {
        Object.assign(this, properties)
    }
}

export class SemanticType {
    TruthyCellValueSynonyms?: List<Value<string>>
    TypeName?: Value<string>
    TypeParameters?: {[key: string]: Value<string>}
    SubTypeName?: Value<string>
    TruthyCellValue?: Value<string>
    FalseyCellValue?: Value<string>
    FalseyCellValueSynonyms?: List<Value<string>>

    constructor(properties: SemanticType) {
        Object.assign(this, properties)
    }
}

export class TopicCalculatedField {
    SemanticType?: SemanticType
    NotAllowedAggregations?: List<Value<string>>
    DefaultFormatting?: DefaultFormatting
    AllowedAggregations?: List<Value<string>>
    CalculatedFieldDescription?: Value<string>
    CalculatedFieldSynonyms?: List<Value<string>>
    IsIncludedInTopic?: Value<boolean>
    ColumnDataRole?: Value<string>
    Aggregation?: Value<string>
    Expression!: Value<string>
    NonAdditive?: Value<boolean>
    CalculatedFieldName!: Value<string>
    NeverAggregateInFilter?: Value<boolean>
    TimeGranularity?: Value<string>
    ComparativeOrder?: ComparativeOrder
    CellValueSynonyms?: List<CellValueSynonym>

    constructor(properties: TopicCalculatedField) {
        Object.assign(this, properties)
    }
}

export class TopicCategoryFilter {
    CategoryFilterType?: Value<string>
    CategoryFilterFunction?: Value<string>
    Constant?: TopicCategoryFilterConstant
    Inverse?: Value<boolean>

    constructor(properties: TopicCategoryFilter) {
        Object.assign(this, properties)
    }
}

export class TopicCategoryFilterConstant {
    SingularConstant?: Value<string>
    ConstantType?: Value<string>
    CollectiveConstant?: CollectiveConstant

    constructor(properties: TopicCategoryFilterConstant) {
        Object.assign(this, properties)
    }
}

export class TopicColumn {
    SemanticType?: SemanticType
    NotAllowedAggregations?: List<Value<string>>
    AllowedAggregations?: List<Value<string>>
    DefaultFormatting?: DefaultFormatting
    ColumnDescription?: Value<string>
    IsIncludedInTopic?: Value<boolean>
    ColumnDataRole?: Value<string>
    Aggregation?: Value<string>
    ColumnName!: Value<string>
    NonAdditive?: Value<boolean>
    ColumnSynonyms?: List<Value<string>>
    NeverAggregateInFilter?: Value<boolean>
    TimeGranularity?: Value<string>
    ColumnFriendlyName?: Value<string>
    ComparativeOrder?: ComparativeOrder
    CellValueSynonyms?: List<CellValueSynonym>

    constructor(properties: TopicColumn) {
        Object.assign(this, properties)
    }
}

export class TopicDateRangeFilter {
    Inclusive?: Value<boolean>
    Constant?: TopicRangeFilterConstant

    constructor(properties: TopicDateRangeFilter) {
        Object.assign(this, properties)
    }
}

export class TopicFilter {
    FilterClass?: Value<string>
    FilterSynonyms?: List<Value<string>>
    FilterType?: Value<string>
    RelativeDateFilter?: TopicRelativeDateFilter
    OperandFieldName!: Value<string>
    NumericEqualityFilter?: TopicNumericEqualityFilter
    FilterDescription?: Value<string>
    NumericRangeFilter?: TopicNumericRangeFilter
    DateRangeFilter?: TopicDateRangeFilter
    FilterName!: Value<string>
    CategoryFilter?: TopicCategoryFilter

    constructor(properties: TopicFilter) {
        Object.assign(this, properties)
    }
}

export class TopicNamedEntity {
    EntitySynonyms?: List<Value<string>>
    EntityName!: Value<string>
    SemanticEntityType?: SemanticEntityType
    EntityDescription?: Value<string>
    Definition?: List<NamedEntityDefinition>

    constructor(properties: TopicNamedEntity) {
        Object.assign(this, properties)
    }
}

export class TopicNumericEqualityFilter {
    Aggregation?: Value<string>
    Constant?: TopicSingularFilterConstant

    constructor(properties: TopicNumericEqualityFilter) {
        Object.assign(this, properties)
    }
}

export class TopicNumericRangeFilter {
    Aggregation?: Value<string>
    Inclusive?: Value<boolean>
    Constant?: TopicRangeFilterConstant

    constructor(properties: TopicNumericRangeFilter) {
        Object.assign(this, properties)
    }
}

export class TopicRangeFilterConstant {
    ConstantType?: Value<string>
    RangeConstant?: RangeConstant

    constructor(properties: TopicRangeFilterConstant) {
        Object.assign(this, properties)
    }
}

export class TopicRelativeDateFilter {
    RelativeDateFilterFunction?: Value<string>
    Constant?: TopicSingularFilterConstant
    TimeGranularity?: Value<string>

    constructor(properties: TopicRelativeDateFilter) {
        Object.assign(this, properties)
    }
}

export class TopicSingularFilterConstant {
    SingularConstant?: Value<string>
    ConstantType?: Value<string>

    constructor(properties: TopicSingularFilterConstant) {
        Object.assign(this, properties)
    }
}

export interface TopicProperties {
    Description?: Value<string>
    DataSets?: List<DatasetMetadata>
    AwsAccountId?: Value<string>
    TopicId?: Value<string>
    Name?: Value<string>
}

export default class Topic extends ResourceBase<TopicProperties> {
    static CellValueSynonym = CellValueSynonym
    static CollectiveConstant = CollectiveConstant
    static ComparativeOrder = ComparativeOrder
    static DataAggregation = DataAggregation
    static DatasetMetadata = DatasetMetadata
    static DefaultFormatting = DefaultFormatting
    static DisplayFormatOptions = DisplayFormatOptions
    static NamedEntityDefinition = NamedEntityDefinition
    static NamedEntityDefinitionMetric = NamedEntityDefinitionMetric
    static NegativeFormat = NegativeFormat
    static RangeConstant = RangeConstant
    static SemanticEntityType = SemanticEntityType
    static SemanticType = SemanticType
    static TopicCalculatedField = TopicCalculatedField
    static TopicCategoryFilter = TopicCategoryFilter
    static TopicCategoryFilterConstant = TopicCategoryFilterConstant
    static TopicColumn = TopicColumn
    static TopicDateRangeFilter = TopicDateRangeFilter
    static TopicFilter = TopicFilter
    static TopicNamedEntity = TopicNamedEntity
    static TopicNumericEqualityFilter = TopicNumericEqualityFilter
    static TopicNumericRangeFilter = TopicNumericRangeFilter
    static TopicRangeFilterConstant = TopicRangeFilterConstant
    static TopicRelativeDateFilter = TopicRelativeDateFilter
    static TopicSingularFilterConstant = TopicSingularFilterConstant

    constructor(properties?: TopicProperties) {
        super('AWS::QuickSight::Topic', properties || {})
    }
}
