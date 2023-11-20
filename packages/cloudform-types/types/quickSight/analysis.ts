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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AggregationFunction {
    AttributeAggregationFunction?: AttributeAggregationFunction
    DateAggregationFunction?: Value<string>
    NumericalAggregationFunction?: NumericalAggregationFunction
    CategoricalAggregationFunction?: Value<string>

    constructor(properties: AggregationFunction) {
        Object.assign(this, properties)
    }
}

export class AggregationSortConfiguration {
    AggregationFunction?: AggregationFunction
    SortDirection!: Value<string>
    Column!: ColumnIdentifier

    constructor(properties: AggregationSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class AnalysisDefaults {
    DefaultNewSheetConfiguration!: DefaultNewSheetConfiguration

    constructor(properties: AnalysisDefaults) {
        Object.assign(this, properties)
    }
}

export class AnalysisDefinition {
    Options?: AssetOptions
    FilterGroups?: List<FilterGroup>
    CalculatedFields?: List<CalculatedField>
    DataSetIdentifierDeclarations!: List<DataSetIdentifierDeclaration>
    ColumnConfigurations?: List<ColumnConfiguration>
    AnalysisDefaults?: AnalysisDefaults
    Sheets?: List<SheetDefinition>
    ParameterDeclarations?: List<ParameterDeclaration>

    constructor(properties: AnalysisDefinition) {
        Object.assign(this, properties)
    }
}

export class AnalysisError {
    Type?: Value<string>
    Message?: Value<string>
    ViolatedEntities?: List<Entity>

    constructor(properties: AnalysisError) {
        Object.assign(this, properties)
    }
}

export class AnalysisSourceEntity {
    SourceTemplate?: AnalysisSourceTemplate

    constructor(properties: AnalysisSourceEntity) {
        Object.assign(this, properties)
    }
}

export class AnalysisSourceTemplate {
    DataSetReferences!: List<DataSetReference>
    Arn!: Value<string>

    constructor(properties: AnalysisSourceTemplate) {
        Object.assign(this, properties)
    }
}

export class AnchorDateConfiguration {
    AnchorOption?: Value<string>
    ParameterName?: Value<string>

    constructor(properties: AnchorDateConfiguration) {
        Object.assign(this, properties)
    }
}

export class ArcAxisConfiguration {
    Range?: ArcAxisDisplayRange
    ReserveRange?: Value<number>

    constructor(properties: ArcAxisConfiguration) {
        Object.assign(this, properties)
    }
}

export class ArcAxisDisplayRange {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: ArcAxisDisplayRange) {
        Object.assign(this, properties)
    }
}

export class ArcConfiguration {
    ArcAngle?: Value<number>
    ArcThickness?: Value<string>

    constructor(properties: ArcConfiguration) {
        Object.assign(this, properties)
    }
}

export class ArcOptions {
    ArcThickness?: Value<string>

    constructor(properties: ArcOptions) {
        Object.assign(this, properties)
    }
}

export class AssetOptions {
    Timezone?: Value<string>
    WeekStart?: Value<string>

    constructor(properties: AssetOptions) {
        Object.assign(this, properties)
    }
}

export class AttributeAggregationFunction {
    SimpleAttributeAggregation?: Value<string>
    ValueForMultipleValues?: Value<string>

    constructor(properties: AttributeAggregationFunction) {
        Object.assign(this, properties)
    }
}

export class AxisDataOptions {
    DateAxisOptions?: DateAxisOptions
    NumericAxisOptions?: NumericAxisOptions

    constructor(properties: AxisDataOptions) {
        Object.assign(this, properties)
    }
}

export class AxisDisplayMinMaxRange {
    Minimum?: Value<number>
    Maximum?: Value<number>

    constructor(properties: AxisDisplayMinMaxRange) {
        Object.assign(this, properties)
    }
}

export class AxisDisplayOptions {
    DataOptions?: AxisDataOptions
    TickLabelOptions?: AxisTickLabelOptions
    AxisOffset?: Value<string>
    AxisLineVisibility?: Value<string>
    GridLineVisibility?: Value<string>
    ScrollbarOptions?: ScrollBarOptions

    constructor(properties: AxisDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class AxisDisplayRange {
    DataDriven?: {[key: string]: any}
    MinMax?: AxisDisplayMinMaxRange

    constructor(properties: AxisDisplayRange) {
        Object.assign(this, properties)
    }
}

export class AxisLabelOptions {
    CustomLabel?: Value<string>
    ApplyTo?: AxisLabelReferenceOptions
    FontConfiguration?: FontConfiguration

    constructor(properties: AxisLabelOptions) {
        Object.assign(this, properties)
    }
}

export class AxisLabelReferenceOptions {
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: AxisLabelReferenceOptions) {
        Object.assign(this, properties)
    }
}

export class AxisLinearScale {
    StepSize?: Value<number>
    StepCount?: Value<number>

    constructor(properties: AxisLinearScale) {
        Object.assign(this, properties)
    }
}

export class AxisLogarithmicScale {
    Base?: Value<number>

    constructor(properties: AxisLogarithmicScale) {
        Object.assign(this, properties)
    }
}

export class AxisScale {
    Logarithmic?: AxisLogarithmicScale
    Linear?: AxisLinearScale

    constructor(properties: AxisScale) {
        Object.assign(this, properties)
    }
}

export class AxisTickLabelOptions {
    RotationAngle?: Value<number>
    LabelOptions?: LabelOptions

    constructor(properties: AxisTickLabelOptions) {
        Object.assign(this, properties)
    }
}

export class BarChartAggregatedFieldWells {
    Category?: List<DimensionField>
    Colors?: List<DimensionField>
    Values?: List<MeasureField>
    SmallMultiples?: List<DimensionField>

