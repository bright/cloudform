import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CellValueSynonym {
    Synonyms?: List<Value<string>>;
    CellValue?: Value<string>;
    constructor(properties: CellValueSynonym);
}
export declare class CollectiveConstant {
    ValueList?: List<Value<string>>;
    constructor(properties: CollectiveConstant);
}
export declare class ComparativeOrder {
    SpecifedOrder?: List<Value<string>>;
    UseOrdering?: Value<string>;
    TreatUndefinedSpecifiedValues?: Value<string>;
    constructor(properties: ComparativeOrder);
}
export declare class DataAggregation {
    DatasetRowDateGranularity?: Value<string>;
    DefaultDateColumnName?: Value<string>;
    constructor(properties: DataAggregation);
}
export declare class DatasetMetadata {
    DatasetArn: Value<string>;
    Filters?: List<TopicFilter>;
    NamedEntities?: List<TopicNamedEntity>;
    DatasetName?: Value<string>;
    CalculatedFields?: List<TopicCalculatedField>;
    Columns?: List<TopicColumn>;
    DataAggregation?: DataAggregation;
    DatasetDescription?: Value<string>;
    constructor(properties: DatasetMetadata);
}
export declare class DefaultFormatting {
    DisplayFormatOptions?: DisplayFormatOptions;
    DisplayFormat?: Value<string>;
    constructor(properties: DefaultFormatting);
}
export declare class DisplayFormatOptions {
    DecimalSeparator?: Value<string>;
    FractionDigits?: Value<number>;
    Suffix?: Value<string>;
    DateFormat?: Value<string>;
    UnitScaler?: Value<string>;
    NegativeFormat?: NegativeFormat;
    UseBlankCellFormat?: Value<boolean>;
    Prefix?: Value<string>;
    BlankCellFormat?: Value<string>;
    CurrencySymbol?: Value<string>;
    GroupingSeparator?: Value<string>;
    UseGrouping?: Value<boolean>;
    constructor(properties: DisplayFormatOptions);
}
export declare class NamedEntityDefinition {
    PropertyName?: Value<string>;
    PropertyUsage?: Value<string>;
    PropertyRole?: Value<string>;
    Metric?: NamedEntityDefinitionMetric;
    FieldName?: Value<string>;
    constructor(properties: NamedEntityDefinition);
}
export declare class NamedEntityDefinitionMetric {
    Aggregation?: Value<string>;
    AggregationFunctionParameters?: {
        [key: string]: Value<string>;
    };
    constructor(properties: NamedEntityDefinitionMetric);
}
export declare class NegativeFormat {
    Suffix?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: NegativeFormat);
}
export declare class RangeConstant {
    Minimum?: Value<string>;
    Maximum?: Value<string>;
    constructor(properties: RangeConstant);
}
export declare class SemanticEntityType {
    TypeName?: Value<string>;
    TypeParameters?: {
        [key: string]: Value<string>;
    };
    SubTypeName?: Value<string>;
    constructor(properties: SemanticEntityType);
}
export declare class SemanticType {
    TruthyCellValueSynonyms?: List<Value<string>>;
    TypeName?: Value<string>;
    TypeParameters?: {
        [key: string]: Value<string>;
    };
    SubTypeName?: Value<string>;
    TruthyCellValue?: Value<string>;
    FalseyCellValue?: Value<string>;
    FalseyCellValueSynonyms?: List<Value<string>>;
    constructor(properties: SemanticType);
}
export declare class TopicCalculatedField {
    SemanticType?: SemanticType;
    NotAllowedAggregations?: List<Value<string>>;
    DefaultFormatting?: DefaultFormatting;
    AllowedAggregations?: List<Value<string>>;
    CalculatedFieldDescription?: Value<string>;
    CalculatedFieldSynonyms?: List<Value<string>>;
    IsIncludedInTopic?: Value<boolean>;
    ColumnDataRole?: Value<string>;
    Aggregation?: Value<string>;
    Expression: Value<string>;
    NonAdditive?: Value<boolean>;
    CalculatedFieldName: Value<string>;
    NeverAggregateInFilter?: Value<boolean>;
    TimeGranularity?: Value<string>;
    ComparativeOrder?: ComparativeOrder;
    CellValueSynonyms?: List<CellValueSynonym>;
    constructor(properties: TopicCalculatedField);
}
export declare class TopicCategoryFilter {
    CategoryFilterType?: Value<string>;
    CategoryFilterFunction?: Value<string>;
    Constant?: TopicCategoryFilterConstant;
    Inverse?: Value<boolean>;
    constructor(properties: TopicCategoryFilter);
}
export declare class TopicCategoryFilterConstant {
    SingularConstant?: Value<string>;
    ConstantType?: Value<string>;
    CollectiveConstant?: CollectiveConstant;
    constructor(properties: TopicCategoryFilterConstant);
}
export declare class TopicColumn {
    SemanticType?: SemanticType;
    NotAllowedAggregations?: List<Value<string>>;
    AllowedAggregations?: List<Value<string>>;
    DefaultFormatting?: DefaultFormatting;
    ColumnDescription?: Value<string>;
    IsIncludedInTopic?: Value<boolean>;
    ColumnDataRole?: Value<string>;
    Aggregation?: Value<string>;
    ColumnName: Value<string>;
    NonAdditive?: Value<boolean>;
    ColumnSynonyms?: List<Value<string>>;
    NeverAggregateInFilter?: Value<boolean>;
    TimeGranularity?: Value<string>;
    ColumnFriendlyName?: Value<string>;
    ComparativeOrder?: ComparativeOrder;
    CellValueSynonyms?: List<CellValueSynonym>;
    constructor(properties: TopicColumn);
}
export declare class TopicDateRangeFilter {
    Inclusive?: Value<boolean>;
    Constant?: TopicRangeFilterConstant;
    constructor(properties: TopicDateRangeFilter);
}
export declare class TopicFilter {
    FilterClass?: Value<string>;
    FilterSynonyms?: List<Value<string>>;
    FilterType?: Value<string>;
    RelativeDateFilter?: TopicRelativeDateFilter;
    OperandFieldName: Value<string>;
    NumericEqualityFilter?: TopicNumericEqualityFilter;
    FilterDescription?: Value<string>;
    NumericRangeFilter?: TopicNumericRangeFilter;
    DateRangeFilter?: TopicDateRangeFilter;
    FilterName: Value<string>;
    CategoryFilter?: TopicCategoryFilter;
    constructor(properties: TopicFilter);
}
export declare class TopicNamedEntity {
    EntitySynonyms?: List<Value<string>>;
    EntityName: Value<string>;
    SemanticEntityType?: SemanticEntityType;
    EntityDescription?: Value<string>;
    Definition?: List<NamedEntityDefinition>;
    constructor(properties: TopicNamedEntity);
}
export declare class TopicNumericEqualityFilter {
    Aggregation?: Value<string>;
    Constant?: TopicSingularFilterConstant;
    constructor(properties: TopicNumericEqualityFilter);
}
export declare class TopicNumericRangeFilter {
    Aggregation?: Value<string>;
    Inclusive?: Value<boolean>;
    Constant?: TopicRangeFilterConstant;
    constructor(properties: TopicNumericRangeFilter);
}
export declare class TopicRangeFilterConstant {
    ConstantType?: Value<string>;
    RangeConstant?: RangeConstant;
    constructor(properties: TopicRangeFilterConstant);
}
export declare class TopicRelativeDateFilter {
    RelativeDateFilterFunction?: Value<string>;
    Constant?: TopicSingularFilterConstant;
    TimeGranularity?: Value<string>;
    constructor(properties: TopicRelativeDateFilter);
}
export declare class TopicSingularFilterConstant {
    SingularConstant?: Value<string>;
    ConstantType?: Value<string>;
    constructor(properties: TopicSingularFilterConstant);
}
export interface TopicProperties {
    Description?: Value<string>;
    DataSets?: List<DatasetMetadata>;
    AwsAccountId?: Value<string>;
    TopicId?: Value<string>;
    Name?: Value<string>;
}
export default class Topic extends ResourceBase<TopicProperties> {
    static CellValueSynonym: typeof CellValueSynonym;
    static CollectiveConstant: typeof CollectiveConstant;
    static ComparativeOrder: typeof ComparativeOrder;
    static DataAggregation: typeof DataAggregation;
    static DatasetMetadata: typeof DatasetMetadata;
    static DefaultFormatting: typeof DefaultFormatting;
    static DisplayFormatOptions: typeof DisplayFormatOptions;
    static NamedEntityDefinition: typeof NamedEntityDefinition;
    static NamedEntityDefinitionMetric: typeof NamedEntityDefinitionMetric;
    static NegativeFormat: typeof NegativeFormat;
    static RangeConstant: typeof RangeConstant;
    static SemanticEntityType: typeof SemanticEntityType;
    static SemanticType: typeof SemanticType;
    static TopicCalculatedField: typeof TopicCalculatedField;
    static TopicCategoryFilter: typeof TopicCategoryFilter;
    static TopicCategoryFilterConstant: typeof TopicCategoryFilterConstant;
    static TopicColumn: typeof TopicColumn;
    static TopicDateRangeFilter: typeof TopicDateRangeFilter;
    static TopicFilter: typeof TopicFilter;
    static TopicNamedEntity: typeof TopicNamedEntity;
    static TopicNumericEqualityFilter: typeof TopicNumericEqualityFilter;
    static TopicNumericRangeFilter: typeof TopicNumericRangeFilter;
    static TopicRangeFilterConstant: typeof TopicRangeFilterConstant;
    static TopicRelativeDateFilter: typeof TopicRelativeDateFilter;
    static TopicSingularFilterConstant: typeof TopicSingularFilterConstant;
    constructor(properties?: TopicProperties);
}