    constructor(properties: BarChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class BarChartConfiguration {
    SortConfiguration?: BarChartSortConfiguration
    Legend?: LegendOptions
    ReferenceLines?: List<ReferenceLine>
    DataLabels?: DataLabelOptions
    ColorLabelOptions?: ChartAxisLabelOptions
    CategoryLabelOptions?: ChartAxisLabelOptions
    Tooltip?: TooltipOptions
    SmallMultiplesOptions?: SmallMultiplesOptions
    Orientation?: Value<string>
    VisualPalette?: VisualPalette
    ValueLabelOptions?: ChartAxisLabelOptions
    BarsArrangement?: Value<string>
    CategoryAxis?: AxisDisplayOptions
    ContributionAnalysisDefaults?: List<ContributionAnalysisDefault>
    FieldWells?: BarChartFieldWells
    ValueAxis?: AxisDisplayOptions

    constructor(properties: BarChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class BarChartFieldWells {
    BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells

    constructor(properties: BarChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class BarChartSortConfiguration {
    SmallMultiplesSort?: List<FieldSortOptions>
    ColorSort?: List<FieldSortOptions>
    ColorItemsLimit?: ItemsLimitConfiguration
    CategoryItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration

    constructor(properties: BarChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class BarChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: BarChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: BarChartVisual) {
        Object.assign(this, properties)
    }
}

export class BinCountOptions {
    Value?: Value<number>

    constructor(properties: BinCountOptions) {
        Object.assign(this, properties)
    }
}

export class BinWidthOptions {
    BinCountLimit?: Value<number>
    Value?: Value<number>

    constructor(properties: BinWidthOptions) {
        Object.assign(this, properties)
    }
}

export class BodySectionConfiguration {
    Content!: BodySectionContent
    Style?: SectionStyle
    PageBreakConfiguration?: SectionPageBreakConfiguration
    SectionId!: Value<string>

    constructor(properties: BodySectionConfiguration) {
        Object.assign(this, properties)
    }
}

export class BodySectionContent {
    Layout?: SectionLayoutConfiguration

    constructor(properties: BodySectionContent) {
        Object.assign(this, properties)
    }
}

export class BoxPlotAggregatedFieldWells {
    GroupBy?: List<DimensionField>
    Values?: List<MeasureField>

    constructor(properties: BoxPlotAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class BoxPlotChartConfiguration {
    SortConfiguration?: BoxPlotSortConfiguration
    Legend?: LegendOptions
    ReferenceLines?: List<ReferenceLine>
    CategoryAxis?: AxisDisplayOptions
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions
    CategoryLabelOptions?: ChartAxisLabelOptions
    FieldWells?: BoxPlotFieldWells
    Tooltip?: TooltipOptions
    BoxPlotOptions?: BoxPlotOptions
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions
    VisualPalette?: VisualPalette

    constructor(properties: BoxPlotChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class BoxPlotFieldWells {
    BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells

    constructor(properties: BoxPlotFieldWells) {
        Object.assign(this, properties)
    }
}

export class BoxPlotOptions {
    StyleOptions?: BoxPlotStyleOptions
    OutlierVisibility?: Value<string>
    AllDataPointsVisibility?: Value<string>

    constructor(properties: BoxPlotOptions) {
        Object.assign(this, properties)
    }
}

export class BoxPlotSortConfiguration {
    CategorySort?: List<FieldSortOptions>
    PaginationConfiguration?: PaginationConfiguration

    constructor(properties: BoxPlotSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class BoxPlotStyleOptions {
    FillStyle?: Value<string>

    constructor(properties: BoxPlotStyleOptions) {
        Object.assign(this, properties)
    }
}

export class BoxPlotVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: BoxPlotChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: BoxPlotVisual) {
        Object.assign(this, properties)
    }
}

export class CalculatedField {
    Expression!: Value<string>
    DataSetIdentifier!: Value<string>
    Name!: Value<string>

    constructor(properties: CalculatedField) {
        Object.assign(this, properties)
    }
}

export class CalculatedMeasureField {
    Expression!: Value<string>
    FieldId!: Value<string>

    constructor(properties: CalculatedMeasureField) {
        Object.assign(this, properties)
    }
}

export class CascadingControlConfiguration {
    SourceControls?: List<CascadingControlSource>

    constructor(properties: CascadingControlConfiguration) {
        Object.assign(this, properties)
    }
}

export class CascadingControlSource {
    SourceSheetControlId?: Value<string>
    ColumnToMatch?: ColumnIdentifier

    constructor(properties: CascadingControlSource) {
        Object.assign(this, properties)
    }
}

export class CategoricalDimensionField {
    HierarchyId?: Value<string>
    FormatConfiguration?: StringFormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: CategoricalDimensionField) {
        Object.assign(this, properties)
    }
}

export class CategoricalMeasureField {
    AggregationFunction?: Value<string>
    FormatConfiguration?: StringFormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: CategoricalMeasureField) {
        Object.assign(this, properties)
    }
}

export class CategoryDrillDownFilter {
    Column!: ColumnIdentifier
    CategoryValues!: List<Value<string>>

    constructor(properties: CategoryDrillDownFilter) {
        Object.assign(this, properties)
    }
}

export class CategoryFilter {
    Configuration!: CategoryFilterConfiguration
    Column!: ColumnIdentifier
    FilterId!: Value<string>

    constructor(properties: CategoryFilter) {
        Object.assign(this, properties)
    }
}

export class CategoryFilterConfiguration {
    CustomFilterListConfiguration?: CustomFilterListConfiguration
    CustomFilterConfiguration?: CustomFilterConfiguration
    FilterListConfiguration?: FilterListConfiguration

    constructor(properties: CategoryFilterConfiguration) {
        Object.assign(this, properties)
    }
}

export class ChartAxisLabelOptions {
    Visibility?: Value<string>
    SortIconVisibility?: Value<string>
    AxisLabelOptions?: List<AxisLabelOptions>

    constructor(properties: ChartAxisLabelOptions) {
        Object.assign(this, properties)
    }
}

export class ClusterMarker {
    SimpleClusterMarker?: SimpleClusterMarker

    constructor(properties: ClusterMarker) {
        Object.assign(this, properties)
    }
}

export class ClusterMarkerConfiguration {
    ClusterMarker?: ClusterMarker

    constructor(properties: ClusterMarkerConfiguration) {
        Object.assign(this, properties)
    }
}

export class ColorScale {
    Colors!: List<DataColor>
    ColorFillType!: Value<string>
    NullValueColor?: DataColor

    constructor(properties: ColorScale) {
        Object.assign(this, properties)
    }
}

export class ColorsConfiguration {
    CustomColors?: List<CustomColor>

    constructor(properties: ColorsConfiguration) {
        Object.assign(this, properties)
    }
}

export class ColumnConfiguration {
    Role?: Value<string>
    FormatConfiguration?: FormatConfiguration
    Column!: ColumnIdentifier
    ColorsConfiguration?: ColorsConfiguration

    constructor(properties: ColumnConfiguration) {
        Object.assign(this, properties)
    }
}

export class ColumnHierarchy {
    DateTimeHierarchy?: DateTimeHierarchy
    ExplicitHierarchy?: ExplicitHierarchy
    PredefinedHierarchy?: PredefinedHierarchy

    constructor(properties: ColumnHierarchy) {
        Object.assign(this, properties)
    }
}

export class ColumnIdentifier {
    ColumnName!: Value<string>
    DataSetIdentifier!: Value<string>

    constructor(properties: ColumnIdentifier) {
        Object.assign(this, properties)
    }
}

export class ColumnSort {
    AggregationFunction?: AggregationFunction
    SortBy!: ColumnIdentifier
    Direction!: Value<string>

    constructor(properties: ColumnSort) {
        Object.assign(this, properties)
    }
}

export class ColumnTooltipItem {
    Aggregation?: AggregationFunction
    Column!: ColumnIdentifier
    Label?: Value<string>
    Visibility?: Value<string>

    constructor(properties: ColumnTooltipItem) {
        Object.assign(this, properties)
    }
}

export class ComboChartAggregatedFieldWells {
    BarValues?: List<MeasureField>
    Category?: List<DimensionField>
    Colors?: List<DimensionField>
    LineValues?: List<MeasureField>

    constructor(properties: ComboChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class ComboChartConfiguration {
    SortConfiguration?: ComboChartSortConfiguration
    Legend?: LegendOptions
    ReferenceLines?: List<ReferenceLine>
    ColorLabelOptions?: ChartAxisLabelOptions
    BarDataLabels?: DataLabelOptions
    CategoryLabelOptions?: ChartAxisLabelOptions
    Tooltip?: TooltipOptions
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions
    VisualPalette?: VisualPalette
    BarsArrangement?: Value<string>
    SecondaryYAxisLabelOptions?: ChartAxisLabelOptions
    LineDataLabels?: DataLabelOptions
    CategoryAxis?: AxisDisplayOptions
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions
    FieldWells?: ComboChartFieldWells
    SecondaryYAxisDisplayOptions?: AxisDisplayOptions

    constructor(properties: ComboChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComboChartFieldWells {
    ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells

    constructor(properties: ComboChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class ComboChartSortConfiguration {
    ColorSort?: List<FieldSortOptions>
    ColorItemsLimit?: ItemsLimitConfiguration
    CategoryItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>

    constructor(properties: ComboChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComboChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: ComboChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: ComboChartVisual) {
        Object.assign(this, properties)
    }
}

export class ComparisonConfiguration {
    ComparisonMethod?: Value<string>
    ComparisonFormat?: ComparisonFormatConfiguration

    constructor(properties: ComparisonConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComparisonFormatConfiguration {
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration
    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration

    constructor(properties: ComparisonFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class Computation {
    PeriodToDate?: PeriodToDateComputation
    GrowthRate?: GrowthRateComputation
    TopBottomRanked?: TopBottomRankedComputation
    TotalAggregation?: TotalAggregationComputation
    Forecast?: ForecastComputation
    MaximumMinimum?: MaximumMinimumComputation
    PeriodOverPeriod?: PeriodOverPeriodComputation
    MetricComparison?: MetricComparisonComputation
    TopBottomMovers?: TopBottomMoversComputation
    UniqueValues?: UniqueValuesComputation

    constructor(properties: Computation) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingColor {
    Gradient?: ConditionalFormattingGradientColor
    Solid?: ConditionalFormattingSolidColor

    constructor(properties: ConditionalFormattingColor) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingCustomIconCondition {
    Expression!: Value<string>
    Color?: Value<string>
    DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration
    IconOptions!: ConditionalFormattingCustomIconOptions

    constructor(properties: ConditionalFormattingCustomIconCondition) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingCustomIconOptions {
    UnicodeIcon?: Value<string>
    Icon?: Value<string>

    constructor(properties: ConditionalFormattingCustomIconOptions) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingGradientColor {
    Expression!: Value<string>
    Color!: GradientColor

    constructor(properties: ConditionalFormattingGradientColor) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingIcon {
    CustomCondition?: ConditionalFormattingCustomIconCondition
    IconSet?: ConditionalFormattingIconSet

    constructor(properties: ConditionalFormattingIcon) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingIconDisplayConfiguration {
    IconDisplayOption?: Value<string>

    constructor(properties: ConditionalFormattingIconDisplayConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingIconSet {
    Expression!: Value<string>
    IconSetType?: Value<string>

    constructor(properties: ConditionalFormattingIconSet) {
        Object.assign(this, properties)
    }
}

export class ConditionalFormattingSolidColor {
    Expression!: Value<string>
    Color?: Value<string>

    constructor(properties: ConditionalFormattingSolidColor) {
        Object.assign(this, properties)
    }
}

export class ContributionAnalysisDefault {
    MeasureFieldId!: Value<string>
    ContributorDimensions!: List<ColumnIdentifier>

    constructor(properties: ContributionAnalysisDefault) {
        Object.assign(this, properties)
    }
}

export class CurrencyDisplayFormatConfiguration {
    NegativeValueConfiguration?: NegativeValueConfiguration
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration
    NumberScale?: Value<string>
    NullValueFormatConfiguration?: NullValueFormatConfiguration
    Suffix?: Value<string>
    SeparatorConfiguration?: NumericSeparatorConfiguration
    Symbol?: Value<string>
    Prefix?: Value<string>

    constructor(properties: CurrencyDisplayFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomActionFilterOperation {
    SelectedFieldsConfiguration!: FilterOperationSelectedFieldsConfiguration
    TargetVisualsConfiguration!: FilterOperationTargetVisualsConfiguration

    constructor(properties: CustomActionFilterOperation) {
        Object.assign(this, properties)
    }
}

export class CustomActionNavigationOperation {
    LocalNavigationConfiguration?: LocalNavigationConfiguration

    constructor(properties: CustomActionNavigationOperation) {
        Object.assign(this, properties)
    }
}

export class CustomActionSetParametersOperation {
    ParameterValueConfigurations!: List<SetParameterValueConfiguration>

    constructor(properties: CustomActionSetParametersOperation) {
        Object.assign(this, properties)
    }
}

export class CustomActionURLOperation {
    URLTemplate!: Value<string>
    URLTarget!: Value<string>

    constructor(properties: CustomActionURLOperation) {
        Object.assign(this, properties)
    }
}

export class CustomColor {
    Color!: Value<string>
    FieldValue?: Value<string>
    SpecialValue?: Value<string>

    constructor(properties: CustomColor) {
        Object.assign(this, properties)
    }
}

export class CustomContentConfiguration {
    ContentUrl?: Value<string>
    ContentType?: Value<string>
    ImageScaling?: Value<string>

    constructor(properties: CustomContentConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomContentVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: CustomContentConfiguration
    Actions?: List<VisualCustomAction>
    DataSetIdentifier!: Value<string>
    Title?: VisualTitleLabelOptions

    constructor(properties: CustomContentVisual) {
        Object.assign(this, properties)
    }
}

export class CustomFilterConfiguration {
    CategoryValue?: Value<string>
    ParameterName?: Value<string>
    NullOption!: Value<string>
    MatchOperator!: Value<string>
    SelectAllOptions?: Value<string>

    constructor(properties: CustomFilterConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomFilterListConfiguration {
    CategoryValues?: List<Value<string>>
    NullOption!: Value<string>
    MatchOperator!: Value<string>
    SelectAllOptions?: Value<string>

    constructor(properties: CustomFilterListConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomNarrativeOptions {
    Narrative!: Value<string>

    constructor(properties: CustomNarrativeOptions) {
        Object.assign(this, properties)
    }
}

export class CustomParameterValues {
    DecimalValues?: List<Value<number>>
    IntegerValues?: List<Value<number>>
    StringValues?: List<Value<string>>
    DateTimeValues?: List<Value<string>>

    constructor(properties: CustomParameterValues) {
        Object.assign(this, properties)
    }
}

export class CustomValuesConfiguration {
    IncludeNullValue?: Value<boolean>
    CustomValues!: CustomParameterValues

    constructor(properties: CustomValuesConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataBarsOptions {
    PositiveColor?: Value<string>
    FieldId!: Value<string>
    NegativeColor?: Value<string>

    constructor(properties: DataBarsOptions) {
        Object.assign(this, properties)
    }
}

export class DataColor {
    DataValue?: Value<number>
    Color?: Value<string>

    constructor(properties: DataColor) {
        Object.assign(this, properties)
    }
}

export class DataFieldSeriesItem {
    FieldId!: Value<string>
    AxisBinding!: Value<string>
    FieldValue?: Value<string>
    Settings?: LineChartSeriesSettings

    constructor(properties: DataFieldSeriesItem) {
        Object.assign(this, properties)
    }
}

export class DataLabelOptions {
    DataLabelTypes?: List<DataLabelType>
    MeasureLabelVisibility?: Value<string>
    Position?: Value<string>
    LabelContent?: Value<string>
    Visibility?: Value<string>
    TotalsVisibility?: Value<string>
    Overlap?: Value<string>
    CategoryLabelVisibility?: Value<string>
    LabelColor?: Value<string>
    LabelFontConfiguration?: FontConfiguration

    constructor(properties: DataLabelOptions) {
        Object.assign(this, properties)
    }
}

export class DataLabelType {
    MaximumLabelType?: MaximumLabelType
    DataPathLabelType?: DataPathLabelType
    RangeEndsLabelType?: RangeEndsLabelType
    FieldLabelType?: FieldLabelType
    MinimumLabelType?: MinimumLabelType

    constructor(properties: DataLabelType) {
        Object.assign(this, properties)
    }
}

export class DataPathColor {
    Element!: DataPathValue
    Color!: Value<string>
    TimeGranularity?: Value<string>

    constructor(properties: DataPathColor) {
        Object.assign(this, properties)
    }
}

export class DataPathLabelType {
    FieldId?: Value<string>
    Visibility?: Value<string>
    FieldValue?: Value<string>

    constructor(properties: DataPathLabelType) {
        Object.assign(this, properties)
    }
}

export class DataPathSort {
    SortPaths!: List<DataPathValue>
    Direction!: Value<string>

    constructor(properties: DataPathSort) {
        Object.assign(this, properties)
    }
}

export class DataPathType {
    PivotTableDataPathType?: Value<string>

    constructor(properties: DataPathType) {
        Object.assign(this, properties)
    }
}

export class DataPathValue {
    DataPathType?: DataPathType
    FieldId?: Value<string>
    FieldValue?: Value<string>

    constructor(properties: DataPathValue) {
        Object.assign(this, properties)
    }
}

export class DataSetIdentifierDeclaration {
    Identifier!: Value<string>
    DataSetArn!: Value<string>

    constructor(properties: DataSetIdentifierDeclaration) {
        Object.assign(this, properties)
    }
}

export class DataSetReference {
    DataSetArn!: Value<string>
    DataSetPlaceholder!: Value<string>

    constructor(properties: DataSetReference) {
        Object.assign(this, properties)
    }
}

export class DateAxisOptions {
    MissingDateVisibility?: Value<string>

    constructor(properties: DateAxisOptions) {
        Object.assign(this, properties)
    }
}

export class DateDimensionField {
    HierarchyId?: Value<string>
    FormatConfiguration?: DateTimeFormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>
    DateGranularity?: Value<string>

    constructor(properties: DateDimensionField) {
        Object.assign(this, properties)
    }
}

export class DateMeasureField {
    AggregationFunction?: Value<string>
    FormatConfiguration?: DateTimeFormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: DateMeasureField) {
        Object.assign(this, properties)
    }
}

export class DateTimeDefaultValues {
    RollingDate?: RollingDateConfiguration
    DynamicValue?: DynamicDefaultValue
    StaticValues?: List<Value<string>>

    constructor(properties: DateTimeDefaultValues) {
        Object.assign(this, properties)
    }
}

export class DateTimeFormatConfiguration {
    NumericFormatConfiguration?: NumericFormatConfiguration
    NullValueFormatConfiguration?: NullValueFormatConfiguration
    DateTimeFormat?: Value<string>

    constructor(properties: DateTimeFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class DateTimeHierarchy {
    HierarchyId!: Value<string>
    DrillDownFilters?: List<DrillDownFilter>

    constructor(properties: DateTimeHierarchy) {
        Object.assign(this, properties)
    }
}

export class DateTimeParameter {
    Values!: List<Value<string>>
    Name!: Value<string>

    constructor(properties: DateTimeParameter) {
        Object.assign(this, properties)
    }
}

export class DateTimeParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>
    DefaultValues?: DateTimeDefaultValues
    TimeGranularity?: Value<string>
    ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration
    Name!: Value<string>

    constructor(properties: DateTimeParameterDeclaration) {
        Object.assign(this, properties)
    }
}

export class DateTimePickerControlDisplayOptions {
    TitleOptions?: LabelOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions
    DateTimeFormat?: Value<string>

    constructor(properties: DateTimePickerControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class DateTimeValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>
    CustomValue?: Value<string>

    constructor(properties: DateTimeValueWhenUnsetConfiguration) {
        Object.assign(this, properties)
    }
}

export class DecimalDefaultValues {
    DynamicValue?: DynamicDefaultValue
    StaticValues?: List<Value<number>>

    constructor(properties: DecimalDefaultValues) {
        Object.assign(this, properties)
    }
}

export class DecimalParameter {
    Values!: List<Value<number>>
    Name!: Value<string>

    constructor(properties: DecimalParameter) {
        Object.assign(this, properties)
    }
}

export class DecimalParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>
    DefaultValues?: DecimalDefaultValues
    ParameterValueType!: Value<string>
    ValueWhenUnset?: DecimalValueWhenUnsetConfiguration
    Name!: Value<string>

    constructor(properties: DecimalParameterDeclaration) {
        Object.assign(this, properties)
    }
}

export class DecimalPlacesConfiguration {
    DecimalPlaces!: Value<number>

    constructor(properties: DecimalPlacesConfiguration) {
        Object.assign(this, properties)
    }
}

export class DecimalValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>
    CustomValue?: Value<number>

    constructor(properties: DecimalValueWhenUnsetConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultFreeFormLayoutConfiguration {
    CanvasSizeOptions!: FreeFormLayoutCanvasSizeOptions

    constructor(properties: DefaultFreeFormLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultGridLayoutConfiguration {
    CanvasSizeOptions!: GridLayoutCanvasSizeOptions

    constructor(properties: DefaultGridLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultInteractiveLayoutConfiguration {
    FreeForm?: DefaultFreeFormLayoutConfiguration
    Grid?: DefaultGridLayoutConfiguration

    constructor(properties: DefaultInteractiveLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultNewSheetConfiguration {
    SheetContentType?: Value<string>
    InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration
    PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration

    constructor(properties: DefaultNewSheetConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultPaginatedLayoutConfiguration {
    SectionBased?: DefaultSectionBasedLayoutConfiguration

    constructor(properties: DefaultPaginatedLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultSectionBasedLayoutConfiguration {
    CanvasSizeOptions!: SectionBasedLayoutCanvasSizeOptions

    constructor(properties: DefaultSectionBasedLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class DestinationParameterValueConfiguration {
    CustomValuesConfiguration?: CustomValuesConfiguration
    SourceParameterName?: Value<string>
    SelectAllValueOptions?: Value<string>
    SourceField?: Value<string>
    SourceColumn?: ColumnIdentifier

    constructor(properties: DestinationParameterValueConfiguration) {
        Object.assign(this, properties)
    }
}

export class DimensionField {
    DateDimensionField?: DateDimensionField
    NumericalDimensionField?: NumericalDimensionField
    CategoricalDimensionField?: CategoricalDimensionField

    constructor(properties: DimensionField) {
        Object.assign(this, properties)
    }
}

export class DonutCenterOptions {
    LabelVisibility?: Value<string>

    constructor(properties: DonutCenterOptions) {
        Object.assign(this, properties)
    }
}

export class DonutOptions {
    DonutCenterOptions?: DonutCenterOptions
    ArcOptions?: ArcOptions

    constructor(properties: DonutOptions) {
        Object.assign(this, properties)
    }
}

export class DrillDownFilter {
    NumericEqualityFilter?: NumericEqualityDrillDownFilter
    TimeRangeFilter?: TimeRangeDrillDownFilter
    CategoryFilter?: CategoryDrillDownFilter

    constructor(properties: DrillDownFilter) {
        Object.assign(this, properties)
    }
}

export class DropDownControlDisplayOptions {
    TitleOptions?: LabelOptions
    SelectAllOptions?: ListControlSelectAllOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions

    constructor(properties: DropDownControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class DynamicDefaultValue {
    GroupNameColumn?: ColumnIdentifier
    DefaultValueColumn!: ColumnIdentifier
    UserNameColumn?: ColumnIdentifier

    constructor(properties: DynamicDefaultValue) {
        Object.assign(this, properties)
    }
}

export class EmptyVisual {
    VisualId!: Value<string>
    Actions?: List<VisualCustomAction>
    DataSetIdentifier!: Value<string>

    constructor(properties: EmptyVisual) {
        Object.assign(this, properties)
    }
}

export class Entity {
    Path?: Value<string>

    constructor(properties: Entity) {
        Object.assign(this, properties)
    }
}

export class ExcludePeriodConfiguration {
    Status?: Value<string>
    Amount!: Value<number>
    Granularity!: Value<string>

    constructor(properties: ExcludePeriodConfiguration) {
        Object.assign(this, properties)
    }
}

export class ExplicitHierarchy {
    HierarchyId!: Value<string>
    DrillDownFilters?: List<DrillDownFilter>
    Columns!: List<ColumnIdentifier>

    constructor(properties: ExplicitHierarchy) {
        Object.assign(this, properties)
    }
}

export class FieldBasedTooltip {
    TooltipFields?: List<TooltipItem>
    AggregationVisibility?: Value<string>
    TooltipTitleType?: Value<string>

    constructor(properties: FieldBasedTooltip) {
        Object.assign(this, properties)
    }
}

export class FieldLabelType {
    FieldId?: Value<string>
    Visibility?: Value<string>

    constructor(properties: FieldLabelType) {
        Object.assign(this, properties)
    }
}

export class FieldSeriesItem {
    FieldId!: Value<string>
    AxisBinding!: Value<string>
    Settings?: LineChartSeriesSettings

    constructor(properties: FieldSeriesItem) {
        Object.assign(this, properties)
    }
}

export class FieldSort {
    FieldId!: Value<string>
    Direction!: Value<string>

    constructor(properties: FieldSort) {
        Object.assign(this, properties)
    }
}

export class FieldSortOptions {
    FieldSort?: FieldSort
    ColumnSort?: ColumnSort

    constructor(properties: FieldSortOptions) {
        Object.assign(this, properties)
    }
}

export class FieldTooltipItem {
    FieldId!: Value<string>
    Label?: Value<string>
    Visibility?: Value<string>

    constructor(properties: FieldTooltipItem) {
        Object.assign(this, properties)
    }
}

export class FilledMapAggregatedFieldWells {
    Values?: List<MeasureField>
    Geospatial?: List<DimensionField>

    constructor(properties: FilledMapAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class FilledMapConditionalFormatting {
    ConditionalFormattingOptions!: List<FilledMapConditionalFormattingOption>

    constructor(properties: FilledMapConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class FilledMapConditionalFormattingOption {
    Shape!: FilledMapShapeConditionalFormatting

    constructor(properties: FilledMapConditionalFormattingOption) {
        Object.assign(this, properties)
    }
}

export class FilledMapConfiguration {
    SortConfiguration?: FilledMapSortConfiguration
    Legend?: LegendOptions
    MapStyleOptions?: GeospatialMapStyleOptions
    FieldWells?: FilledMapFieldWells
    Tooltip?: TooltipOptions
    WindowOptions?: GeospatialWindowOptions

    constructor(properties: FilledMapConfiguration) {
        Object.assign(this, properties)
    }
}

export class FilledMapFieldWells {
    FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells

    constructor(properties: FilledMapFieldWells) {
        Object.assign(this, properties)
    }
}

export class FilledMapShapeConditionalFormatting {
    Format?: ShapeConditionalFormat
    FieldId!: Value<string>

    constructor(properties: FilledMapShapeConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class FilledMapSortConfiguration {
    CategorySort?: List<FieldSortOptions>

    constructor(properties: FilledMapSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class FilledMapVisual {
    Subtitle?: VisualSubtitleLabelOptions
    ConditionalFormatting?: FilledMapConditionalFormatting
    VisualId!: Value<string>
    ChartConfiguration?: FilledMapConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: FilledMapVisual) {
        Object.assign(this, properties)
    }
}

export class Filter {
    NumericEqualityFilter?: NumericEqualityFilter
    NumericRangeFilter?: NumericRangeFilter
    TimeRangeFilter?: TimeRangeFilter
    RelativeDatesFilter?: RelativeDatesFilter
    TopBottomFilter?: TopBottomFilter
    TimeEqualityFilter?: TimeEqualityFilter
    CategoryFilter?: CategoryFilter

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class FilterControl {
    Slider?: FilterSliderControl
    TextArea?: FilterTextAreaControl
    Dropdown?: FilterDropDownControl
    TextField?: FilterTextFieldControl
    List?: FilterListControl
    DateTimePicker?: FilterDateTimePickerControl
    RelativeDateTime?: FilterRelativeDateTimeControl

    constructor(properties: FilterControl) {
        Object.assign(this, properties)
    }
}

export class FilterDateTimePickerControl {
    FilterControlId!: Value<string>
    Type?: Value<string>
    DisplayOptions?: DateTimePickerControlDisplayOptions
    Title!: Value<string>
    SourceFilterId!: Value<string>

    constructor(properties: FilterDateTimePickerControl) {
        Object.assign(this, properties)
    }
}

export class FilterDropDownControl {
    FilterControlId!: Value<string>
    Type?: Value<string>
    DisplayOptions?: DropDownControlDisplayOptions
    CascadingControlConfiguration?: CascadingControlConfiguration
    Title!: Value<string>
    SourceFilterId!: Value<string>
    SelectableValues?: FilterSelectableValues

    constructor(properties: FilterDropDownControl) {
        Object.assign(this, properties)
    }
}

export class FilterGroup {
    Status?: Value<string>
    Filters!: List<Filter>
    CrossDataset!: Value<string>
    ScopeConfiguration!: FilterScopeConfiguration
    FilterGroupId!: Value<string>

    constructor(properties: FilterGroup) {
        Object.assign(this, properties)
    }
}

export class FilterListConfiguration {
    CategoryValues?: List<Value<string>>
    NullOption?: Value<string>
    MatchOperator!: Value<string>
    SelectAllOptions?: Value<string>

    constructor(properties: FilterListConfiguration) {
        Object.assign(this, properties)
    }
}

export class FilterListControl {
    FilterControlId!: Value<string>
    Type?: Value<string>
    DisplayOptions?: ListControlDisplayOptions
    CascadingControlConfiguration?: CascadingControlConfiguration
    Title!: Value<string>
    SourceFilterId!: Value<string>
    SelectableValues?: FilterSelectableValues

    constructor(properties: FilterListControl) {
        Object.assign(this, properties)
    }
}

export class FilterOperationSelectedFieldsConfiguration {
    SelectedColumns?: List<ColumnIdentifier>
    SelectedFields?: List<Value<string>>
    SelectedFieldOptions?: Value<string>

    constructor(properties: FilterOperationSelectedFieldsConfiguration) {
        Object.assign(this, properties)
    }
}

export class FilterOperationTargetVisualsConfiguration {
    SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration

    constructor(properties: FilterOperationTargetVisualsConfiguration) {
        Object.assign(this, properties)
    }
}

export class FilterRelativeDateTimeControl {
    FilterControlId!: Value<string>
    DisplayOptions?: RelativeDateTimeControlDisplayOptions
    Title!: Value<string>
    SourceFilterId!: Value<string>

    constructor(properties: FilterRelativeDateTimeControl) {
        Object.assign(this, properties)
    }
}

export class FilterScopeConfiguration {
    AllSheets?: {[key: string]: any}
    SelectedSheets?: SelectedSheetsFilterScopeConfiguration

    constructor(properties: FilterScopeConfiguration) {
        Object.assign(this, properties)
    }
}

export class FilterSelectableValues {
    Values?: List<Value<string>>

    constructor(properties: FilterSelectableValues) {
        Object.assign(this, properties)
    }
}

export class FilterSliderControl {
    FilterControlId!: Value<string>
    Type?: Value<string>
    StepSize!: Value<number>
    DisplayOptions?: SliderControlDisplayOptions
    Title!: Value<string>
    MaximumValue!: Value<number>
    SourceFilterId!: Value<string>
    MinimumValue!: Value<number>

    constructor(properties: FilterSliderControl) {
        Object.assign(this, properties)
    }
}

export class FilterTextAreaControl {
    FilterControlId!: Value<string>
    Delimiter?: Value<string>
    DisplayOptions?: TextAreaControlDisplayOptions
    Title!: Value<string>
    SourceFilterId!: Value<string>

    constructor(properties: FilterTextAreaControl) {
        Object.assign(this, properties)
    }
}

export class FilterTextFieldControl {
    FilterControlId!: Value<string>
    DisplayOptions?: TextFieldControlDisplayOptions
    Title!: Value<string>
    SourceFilterId!: Value<string>

    constructor(properties: FilterTextFieldControl) {
        Object.assign(this, properties)
    }
}

export class FontConfiguration {
    FontStyle?: Value<string>
    FontSize?: FontSize
    FontDecoration?: Value<string>
    FontColor?: Value<string>
    FontWeight?: FontWeight

    constructor(properties: FontConfiguration) {
        Object.assign(this, properties)
    }
}

export class FontSize {
    Relative?: Value<string>

    constructor(properties: FontSize) {
        Object.assign(this, properties)
    }
}

export class FontWeight {
    Name?: Value<string>

    constructor(properties: FontWeight) {
        Object.assign(this, properties)
    }
}

export class ForecastComputation {
    PeriodsBackward?: Value<number>
    PeriodsForward?: Value<number>
    PredictionInterval?: Value<number>
    Seasonality?: Value<string>
    CustomSeasonalityValue?: Value<number>
    Value?: MeasureField
    Time?: DimensionField
    UpperBoundary?: Value<number>
    ComputationId!: Value<string>
    Name?: Value<string>
    LowerBoundary?: Value<number>

    constructor(properties: ForecastComputation) {
        Object.assign(this, properties)
    }
}

export class ForecastConfiguration {
    ForecastProperties?: TimeBasedForecastProperties
    Scenario?: ForecastScenario

    constructor(properties: ForecastConfiguration) {
        Object.assign(this, properties)
    }
}

export class ForecastScenario {
    WhatIfRangeScenario?: WhatIfRangeScenario
    WhatIfPointScenario?: WhatIfPointScenario

    constructor(properties: ForecastScenario) {
        Object.assign(this, properties)
    }
}

export class FormatConfiguration {
    NumberFormatConfiguration?: NumberFormatConfiguration
    DateTimeFormatConfiguration?: DateTimeFormatConfiguration
    StringFormatConfiguration?: StringFormatConfiguration

    constructor(properties: FormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class FreeFormLayoutCanvasSizeOptions {
    ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions

    constructor(properties: FreeFormLayoutCanvasSizeOptions) {
        Object.assign(this, properties)
    }
}

export class FreeFormLayoutConfiguration {
    CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions
    Elements!: List<FreeFormLayoutElement>

    constructor(properties: FreeFormLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class FreeFormLayoutElement {
    ElementType!: Value<string>
    BorderStyle?: FreeFormLayoutElementBorderStyle
    Height!: Value<string>
    Visibility?: Value<string>
    RenderingRules?: List<SheetElementRenderingRule>
    YAxisLocation!: Value<string>
    LoadingAnimation?: LoadingAnimation
    Width!: Value<string>
    BackgroundStyle?: FreeFormLayoutElementBackgroundStyle
    ElementId!: Value<string>
    XAxisLocation!: Value<string>
    SelectedBorderStyle?: FreeFormLayoutElementBorderStyle

    constructor(properties: FreeFormLayoutElement) {
        Object.assign(this, properties)
    }
}

export class FreeFormLayoutElementBackgroundStyle {
    Color?: Value<string>
    Visibility?: Value<string>

    constructor(properties: FreeFormLayoutElementBackgroundStyle) {
        Object.assign(this, properties)
    }
}

export class FreeFormLayoutElementBorderStyle {
    Color?: Value<string>
    Visibility?: Value<string>

    constructor(properties: FreeFormLayoutElementBorderStyle) {
        Object.assign(this, properties)
    }
}

export class FreeFormLayoutScreenCanvasSizeOptions {
    OptimizedViewPortWidth!: Value<string>

    constructor(properties: FreeFormLayoutScreenCanvasSizeOptions) {
        Object.assign(this, properties)
    }
}

export class FreeFormSectionLayoutConfiguration {
    Elements!: List<FreeFormLayoutElement>

    constructor(properties: FreeFormSectionLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class FunnelChartAggregatedFieldWells {
    Category?: List<DimensionField>
    Values?: List<MeasureField>

    constructor(properties: FunnelChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class FunnelChartConfiguration {
    SortConfiguration?: FunnelChartSortConfiguration
    DataLabelOptions?: FunnelChartDataLabelOptions
    CategoryLabelOptions?: ChartAxisLabelOptions
    FieldWells?: FunnelChartFieldWells
    Tooltip?: TooltipOptions
    ValueLabelOptions?: ChartAxisLabelOptions
    VisualPalette?: VisualPalette

    constructor(properties: FunnelChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class FunnelChartDataLabelOptions {
    MeasureLabelVisibility?: Value<string>
    Position?: Value<string>
    Visibility?: Value<string>
    CategoryLabelVisibility?: Value<string>
    LabelColor?: Value<string>
    MeasureDataLabelStyle?: Value<string>
    LabelFontConfiguration?: FontConfiguration

    constructor(properties: FunnelChartDataLabelOptions) {
        Object.assign(this, properties)
    }
}

export class FunnelChartFieldWells {
    FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells

    constructor(properties: FunnelChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class FunnelChartSortConfiguration {
    CategoryItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>

    constructor(properties: FunnelChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class FunnelChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: FunnelChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: FunnelChartVisual) {
        Object.assign(this, properties)
    }
}

export class GaugeChartArcConditionalFormatting {
    ForegroundColor?: ConditionalFormattingColor

    constructor(properties: GaugeChartArcConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class GaugeChartConditionalFormatting {
    ConditionalFormattingOptions?: List<GaugeChartConditionalFormattingOption>

    constructor(properties: GaugeChartConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class GaugeChartConditionalFormattingOption {
    Arc?: GaugeChartArcConditionalFormatting
    PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting

    constructor(properties: GaugeChartConditionalFormattingOption) {
        Object.assign(this, properties)
    }
}

export class GaugeChartConfiguration {
    DataLabels?: DataLabelOptions
    FieldWells?: GaugeChartFieldWells
    TooltipOptions?: TooltipOptions
    GaugeChartOptions?: GaugeChartOptions
    VisualPalette?: VisualPalette

    constructor(properties: GaugeChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class GaugeChartFieldWells {
    TargetValues?: List<MeasureField>
    Values?: List<MeasureField>

    constructor(properties: GaugeChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class GaugeChartOptions {
    Arc?: ArcConfiguration
    Comparison?: ComparisonConfiguration
    PrimaryValueDisplayType?: Value<string>
    ArcAxis?: ArcAxisConfiguration
    PrimaryValueFontConfiguration?: FontConfiguration

    constructor(properties: GaugeChartOptions) {
        Object.assign(this, properties)
    }
}

export class GaugeChartPrimaryValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor
    Icon?: ConditionalFormattingIcon

    constructor(properties: GaugeChartPrimaryValueConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class GaugeChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    ConditionalFormatting?: GaugeChartConditionalFormatting
    VisualId!: Value<string>
    ChartConfiguration?: GaugeChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions

    constructor(properties: GaugeChartVisual) {
        Object.assign(this, properties)
    }
}

export class GeospatialCoordinateBounds {
    West!: Value<number>
    South!: Value<number>
    North!: Value<number>
    East!: Value<number>

    constructor(properties: GeospatialCoordinateBounds) {
        Object.assign(this, properties)
    }
}

export class GeospatialHeatmapColorScale {
    Colors?: List<GeospatialHeatmapDataColor>

    constructor(properties: GeospatialHeatmapColorScale) {
        Object.assign(this, properties)
    }
}

export class GeospatialHeatmapConfiguration {
    HeatmapColor?: GeospatialHeatmapColorScale

    constructor(properties: GeospatialHeatmapConfiguration) {
        Object.assign(this, properties)
    }
}

export class GeospatialHeatmapDataColor {
    Color!: Value<string>

    constructor(properties: GeospatialHeatmapDataColor) {
        Object.assign(this, properties)
    }
}

export class GeospatialMapAggregatedFieldWells {
    Colors?: List<DimensionField>
    Values?: List<MeasureField>
    Geospatial?: List<DimensionField>

    constructor(properties: GeospatialMapAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class GeospatialMapConfiguration {
    Legend?: LegendOptions
    MapStyleOptions?: GeospatialMapStyleOptions
    FieldWells?: GeospatialMapFieldWells
    Tooltip?: TooltipOptions
    WindowOptions?: GeospatialWindowOptions
    PointStyleOptions?: GeospatialPointStyleOptions
    VisualPalette?: VisualPalette

    constructor(properties: GeospatialMapConfiguration) {
        Object.assign(this, properties)
    }
}

export class GeospatialMapFieldWells {
    GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells

    constructor(properties: GeospatialMapFieldWells) {
        Object.assign(this, properties)
    }
}

export class GeospatialMapStyleOptions {
    BaseMapStyle?: Value<string>

    constructor(properties: GeospatialMapStyleOptions) {
        Object.assign(this, properties)
    }
}

export class GeospatialMapVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: GeospatialMapConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: GeospatialMapVisual) {
        Object.assign(this, properties)
    }
}

export class GeospatialPointStyleOptions {
    SelectedPointStyle?: Value<string>
    ClusterMarkerConfiguration?: ClusterMarkerConfiguration
    HeatmapConfiguration?: GeospatialHeatmapConfiguration

    constructor(properties: GeospatialPointStyleOptions) {
        Object.assign(this, properties)
    }
}

export class GeospatialWindowOptions {
    Bounds?: GeospatialCoordinateBounds
    MapZoomMode?: Value<string>

    constructor(properties: GeospatialWindowOptions) {
        Object.assign(this, properties)
    }
}

export class GlobalTableBorderOptions {
    UniformBorder?: TableBorderOptions
    SideSpecificBorder?: TableSideBorderOptions

    constructor(properties: GlobalTableBorderOptions) {
        Object.assign(this, properties)
    }
}

export class GradientColor {
    Stops?: List<GradientStop>

    constructor(properties: GradientColor) {
        Object.assign(this, properties)
    }
}

export class GradientStop {
    GradientOffset!: Value<number>
    DataValue?: Value<number>
    Color?: Value<string>

    constructor(properties: GradientStop) {
        Object.assign(this, properties)
    }
}

export class GridLayoutCanvasSizeOptions {
    ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions

    constructor(properties: GridLayoutCanvasSizeOptions) {
        Object.assign(this, properties)
    }
}

export class GridLayoutConfiguration {
    CanvasSizeOptions?: GridLayoutCanvasSizeOptions
    Elements!: List<GridLayoutElement>

    constructor(properties: GridLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class GridLayoutElement {
    ElementType!: Value<string>
    ColumnSpan!: Value<number>
    ColumnIndex?: Value<number>
    RowIndex?: Value<number>
    RowSpan!: Value<number>
    ElementId!: Value<string>

    constructor(properties: GridLayoutElement) {
        Object.assign(this, properties)
    }
}

export class GridLayoutScreenCanvasSizeOptions {
    OptimizedViewPortWidth?: Value<string>
    ResizeOption!: Value<string>

    constructor(properties: GridLayoutScreenCanvasSizeOptions) {
        Object.assign(this, properties)
    }
}

export class GrowthRateComputation {
    Value?: MeasureField
    Time?: DimensionField
    PeriodSize?: Value<number>
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: GrowthRateComputation) {
        Object.assign(this, properties)
    }
}

export class HeaderFooterSectionConfiguration {
    Layout!: SectionLayoutConfiguration
    Style?: SectionStyle
    SectionId!: Value<string>

    constructor(properties: HeaderFooterSectionConfiguration) {
        Object.assign(this, properties)
    }
}

export class HeatMapAggregatedFieldWells {
    Values?: List<MeasureField>
    Columns?: List<DimensionField>
    Rows?: List<DimensionField>

    constructor(properties: HeatMapAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class HeatMapConfiguration {
    SortConfiguration?: HeatMapSortConfiguration
    ColumnLabelOptions?: ChartAxisLabelOptions
    Legend?: LegendOptions
    DataLabels?: DataLabelOptions
    FieldWells?: HeatMapFieldWells
    Tooltip?: TooltipOptions
    ColorScale?: ColorScale
    RowLabelOptions?: ChartAxisLabelOptions

    constructor(properties: HeatMapConfiguration) {
        Object.assign(this, properties)
    }
}

export class HeatMapFieldWells {
    HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells

    constructor(properties: HeatMapFieldWells) {
        Object.assign(this, properties)
    }
}

export class HeatMapSortConfiguration {
    HeatMapRowSort?: List<FieldSortOptions>
    HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration
    HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration
    HeatMapColumnSort?: List<FieldSortOptions>

    constructor(properties: HeatMapSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class HeatMapVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: HeatMapConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: HeatMapVisual) {
        Object.assign(this, properties)
    }
}

export class HistogramAggregatedFieldWells {
    Values?: List<MeasureField>

    constructor(properties: HistogramAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class HistogramBinOptions {
    BinWidth?: BinWidthOptions
    StartValue?: Value<number>
    SelectedBinType?: Value<string>
    BinCount?: BinCountOptions

    constructor(properties: HistogramBinOptions) {
        Object.assign(this, properties)
    }
}

export class HistogramConfiguration {
    YAxisDisplayOptions?: AxisDisplayOptions
    DataLabels?: DataLabelOptions
    BinOptions?: HistogramBinOptions
    FieldWells?: HistogramFieldWells
    Tooltip?: TooltipOptions
    XAxisLabelOptions?: ChartAxisLabelOptions
    VisualPalette?: VisualPalette
    XAxisDisplayOptions?: AxisDisplayOptions

    constructor(properties: HistogramConfiguration) {
        Object.assign(this, properties)
    }
}

export class HistogramFieldWells {
    HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells

    constructor(properties: HistogramFieldWells) {
        Object.assign(this, properties)
    }
}

export class HistogramVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: HistogramConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions

    constructor(properties: HistogramVisual) {
        Object.assign(this, properties)
    }
}

export class InsightConfiguration {
    Computations?: List<Computation>
    CustomNarrative?: CustomNarrativeOptions

    constructor(properties: InsightConfiguration) {
        Object.assign(this, properties)
    }
}

export class InsightVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    Actions?: List<VisualCustomAction>
    DataSetIdentifier!: Value<string>
    InsightConfiguration?: InsightConfiguration
    Title?: VisualTitleLabelOptions

    constructor(properties: InsightVisual) {
        Object.assign(this, properties)
    }
}

export class IntegerDefaultValues {
    DynamicValue?: DynamicDefaultValue
    StaticValues?: List<Value<number>>

    constructor(properties: IntegerDefaultValues) {
        Object.assign(this, properties)
    }
}

export class IntegerParameter {
    Values!: List<Value<number>>
    Name!: Value<string>

    constructor(properties: IntegerParameter) {
        Object.assign(this, properties)
    }
}

export class IntegerParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>
    DefaultValues?: IntegerDefaultValues
    ParameterValueType!: Value<string>
    ValueWhenUnset?: IntegerValueWhenUnsetConfiguration
    Name!: Value<string>

    constructor(properties: IntegerParameterDeclaration) {
        Object.assign(this, properties)
    }
}

export class IntegerValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>
    CustomValue?: Value<number>

    constructor(properties: IntegerValueWhenUnsetConfiguration) {
        Object.assign(this, properties)
    }
}

export class ItemsLimitConfiguration {
    ItemsLimit?: Value<number>
    OtherCategories?: Value<string>

    constructor(properties: ItemsLimitConfiguration) {
        Object.assign(this, properties)
    }
}

export class KPIActualValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor
    Icon?: ConditionalFormattingIcon

    constructor(properties: KPIActualValueConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class KPIComparisonValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor
    Icon?: ConditionalFormattingIcon

    constructor(properties: KPIComparisonValueConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class KPIConditionalFormatting {
    ConditionalFormattingOptions?: List<KPIConditionalFormattingOption>

    constructor(properties: KPIConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class KPIConditionalFormattingOption {
    PrimaryValue?: KPIPrimaryValueConditionalFormatting
    ActualValue?: KPIActualValueConditionalFormatting
    ComparisonValue?: KPIComparisonValueConditionalFormatting
    ProgressBar?: KPIProgressBarConditionalFormatting

    constructor(properties: KPIConditionalFormattingOption) {
        Object.assign(this, properties)
    }
}

export class KPIConfiguration {
    SortConfiguration?: KPISortConfiguration
    KPIOptions?: KPIOptions
    FieldWells?: KPIFieldWells

    constructor(properties: KPIConfiguration) {
        Object.assign(this, properties)
    }
}

export class KPIFieldWells {
    TargetValues?: List<MeasureField>
    TrendGroups?: List<DimensionField>
    Values?: List<MeasureField>

    constructor(properties: KPIFieldWells) {
        Object.assign(this, properties)
    }
}

export class KPIOptions {
    SecondaryValueFontConfiguration?: FontConfiguration
    VisualLayoutOptions?: KPIVisualLayoutOptions
    TrendArrows?: TrendArrowOptions
    SecondaryValue?: SecondaryValueOptions
    Comparison?: ComparisonConfiguration
    PrimaryValueDisplayType?: Value<string>
    ProgressBar?: ProgressBarOptions
    PrimaryValueFontConfiguration?: FontConfiguration
    Sparkline?: KPISparklineOptions

    constructor(properties: KPIOptions) {
        Object.assign(this, properties)
    }
}

export class KPIPrimaryValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor
    Icon?: ConditionalFormattingIcon

    constructor(properties: KPIPrimaryValueConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class KPIProgressBarConditionalFormatting {
    ForegroundColor?: ConditionalFormattingColor

    constructor(properties: KPIProgressBarConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class KPISortConfiguration {
    TrendGroupSort?: List<FieldSortOptions>

    constructor(properties: KPISortConfiguration) {
        Object.assign(this, properties)
    }
}

export class KPISparklineOptions {
    Type!: Value<string>
    Color?: Value<string>
    TooltipVisibility?: Value<string>
    Visibility?: Value<string>

    constructor(properties: KPISparklineOptions) {
        Object.assign(this, properties)
    }
}

export class KPIVisual {
    Subtitle?: VisualSubtitleLabelOptions
    ConditionalFormatting?: KPIConditionalFormatting
    VisualId!: Value<string>
    ChartConfiguration?: KPIConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: KPIVisual) {
        Object.assign(this, properties)
    }
}

export class KPIVisualLayoutOptions {
    StandardLayout?: KPIVisualStandardLayout

    constructor(properties: KPIVisualLayoutOptions) {
        Object.assign(this, properties)
    }
}

export class KPIVisualStandardLayout {
    Type!: Value<string>

    constructor(properties: KPIVisualStandardLayout) {
        Object.assign(this, properties)
    }
}

export class LabelOptions {
    CustomLabel?: Value<string>
    Visibility?: Value<string>
    FontConfiguration?: FontConfiguration

    constructor(properties: LabelOptions) {
        Object.assign(this, properties)
    }
}

export class Layout {
    Configuration!: LayoutConfiguration

    constructor(properties: Layout) {
        Object.assign(this, properties)
    }
}

export class LayoutConfiguration {
    GridLayout?: GridLayoutConfiguration
    FreeFormLayout?: FreeFormLayoutConfiguration
    SectionBasedLayout?: SectionBasedLayoutConfiguration

    constructor(properties: LayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class LegendOptions {
    Position?: Value<string>
    Title?: LabelOptions
    Visibility?: Value<string>
    Height?: Value<string>
    Width?: Value<string>

    constructor(properties: LegendOptions) {
        Object.assign(this, properties)
    }
}

export class LineChartAggregatedFieldWells {
    Category?: List<DimensionField>
    Colors?: List<DimensionField>
    Values?: List<MeasureField>
    SmallMultiples?: List<DimensionField>

    constructor(properties: LineChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class LineChartConfiguration {
    SortConfiguration?: LineChartSortConfiguration
    Legend?: LegendOptions
    ReferenceLines?: List<ReferenceLine>
    DataLabels?: DataLabelOptions
    Tooltip?: TooltipOptions
    SmallMultiplesOptions?: SmallMultiplesOptions
    PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions
    VisualPalette?: VisualPalette
    XAxisDisplayOptions?: AxisDisplayOptions
    DefaultSeriesSettings?: LineChartDefaultSeriesSettings
    SecondaryYAxisLabelOptions?: ChartAxisLabelOptions
    ForecastConfigurations?: List<ForecastConfiguration>
    Series?: List<SeriesItem>
    Type?: Value<string>
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions
    ContributionAnalysisDefaults?: List<ContributionAnalysisDefault>
    FieldWells?: LineChartFieldWells
    SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions
    XAxisLabelOptions?: ChartAxisLabelOptions

    constructor(properties: LineChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class LineChartDefaultSeriesSettings {
    LineStyleSettings?: LineChartLineStyleSettings
    AxisBinding?: Value<string>
    MarkerStyleSettings?: LineChartMarkerStyleSettings

    constructor(properties: LineChartDefaultSeriesSettings) {
        Object.assign(this, properties)
    }
}

export class LineChartFieldWells {
    LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells

    constructor(properties: LineChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class LineChartLineStyleSettings {
    LineInterpolation?: Value<string>
    LineStyle?: Value<string>
    LineVisibility?: Value<string>
    LineWidth?: Value<string>

    constructor(properties: LineChartLineStyleSettings) {
        Object.assign(this, properties)
    }
}

export class LineChartMarkerStyleSettings {
    MarkerShape?: Value<string>
    MarkerSize?: Value<string>
    MarkerVisibility?: Value<string>
    MarkerColor?: Value<string>

    constructor(properties: LineChartMarkerStyleSettings) {
        Object.assign(this, properties)
    }
}

export class LineChartSeriesSettings {
    LineStyleSettings?: LineChartLineStyleSettings
    MarkerStyleSettings?: LineChartMarkerStyleSettings

    constructor(properties: LineChartSeriesSettings) {
        Object.assign(this, properties)
    }
}

export class LineChartSortConfiguration {
    CategoryItemsLimitConfiguration?: ItemsLimitConfiguration
    ColorItemsLimitConfiguration?: ItemsLimitConfiguration
    SmallMultiplesSort?: List<FieldSortOptions>
    CategorySort?: List<FieldSortOptions>
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration

    constructor(properties: LineChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class LineChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: LineChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: LineChartVisual) {
        Object.assign(this, properties)
    }
}

export class LineSeriesAxisDisplayOptions {
    MissingDataConfigurations?: List<MissingDataConfiguration>
    AxisOptions?: AxisDisplayOptions

    constructor(properties: LineSeriesAxisDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class ListControlDisplayOptions {
    TitleOptions?: LabelOptions
    SearchOptions?: ListControlSearchOptions
    SelectAllOptions?: ListControlSelectAllOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions

    constructor(properties: ListControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class ListControlSearchOptions {
    Visibility?: Value<string>

    constructor(properties: ListControlSearchOptions) {
        Object.assign(this, properties)
    }
}

export class ListControlSelectAllOptions {
    Visibility?: Value<string>

    constructor(properties: ListControlSelectAllOptions) {
        Object.assign(this, properties)
    }
}

export class LoadingAnimation {
    Visibility?: Value<string>

    constructor(properties: LoadingAnimation) {
        Object.assign(this, properties)
    }
}

export class LocalNavigationConfiguration {
    TargetSheetId!: Value<string>

    constructor(properties: LocalNavigationConfiguration) {
        Object.assign(this, properties)
    }
}

export class LongFormatText {
    RichText?: Value<string>
    PlainText?: Value<string>

    constructor(properties: LongFormatText) {
        Object.assign(this, properties)
    }
}

export class MappedDataSetParameter {
    DataSetParameterName!: Value<string>
    DataSetIdentifier!: Value<string>

    constructor(properties: MappedDataSetParameter) {
        Object.assign(this, properties)
    }
}

export class MaximumLabelType {
    Visibility?: Value<string>

    constructor(properties: MaximumLabelType) {
        Object.assign(this, properties)
    }
}

export class MaximumMinimumComputation {
    Type!: Value<string>
    Value?: MeasureField
    Time?: DimensionField
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: MaximumMinimumComputation) {
        Object.assign(this, properties)
    }
}

export class MeasureField {
    DateMeasureField?: DateMeasureField
    NumericalMeasureField?: NumericalMeasureField
    CategoricalMeasureField?: CategoricalMeasureField
    CalculatedMeasureField?: CalculatedMeasureField

    constructor(properties: MeasureField) {
        Object.assign(this, properties)
    }
}

export class MetricComparisonComputation {
    TargetValue?: MeasureField
    Time?: DimensionField
    ComputationId!: Value<string>
    FromValue?: MeasureField
    Name?: Value<string>

    constructor(properties: MetricComparisonComputation) {
        Object.assign(this, properties)
    }
}

export class MinimumLabelType {
    Visibility?: Value<string>

    constructor(properties: MinimumLabelType) {
        Object.assign(this, properties)
    }
}

export class MissingDataConfiguration {
    TreatmentOption?: Value<string>

    constructor(properties: MissingDataConfiguration) {
        Object.assign(this, properties)
    }
}

export class NegativeValueConfiguration {
    DisplayMode!: Value<string>

    constructor(properties: NegativeValueConfiguration) {
        Object.assign(this, properties)
    }
}

export class NullValueFormatConfiguration {
    NullString!: Value<string>

    constructor(properties: NullValueFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class NumberDisplayFormatConfiguration {
    NegativeValueConfiguration?: NegativeValueConfiguration
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration
    NumberScale?: Value<string>
    NullValueFormatConfiguration?: NullValueFormatConfiguration
    Suffix?: Value<string>
    SeparatorConfiguration?: NumericSeparatorConfiguration
    Prefix?: Value<string>

    constructor(properties: NumberDisplayFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class NumberFormatConfiguration {
    FormatConfiguration?: NumericFormatConfiguration

    constructor(properties: NumberFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class NumericAxisOptions {
    Scale?: AxisScale
    Range?: AxisDisplayRange

    constructor(properties: NumericAxisOptions) {
        Object.assign(this, properties)
    }
}

export class NumericEqualityDrillDownFilter {
    Column!: ColumnIdentifier
    Value!: Value<number>

    constructor(properties: NumericEqualityDrillDownFilter) {
        Object.assign(this, properties)
    }
}

export class NumericEqualityFilter {
    AggregationFunction?: AggregationFunction
    Column!: ColumnIdentifier
    Value?: Value<number>
    ParameterName?: Value<string>
    NullOption!: Value<string>
    MatchOperator!: Value<string>
    SelectAllOptions?: Value<string>
    FilterId!: Value<string>

    constructor(properties: NumericEqualityFilter) {
        Object.assign(this, properties)
    }
}

export class NumericFormatConfiguration {
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration
    CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration
    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration

    constructor(properties: NumericFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class NumericRangeFilter {
    AggregationFunction?: AggregationFunction
    Column!: ColumnIdentifier
    IncludeMaximum?: Value<boolean>
    RangeMinimum?: NumericRangeFilterValue
    NullOption!: Value<string>
    SelectAllOptions?: Value<string>
    FilterId!: Value<string>
    RangeMaximum?: NumericRangeFilterValue
    IncludeMinimum?: Value<boolean>

    constructor(properties: NumericRangeFilter) {
        Object.assign(this, properties)
    }
}

export class NumericRangeFilterValue {
    StaticValue?: Value<number>
    Parameter?: Value<string>

    constructor(properties: NumericRangeFilterValue) {
        Object.assign(this, properties)
    }
}

export class NumericSeparatorConfiguration {
    DecimalSeparator?: Value<string>
    ThousandsSeparator?: ThousandSeparatorOptions

    constructor(properties: NumericSeparatorConfiguration) {
        Object.assign(this, properties)
    }
}

export class NumericalAggregationFunction {
    PercentileAggregation?: PercentileAggregation
    SimpleNumericalAggregation?: Value<string>

    constructor(properties: NumericalAggregationFunction) {
        Object.assign(this, properties)
    }
}

export class NumericalDimensionField {
    HierarchyId?: Value<string>
    FormatConfiguration?: NumberFormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: NumericalDimensionField) {
        Object.assign(this, properties)
    }
}

export class NumericalMeasureField {
    AggregationFunction?: NumericalAggregationFunction
    FormatConfiguration?: NumberFormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: NumericalMeasureField) {
        Object.assign(this, properties)
    }
}

export class PaginationConfiguration {
    PageSize!: Value<number>
    PageNumber!: Value<number>

    constructor(properties: PaginationConfiguration) {
        Object.assign(this, properties)
    }
}

export class PanelConfiguration {
    BorderThickness?: Value<string>
    BorderStyle?: Value<string>
    GutterSpacing?: Value<string>
    BackgroundVisibility?: Value<string>
    BorderVisibility?: Value<string>
    BorderColor?: Value<string>
    Title?: PanelTitleOptions
    GutterVisibility?: Value<string>
    BackgroundColor?: Value<string>

    constructor(properties: PanelConfiguration) {
        Object.assign(this, properties)
    }
}

export class PanelTitleOptions {
    Visibility?: Value<string>
    FontConfiguration?: FontConfiguration
    HorizontalTextAlignment?: Value<string>

    constructor(properties: PanelTitleOptions) {
        Object.assign(this, properties)
    }
}

export class ParameterControl {
    Slider?: ParameterSliderControl
    TextArea?: ParameterTextAreaControl
    Dropdown?: ParameterDropDownControl
    TextField?: ParameterTextFieldControl
    List?: ParameterListControl
    DateTimePicker?: ParameterDateTimePickerControl

    constructor(properties: ParameterControl) {
        Object.assign(this, properties)
    }
}

export class ParameterDateTimePickerControl {
    ParameterControlId!: Value<string>
    DisplayOptions?: DateTimePickerControlDisplayOptions
    SourceParameterName!: Value<string>
    Title!: Value<string>

    constructor(properties: ParameterDateTimePickerControl) {
        Object.assign(this, properties)
    }
}

export class ParameterDeclaration {
    StringParameterDeclaration?: StringParameterDeclaration
    DateTimeParameterDeclaration?: DateTimeParameterDeclaration
    DecimalParameterDeclaration?: DecimalParameterDeclaration
    IntegerParameterDeclaration?: IntegerParameterDeclaration

    constructor(properties: ParameterDeclaration) {
        Object.assign(this, properties)
    }
}

export class ParameterDropDownControl {
    ParameterControlId!: Value<string>
    Type?: Value<string>
    DisplayOptions?: DropDownControlDisplayOptions
    SourceParameterName!: Value<string>
    CascadingControlConfiguration?: CascadingControlConfiguration
    Title!: Value<string>
    SelectableValues?: ParameterSelectableValues

    constructor(properties: ParameterDropDownControl) {
        Object.assign(this, properties)
    }
}

export class ParameterListControl {
    ParameterControlId!: Value<string>
    Type?: Value<string>
    DisplayOptions?: ListControlDisplayOptions
    SourceParameterName!: Value<string>
    CascadingControlConfiguration?: CascadingControlConfiguration
    Title!: Value<string>
    SelectableValues?: ParameterSelectableValues

    constructor(properties: ParameterListControl) {
        Object.assign(this, properties)
    }
}

export class ParameterSelectableValues {
    LinkToDataSetColumn?: ColumnIdentifier
    Values?: List<Value<string>>

    constructor(properties: ParameterSelectableValues) {
        Object.assign(this, properties)
    }
}

export class ParameterSliderControl {
    ParameterControlId!: Value<string>
    StepSize!: Value<number>
    DisplayOptions?: SliderControlDisplayOptions
    SourceParameterName!: Value<string>
    Title!: Value<string>
    MaximumValue!: Value<number>
    MinimumValue!: Value<number>

    constructor(properties: ParameterSliderControl) {
        Object.assign(this, properties)
    }
}

export class ParameterTextAreaControl {
    ParameterControlId!: Value<string>
    Delimiter?: Value<string>
    DisplayOptions?: TextAreaControlDisplayOptions
    SourceParameterName!: Value<string>
    Title!: Value<string>

    constructor(properties: ParameterTextAreaControl) {
        Object.assign(this, properties)
    }
}

export class ParameterTextFieldControl {
    ParameterControlId!: Value<string>
    DisplayOptions?: TextFieldControlDisplayOptions
    SourceParameterName!: Value<string>
    Title!: Value<string>

    constructor(properties: ParameterTextFieldControl) {
        Object.assign(this, properties)
    }
}

export class Parameters {
    StringParameters?: List<StringParameter>
    DecimalParameters?: List<DecimalParameter>
    IntegerParameters?: List<IntegerParameter>
    DateTimeParameters?: List<DateTimeParameter>

    constructor(properties: Parameters) {
        Object.assign(this, properties)
    }
}

export class PercentVisibleRange {
    From?: Value<number>
    To?: Value<number>

    constructor(properties: PercentVisibleRange) {
        Object.assign(this, properties)
    }
}

export class PercentageDisplayFormatConfiguration {
    NegativeValueConfiguration?: NegativeValueConfiguration
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration
    NullValueFormatConfiguration?: NullValueFormatConfiguration
    Suffix?: Value<string>
    SeparatorConfiguration?: NumericSeparatorConfiguration
    Prefix?: Value<string>

    constructor(properties: PercentageDisplayFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class PercentileAggregation {
    PercentileValue?: Value<number>

    constructor(properties: PercentileAggregation) {
        Object.assign(this, properties)
    }
}

export class PeriodOverPeriodComputation {
    Value?: MeasureField
    Time?: DimensionField
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: PeriodOverPeriodComputation) {
        Object.assign(this, properties)
    }
}

export class PeriodToDateComputation {
    PeriodTimeGranularity?: Value<string>
    Value?: MeasureField
    Time?: DimensionField
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: PeriodToDateComputation) {
        Object.assign(this, properties)
    }
}

export class PieChartAggregatedFieldWells {
    Category?: List<DimensionField>
    Values?: List<MeasureField>
    SmallMultiples?: List<DimensionField>

    constructor(properties: PieChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class PieChartConfiguration {
    SortConfiguration?: PieChartSortConfiguration
    Legend?: LegendOptions
    DataLabels?: DataLabelOptions
    ContributionAnalysisDefaults?: List<ContributionAnalysisDefault>
    CategoryLabelOptions?: ChartAxisLabelOptions
    FieldWells?: PieChartFieldWells
    Tooltip?: TooltipOptions
    DonutOptions?: DonutOptions
    SmallMultiplesOptions?: SmallMultiplesOptions
    ValueLabelOptions?: ChartAxisLabelOptions
    VisualPalette?: VisualPalette

    constructor(properties: PieChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class PieChartFieldWells {
    PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells

    constructor(properties: PieChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class PieChartSortConfiguration {
    SmallMultiplesSort?: List<FieldSortOptions>
    CategoryItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration

    constructor(properties: PieChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class PieChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: PieChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: PieChartVisual) {
        Object.assign(this, properties)
    }
}

export class PivotFieldSortOptions {
    SortBy!: PivotTableSortBy
    FieldId!: Value<string>

    constructor(properties: PivotFieldSortOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTableAggregatedFieldWells {
    Values?: List<MeasureField>
    Columns?: List<DimensionField>
    Rows?: List<DimensionField>

    constructor(properties: PivotTableAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class PivotTableCellConditionalFormatting {
    Scope?: PivotTableConditionalFormattingScope
    Scopes?: List<PivotTableConditionalFormattingScope>
    FieldId!: Value<string>
    TextFormat?: TextConditionalFormat

    constructor(properties: PivotTableCellConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class PivotTableConditionalFormatting {
    ConditionalFormattingOptions?: List<PivotTableConditionalFormattingOption>

    constructor(properties: PivotTableConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class PivotTableConditionalFormattingOption {
    Cell?: PivotTableCellConditionalFormatting

    constructor(properties: PivotTableConditionalFormattingOption) {
        Object.assign(this, properties)
    }
}

export class PivotTableConditionalFormattingScope {
    Role?: Value<string>

    constructor(properties: PivotTableConditionalFormattingScope) {
        Object.assign(this, properties)
    }
}

export class PivotTableConfiguration {
    SortConfiguration?: PivotTableSortConfiguration
    PaginatedReportOptions?: PivotTablePaginatedReportOptions
    TableOptions?: PivotTableOptions
    FieldWells?: PivotTableFieldWells
    FieldOptions?: PivotTableFieldOptions
    TotalOptions?: PivotTableTotalOptions

    constructor(properties: PivotTableConfiguration) {
        Object.assign(this, properties)
    }
}

export class PivotTableDataPathOption {
    DataPathList!: List<DataPathValue>
    Width?: Value<string>

    constructor(properties: PivotTableDataPathOption) {
        Object.assign(this, properties)
    }
}

export class PivotTableFieldCollapseStateOption {
    Target!: PivotTableFieldCollapseStateTarget
    State?: Value<string>

    constructor(properties: PivotTableFieldCollapseStateOption) {
        Object.assign(this, properties)
    }
}

export class PivotTableFieldCollapseStateTarget {
    FieldId?: Value<string>
    FieldDataPathValues?: List<DataPathValue>

    constructor(properties: PivotTableFieldCollapseStateTarget) {
        Object.assign(this, properties)
    }
}

export class PivotTableFieldOption {
    CustomLabel?: Value<string>
    FieldId!: Value<string>
    Visibility?: Value<string>

    constructor(properties: PivotTableFieldOption) {
        Object.assign(this, properties)
    }
}

export class PivotTableFieldOptions {
    CollapseStateOptions?: List<PivotTableFieldCollapseStateOption>
    DataPathOptions?: List<PivotTableDataPathOption>
    SelectedFieldOptions?: List<PivotTableFieldOption>

    constructor(properties: PivotTableFieldOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTableFieldSubtotalOptions {
    FieldId?: Value<string>

    constructor(properties: PivotTableFieldSubtotalOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTableFieldWells {
    PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells

    constructor(properties: PivotTableFieldWells) {
        Object.assign(this, properties)
    }
}

export class PivotTableOptions {
    RowFieldNamesStyle?: TableCellStyle
    RowHeaderStyle?: TableCellStyle
    CollapsedRowDimensionsVisibility?: Value<string>
    RowsLayout?: Value<string>
    MetricPlacement?: Value<string>
    DefaultCellWidth?: Value<string>
    ColumnNamesVisibility?: Value<string>
    RowsLabelOptions?: PivotTableRowsLabelOptions
    SingleMetricVisibility?: Value<string>
    ColumnHeaderStyle?: TableCellStyle
    ToggleButtonsVisibility?: Value<string>
    CellStyle?: TableCellStyle
    RowAlternateColorOptions?: RowAlternateColorOptions

    constructor(properties: PivotTableOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTablePaginatedReportOptions {
    OverflowColumnHeaderVisibility?: Value<string>
    VerticalOverflowVisibility?: Value<string>

    constructor(properties: PivotTablePaginatedReportOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTableRowsLabelOptions {
    CustomLabel?: Value<string>
    Visibility?: Value<string>

    constructor(properties: PivotTableRowsLabelOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTableSortBy {
    Field?: FieldSort
    DataPath?: DataPathSort
    Column?: ColumnSort

    constructor(properties: PivotTableSortBy) {
        Object.assign(this, properties)
    }
}

export class PivotTableSortConfiguration {
    FieldSortOptions?: List<PivotFieldSortOptions>

    constructor(properties: PivotTableSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class PivotTableTotalOptions {
    ColumnSubtotalOptions?: SubtotalOptions
    RowSubtotalOptions?: SubtotalOptions
    RowTotalOptions?: PivotTotalOptions
    ColumnTotalOptions?: PivotTotalOptions

    constructor(properties: PivotTableTotalOptions) {
        Object.assign(this, properties)
    }
}

export class PivotTableVisual {
    Subtitle?: VisualSubtitleLabelOptions
    ConditionalFormatting?: PivotTableConditionalFormatting
    VisualId!: Value<string>
    ChartConfiguration?: PivotTableConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions

    constructor(properties: PivotTableVisual) {
        Object.assign(this, properties)
    }
}

export class PivotTotalOptions {
    CustomLabel?: Value<string>
    TotalAggregationOptions?: List<TotalAggregationOption>
    ValueCellStyle?: TableCellStyle
    ScrollStatus?: Value<string>
    Placement?: Value<string>
    TotalCellStyle?: TableCellStyle
    TotalsVisibility?: Value<string>
    MetricHeaderCellStyle?: TableCellStyle

    constructor(properties: PivotTotalOptions) {
        Object.assign(this, properties)
    }
}

export class PredefinedHierarchy {
    HierarchyId!: Value<string>
    DrillDownFilters?: List<DrillDownFilter>
    Columns!: List<ColumnIdentifier>

    constructor(properties: PredefinedHierarchy) {
        Object.assign(this, properties)
    }
}

export class ProgressBarOptions {
    Visibility?: Value<string>

    constructor(properties: ProgressBarOptions) {
        Object.assign(this, properties)
    }
}

export class RadarChartAggregatedFieldWells {
    Category?: List<DimensionField>
    Color?: List<DimensionField>
    Values?: List<MeasureField>

    constructor(properties: RadarChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class RadarChartAreaStyleSettings {
    Visibility?: Value<string>

    constructor(properties: RadarChartAreaStyleSettings) {
        Object.assign(this, properties)
    }
}

export class RadarChartConfiguration {
    SortConfiguration?: RadarChartSortConfiguration
    Legend?: LegendOptions
    Shape?: Value<string>
    BaseSeriesSettings?: RadarChartSeriesSettings
    ColorLabelOptions?: ChartAxisLabelOptions
    CategoryLabelOptions?: ChartAxisLabelOptions
    AxesRangeScale?: Value<string>
    VisualPalette?: VisualPalette
    AlternateBandColorsVisibility?: Value<string>
    StartAngle?: Value<number>
    CategoryAxis?: AxisDisplayOptions
    FieldWells?: RadarChartFieldWells
    ColorAxis?: AxisDisplayOptions
    AlternateBandOddColor?: Value<string>
    AlternateBandEvenColor?: Value<string>

    constructor(properties: RadarChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class RadarChartFieldWells {
    RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells

    constructor(properties: RadarChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class RadarChartSeriesSettings {
    AreaStyleSettings?: RadarChartAreaStyleSettings

    constructor(properties: RadarChartSeriesSettings) {
        Object.assign(this, properties)
    }
}

export class RadarChartSortConfiguration {
    ColorSort?: List<FieldSortOptions>
    ColorItemsLimit?: ItemsLimitConfiguration
    CategoryItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>

    constructor(properties: RadarChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class RadarChartVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: RadarChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: RadarChartVisual) {
        Object.assign(this, properties)
    }
}

export class RangeEndsLabelType {
    Visibility?: Value<string>

    constructor(properties: RangeEndsLabelType) {
        Object.assign(this, properties)
    }
}

export class ReferenceLine {
    Status?: Value<string>
    DataConfiguration!: ReferenceLineDataConfiguration
    LabelConfiguration?: ReferenceLineLabelConfiguration
    StyleConfiguration?: ReferenceLineStyleConfiguration

    constructor(properties: ReferenceLine) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineCustomLabelConfiguration {
    CustomLabel!: Value<string>

    constructor(properties: ReferenceLineCustomLabelConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineDataConfiguration {
    DynamicConfiguration?: ReferenceLineDynamicDataConfiguration
    AxisBinding?: Value<string>
    SeriesType?: Value<string>
    StaticConfiguration?: ReferenceLineStaticDataConfiguration

    constructor(properties: ReferenceLineDataConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineDynamicDataConfiguration {
    Column!: ColumnIdentifier
    MeasureAggregationFunction?: AggregationFunction
    Calculation!: NumericalAggregationFunction

    constructor(properties: ReferenceLineDynamicDataConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineLabelConfiguration {
    HorizontalPosition?: Value<string>
    ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration
    CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration
    FontColor?: Value<string>
    FontConfiguration?: FontConfiguration
    VerticalPosition?: Value<string>

    constructor(properties: ReferenceLineLabelConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineStaticDataConfiguration {
    Value!: Value<number>

    constructor(properties: ReferenceLineStaticDataConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineStyleConfiguration {
    Pattern?: Value<string>
    Color?: Value<string>

    constructor(properties: ReferenceLineStyleConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReferenceLineValueLabelConfiguration {
    FormatConfiguration?: NumericFormatConfiguration
    RelativePosition?: Value<string>

    constructor(properties: ReferenceLineValueLabelConfiguration) {
        Object.assign(this, properties)
    }
}

export class RelativeDateTimeControlDisplayOptions {
    TitleOptions?: LabelOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions
    DateTimeFormat?: Value<string>

    constructor(properties: RelativeDateTimeControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class RelativeDatesFilter {
    RelativeDateValue?: Value<number>
    Column!: ColumnIdentifier
    RelativeDateType!: Value<string>
    TimeGranularity!: Value<string>
    ParameterName?: Value<string>
    NullOption!: Value<string>
    FilterId!: Value<string>
    AnchorDateConfiguration!: AnchorDateConfiguration
    MinimumGranularity?: Value<string>
    ExcludePeriodConfiguration?: ExcludePeriodConfiguration

    constructor(properties: RelativeDatesFilter) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Actions!: List<Value<string>>
    Resource?: Value<string>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class RollingDateConfiguration {
    Expression!: Value<string>
    DataSetIdentifier?: Value<string>

    constructor(properties: RollingDateConfiguration) {
        Object.assign(this, properties)
    }
}

export class RowAlternateColorOptions {
    Status?: Value<string>
    UsePrimaryBackgroundColor?: Value<string>
    RowAlternateColors?: List<Value<string>>

    constructor(properties: RowAlternateColorOptions) {
        Object.assign(this, properties)
    }
}

export class SameSheetTargetVisualConfiguration {
    TargetVisualOptions?: Value<string>
    TargetVisuals?: List<Value<string>>

    constructor(properties: SameSheetTargetVisualConfiguration) {
        Object.assign(this, properties)
    }
}

export class SankeyDiagramAggregatedFieldWells {
    Destination?: List<DimensionField>
    Source?: List<DimensionField>
    Weight?: List<MeasureField>

    constructor(properties: SankeyDiagramAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class SankeyDiagramChartConfiguration {
    SortConfiguration?: SankeyDiagramSortConfiguration
    DataLabels?: DataLabelOptions
    FieldWells?: SankeyDiagramFieldWells

    constructor(properties: SankeyDiagramChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class SankeyDiagramFieldWells {
    SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells

    constructor(properties: SankeyDiagramFieldWells) {
        Object.assign(this, properties)
    }
}

export class SankeyDiagramSortConfiguration {
    WeightSort?: List<FieldSortOptions>
    SourceItemsLimit?: ItemsLimitConfiguration
    DestinationItemsLimit?: ItemsLimitConfiguration

    constructor(properties: SankeyDiagramSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class SankeyDiagramVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: SankeyDiagramChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions

    constructor(properties: SankeyDiagramVisual) {
        Object.assign(this, properties)
    }
}

export class ScatterPlotCategoricallyAggregatedFieldWells {
    Category?: List<DimensionField>
    Size?: List<MeasureField>
    Label?: List<DimensionField>
    XAxis?: List<MeasureField>
    YAxis?: List<MeasureField>

    constructor(properties: ScatterPlotCategoricallyAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class ScatterPlotConfiguration {
    YAxisLabelOptions?: ChartAxisLabelOptions
    Legend?: LegendOptions
    YAxisDisplayOptions?: AxisDisplayOptions
    DataLabels?: DataLabelOptions
    FieldWells?: ScatterPlotFieldWells
    Tooltip?: TooltipOptions
    XAxisLabelOptions?: ChartAxisLabelOptions
    VisualPalette?: VisualPalette
    XAxisDisplayOptions?: AxisDisplayOptions

    constructor(properties: ScatterPlotConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScatterPlotFieldWells {
    ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells
    ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells

    constructor(properties: ScatterPlotFieldWells) {
        Object.assign(this, properties)
    }
}

export class ScatterPlotUnaggregatedFieldWells {
    Category?: List<DimensionField>
    Size?: List<MeasureField>
    Label?: List<DimensionField>
    XAxis?: List<DimensionField>
    YAxis?: List<DimensionField>

    constructor(properties: ScatterPlotUnaggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class ScatterPlotVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: ScatterPlotConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: ScatterPlotVisual) {
        Object.assign(this, properties)
    }
}

export class ScrollBarOptions {
    VisibleRange?: VisibleRangeOptions
    Visibility?: Value<string>

    constructor(properties: ScrollBarOptions) {
        Object.assign(this, properties)
    }
}

export class SecondaryValueOptions {
    Visibility?: Value<string>

    constructor(properties: SecondaryValueOptions) {
        Object.assign(this, properties)
    }
}

export class SectionAfterPageBreak {
    Status?: Value<string>

    constructor(properties: SectionAfterPageBreak) {
        Object.assign(this, properties)
    }
}

export class SectionBasedLayoutCanvasSizeOptions {
    PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions

    constructor(properties: SectionBasedLayoutCanvasSizeOptions) {
        Object.assign(this, properties)
    }
}

export class SectionBasedLayoutConfiguration {
    CanvasSizeOptions!: SectionBasedLayoutCanvasSizeOptions
    FooterSections!: List<HeaderFooterSectionConfiguration>
    BodySections!: List<BodySectionConfiguration>
    HeaderSections!: List<HeaderFooterSectionConfiguration>

    constructor(properties: SectionBasedLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class SectionBasedLayoutPaperCanvasSizeOptions {
    PaperMargin?: Spacing
    PaperSize?: Value<string>
    PaperOrientation?: Value<string>

    constructor(properties: SectionBasedLayoutPaperCanvasSizeOptions) {
        Object.assign(this, properties)
    }
}

export class SectionLayoutConfiguration {
    FreeFormLayout!: FreeFormSectionLayoutConfiguration

    constructor(properties: SectionLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class SectionPageBreakConfiguration {
    After?: SectionAfterPageBreak

    constructor(properties: SectionPageBreakConfiguration) {
        Object.assign(this, properties)
    }
}

export class SectionStyle {
    Padding?: Spacing
    Height?: Value<string>

    constructor(properties: SectionStyle) {
        Object.assign(this, properties)
    }
}

export class SelectedSheetsFilterScopeConfiguration {
    SheetVisualScopingConfigurations?: List<SheetVisualScopingConfiguration>

    constructor(properties: SelectedSheetsFilterScopeConfiguration) {
        Object.assign(this, properties)
    }
}

export class SeriesItem {
    FieldSeriesItem?: FieldSeriesItem
    DataFieldSeriesItem?: DataFieldSeriesItem

    constructor(properties: SeriesItem) {
        Object.assign(this, properties)
    }
}

export class SetParameterValueConfiguration {
    DestinationParameterName!: Value<string>
    Value!: DestinationParameterValueConfiguration

    constructor(properties: SetParameterValueConfiguration) {
        Object.assign(this, properties)
    }
}

export class ShapeConditionalFormat {
    BackgroundColor!: ConditionalFormattingColor

    constructor(properties: ShapeConditionalFormat) {
        Object.assign(this, properties)
    }
}

export class Sheet {
    SheetId?: Value<string>
    Name?: Value<string>

    constructor(properties: Sheet) {
        Object.assign(this, properties)
    }
}

export class SheetControlInfoIconLabelOptions {
    Visibility?: Value<string>
    InfoIconText?: Value<string>

    constructor(properties: SheetControlInfoIconLabelOptions) {
        Object.assign(this, properties)
    }
}

export class SheetControlLayout {
    Configuration!: SheetControlLayoutConfiguration

    constructor(properties: SheetControlLayout) {
        Object.assign(this, properties)
    }
}

export class SheetControlLayoutConfiguration {
    GridLayout?: GridLayoutConfiguration

    constructor(properties: SheetControlLayoutConfiguration) {
        Object.assign(this, properties)
    }
}

export class SheetDefinition {
    Description?: Value<string>
    ParameterControls?: List<ParameterControl>
    TextBoxes?: List<SheetTextBox>
    Layouts?: List<Layout>
    ContentType?: Value<string>
    SheetId!: Value<string>
    FilterControls?: List<FilterControl>
    SheetControlLayouts?: List<SheetControlLayout>
    Title?: Value<string>
    Visuals?: List<Visual>
    Name?: Value<string>

    constructor(properties: SheetDefinition) {
        Object.assign(this, properties)
    }
}

export class SheetElementConfigurationOverrides {
    Visibility?: Value<string>

    constructor(properties: SheetElementConfigurationOverrides) {
        Object.assign(this, properties)
    }
}

export class SheetElementRenderingRule {
    Expression!: Value<string>
    ConfigurationOverrides!: SheetElementConfigurationOverrides

    constructor(properties: SheetElementRenderingRule) {
        Object.assign(this, properties)
    }
}

export class SheetTextBox {
    SheetTextBoxId!: Value<string>
    Content?: Value<string>

    constructor(properties: SheetTextBox) {
        Object.assign(this, properties)
    }
}

export class SheetVisualScopingConfiguration {
    Scope!: Value<string>
    SheetId!: Value<string>
    VisualIds?: List<Value<string>>

    constructor(properties: SheetVisualScopingConfiguration) {
        Object.assign(this, properties)
    }
}

export class ShortFormatText {
    RichText?: Value<string>
    PlainText?: Value<string>

    constructor(properties: ShortFormatText) {
        Object.assign(this, properties)
    }
}

export class SimpleClusterMarker {
    Color?: Value<string>

    constructor(properties: SimpleClusterMarker) {
        Object.assign(this, properties)
    }
}

export class SliderControlDisplayOptions {
    TitleOptions?: LabelOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions

    constructor(properties: SliderControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class SmallMultiplesAxisProperties {
    Placement?: Value<string>
    Scale?: Value<string>

    constructor(properties: SmallMultiplesAxisProperties) {
        Object.assign(this, properties)
    }
}

export class SmallMultiplesOptions {
    MaxVisibleRows?: Value<number>
    PanelConfiguration?: PanelConfiguration
    MaxVisibleColumns?: Value<number>
    XAxis?: SmallMultiplesAxisProperties
    YAxis?: SmallMultiplesAxisProperties

    constructor(properties: SmallMultiplesOptions) {
        Object.assign(this, properties)
    }
}

export class Spacing {
    Left?: Value<string>
    Top?: Value<string>
    Right?: Value<string>
    Bottom?: Value<string>

    constructor(properties: Spacing) {
        Object.assign(this, properties)
    }
}

export class StringDefaultValues {
    DynamicValue?: DynamicDefaultValue
    StaticValues?: List<Value<string>>

    constructor(properties: StringDefaultValues) {
        Object.assign(this, properties)
    }
}

export class StringFormatConfiguration {
    NumericFormatConfiguration?: NumericFormatConfiguration
    NullValueFormatConfiguration?: NullValueFormatConfiguration

    constructor(properties: StringFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class StringParameter {
    Values!: List<Value<string>>
    Name!: Value<string>

    constructor(properties: StringParameter) {
        Object.assign(this, properties)
    }
}

export class StringParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>
    DefaultValues?: StringDefaultValues
    ParameterValueType!: Value<string>
    ValueWhenUnset?: StringValueWhenUnsetConfiguration
    Name!: Value<string>

    constructor(properties: StringParameterDeclaration) {
        Object.assign(this, properties)
    }
}

export class StringValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>
    CustomValue?: Value<string>

    constructor(properties: StringValueWhenUnsetConfiguration) {
        Object.assign(this, properties)
    }
}

export class SubtotalOptions {
    CustomLabel?: Value<string>
    FieldLevelOptions?: List<PivotTableFieldSubtotalOptions>
    ValueCellStyle?: TableCellStyle
    TotalCellStyle?: TableCellStyle
    TotalsVisibility?: Value<string>
    FieldLevel?: Value<string>
    MetricHeaderCellStyle?: TableCellStyle
    StyleTargets?: List<TableStyleTarget>

    constructor(properties: SubtotalOptions) {
        Object.assign(this, properties)
    }
}

export class TableAggregatedFieldWells {
    GroupBy?: List<DimensionField>
    Values?: List<MeasureField>

    constructor(properties: TableAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class TableBorderOptions {
    Thickness?: Value<number>
    Color?: Value<string>
    Style?: Value<string>

    constructor(properties: TableBorderOptions) {
        Object.assign(this, properties)
    }
}

export class TableCellConditionalFormatting {
    FieldId!: Value<string>
    TextFormat?: TextConditionalFormat

    constructor(properties: TableCellConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class TableCellImageSizingConfiguration {
    TableCellImageScalingConfiguration?: Value<string>

    constructor(properties: TableCellImageSizingConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableCellStyle {
    VerticalTextAlignment?: Value<string>
    Visibility?: Value<string>
    Height?: Value<number>
    FontConfiguration?: FontConfiguration
    Border?: GlobalTableBorderOptions
    TextWrap?: Value<string>
    HorizontalTextAlignment?: Value<string>
    BackgroundColor?: Value<string>

    constructor(properties: TableCellStyle) {
        Object.assign(this, properties)
    }
}

export class TableConditionalFormatting {
    ConditionalFormattingOptions?: List<TableConditionalFormattingOption>

    constructor(properties: TableConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class TableConditionalFormattingOption {
    Row?: TableRowConditionalFormatting
    Cell?: TableCellConditionalFormatting

    constructor(properties: TableConditionalFormattingOption) {
        Object.assign(this, properties)
    }
}

export class TableConfiguration {
    SortConfiguration?: TableSortConfiguration
    PaginatedReportOptions?: TablePaginatedReportOptions
    TableOptions?: TableOptions
    TableInlineVisualizations?: List<TableInlineVisualization>
    FieldWells?: TableFieldWells
    FieldOptions?: TableFieldOptions
    TotalOptions?: TotalOptions

    constructor(properties: TableConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableFieldCustomIconContent {
    Icon?: Value<string>

    constructor(properties: TableFieldCustomIconContent) {
        Object.assign(this, properties)
    }
}

export class TableFieldCustomTextContent {
    Value?: Value<string>
    FontConfiguration!: FontConfiguration

    constructor(properties: TableFieldCustomTextContent) {
        Object.assign(this, properties)
    }
}

export class TableFieldImageConfiguration {
    SizingOptions?: TableCellImageSizingConfiguration

    constructor(properties: TableFieldImageConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableFieldLinkConfiguration {
    Target!: Value<string>
    Content!: TableFieldLinkContentConfiguration

    constructor(properties: TableFieldLinkConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableFieldLinkContentConfiguration {
    CustomIconContent?: TableFieldCustomIconContent
    CustomTextContent?: TableFieldCustomTextContent

    constructor(properties: TableFieldLinkContentConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableFieldOption {
    CustomLabel?: Value<string>
    URLStyling?: TableFieldURLConfiguration
    FieldId!: Value<string>
    Visibility?: Value<string>
    Width?: Value<string>

    constructor(properties: TableFieldOption) {
        Object.assign(this, properties)
    }
}

export class TableFieldOptions {
    Order?: List<Value<string>>
    PinnedFieldOptions?: TablePinnedFieldOptions
    SelectedFieldOptions?: List<TableFieldOption>

    constructor(properties: TableFieldOptions) {
        Object.assign(this, properties)
    }
}

export class TableFieldURLConfiguration {
    LinkConfiguration?: TableFieldLinkConfiguration
    ImageConfiguration?: TableFieldImageConfiguration

    constructor(properties: TableFieldURLConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableFieldWells {
    TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells
    TableAggregatedFieldWells?: TableAggregatedFieldWells

    constructor(properties: TableFieldWells) {
        Object.assign(this, properties)
    }
}

export class TableInlineVisualization {
    DataBars?: DataBarsOptions

    constructor(properties: TableInlineVisualization) {
        Object.assign(this, properties)
    }
}

export class TableOptions {
    HeaderStyle?: TableCellStyle
    CellStyle?: TableCellStyle
    Orientation?: Value<string>
    RowAlternateColorOptions?: RowAlternateColorOptions

    constructor(properties: TableOptions) {
        Object.assign(this, properties)
    }
}

export class TablePaginatedReportOptions {
    OverflowColumnHeaderVisibility?: Value<string>
    VerticalOverflowVisibility?: Value<string>

    constructor(properties: TablePaginatedReportOptions) {
        Object.assign(this, properties)
    }
}

export class TablePinnedFieldOptions {
    PinnedLeftFields?: List<Value<string>>

    constructor(properties: TablePinnedFieldOptions) {
        Object.assign(this, properties)
    }
}

export class TableRowConditionalFormatting {
    TextColor?: ConditionalFormattingColor
    BackgroundColor?: ConditionalFormattingColor

    constructor(properties: TableRowConditionalFormatting) {
        Object.assign(this, properties)
    }
}

export class TableSideBorderOptions {
    Left?: TableBorderOptions
    Top?: TableBorderOptions
    InnerHorizontal?: TableBorderOptions
    Right?: TableBorderOptions
    Bottom?: TableBorderOptions
    InnerVertical?: TableBorderOptions

    constructor(properties: TableSideBorderOptions) {
        Object.assign(this, properties)
    }
}

export class TableSortConfiguration {
    RowSort?: List<FieldSortOptions>
    PaginationConfiguration?: PaginationConfiguration

    constructor(properties: TableSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class TableStyleTarget {
    CellType!: Value<string>

    constructor(properties: TableStyleTarget) {
        Object.assign(this, properties)
    }
}

export class TableUnaggregatedFieldWells {
    Values?: List<UnaggregatedField>

    constructor(properties: TableUnaggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class TableVisual {
    Subtitle?: VisualSubtitleLabelOptions
    ConditionalFormatting?: TableConditionalFormatting
    VisualId!: Value<string>
    ChartConfiguration?: TableConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions

    constructor(properties: TableVisual) {
        Object.assign(this, properties)
    }
}

export class TextAreaControlDisplayOptions {
    TitleOptions?: LabelOptions
    PlaceholderOptions?: TextControlPlaceholderOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions

    constructor(properties: TextAreaControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class TextConditionalFormat {
    TextColor?: ConditionalFormattingColor
    Icon?: ConditionalFormattingIcon
    BackgroundColor?: ConditionalFormattingColor

    constructor(properties: TextConditionalFormat) {
        Object.assign(this, properties)
    }
}

export class TextControlPlaceholderOptions {
    Visibility?: Value<string>

    constructor(properties: TextControlPlaceholderOptions) {
        Object.assign(this, properties)
    }
}

export class TextFieldControlDisplayOptions {
    TitleOptions?: LabelOptions
    PlaceholderOptions?: TextControlPlaceholderOptions
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions

    constructor(properties: TextFieldControlDisplayOptions) {
        Object.assign(this, properties)
    }
}

export class ThousandSeparatorOptions {
    Symbol?: Value<string>
    Visibility?: Value<string>

    constructor(properties: ThousandSeparatorOptions) {
        Object.assign(this, properties)
    }
}

export class TimeBasedForecastProperties {
    PeriodsBackward?: Value<number>
    PeriodsForward?: Value<number>
    PredictionInterval?: Value<number>
    Seasonality?: Value<number>
    UpperBoundary?: Value<number>
    LowerBoundary?: Value<number>

    constructor(properties: TimeBasedForecastProperties) {
        Object.assign(this, properties)
    }
}

export class TimeEqualityFilter {
    Column!: ColumnIdentifier
    RollingDate?: RollingDateConfiguration
    Value?: Value<string>
    TimeGranularity?: Value<string>
    ParameterName?: Value<string>
    FilterId!: Value<string>

    constructor(properties: TimeEqualityFilter) {
        Object.assign(this, properties)
    }
}

export class TimeRangeDrillDownFilter {
    Column!: ColumnIdentifier
    RangeMinimum!: Value<string>
    TimeGranularity!: Value<string>
    RangeMaximum!: Value<string>

    constructor(properties: TimeRangeDrillDownFilter) {
        Object.assign(this, properties)
    }
}

export class TimeRangeFilter {
    RangeMinimumValue?: TimeRangeFilterValue
    Column!: ColumnIdentifier
    RangeMaximumValue?: TimeRangeFilterValue
    IncludeMaximum?: Value<boolean>
    TimeGranularity?: Value<string>
    NullOption!: Value<string>
    FilterId!: Value<string>
    IncludeMinimum?: Value<boolean>
    ExcludePeriodConfiguration?: ExcludePeriodConfiguration

    constructor(properties: TimeRangeFilter) {
        Object.assign(this, properties)
    }
}

export class TimeRangeFilterValue {
    RollingDate?: RollingDateConfiguration
    StaticValue?: Value<string>
    Parameter?: Value<string>

    constructor(properties: TimeRangeFilterValue) {
        Object.assign(this, properties)
    }
}

export class TooltipItem {
    FieldTooltipItem?: FieldTooltipItem
    ColumnTooltipItem?: ColumnTooltipItem

    constructor(properties: TooltipItem) {
        Object.assign(this, properties)
    }
}

export class TooltipOptions {
    SelectedTooltipType?: Value<string>
    TooltipVisibility?: Value<string>
    FieldBasedTooltip?: FieldBasedTooltip

    constructor(properties: TooltipOptions) {
        Object.assign(this, properties)
    }
}

export class TopBottomFilter {
    AggregationSortConfigurations!: List<AggregationSortConfiguration>
    Column!: ColumnIdentifier
    TimeGranularity?: Value<string>
    ParameterName?: Value<string>
    Limit?: Value<number>
    FilterId!: Value<string>

    constructor(properties: TopBottomFilter) {
        Object.assign(this, properties)
    }
}

export class TopBottomMoversComputation {
    Type!: Value<string>
    Category?: DimensionField
    Value?: MeasureField
    SortOrder?: Value<string>
    Time?: DimensionField
    MoverSize?: Value<number>
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: TopBottomMoversComputation) {
        Object.assign(this, properties)
    }
}

export class TopBottomRankedComputation {
    Type!: Value<string>
    Category?: DimensionField
    ResultSize?: Value<number>
    Value?: MeasureField
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: TopBottomRankedComputation) {
        Object.assign(this, properties)
    }
}

export class TotalAggregationComputation {
    Value?: MeasureField
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: TotalAggregationComputation) {
        Object.assign(this, properties)
    }
}

export class TotalAggregationFunction {
    SimpleTotalAggregationFunction?: Value<string>

    constructor(properties: TotalAggregationFunction) {
        Object.assign(this, properties)
    }
}

export class TotalAggregationOption {
    TotalAggregationFunction!: TotalAggregationFunction
    FieldId!: Value<string>

    constructor(properties: TotalAggregationOption) {
        Object.assign(this, properties)
    }
}

export class TotalOptions {
    CustomLabel?: Value<string>
    TotalAggregationOptions?: List<TotalAggregationOption>
    ScrollStatus?: Value<string>
    Placement?: Value<string>
    TotalCellStyle?: TableCellStyle
    TotalsVisibility?: Value<string>

    constructor(properties: TotalOptions) {
        Object.assign(this, properties)
    }
}

export class TreeMapAggregatedFieldWells {
    Sizes?: List<MeasureField>
    Colors?: List<MeasureField>
    Groups?: List<DimensionField>

    constructor(properties: TreeMapAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class TreeMapConfiguration {
    SortConfiguration?: TreeMapSortConfiguration
    Legend?: LegendOptions
    DataLabels?: DataLabelOptions
    ColorLabelOptions?: ChartAxisLabelOptions
    SizeLabelOptions?: ChartAxisLabelOptions
    FieldWells?: TreeMapFieldWells
    Tooltip?: TooltipOptions
    ColorScale?: ColorScale
    GroupLabelOptions?: ChartAxisLabelOptions

    constructor(properties: TreeMapConfiguration) {
        Object.assign(this, properties)
    }
}

export class TreeMapFieldWells {
    TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells

    constructor(properties: TreeMapFieldWells) {
        Object.assign(this, properties)
    }
}

export class TreeMapSortConfiguration {
    TreeMapSort?: List<FieldSortOptions>
    TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration

    constructor(properties: TreeMapSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class TreeMapVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: TreeMapConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: TreeMapVisual) {
        Object.assign(this, properties)
    }
}

export class TrendArrowOptions {
    Visibility?: Value<string>

    constructor(properties: TrendArrowOptions) {
        Object.assign(this, properties)
    }
}

export class UnaggregatedField {
    FormatConfiguration?: FormatConfiguration
    Column!: ColumnIdentifier
    FieldId!: Value<string>

    constructor(properties: UnaggregatedField) {
        Object.assign(this, properties)
    }
}

export class UniqueValuesComputation {
    Category?: DimensionField
    ComputationId!: Value<string>
    Name?: Value<string>

    constructor(properties: UniqueValuesComputation) {
        Object.assign(this, properties)
    }
}

export class ValidationStrategy {
    Mode!: Value<string>

    constructor(properties: ValidationStrategy) {
        Object.assign(this, properties)
    }
}

export class VisibleRangeOptions {
    PercentRange?: PercentVisibleRange

    constructor(properties: VisibleRangeOptions) {
        Object.assign(this, properties)
    }
}

export class Visual {
    FunnelChartVisual?: FunnelChartVisual
    FilledMapVisual?: FilledMapVisual
    BoxPlotVisual?: BoxPlotVisual
    WaterfallVisual?: WaterfallVisual
    CustomContentVisual?: CustomContentVisual
    PieChartVisual?: PieChartVisual
    KPIVisual?: KPIVisual
    HistogramVisual?: HistogramVisual
    TableVisual?: TableVisual
    PivotTableVisual?: PivotTableVisual
    GeospatialMapVisual?: GeospatialMapVisual
    BarChartVisual?: BarChartVisual
    ScatterPlotVisual?: ScatterPlotVisual
    RadarChartVisual?: RadarChartVisual
    HeatMapVisual?: HeatMapVisual
    TreeMapVisual?: TreeMapVisual
    ComboChartVisual?: ComboChartVisual
    WordCloudVisual?: WordCloudVisual
    InsightVisual?: InsightVisual
    SankeyDiagramVisual?: SankeyDiagramVisual
    GaugeChartVisual?: GaugeChartVisual
    LineChartVisual?: LineChartVisual
    EmptyVisual?: EmptyVisual

    constructor(properties: Visual) {
        Object.assign(this, properties)
    }
}

export class VisualCustomAction {
    Status?: Value<string>
    Trigger!: Value<string>
    CustomActionId!: Value<string>
    Name!: Value<string>
    ActionOperations!: List<VisualCustomActionOperation>

    constructor(properties: VisualCustomAction) {
        Object.assign(this, properties)
    }
}

export class VisualCustomActionOperation {
    NavigationOperation?: CustomActionNavigationOperation
    SetParametersOperation?: CustomActionSetParametersOperation
    FilterOperation?: CustomActionFilterOperation
    URLOperation?: CustomActionURLOperation

    constructor(properties: VisualCustomActionOperation) {
        Object.assign(this, properties)
    }
}

export class VisualPalette {
    ChartColor?: Value<string>
    ColorMap?: List<DataPathColor>

    constructor(properties: VisualPalette) {
        Object.assign(this, properties)
    }
}

export class VisualSubtitleLabelOptions {
    Visibility?: Value<string>
    FormatText?: LongFormatText

    constructor(properties: VisualSubtitleLabelOptions) {
        Object.assign(this, properties)
    }
}

export class VisualTitleLabelOptions {
    Visibility?: Value<string>
    FormatText?: ShortFormatText

    constructor(properties: VisualTitleLabelOptions) {
        Object.assign(this, properties)
    }
}

export class WaterfallChartAggregatedFieldWells {
    Categories?: List<DimensionField>
    Breakdowns?: List<DimensionField>
    Values?: List<MeasureField>

    constructor(properties: WaterfallChartAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class WaterfallChartConfiguration {
    CategoryAxisLabelOptions?: ChartAxisLabelOptions
    SortConfiguration?: WaterfallChartSortConfiguration
    Legend?: LegendOptions
    DataLabels?: DataLabelOptions
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions
    FieldWells?: WaterfallChartFieldWells
    WaterfallChartOptions?: WaterfallChartOptions
    CategoryAxisDisplayOptions?: AxisDisplayOptions
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions
    VisualPalette?: VisualPalette

    constructor(properties: WaterfallChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class WaterfallChartFieldWells {
    WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells

    constructor(properties: WaterfallChartFieldWells) {
        Object.assign(this, properties)
    }
}

export class WaterfallChartOptions {
    TotalBarLabel?: Value<string>

    constructor(properties: WaterfallChartOptions) {
        Object.assign(this, properties)
    }
}

export class WaterfallChartSortConfiguration {
    BreakdownItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>

    constructor(properties: WaterfallChartSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class WaterfallVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: WaterfallChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: WaterfallVisual) {
        Object.assign(this, properties)
    }
}

export class WhatIfPointScenario {
    Value!: Value<number>
    Date!: Value<string>

    constructor(properties: WhatIfPointScenario) {
        Object.assign(this, properties)
    }
}

export class WhatIfRangeScenario {
    StartDate!: Value<string>
    Value!: Value<number>
    EndDate!: Value<string>

    constructor(properties: WhatIfRangeScenario) {
        Object.assign(this, properties)
    }
}

export class WordCloudAggregatedFieldWells {
    GroupBy?: List<DimensionField>
    Size?: List<MeasureField>

    constructor(properties: WordCloudAggregatedFieldWells) {
        Object.assign(this, properties)
    }
}

export class WordCloudChartConfiguration {
    SortConfiguration?: WordCloudSortConfiguration
    CategoryLabelOptions?: ChartAxisLabelOptions
    FieldWells?: WordCloudFieldWells
    WordCloudOptions?: WordCloudOptions

    constructor(properties: WordCloudChartConfiguration) {
        Object.assign(this, properties)
    }
}

export class WordCloudFieldWells {
    WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells

    constructor(properties: WordCloudFieldWells) {
        Object.assign(this, properties)
    }
}

export class WordCloudOptions {
    WordOrientation?: Value<string>
    WordScaling?: Value<string>
    CloudLayout?: Value<string>
    MaximumStringLength?: Value<number>
    WordCasing?: Value<string>
    WordPadding?: Value<string>

    constructor(properties: WordCloudOptions) {
        Object.assign(this, properties)
    }
}

export class WordCloudSortConfiguration {
    CategoryItemsLimit?: ItemsLimitConfiguration
    CategorySort?: List<FieldSortOptions>

    constructor(properties: WordCloudSortConfiguration) {
        Object.assign(this, properties)
    }
}

export class WordCloudVisual {
    Subtitle?: VisualSubtitleLabelOptions
    VisualId!: Value<string>
    ChartConfiguration?: WordCloudChartConfiguration
    Actions?: List<VisualCustomAction>
    Title?: VisualTitleLabelOptions
    ColumnHierarchies?: List<ColumnHierarchy>

    constructor(properties: WordCloudVisual) {
        Object.assign(this, properties)
    }
}

export interface AnalysisProperties {
    Status?: Value<string>
    Parameters?: Parameters
    SourceEntity?: AnalysisSourceEntity
    ThemeArn?: Value<string>
    AnalysisId: Value<string>
    Definition?: AnalysisDefinition
    AwsAccountId: Value<string>
    Permissions?: List<ResourcePermission>
    ValidationStrategy?: ValidationStrategy
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Analysis extends ResourceBase<AnalysisProperties> {
    static AggregationFunction = AggregationFunction
    static AggregationSortConfiguration = AggregationSortConfiguration
    static AnalysisDefaults = AnalysisDefaults
    static AnalysisDefinition = AnalysisDefinition
    static AnalysisError = AnalysisError
    static AnalysisSourceEntity = AnalysisSourceEntity
    static AnalysisSourceTemplate = AnalysisSourceTemplate
    static AnchorDateConfiguration = AnchorDateConfiguration
    static ArcAxisConfiguration = ArcAxisConfiguration
    static ArcAxisDisplayRange = ArcAxisDisplayRange
    static ArcConfiguration = ArcConfiguration
    static ArcOptions = ArcOptions
    static AssetOptions = AssetOptions
    static AttributeAggregationFunction = AttributeAggregationFunction
    static AxisDataOptions = AxisDataOptions
    static AxisDisplayMinMaxRange = AxisDisplayMinMaxRange
    static AxisDisplayOptions = AxisDisplayOptions
    static AxisDisplayRange = AxisDisplayRange
    static AxisLabelOptions = AxisLabelOptions
    static AxisLabelReferenceOptions = AxisLabelReferenceOptions
    static AxisLinearScale = AxisLinearScale
    static AxisLogarithmicScale = AxisLogarithmicScale
    static AxisScale = AxisScale
    static AxisTickLabelOptions = AxisTickLabelOptions
    static BarChartAggregatedFieldWells = BarChartAggregatedFieldWells
    static BarChartConfiguration = BarChartConfiguration
    static BarChartFieldWells = BarChartFieldWells
    static BarChartSortConfiguration = BarChartSortConfiguration
    static BarChartVisual = BarChartVisual
    static BinCountOptions = BinCountOptions
    static BinWidthOptions = BinWidthOptions
    static BodySectionConfiguration = BodySectionConfiguration
    static BodySectionContent = BodySectionContent
    static BoxPlotAggregatedFieldWells = BoxPlotAggregatedFieldWells
    static BoxPlotChartConfiguration = BoxPlotChartConfiguration
    static BoxPlotFieldWells = BoxPlotFieldWells
    static BoxPlotOptions = BoxPlotOptions
    static BoxPlotSortConfiguration = BoxPlotSortConfiguration
    static BoxPlotStyleOptions = BoxPlotStyleOptions
    static BoxPlotVisual = BoxPlotVisual
    static CalculatedField = CalculatedField
    static CalculatedMeasureField = CalculatedMeasureField
    static CascadingControlConfiguration = CascadingControlConfiguration
    static CascadingControlSource = CascadingControlSource
    static CategoricalDimensionField = CategoricalDimensionField
    static CategoricalMeasureField = CategoricalMeasureField
    static CategoryDrillDownFilter = CategoryDrillDownFilter
    static CategoryFilter = CategoryFilter
    static CategoryFilterConfiguration = CategoryFilterConfiguration
    static ChartAxisLabelOptions = ChartAxisLabelOptions
    static ClusterMarker = ClusterMarker
    static ClusterMarkerConfiguration = ClusterMarkerConfiguration
    static ColorScale = ColorScale
    static ColorsConfiguration = ColorsConfiguration
    static ColumnConfiguration = ColumnConfiguration
    static ColumnHierarchy = ColumnHierarchy
    static ColumnIdentifier = ColumnIdentifier
    static ColumnSort = ColumnSort
    static ColumnTooltipItem = ColumnTooltipItem
    static ComboChartAggregatedFieldWells = ComboChartAggregatedFieldWells
    static ComboChartConfiguration = ComboChartConfiguration
    static ComboChartFieldWells = ComboChartFieldWells
    static ComboChartSortConfiguration = ComboChartSortConfiguration
    static ComboChartVisual = ComboChartVisual
    static ComparisonConfiguration = ComparisonConfiguration
    static ComparisonFormatConfiguration = ComparisonFormatConfiguration
    static Computation = Computation
    static ConditionalFormattingColor = ConditionalFormattingColor
    static ConditionalFormattingCustomIconCondition = ConditionalFormattingCustomIconCondition
    static ConditionalFormattingCustomIconOptions = ConditionalFormattingCustomIconOptions
    static ConditionalFormattingGradientColor = ConditionalFormattingGradientColor
    static ConditionalFormattingIcon = ConditionalFormattingIcon
    static ConditionalFormattingIconDisplayConfiguration = ConditionalFormattingIconDisplayConfiguration
    static ConditionalFormattingIconSet = ConditionalFormattingIconSet
    static ConditionalFormattingSolidColor = ConditionalFormattingSolidColor
    static ContributionAnalysisDefault = ContributionAnalysisDefault
    static CurrencyDisplayFormatConfiguration = CurrencyDisplayFormatConfiguration
    static CustomActionFilterOperation = CustomActionFilterOperation
    static CustomActionNavigationOperation = CustomActionNavigationOperation
    static CustomActionSetParametersOperation = CustomActionSetParametersOperation
    static CustomActionURLOperation = CustomActionURLOperation
    static CustomColor = CustomColor
    static CustomContentConfiguration = CustomContentConfiguration
    static CustomContentVisual = CustomContentVisual
    static CustomFilterConfiguration = CustomFilterConfiguration
    static CustomFilterListConfiguration = CustomFilterListConfiguration
    static CustomNarrativeOptions = CustomNarrativeOptions
    static CustomParameterValues = CustomParameterValues
    static CustomValuesConfiguration = CustomValuesConfiguration
    static DataBarsOptions = DataBarsOptions
    static DataColor = DataColor
    static DataFieldSeriesItem = DataFieldSeriesItem
    static DataLabelOptions = DataLabelOptions
    static DataLabelType = DataLabelType
    static DataPathColor = DataPathColor
    static DataPathLabelType = DataPathLabelType
    static DataPathSort = DataPathSort
    static DataPathType = DataPathType
    static DataPathValue = DataPathValue
    static DataSetIdentifierDeclaration = DataSetIdentifierDeclaration
    static DataSetReference = DataSetReference
    static DateAxisOptions = DateAxisOptions
    static DateDimensionField = DateDimensionField
    static DateMeasureField = DateMeasureField
    static DateTimeDefaultValues = DateTimeDefaultValues
    static DateTimeFormatConfiguration = DateTimeFormatConfiguration
    static DateTimeHierarchy = DateTimeHierarchy
    static DateTimeParameter = DateTimeParameter
    static DateTimeParameterDeclaration = DateTimeParameterDeclaration
    static DateTimePickerControlDisplayOptions = DateTimePickerControlDisplayOptions
    static DateTimeValueWhenUnsetConfiguration = DateTimeValueWhenUnsetConfiguration
    static DecimalDefaultValues = DecimalDefaultValues
    static DecimalParameter = DecimalParameter
    static DecimalParameterDeclaration = DecimalParameterDeclaration
    static DecimalPlacesConfiguration = DecimalPlacesConfiguration
    static DecimalValueWhenUnsetConfiguration = DecimalValueWhenUnsetConfiguration
    static DefaultFreeFormLayoutConfiguration = DefaultFreeFormLayoutConfiguration
    static DefaultGridLayoutConfiguration = DefaultGridLayoutConfiguration
    static DefaultInteractiveLayoutConfiguration = DefaultInteractiveLayoutConfiguration
    static DefaultNewSheetConfiguration = DefaultNewSheetConfiguration
    static DefaultPaginatedLayoutConfiguration = DefaultPaginatedLayoutConfiguration
    static DefaultSectionBasedLayoutConfiguration = DefaultSectionBasedLayoutConfiguration
    static DestinationParameterValueConfiguration = DestinationParameterValueConfiguration
    static DimensionField = DimensionField
    static DonutCenterOptions = DonutCenterOptions
    static DonutOptions = DonutOptions
    static DrillDownFilter = DrillDownFilter
    static DropDownControlDisplayOptions = DropDownControlDisplayOptions
    static DynamicDefaultValue = DynamicDefaultValue
    static EmptyVisual = EmptyVisual
    static Entity = Entity
    static ExcludePeriodConfiguration = ExcludePeriodConfiguration
    static ExplicitHierarchy = ExplicitHierarchy
    static FieldBasedTooltip = FieldBasedTooltip
    static FieldLabelType = FieldLabelType
    static FieldSeriesItem = FieldSeriesItem
    static FieldSort = FieldSort
    static FieldSortOptions = FieldSortOptions
    static FieldTooltipItem = FieldTooltipItem
    static FilledMapAggregatedFieldWells = FilledMapAggregatedFieldWells
    static FilledMapConditionalFormatting = FilledMapConditionalFormatting
    static FilledMapConditionalFormattingOption = FilledMapConditionalFormattingOption
    static FilledMapConfiguration = FilledMapConfiguration
    static FilledMapFieldWells = FilledMapFieldWells
    static FilledMapShapeConditionalFormatting = FilledMapShapeConditionalFormatting
    static FilledMapSortConfiguration = FilledMapSortConfiguration
    static FilledMapVisual = FilledMapVisual
    static Filter = Filter
    static FilterControl = FilterControl
    static FilterDateTimePickerControl = FilterDateTimePickerControl
    static FilterDropDownControl = FilterDropDownControl
    static FilterGroup = FilterGroup
    static FilterListConfiguration = FilterListConfiguration
    static FilterListControl = FilterListControl
    static FilterOperationSelectedFieldsConfiguration = FilterOperationSelectedFieldsConfiguration
    static FilterOperationTargetVisualsConfiguration = FilterOperationTargetVisualsConfiguration
    static FilterRelativeDateTimeControl = FilterRelativeDateTimeControl
    static FilterScopeConfiguration = FilterScopeConfiguration
    static FilterSelectableValues = FilterSelectableValues
    static FilterSliderControl = FilterSliderControl
    static FilterTextAreaControl = FilterTextAreaControl
    static FilterTextFieldControl = FilterTextFieldControl
    static FontConfiguration = FontConfiguration
    static FontSize = FontSize
    static FontWeight = FontWeight
    static ForecastComputation = ForecastComputation
    static ForecastConfiguration = ForecastConfiguration
    static ForecastScenario = ForecastScenario
    static FormatConfiguration = FormatConfiguration
    static FreeFormLayoutCanvasSizeOptions = FreeFormLayoutCanvasSizeOptions
    static FreeFormLayoutConfiguration = FreeFormLayoutConfiguration
    static FreeFormLayoutElement = FreeFormLayoutElement
    static FreeFormLayoutElementBackgroundStyle = FreeFormLayoutElementBackgroundStyle
    static FreeFormLayoutElementBorderStyle = FreeFormLayoutElementBorderStyle
    static FreeFormLayoutScreenCanvasSizeOptions = FreeFormLayoutScreenCanvasSizeOptions
    static FreeFormSectionLayoutConfiguration = FreeFormSectionLayoutConfiguration
    static FunnelChartAggregatedFieldWells = FunnelChartAggregatedFieldWells
    static FunnelChartConfiguration = FunnelChartConfiguration
    static FunnelChartDataLabelOptions = FunnelChartDataLabelOptions
    static FunnelChartFieldWells = FunnelChartFieldWells
    static FunnelChartSortConfiguration = FunnelChartSortConfiguration
    static FunnelChartVisual = FunnelChartVisual
    static GaugeChartArcConditionalFormatting = GaugeChartArcConditionalFormatting
    static GaugeChartConditionalFormatting = GaugeChartConditionalFormatting
    static GaugeChartConditionalFormattingOption = GaugeChartConditionalFormattingOption
    static GaugeChartConfiguration = GaugeChartConfiguration
    static GaugeChartFieldWells = GaugeChartFieldWells
    static GaugeChartOptions = GaugeChartOptions
    static GaugeChartPrimaryValueConditionalFormatting = GaugeChartPrimaryValueConditionalFormatting
    static GaugeChartVisual = GaugeChartVisual
    static GeospatialCoordinateBounds = GeospatialCoordinateBounds
    static GeospatialHeatmapColorScale = GeospatialHeatmapColorScale
    static GeospatialHeatmapConfiguration = GeospatialHeatmapConfiguration
    static GeospatialHeatmapDataColor = GeospatialHeatmapDataColor
    static GeospatialMapAggregatedFieldWells = GeospatialMapAggregatedFieldWells
    static GeospatialMapConfiguration = GeospatialMapConfiguration
    static GeospatialMapFieldWells = GeospatialMapFieldWells
    static GeospatialMapStyleOptions = GeospatialMapStyleOptions
    static GeospatialMapVisual = GeospatialMapVisual
    static GeospatialPointStyleOptions = GeospatialPointStyleOptions
    static GeospatialWindowOptions = GeospatialWindowOptions
    static GlobalTableBorderOptions = GlobalTableBorderOptions
    static GradientColor = GradientColor
    static GradientStop = GradientStop
    static GridLayoutCanvasSizeOptions = GridLayoutCanvasSizeOptions
    static GridLayoutConfiguration = GridLayoutConfiguration
    static GridLayoutElement = GridLayoutElement
    static GridLayoutScreenCanvasSizeOptions = GridLayoutScreenCanvasSizeOptions
    static GrowthRateComputation = GrowthRateComputation
    static HeaderFooterSectionConfiguration = HeaderFooterSectionConfiguration
    static HeatMapAggregatedFieldWells = HeatMapAggregatedFieldWells
    static HeatMapConfiguration = HeatMapConfiguration
    static HeatMapFieldWells = HeatMapFieldWells
    static HeatMapSortConfiguration = HeatMapSortConfiguration
    static HeatMapVisual = HeatMapVisual
    static HistogramAggregatedFieldWells = HistogramAggregatedFieldWells
    static HistogramBinOptions = HistogramBinOptions
    static HistogramConfiguration = HistogramConfiguration
    static HistogramFieldWells = HistogramFieldWells
    static HistogramVisual = HistogramVisual
    static InsightConfiguration = InsightConfiguration
    static InsightVisual = InsightVisual
    static IntegerDefaultValues = IntegerDefaultValues
    static IntegerParameter = IntegerParameter
    static IntegerParameterDeclaration = IntegerParameterDeclaration
    static IntegerValueWhenUnsetConfiguration = IntegerValueWhenUnsetConfiguration
    static ItemsLimitConfiguration = ItemsLimitConfiguration
    static KPIActualValueConditionalFormatting = KPIActualValueConditionalFormatting
    static KPIComparisonValueConditionalFormatting = KPIComparisonValueConditionalFormatting
    static KPIConditionalFormatting = KPIConditionalFormatting
    static KPIConditionalFormattingOption = KPIConditionalFormattingOption
    static KPIConfiguration = KPIConfiguration
    static KPIFieldWells = KPIFieldWells
    static KPIOptions = KPIOptions
    static KPIPrimaryValueConditionalFormatting = KPIPrimaryValueConditionalFormatting
    static KPIProgressBarConditionalFormatting = KPIProgressBarConditionalFormatting
    static KPISortConfiguration = KPISortConfiguration
    static KPISparklineOptions = KPISparklineOptions
    static KPIVisual = KPIVisual
    static KPIVisualLayoutOptions = KPIVisualLayoutOptions
    static KPIVisualStandardLayout = KPIVisualStandardLayout
    static LabelOptions = LabelOptions
    static Layout = Layout
    static LayoutConfiguration = LayoutConfiguration
    static LegendOptions = LegendOptions
    static LineChartAggregatedFieldWells = LineChartAggregatedFieldWells
    static LineChartConfiguration = LineChartConfiguration
    static LineChartDefaultSeriesSettings = LineChartDefaultSeriesSettings
    static LineChartFieldWells = LineChartFieldWells
    static LineChartLineStyleSettings = LineChartLineStyleSettings
    static LineChartMarkerStyleSettings = LineChartMarkerStyleSettings
    static LineChartSeriesSettings = LineChartSeriesSettings
    static LineChartSortConfiguration = LineChartSortConfiguration
    static LineChartVisual = LineChartVisual
    static LineSeriesAxisDisplayOptions = LineSeriesAxisDisplayOptions
    static ListControlDisplayOptions = ListControlDisplayOptions
    static ListControlSearchOptions = ListControlSearchOptions
    static ListControlSelectAllOptions = ListControlSelectAllOptions
    static LoadingAnimation = LoadingAnimation
    static LocalNavigationConfiguration = LocalNavigationConfiguration
    static LongFormatText = LongFormatText
    static MappedDataSetParameter = MappedDataSetParameter
    static MaximumLabelType = MaximumLabelType
    static MaximumMinimumComputation = MaximumMinimumComputation
    static MeasureField = MeasureField
    static MetricComparisonComputation = MetricComparisonComputation
    static MinimumLabelType = MinimumLabelType
    static MissingDataConfiguration = MissingDataConfiguration
    static NegativeValueConfiguration = NegativeValueConfiguration
    static NullValueFormatConfiguration = NullValueFormatConfiguration
    static NumberDisplayFormatConfiguration = NumberDisplayFormatConfiguration
    static NumberFormatConfiguration = NumberFormatConfiguration
    static NumericAxisOptions = NumericAxisOptions
    static NumericEqualityDrillDownFilter = NumericEqualityDrillDownFilter
    static NumericEqualityFilter = NumericEqualityFilter
    static NumericFormatConfiguration = NumericFormatConfiguration
    static NumericRangeFilter = NumericRangeFilter
    static NumericRangeFilterValue = NumericRangeFilterValue
    static NumericSeparatorConfiguration = NumericSeparatorConfiguration
    static NumericalAggregationFunction = NumericalAggregationFunction
    static NumericalDimensionField = NumericalDimensionField
    static NumericalMeasureField = NumericalMeasureField
    static PaginationConfiguration = PaginationConfiguration
    static PanelConfiguration = PanelConfiguration
    static PanelTitleOptions = PanelTitleOptions
    static ParameterControl = ParameterControl
    static ParameterDateTimePickerControl = ParameterDateTimePickerControl
    static ParameterDeclaration = ParameterDeclaration
    static ParameterDropDownControl = ParameterDropDownControl
    static ParameterListControl = ParameterListControl
    static ParameterSelectableValues = ParameterSelectableValues
    static ParameterSliderControl = ParameterSliderControl
    static ParameterTextAreaControl = ParameterTextAreaControl
    static ParameterTextFieldControl = ParameterTextFieldControl
    static Parameters = Parameters
    static PercentVisibleRange = PercentVisibleRange
    static PercentageDisplayFormatConfiguration = PercentageDisplayFormatConfiguration
    static PercentileAggregation = PercentileAggregation
    static PeriodOverPeriodComputation = PeriodOverPeriodComputation
    static PeriodToDateComputation = PeriodToDateComputation
    static PieChartAggregatedFieldWells = PieChartAggregatedFieldWells
    static PieChartConfiguration = PieChartConfiguration
    static PieChartFieldWells = PieChartFieldWells
    static PieChartSortConfiguration = PieChartSortConfiguration
    static PieChartVisual = PieChartVisual
    static PivotFieldSortOptions = PivotFieldSortOptions
    static PivotTableAggregatedFieldWells = PivotTableAggregatedFieldWells
    static PivotTableCellConditionalFormatting = PivotTableCellConditionalFormatting
    static PivotTableConditionalFormatting = PivotTableConditionalFormatting
    static PivotTableConditionalFormattingOption = PivotTableConditionalFormattingOption
    static PivotTableConditionalFormattingScope = PivotTableConditionalFormattingScope
    static PivotTableConfiguration = PivotTableConfiguration
    static PivotTableDataPathOption = PivotTableDataPathOption
    static PivotTableFieldCollapseStateOption = PivotTableFieldCollapseStateOption
    static PivotTableFieldCollapseStateTarget = PivotTableFieldCollapseStateTarget
    static PivotTableFieldOption = PivotTableFieldOption
    static PivotTableFieldOptions = PivotTableFieldOptions
    static PivotTableFieldSubtotalOptions = PivotTableFieldSubtotalOptions
    static PivotTableFieldWells = PivotTableFieldWells
    static PivotTableOptions = PivotTableOptions
    static PivotTablePaginatedReportOptions = PivotTablePaginatedReportOptions
    static PivotTableRowsLabelOptions = PivotTableRowsLabelOptions
    static PivotTableSortBy = PivotTableSortBy
    static PivotTableSortConfiguration = PivotTableSortConfiguration
    static PivotTableTotalOptions = PivotTableTotalOptions
    static PivotTableVisual = PivotTableVisual
    static PivotTotalOptions = PivotTotalOptions
    static PredefinedHierarchy = PredefinedHierarchy
    static ProgressBarOptions = ProgressBarOptions
    static RadarChartAggregatedFieldWells = RadarChartAggregatedFieldWells
    static RadarChartAreaStyleSettings = RadarChartAreaStyleSettings
    static RadarChartConfiguration = RadarChartConfiguration
    static RadarChartFieldWells = RadarChartFieldWells
    static RadarChartSeriesSettings = RadarChartSeriesSettings
    static RadarChartSortConfiguration = RadarChartSortConfiguration
    static RadarChartVisual = RadarChartVisual
    static RangeEndsLabelType = RangeEndsLabelType
    static ReferenceLine = ReferenceLine
    static ReferenceLineCustomLabelConfiguration = ReferenceLineCustomLabelConfiguration
    static ReferenceLineDataConfiguration = ReferenceLineDataConfiguration
    static ReferenceLineDynamicDataConfiguration = ReferenceLineDynamicDataConfiguration
    static ReferenceLineLabelConfiguration = ReferenceLineLabelConfiguration
    static ReferenceLineStaticDataConfiguration = ReferenceLineStaticDataConfiguration
    static ReferenceLineStyleConfiguration = ReferenceLineStyleConfiguration
    static ReferenceLineValueLabelConfiguration = ReferenceLineValueLabelConfiguration
    static RelativeDateTimeControlDisplayOptions = RelativeDateTimeControlDisplayOptions
    static RelativeDatesFilter = RelativeDatesFilter
    static ResourcePermission = ResourcePermission
    static RollingDateConfiguration = RollingDateConfiguration
    static RowAlternateColorOptions = RowAlternateColorOptions
    static SameSheetTargetVisualConfiguration = SameSheetTargetVisualConfiguration
    static SankeyDiagramAggregatedFieldWells = SankeyDiagramAggregatedFieldWells
    static SankeyDiagramChartConfiguration = SankeyDiagramChartConfiguration
    static SankeyDiagramFieldWells = SankeyDiagramFieldWells
    static SankeyDiagramSortConfiguration = SankeyDiagramSortConfiguration
    static SankeyDiagramVisual = SankeyDiagramVisual
    static ScatterPlotCategoricallyAggregatedFieldWells = ScatterPlotCategoricallyAggregatedFieldWells
    static ScatterPlotConfiguration = ScatterPlotConfiguration
    static ScatterPlotFieldWells = ScatterPlotFieldWells
    static ScatterPlotUnaggregatedFieldWells = ScatterPlotUnaggregatedFieldWells
    static ScatterPlotVisual = ScatterPlotVisual
    static ScrollBarOptions = ScrollBarOptions
    static SecondaryValueOptions = SecondaryValueOptions
    static SectionAfterPageBreak = SectionAfterPageBreak
    static SectionBasedLayoutCanvasSizeOptions = SectionBasedLayoutCanvasSizeOptions
    static SectionBasedLayoutConfiguration = SectionBasedLayoutConfiguration
    static SectionBasedLayoutPaperCanvasSizeOptions = SectionBasedLayoutPaperCanvasSizeOptions
    static SectionLayoutConfiguration = SectionLayoutConfiguration
    static SectionPageBreakConfiguration = SectionPageBreakConfiguration
    static SectionStyle = SectionStyle
    static SelectedSheetsFilterScopeConfiguration = SelectedSheetsFilterScopeConfiguration
    static SeriesItem = SeriesItem
    static SetParameterValueConfiguration = SetParameterValueConfiguration
    static ShapeConditionalFormat = ShapeConditionalFormat
    static Sheet = Sheet
    static SheetControlInfoIconLabelOptions = SheetControlInfoIconLabelOptions
    static SheetControlLayout = SheetControlLayout
    static SheetControlLayoutConfiguration = SheetControlLayoutConfiguration
    static SheetDefinition = SheetDefinition
    static SheetElementConfigurationOverrides = SheetElementConfigurationOverrides
    static SheetElementRenderingRule = SheetElementRenderingRule
    static SheetTextBox = SheetTextBox
    static SheetVisualScopingConfiguration = SheetVisualScopingConfiguration
    static ShortFormatText = ShortFormatText
    static SimpleClusterMarker = SimpleClusterMarker
    static SliderControlDisplayOptions = SliderControlDisplayOptions
    static SmallMultiplesAxisProperties = SmallMultiplesAxisProperties
    static SmallMultiplesOptions = SmallMultiplesOptions
    static Spacing = Spacing
    static StringDefaultValues = StringDefaultValues
    static StringFormatConfiguration = StringFormatConfiguration
    static StringParameter = StringParameter
    static StringParameterDeclaration = StringParameterDeclaration
    static StringValueWhenUnsetConfiguration = StringValueWhenUnsetConfiguration
    static SubtotalOptions = SubtotalOptions
    static TableAggregatedFieldWells = TableAggregatedFieldWells
    static TableBorderOptions = TableBorderOptions
    static TableCellConditionalFormatting = TableCellConditionalFormatting
    static TableCellImageSizingConfiguration = TableCellImageSizingConfiguration
    static TableCellStyle = TableCellStyle
    static TableConditionalFormatting = TableConditionalFormatting
    static TableConditionalFormattingOption = TableConditionalFormattingOption
    static TableConfiguration = TableConfiguration
    static TableFieldCustomIconContent = TableFieldCustomIconContent
    static TableFieldCustomTextContent = TableFieldCustomTextContent
    static TableFieldImageConfiguration = TableFieldImageConfiguration
    static TableFieldLinkConfiguration = TableFieldLinkConfiguration
    static TableFieldLinkContentConfiguration = TableFieldLinkContentConfiguration
    static TableFieldOption = TableFieldOption
    static TableFieldOptions = TableFieldOptions
    static TableFieldURLConfiguration = TableFieldURLConfiguration
    static TableFieldWells = TableFieldWells
    static TableInlineVisualization = TableInlineVisualization
    static TableOptions = TableOptions
    static TablePaginatedReportOptions = TablePaginatedReportOptions
    static TablePinnedFieldOptions = TablePinnedFieldOptions
    static TableRowConditionalFormatting = TableRowConditionalFormatting
    static TableSideBorderOptions = TableSideBorderOptions
    static TableSortConfiguration = TableSortConfiguration
    static TableStyleTarget = TableStyleTarget
    static TableUnaggregatedFieldWells = TableUnaggregatedFieldWells
    static TableVisual = TableVisual
    static TextAreaControlDisplayOptions = TextAreaControlDisplayOptions
    static TextConditionalFormat = TextConditionalFormat
    static TextControlPlaceholderOptions = TextControlPlaceholderOptions
    static TextFieldControlDisplayOptions = TextFieldControlDisplayOptions
    static ThousandSeparatorOptions = ThousandSeparatorOptions
    static TimeBasedForecastProperties = TimeBasedForecastProperties
    static TimeEqualityFilter = TimeEqualityFilter
    static TimeRangeDrillDownFilter = TimeRangeDrillDownFilter
    static TimeRangeFilter = TimeRangeFilter
    static TimeRangeFilterValue = TimeRangeFilterValue
    static TooltipItem = TooltipItem
    static TooltipOptions = TooltipOptions
    static TopBottomFilter = TopBottomFilter
    static TopBottomMoversComputation = TopBottomMoversComputation
    static TopBottomRankedComputation = TopBottomRankedComputation
    static TotalAggregationComputation = TotalAggregationComputation
    static TotalAggregationFunction = TotalAggregationFunction
    static TotalAggregationOption = TotalAggregationOption
    static TotalOptions = TotalOptions
    static TreeMapAggregatedFieldWells = TreeMapAggregatedFieldWells
    static TreeMapConfiguration = TreeMapConfiguration
    static TreeMapFieldWells = TreeMapFieldWells
    static TreeMapSortConfiguration = TreeMapSortConfiguration
    static TreeMapVisual = TreeMapVisual
    static TrendArrowOptions = TrendArrowOptions
    static UnaggregatedField = UnaggregatedField
    static UniqueValuesComputation = UniqueValuesComputation
    static ValidationStrategy = ValidationStrategy
    static VisibleRangeOptions = VisibleRangeOptions
    static Visual = Visual
    static VisualCustomAction = VisualCustomAction
    static VisualCustomActionOperation = VisualCustomActionOperation
    static VisualPalette = VisualPalette
    static VisualSubtitleLabelOptions = VisualSubtitleLabelOptions
    static VisualTitleLabelOptions = VisualTitleLabelOptions
    static WaterfallChartAggregatedFieldWells = WaterfallChartAggregatedFieldWells
    static WaterfallChartConfiguration = WaterfallChartConfiguration
    static WaterfallChartFieldWells = WaterfallChartFieldWells
    static WaterfallChartOptions = WaterfallChartOptions
    static WaterfallChartSortConfiguration = WaterfallChartSortConfiguration
    static WaterfallVisual = WaterfallVisual
    static WhatIfPointScenario = WhatIfPointScenario
    static WhatIfRangeScenario = WhatIfRangeScenario
    static WordCloudAggregatedFieldWells = WordCloudAggregatedFieldWells
    static WordCloudChartConfiguration = WordCloudChartConfiguration
    static WordCloudFieldWells = WordCloudFieldWells
    static WordCloudOptions = WordCloudOptions
    static WordCloudSortConfiguration = WordCloudSortConfiguration
    static WordCloudVisual = WordCloudVisual

    constructor(properties: AnalysisProperties) {
        super('AWS::QuickSight::Analysis', properties)
    }
}
