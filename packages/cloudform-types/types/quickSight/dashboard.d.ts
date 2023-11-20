import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdHocFilteringOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: AdHocFilteringOption);
}
export declare class AggregationFunction {
    AttributeAggregationFunction?: AttributeAggregationFunction;
    DateAggregationFunction?: Value<string>;
    NumericalAggregationFunction?: NumericalAggregationFunction;
    CategoricalAggregationFunction?: Value<string>;
    constructor(properties: AggregationFunction);
}
export declare class AggregationSortConfiguration {
    AggregationFunction?: AggregationFunction;
    SortDirection: Value<string>;
    Column: ColumnIdentifier;
    constructor(properties: AggregationSortConfiguration);
}
export declare class AnalysisDefaults {
    DefaultNewSheetConfiguration: DefaultNewSheetConfiguration;
    constructor(properties: AnalysisDefaults);
}
export declare class AnchorDateConfiguration {
    AnchorOption?: Value<string>;
    ParameterName?: Value<string>;
    constructor(properties: AnchorDateConfiguration);
}
export declare class ArcAxisConfiguration {
    Range?: ArcAxisDisplayRange;
    ReserveRange?: Value<number>;
    constructor(properties: ArcAxisConfiguration);
}
export declare class ArcAxisDisplayRange {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: ArcAxisDisplayRange);
}
export declare class ArcConfiguration {
    ArcAngle?: Value<number>;
    ArcThickness?: Value<string>;
    constructor(properties: ArcConfiguration);
}
export declare class ArcOptions {
    ArcThickness?: Value<string>;
    constructor(properties: ArcOptions);
}
export declare class AssetOptions {
    Timezone?: Value<string>;
    WeekStart?: Value<string>;
    constructor(properties: AssetOptions);
}
export declare class AttributeAggregationFunction {
    SimpleAttributeAggregation?: Value<string>;
    ValueForMultipleValues?: Value<string>;
    constructor(properties: AttributeAggregationFunction);
}
export declare class AxisDataOptions {
    DateAxisOptions?: DateAxisOptions;
    NumericAxisOptions?: NumericAxisOptions;
    constructor(properties: AxisDataOptions);
}
export declare class AxisDisplayMinMaxRange {
    Minimum?: Value<number>;
    Maximum?: Value<number>;
    constructor(properties: AxisDisplayMinMaxRange);
}
export declare class AxisDisplayOptions {
    DataOptions?: AxisDataOptions;
    TickLabelOptions?: AxisTickLabelOptions;
    AxisOffset?: Value<string>;
    AxisLineVisibility?: Value<string>;
    GridLineVisibility?: Value<string>;
    ScrollbarOptions?: ScrollBarOptions;
    constructor(properties: AxisDisplayOptions);
}
export declare class AxisDisplayRange {
    DataDriven?: {
        [key: string]: any;
    };
    MinMax?: AxisDisplayMinMaxRange;
    constructor(properties: AxisDisplayRange);
}
export declare class AxisLabelOptions {
    CustomLabel?: Value<string>;
    ApplyTo?: AxisLabelReferenceOptions;
    FontConfiguration?: FontConfiguration;
    constructor(properties: AxisLabelOptions);
}
export declare class AxisLabelReferenceOptions {
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: AxisLabelReferenceOptions);
}
export declare class AxisLinearScale {
    StepSize?: Value<number>;
    StepCount?: Value<number>;
    constructor(properties: AxisLinearScale);
}
export declare class AxisLogarithmicScale {
    Base?: Value<number>;
    constructor(properties: AxisLogarithmicScale);
}
export declare class AxisScale {
    Logarithmic?: AxisLogarithmicScale;
    Linear?: AxisLinearScale;
    constructor(properties: AxisScale);
}
export declare class AxisTickLabelOptions {
    RotationAngle?: Value<number>;
    LabelOptions?: LabelOptions;
    constructor(properties: AxisTickLabelOptions);
}
export declare class BarChartAggregatedFieldWells {
    Category?: List<DimensionField>;
    Colors?: List<DimensionField>;
    Values?: List<MeasureField>;
    SmallMultiples?: List<DimensionField>;
    constructor(properties: BarChartAggregatedFieldWells);
}
export declare class BarChartConfiguration {
    SortConfiguration?: BarChartSortConfiguration;
    Legend?: LegendOptions;
    ReferenceLines?: List<ReferenceLine>;
    DataLabels?: DataLabelOptions;
    ColorLabelOptions?: ChartAxisLabelOptions;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    Tooltip?: TooltipOptions;
    SmallMultiplesOptions?: SmallMultiplesOptions;
    Orientation?: Value<string>;
    VisualPalette?: VisualPalette;
    ValueLabelOptions?: ChartAxisLabelOptions;
    BarsArrangement?: Value<string>;
    CategoryAxis?: AxisDisplayOptions;
    ContributionAnalysisDefaults?: List<ContributionAnalysisDefault>;
    FieldWells?: BarChartFieldWells;
    ValueAxis?: AxisDisplayOptions;
    constructor(properties: BarChartConfiguration);
}
export declare class BarChartFieldWells {
    BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
    constructor(properties: BarChartFieldWells);
}
export declare class BarChartSortConfiguration {
    SmallMultiplesSort?: List<FieldSortOptions>;
    ColorSort?: List<FieldSortOptions>;
    ColorItemsLimit?: ItemsLimitConfiguration;
    CategoryItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
    constructor(properties: BarChartSortConfiguration);
}
export declare class BarChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: BarChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: BarChartVisual);
}
export declare class BinCountOptions {
    Value?: Value<number>;
    constructor(properties: BinCountOptions);
}
export declare class BinWidthOptions {
    BinCountLimit?: Value<number>;
    Value?: Value<number>;
    constructor(properties: BinWidthOptions);
}
export declare class BodySectionConfiguration {
    Content: BodySectionContent;
    Style?: SectionStyle;
    PageBreakConfiguration?: SectionPageBreakConfiguration;
    SectionId: Value<string>;
    constructor(properties: BodySectionConfiguration);
}
export declare class BodySectionContent {
    Layout?: SectionLayoutConfiguration;
    constructor(properties: BodySectionContent);
}
export declare class BoxPlotAggregatedFieldWells {
    GroupBy?: List<DimensionField>;
    Values?: List<MeasureField>;
    constructor(properties: BoxPlotAggregatedFieldWells);
}
export declare class BoxPlotChartConfiguration {
    SortConfiguration?: BoxPlotSortConfiguration;
    Legend?: LegendOptions;
    ReferenceLines?: List<ReferenceLine>;
    CategoryAxis?: AxisDisplayOptions;
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: BoxPlotFieldWells;
    Tooltip?: TooltipOptions;
    BoxPlotOptions?: BoxPlotOptions;
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
    VisualPalette?: VisualPalette;
    constructor(properties: BoxPlotChartConfiguration);
}
export declare class BoxPlotFieldWells {
    BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
    constructor(properties: BoxPlotFieldWells);
}
export declare class BoxPlotOptions {
    StyleOptions?: BoxPlotStyleOptions;
    OutlierVisibility?: Value<string>;
    AllDataPointsVisibility?: Value<string>;
    constructor(properties: BoxPlotOptions);
}
export declare class BoxPlotSortConfiguration {
    CategorySort?: List<FieldSortOptions>;
    PaginationConfiguration?: PaginationConfiguration;
    constructor(properties: BoxPlotSortConfiguration);
}
export declare class BoxPlotStyleOptions {
    FillStyle?: Value<string>;
    constructor(properties: BoxPlotStyleOptions);
}
export declare class BoxPlotVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: BoxPlotChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: BoxPlotVisual);
}
export declare class CalculatedField {
    Expression: Value<string>;
    DataSetIdentifier: Value<string>;
    Name: Value<string>;
    constructor(properties: CalculatedField);
}
export declare class CalculatedMeasureField {
    Expression: Value<string>;
    FieldId: Value<string>;
    constructor(properties: CalculatedMeasureField);
}
export declare class CascadingControlConfiguration {
    SourceControls?: List<CascadingControlSource>;
    constructor(properties: CascadingControlConfiguration);
}
export declare class CascadingControlSource {
    SourceSheetControlId?: Value<string>;
    ColumnToMatch?: ColumnIdentifier;
    constructor(properties: CascadingControlSource);
}
export declare class CategoricalDimensionField {
    HierarchyId?: Value<string>;
    FormatConfiguration?: StringFormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: CategoricalDimensionField);
}
export declare class CategoricalMeasureField {
    AggregationFunction?: Value<string>;
    FormatConfiguration?: StringFormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: CategoricalMeasureField);
}
export declare class CategoryDrillDownFilter {
    Column: ColumnIdentifier;
    CategoryValues: List<Value<string>>;
    constructor(properties: CategoryDrillDownFilter);
}
export declare class CategoryFilter {
    Configuration: CategoryFilterConfiguration;
    Column: ColumnIdentifier;
    FilterId: Value<string>;
    constructor(properties: CategoryFilter);
}
export declare class CategoryFilterConfiguration {
    CustomFilterListConfiguration?: CustomFilterListConfiguration;
    CustomFilterConfiguration?: CustomFilterConfiguration;
    FilterListConfiguration?: FilterListConfiguration;
    constructor(properties: CategoryFilterConfiguration);
}
export declare class ChartAxisLabelOptions {
    Visibility?: Value<string>;
    SortIconVisibility?: Value<string>;
    AxisLabelOptions?: List<AxisLabelOptions>;
    constructor(properties: ChartAxisLabelOptions);
}
export declare class ClusterMarker {
    SimpleClusterMarker?: SimpleClusterMarker;
    constructor(properties: ClusterMarker);
}
export declare class ClusterMarkerConfiguration {
    ClusterMarker?: ClusterMarker;
    constructor(properties: ClusterMarkerConfiguration);
}
export declare class ColorScale {
    Colors: List<DataColor>;
    ColorFillType: Value<string>;
    NullValueColor?: DataColor;
    constructor(properties: ColorScale);
}
export declare class ColorsConfiguration {
    CustomColors?: List<CustomColor>;
    constructor(properties: ColorsConfiguration);
}
export declare class ColumnConfiguration {
    Role?: Value<string>;
    FormatConfiguration?: FormatConfiguration;
    Column: ColumnIdentifier;
    ColorsConfiguration?: ColorsConfiguration;
    constructor(properties: ColumnConfiguration);
}
export declare class ColumnHierarchy {
    DateTimeHierarchy?: DateTimeHierarchy;
    ExplicitHierarchy?: ExplicitHierarchy;
    PredefinedHierarchy?: PredefinedHierarchy;
    constructor(properties: ColumnHierarchy);
}
export declare class ColumnIdentifier {
    ColumnName: Value<string>;
    DataSetIdentifier: Value<string>;
    constructor(properties: ColumnIdentifier);
}
export declare class ColumnSort {
    AggregationFunction?: AggregationFunction;
    SortBy: ColumnIdentifier;
    Direction: Value<string>;
    constructor(properties: ColumnSort);
}
export declare class ColumnTooltipItem {
    Aggregation?: AggregationFunction;
    Column: ColumnIdentifier;
    Label?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: ColumnTooltipItem);
}
export declare class ComboChartAggregatedFieldWells {
    BarValues?: List<MeasureField>;
    Category?: List<DimensionField>;
    Colors?: List<DimensionField>;
    LineValues?: List<MeasureField>;
    constructor(properties: ComboChartAggregatedFieldWells);
}
export declare class ComboChartConfiguration {
    SortConfiguration?: ComboChartSortConfiguration;
    Legend?: LegendOptions;
    ReferenceLines?: List<ReferenceLine>;
    ColorLabelOptions?: ChartAxisLabelOptions;
    BarDataLabels?: DataLabelOptions;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    Tooltip?: TooltipOptions;
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
    VisualPalette?: VisualPalette;
    BarsArrangement?: Value<string>;
    SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
    LineDataLabels?: DataLabelOptions;
    CategoryAxis?: AxisDisplayOptions;
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: ComboChartFieldWells;
    SecondaryYAxisDisplayOptions?: AxisDisplayOptions;
    constructor(properties: ComboChartConfiguration);
}
export declare class ComboChartFieldWells {
    ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
    constructor(properties: ComboChartFieldWells);
}
export declare class ComboChartSortConfiguration {
    ColorSort?: List<FieldSortOptions>;
    ColorItemsLimit?: ItemsLimitConfiguration;
    CategoryItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    constructor(properties: ComboChartSortConfiguration);
}
export declare class ComboChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: ComboChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: ComboChartVisual);
}
export declare class ComparisonConfiguration {
    ComparisonMethod?: Value<string>;
    ComparisonFormat?: ComparisonFormatConfiguration;
    constructor(properties: ComparisonConfiguration);
}
export declare class ComparisonFormatConfiguration {
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
    constructor(properties: ComparisonFormatConfiguration);
}
export declare class Computation {
    PeriodToDate?: PeriodToDateComputation;
    GrowthRate?: GrowthRateComputation;
    TopBottomRanked?: TopBottomRankedComputation;
    TotalAggregation?: TotalAggregationComputation;
    Forecast?: ForecastComputation;
    MaximumMinimum?: MaximumMinimumComputation;
    PeriodOverPeriod?: PeriodOverPeriodComputation;
    MetricComparison?: MetricComparisonComputation;
    TopBottomMovers?: TopBottomMoversComputation;
    UniqueValues?: UniqueValuesComputation;
    constructor(properties: Computation);
}
export declare class ConditionalFormattingColor {
    Gradient?: ConditionalFormattingGradientColor;
    Solid?: ConditionalFormattingSolidColor;
    constructor(properties: ConditionalFormattingColor);
}
export declare class ConditionalFormattingCustomIconCondition {
    Expression: Value<string>;
    Color?: Value<string>;
    DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration;
    IconOptions: ConditionalFormattingCustomIconOptions;
    constructor(properties: ConditionalFormattingCustomIconCondition);
}
export declare class ConditionalFormattingCustomIconOptions {
    UnicodeIcon?: Value<string>;
    Icon?: Value<string>;
    constructor(properties: ConditionalFormattingCustomIconOptions);
}
export declare class ConditionalFormattingGradientColor {
    Expression: Value<string>;
    Color: GradientColor;
    constructor(properties: ConditionalFormattingGradientColor);
}
export declare class ConditionalFormattingIcon {
    CustomCondition?: ConditionalFormattingCustomIconCondition;
    IconSet?: ConditionalFormattingIconSet;
    constructor(properties: ConditionalFormattingIcon);
}
export declare class ConditionalFormattingIconDisplayConfiguration {
    IconDisplayOption?: Value<string>;
    constructor(properties: ConditionalFormattingIconDisplayConfiguration);
}
export declare class ConditionalFormattingIconSet {
    Expression: Value<string>;
    IconSetType?: Value<string>;
    constructor(properties: ConditionalFormattingIconSet);
}
export declare class ConditionalFormattingSolidColor {
    Expression: Value<string>;
    Color?: Value<string>;
    constructor(properties: ConditionalFormattingSolidColor);
}
export declare class ContributionAnalysisDefault {
    MeasureFieldId: Value<string>;
    ContributorDimensions: List<ColumnIdentifier>;
    constructor(properties: ContributionAnalysisDefault);
}
export declare class CurrencyDisplayFormatConfiguration {
    NegativeValueConfiguration?: NegativeValueConfiguration;
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
    NumberScale?: Value<string>;
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    Suffix?: Value<string>;
    SeparatorConfiguration?: NumericSeparatorConfiguration;
    Symbol?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: CurrencyDisplayFormatConfiguration);
}
export declare class CustomActionFilterOperation {
    SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration;
    TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration;
    constructor(properties: CustomActionFilterOperation);
}
export declare class CustomActionNavigationOperation {
    LocalNavigationConfiguration?: LocalNavigationConfiguration;
    constructor(properties: CustomActionNavigationOperation);
}
export declare class CustomActionSetParametersOperation {
    ParameterValueConfigurations: List<SetParameterValueConfiguration>;
    constructor(properties: CustomActionSetParametersOperation);
}
export declare class CustomActionURLOperation {
    URLTemplate: Value<string>;
    URLTarget: Value<string>;
    constructor(properties: CustomActionURLOperation);
}
export declare class CustomColor {
    Color: Value<string>;
    FieldValue?: Value<string>;
    SpecialValue?: Value<string>;
    constructor(properties: CustomColor);
}
export declare class CustomContentConfiguration {
    ContentUrl?: Value<string>;
    ContentType?: Value<string>;
    ImageScaling?: Value<string>;
    constructor(properties: CustomContentConfiguration);
}
export declare class CustomContentVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: CustomContentConfiguration;
    Actions?: List<VisualCustomAction>;
    DataSetIdentifier: Value<string>;
    Title?: VisualTitleLabelOptions;
    constructor(properties: CustomContentVisual);
}
export declare class CustomFilterConfiguration {
    CategoryValue?: Value<string>;
    ParameterName?: Value<string>;
    NullOption: Value<string>;
    MatchOperator: Value<string>;
    SelectAllOptions?: Value<string>;
    constructor(properties: CustomFilterConfiguration);
}
export declare class CustomFilterListConfiguration {
    CategoryValues?: List<Value<string>>;
    NullOption: Value<string>;
    MatchOperator: Value<string>;
    SelectAllOptions?: Value<string>;
    constructor(properties: CustomFilterListConfiguration);
}
export declare class CustomNarrativeOptions {
    Narrative: Value<string>;
    constructor(properties: CustomNarrativeOptions);
}
export declare class CustomParameterValues {
    DecimalValues?: List<Value<number>>;
    IntegerValues?: List<Value<number>>;
    StringValues?: List<Value<string>>;
    DateTimeValues?: List<Value<string>>;
    constructor(properties: CustomParameterValues);
}
export declare class CustomValuesConfiguration {
    IncludeNullValue?: Value<boolean>;
    CustomValues: CustomParameterValues;
    constructor(properties: CustomValuesConfiguration);
}
export declare class DashboardError {
    Type?: Value<string>;
    Message?: Value<string>;
    ViolatedEntities?: List<Entity>;
    constructor(properties: DashboardError);
}
export declare class DashboardPublishOptions {
    SheetControlsOption?: SheetControlsOption;
    ExportToCSVOption?: ExportToCSVOption;
    DataPointMenuLabelOption?: DataPointMenuLabelOption;
    DataPointDrillUpDownOption?: DataPointDrillUpDownOption;
    AdHocFilteringOption?: AdHocFilteringOption;
    VisualPublishOptions?: DashboardVisualPublishOptions;
    VisualMenuOption?: VisualMenuOption;
    DataPointTooltipOption?: DataPointTooltipOption;
    VisualAxisSortOption?: VisualAxisSortOption;
    ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption;
    SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption;
    constructor(properties: DashboardPublishOptions);
}
export declare class DashboardSourceEntity {
    SourceTemplate?: DashboardSourceTemplate;
    constructor(properties: DashboardSourceEntity);
}
export declare class DashboardSourceTemplate {
    DataSetReferences: List<DataSetReference>;
    Arn: Value<string>;
    constructor(properties: DashboardSourceTemplate);
}
export declare class DashboardVersion {
    Status?: Value<string>;
    Errors?: List<DashboardError>;
    Options?: AssetOptions;
    CreatedTime?: Value<string>;
    Description?: Value<string>;
    DataSetArns?: List<Value<string>>;
    ThemeArn?: Value<string>;
    Arn?: Value<string>;
    SourceEntityArn?: Value<string>;
    VersionNumber?: Value<number>;
    Sheets?: List<Sheet>;
    constructor(properties: DashboardVersion);
}
export declare class DashboardVersionDefinition {
    Options?: AssetOptions;
    FilterGroups?: List<FilterGroup>;
    CalculatedFields?: List<CalculatedField>;
    DataSetIdentifierDeclarations: List<DataSetIdentifierDeclaration>;
    ColumnConfigurations?: List<ColumnConfiguration>;
    AnalysisDefaults?: AnalysisDefaults;
    Sheets?: List<SheetDefinition>;
    ParameterDeclarations?: List<ParameterDeclaration>;
    constructor(properties: DashboardVersionDefinition);
}
export declare class DashboardVisualPublishOptions {
    ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
    constructor(properties: DashboardVisualPublishOptions);
}
export declare class DataBarsOptions {
    PositiveColor?: Value<string>;
    FieldId: Value<string>;
    NegativeColor?: Value<string>;
    constructor(properties: DataBarsOptions);
}
export declare class DataColor {
    DataValue?: Value<number>;
    Color?: Value<string>;
    constructor(properties: DataColor);
}
export declare class DataFieldSeriesItem {
    FieldId: Value<string>;
    AxisBinding: Value<string>;
    FieldValue?: Value<string>;
    Settings?: LineChartSeriesSettings;
    constructor(properties: DataFieldSeriesItem);
}
export declare class DataLabelOptions {
    DataLabelTypes?: List<DataLabelType>;
    MeasureLabelVisibility?: Value<string>;
    Position?: Value<string>;
    LabelContent?: Value<string>;
    Visibility?: Value<string>;
    TotalsVisibility?: Value<string>;
    Overlap?: Value<string>;
    CategoryLabelVisibility?: Value<string>;
    LabelColor?: Value<string>;
    LabelFontConfiguration?: FontConfiguration;
    constructor(properties: DataLabelOptions);
}
export declare class DataLabelType {
    MaximumLabelType?: MaximumLabelType;
    DataPathLabelType?: DataPathLabelType;
    RangeEndsLabelType?: RangeEndsLabelType;
    FieldLabelType?: FieldLabelType;
    MinimumLabelType?: MinimumLabelType;
    constructor(properties: DataLabelType);
}
export declare class DataPathColor {
    Element: DataPathValue;
    Color: Value<string>;
    TimeGranularity?: Value<string>;
    constructor(properties: DataPathColor);
}
export declare class DataPathLabelType {
    FieldId?: Value<string>;
    Visibility?: Value<string>;
    FieldValue?: Value<string>;
    constructor(properties: DataPathLabelType);
}
export declare class DataPathSort {
    SortPaths: List<DataPathValue>;
    Direction: Value<string>;
    constructor(properties: DataPathSort);
}
export declare class DataPathType {
    PivotTableDataPathType?: Value<string>;
    constructor(properties: DataPathType);
}
export declare class DataPathValue {
    DataPathType?: DataPathType;
    FieldId?: Value<string>;
    FieldValue?: Value<string>;
    constructor(properties: DataPathValue);
}
export declare class DataPointDrillUpDownOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: DataPointDrillUpDownOption);
}
export declare class DataPointMenuLabelOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: DataPointMenuLabelOption);
}
export declare class DataPointTooltipOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: DataPointTooltipOption);
}
export declare class DataSetIdentifierDeclaration {
    Identifier: Value<string>;
    DataSetArn: Value<string>;
    constructor(properties: DataSetIdentifierDeclaration);
}
export declare class DataSetReference {
    DataSetArn: Value<string>;
    DataSetPlaceholder: Value<string>;
    constructor(properties: DataSetReference);
}
export declare class DateAxisOptions {
    MissingDateVisibility?: Value<string>;
    constructor(properties: DateAxisOptions);
}
export declare class DateDimensionField {
    HierarchyId?: Value<string>;
    FormatConfiguration?: DateTimeFormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    DateGranularity?: Value<string>;
    constructor(properties: DateDimensionField);
}
export declare class DateMeasureField {
    AggregationFunction?: Value<string>;
    FormatConfiguration?: DateTimeFormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: DateMeasureField);
}
export declare class DateTimeDefaultValues {
    RollingDate?: RollingDateConfiguration;
    DynamicValue?: DynamicDefaultValue;
    StaticValues?: List<Value<string>>;
    constructor(properties: DateTimeDefaultValues);
}
export declare class DateTimeFormatConfiguration {
    NumericFormatConfiguration?: NumericFormatConfiguration;
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    DateTimeFormat?: Value<string>;
    constructor(properties: DateTimeFormatConfiguration);
}
export declare class DateTimeHierarchy {
    HierarchyId: Value<string>;
    DrillDownFilters?: List<DrillDownFilter>;
    constructor(properties: DateTimeHierarchy);
}
export declare class DateTimeParameter {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: DateTimeParameter);
}
export declare class DateTimeParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>;
    DefaultValues?: DateTimeDefaultValues;
    TimeGranularity?: Value<string>;
    ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;
    Name: Value<string>;
    constructor(properties: DateTimeParameterDeclaration);
}
export declare class DateTimePickerControlDisplayOptions {
    TitleOptions?: LabelOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    DateTimeFormat?: Value<string>;
    constructor(properties: DateTimePickerControlDisplayOptions);
}
export declare class DateTimeValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>;
    CustomValue?: Value<string>;
    constructor(properties: DateTimeValueWhenUnsetConfiguration);
}
export declare class DecimalDefaultValues {
    DynamicValue?: DynamicDefaultValue;
    StaticValues?: List<Value<number>>;
    constructor(properties: DecimalDefaultValues);
}
export declare class DecimalParameter {
    Values: List<Value<number>>;
    Name: Value<string>;
    constructor(properties: DecimalParameter);
}
export declare class DecimalParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>;
    DefaultValues?: DecimalDefaultValues;
    ParameterValueType: Value<string>;
    ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;
    Name: Value<string>;
    constructor(properties: DecimalParameterDeclaration);
}
export declare class DecimalPlacesConfiguration {
    DecimalPlaces: Value<number>;
    constructor(properties: DecimalPlacesConfiguration);
}
export declare class DecimalValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>;
    CustomValue?: Value<number>;
    constructor(properties: DecimalValueWhenUnsetConfiguration);
}
export declare class DefaultFreeFormLayoutConfiguration {
    CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions;
    constructor(properties: DefaultFreeFormLayoutConfiguration);
}
export declare class DefaultGridLayoutConfiguration {
    CanvasSizeOptions: GridLayoutCanvasSizeOptions;
    constructor(properties: DefaultGridLayoutConfiguration);
}
export declare class DefaultInteractiveLayoutConfiguration {
    FreeForm?: DefaultFreeFormLayoutConfiguration;
    Grid?: DefaultGridLayoutConfiguration;
    constructor(properties: DefaultInteractiveLayoutConfiguration);
}
export declare class DefaultNewSheetConfiguration {
    SheetContentType?: Value<string>;
    InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;
    PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;
    constructor(properties: DefaultNewSheetConfiguration);
}
export declare class DefaultPaginatedLayoutConfiguration {
    SectionBased?: DefaultSectionBasedLayoutConfiguration;
    constructor(properties: DefaultPaginatedLayoutConfiguration);
}
export declare class DefaultSectionBasedLayoutConfiguration {
    CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
    constructor(properties: DefaultSectionBasedLayoutConfiguration);
}
export declare class DestinationParameterValueConfiguration {
    CustomValuesConfiguration?: CustomValuesConfiguration;
    SourceParameterName?: Value<string>;
    SelectAllValueOptions?: Value<string>;
    SourceField?: Value<string>;
    SourceColumn?: ColumnIdentifier;
    constructor(properties: DestinationParameterValueConfiguration);
}
export declare class DimensionField {
    DateDimensionField?: DateDimensionField;
    NumericalDimensionField?: NumericalDimensionField;
    CategoricalDimensionField?: CategoricalDimensionField;
    constructor(properties: DimensionField);
}
export declare class DonutCenterOptions {
    LabelVisibility?: Value<string>;
    constructor(properties: DonutCenterOptions);
}
export declare class DonutOptions {
    DonutCenterOptions?: DonutCenterOptions;
    ArcOptions?: ArcOptions;
    constructor(properties: DonutOptions);
}
export declare class DrillDownFilter {
    NumericEqualityFilter?: NumericEqualityDrillDownFilter;
    TimeRangeFilter?: TimeRangeDrillDownFilter;
    CategoryFilter?: CategoryDrillDownFilter;
    constructor(properties: DrillDownFilter);
}
export declare class DropDownControlDisplayOptions {
    TitleOptions?: LabelOptions;
    SelectAllOptions?: ListControlSelectAllOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    constructor(properties: DropDownControlDisplayOptions);
}
export declare class DynamicDefaultValue {
    GroupNameColumn?: ColumnIdentifier;
    DefaultValueColumn: ColumnIdentifier;
    UserNameColumn?: ColumnIdentifier;
    constructor(properties: DynamicDefaultValue);
}
export declare class EmptyVisual {
    VisualId: Value<string>;
    Actions?: List<VisualCustomAction>;
    DataSetIdentifier: Value<string>;
    constructor(properties: EmptyVisual);
}
export declare class Entity {
    Path?: Value<string>;
    constructor(properties: Entity);
}
export declare class ExcludePeriodConfiguration {
    Status?: Value<string>;
    Amount: Value<number>;
    Granularity: Value<string>;
    constructor(properties: ExcludePeriodConfiguration);
}
export declare class ExplicitHierarchy {
    HierarchyId: Value<string>;
    DrillDownFilters?: List<DrillDownFilter>;
    Columns: List<ColumnIdentifier>;
    constructor(properties: ExplicitHierarchy);
}
export declare class ExportHiddenFieldsOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: ExportHiddenFieldsOption);
}
export declare class ExportToCSVOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: ExportToCSVOption);
}
export declare class ExportWithHiddenFieldsOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: ExportWithHiddenFieldsOption);
}
export declare class FieldBasedTooltip {
    TooltipFields?: List<TooltipItem>;
    AggregationVisibility?: Value<string>;
    TooltipTitleType?: Value<string>;
    constructor(properties: FieldBasedTooltip);
}
export declare class FieldLabelType {
    FieldId?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: FieldLabelType);
}
export declare class FieldSeriesItem {
    FieldId: Value<string>;
    AxisBinding: Value<string>;
    Settings?: LineChartSeriesSettings;
    constructor(properties: FieldSeriesItem);
}
export declare class FieldSort {
    FieldId: Value<string>;
    Direction: Value<string>;
    constructor(properties: FieldSort);
}
export declare class FieldSortOptions {
    FieldSort?: FieldSort;
    ColumnSort?: ColumnSort;
    constructor(properties: FieldSortOptions);
}
export declare class FieldTooltipItem {
    FieldId: Value<string>;
    Label?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: FieldTooltipItem);
}
export declare class FilledMapAggregatedFieldWells {
    Values?: List<MeasureField>;
    Geospatial?: List<DimensionField>;
    constructor(properties: FilledMapAggregatedFieldWells);
}
export declare class FilledMapConditionalFormatting {
    ConditionalFormattingOptions: List<FilledMapConditionalFormattingOption>;
    constructor(properties: FilledMapConditionalFormatting);
}
export declare class FilledMapConditionalFormattingOption {
    Shape: FilledMapShapeConditionalFormatting;
    constructor(properties: FilledMapConditionalFormattingOption);
}
export declare class FilledMapConfiguration {
    SortConfiguration?: FilledMapSortConfiguration;
    Legend?: LegendOptions;
    MapStyleOptions?: GeospatialMapStyleOptions;
    FieldWells?: FilledMapFieldWells;
    Tooltip?: TooltipOptions;
    WindowOptions?: GeospatialWindowOptions;
    constructor(properties: FilledMapConfiguration);
}
export declare class FilledMapFieldWells {
    FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
    constructor(properties: FilledMapFieldWells);
}
export declare class FilledMapShapeConditionalFormatting {
    Format?: ShapeConditionalFormat;
    FieldId: Value<string>;
    constructor(properties: FilledMapShapeConditionalFormatting);
}
export declare class FilledMapSortConfiguration {
    CategorySort?: List<FieldSortOptions>;
    constructor(properties: FilledMapSortConfiguration);
}
export declare class FilledMapVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    ConditionalFormatting?: FilledMapConditionalFormatting;
    VisualId: Value<string>;
    ChartConfiguration?: FilledMapConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: FilledMapVisual);
}
export declare class Filter {
    NumericEqualityFilter?: NumericEqualityFilter;
    NumericRangeFilter?: NumericRangeFilter;
    TimeRangeFilter?: TimeRangeFilter;
    RelativeDatesFilter?: RelativeDatesFilter;
    TopBottomFilter?: TopBottomFilter;
    TimeEqualityFilter?: TimeEqualityFilter;
    CategoryFilter?: CategoryFilter;
    constructor(properties: Filter);
}
export declare class FilterControl {
    Slider?: FilterSliderControl;
    TextArea?: FilterTextAreaControl;
    Dropdown?: FilterDropDownControl;
    TextField?: FilterTextFieldControl;
    List?: FilterListControl;
    DateTimePicker?: FilterDateTimePickerControl;
    RelativeDateTime?: FilterRelativeDateTimeControl;
    constructor(properties: FilterControl);
}
export declare class FilterDateTimePickerControl {
    FilterControlId: Value<string>;
    Type?: Value<string>;
    DisplayOptions?: DateTimePickerControlDisplayOptions;
    Title: Value<string>;
    SourceFilterId: Value<string>;
    constructor(properties: FilterDateTimePickerControl);
}
export declare class FilterDropDownControl {
    FilterControlId: Value<string>;
    Type?: Value<string>;
    DisplayOptions?: DropDownControlDisplayOptions;
    CascadingControlConfiguration?: CascadingControlConfiguration;
    Title: Value<string>;
    SourceFilterId: Value<string>;
    SelectableValues?: FilterSelectableValues;
    constructor(properties: FilterDropDownControl);
}
export declare class FilterGroup {
    Status?: Value<string>;
    Filters: List<Filter>;
    CrossDataset: Value<string>;
    ScopeConfiguration: FilterScopeConfiguration;
    FilterGroupId: Value<string>;
    constructor(properties: FilterGroup);
}
export declare class FilterListConfiguration {
    CategoryValues?: List<Value<string>>;
    NullOption?: Value<string>;
    MatchOperator: Value<string>;
    SelectAllOptions?: Value<string>;
    constructor(properties: FilterListConfiguration);
}
export declare class FilterListControl {
    FilterControlId: Value<string>;
    Type?: Value<string>;
    DisplayOptions?: ListControlDisplayOptions;
    CascadingControlConfiguration?: CascadingControlConfiguration;
    Title: Value<string>;
    SourceFilterId: Value<string>;
    SelectableValues?: FilterSelectableValues;
    constructor(properties: FilterListControl);
}
export declare class FilterOperationSelectedFieldsConfiguration {
    SelectedColumns?: List<ColumnIdentifier>;
    SelectedFields?: List<Value<string>>;
    SelectedFieldOptions?: Value<string>;
    constructor(properties: FilterOperationSelectedFieldsConfiguration);
}
export declare class FilterOperationTargetVisualsConfiguration {
    SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
    constructor(properties: FilterOperationTargetVisualsConfiguration);
}
export declare class FilterRelativeDateTimeControl {
    FilterControlId: Value<string>;
    DisplayOptions?: RelativeDateTimeControlDisplayOptions;
    Title: Value<string>;
    SourceFilterId: Value<string>;
    constructor(properties: FilterRelativeDateTimeControl);
}
export declare class FilterScopeConfiguration {
    AllSheets?: {
        [key: string]: any;
    };
    SelectedSheets?: SelectedSheetsFilterScopeConfiguration;
    constructor(properties: FilterScopeConfiguration);
}
export declare class FilterSelectableValues {
    Values?: List<Value<string>>;
    constructor(properties: FilterSelectableValues);
}
export declare class FilterSliderControl {
    FilterControlId: Value<string>;
    Type?: Value<string>;
    StepSize: Value<number>;
    DisplayOptions?: SliderControlDisplayOptions;
    Title: Value<string>;
    MaximumValue: Value<number>;
    SourceFilterId: Value<string>;
    MinimumValue: Value<number>;
    constructor(properties: FilterSliderControl);
}
export declare class FilterTextAreaControl {
    FilterControlId: Value<string>;
    Delimiter?: Value<string>;
    DisplayOptions?: TextAreaControlDisplayOptions;
    Title: Value<string>;
    SourceFilterId: Value<string>;
    constructor(properties: FilterTextAreaControl);
}
export declare class FilterTextFieldControl {
    FilterControlId: Value<string>;
    DisplayOptions?: TextFieldControlDisplayOptions;
    Title: Value<string>;
    SourceFilterId: Value<string>;
    constructor(properties: FilterTextFieldControl);
}
export declare class FontConfiguration {
    FontStyle?: Value<string>;
    FontSize?: FontSize;
    FontDecoration?: Value<string>;
    FontColor?: Value<string>;
    FontWeight?: FontWeight;
    constructor(properties: FontConfiguration);
}
export declare class FontSize {
    Relative?: Value<string>;
    constructor(properties: FontSize);
}
export declare class FontWeight {
    Name?: Value<string>;
    constructor(properties: FontWeight);
}
export declare class ForecastComputation {
    PeriodsBackward?: Value<number>;
    PeriodsForward?: Value<number>;
    PredictionInterval?: Value<number>;
    Seasonality?: Value<string>;
    CustomSeasonalityValue?: Value<number>;
    Value?: MeasureField;
    Time?: DimensionField;
    UpperBoundary?: Value<number>;
    ComputationId: Value<string>;
    Name?: Value<string>;
    LowerBoundary?: Value<number>;
    constructor(properties: ForecastComputation);
}
export declare class ForecastConfiguration {
    ForecastProperties?: TimeBasedForecastProperties;
    Scenario?: ForecastScenario;
    constructor(properties: ForecastConfiguration);
}
export declare class ForecastScenario {
    WhatIfRangeScenario?: WhatIfRangeScenario;
    WhatIfPointScenario?: WhatIfPointScenario;
    constructor(properties: ForecastScenario);
}
export declare class FormatConfiguration {
    NumberFormatConfiguration?: NumberFormatConfiguration;
    DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
    StringFormatConfiguration?: StringFormatConfiguration;
    constructor(properties: FormatConfiguration);
}
export declare class FreeFormLayoutCanvasSizeOptions {
    ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
    constructor(properties: FreeFormLayoutCanvasSizeOptions);
}
export declare class FreeFormLayoutConfiguration {
    CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
    Elements: List<FreeFormLayoutElement>;
    constructor(properties: FreeFormLayoutConfiguration);
}
export declare class FreeFormLayoutElement {
    ElementType: Value<string>;
    BorderStyle?: FreeFormLayoutElementBorderStyle;
    Height: Value<string>;
    Visibility?: Value<string>;
    RenderingRules?: List<SheetElementRenderingRule>;
    YAxisLocation: Value<string>;
    LoadingAnimation?: LoadingAnimation;
    Width: Value<string>;
    BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;
    ElementId: Value<string>;
    XAxisLocation: Value<string>;
    SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;
    constructor(properties: FreeFormLayoutElement);
}
export declare class FreeFormLayoutElementBackgroundStyle {
    Color?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: FreeFormLayoutElementBackgroundStyle);
}
export declare class FreeFormLayoutElementBorderStyle {
    Color?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: FreeFormLayoutElementBorderStyle);
}
export declare class FreeFormLayoutScreenCanvasSizeOptions {
    OptimizedViewPortWidth: Value<string>;
    constructor(properties: FreeFormLayoutScreenCanvasSizeOptions);
}
export declare class FreeFormSectionLayoutConfiguration {
    Elements: List<FreeFormLayoutElement>;
    constructor(properties: FreeFormSectionLayoutConfiguration);
}
export declare class FunnelChartAggregatedFieldWells {
    Category?: List<DimensionField>;
    Values?: List<MeasureField>;
    constructor(properties: FunnelChartAggregatedFieldWells);
}
export declare class FunnelChartConfiguration {
    SortConfiguration?: FunnelChartSortConfiguration;
    DataLabelOptions?: FunnelChartDataLabelOptions;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: FunnelChartFieldWells;
    Tooltip?: TooltipOptions;
    ValueLabelOptions?: ChartAxisLabelOptions;
    VisualPalette?: VisualPalette;
    constructor(properties: FunnelChartConfiguration);
}
export declare class FunnelChartDataLabelOptions {
    MeasureLabelVisibility?: Value<string>;
    Position?: Value<string>;
    Visibility?: Value<string>;
    CategoryLabelVisibility?: Value<string>;
    LabelColor?: Value<string>;
    MeasureDataLabelStyle?: Value<string>;
    LabelFontConfiguration?: FontConfiguration;
    constructor(properties: FunnelChartDataLabelOptions);
}
export declare class FunnelChartFieldWells {
    FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
    constructor(properties: FunnelChartFieldWells);
}
export declare class FunnelChartSortConfiguration {
    CategoryItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    constructor(properties: FunnelChartSortConfiguration);
}
export declare class FunnelChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: FunnelChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: FunnelChartVisual);
}
export declare class GaugeChartArcConditionalFormatting {
    ForegroundColor?: ConditionalFormattingColor;
    constructor(properties: GaugeChartArcConditionalFormatting);
}
export declare class GaugeChartConditionalFormatting {
    ConditionalFormattingOptions?: List<GaugeChartConditionalFormattingOption>;
    constructor(properties: GaugeChartConditionalFormatting);
}
export declare class GaugeChartConditionalFormattingOption {
    Arc?: GaugeChartArcConditionalFormatting;
    PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;
    constructor(properties: GaugeChartConditionalFormattingOption);
}
export declare class GaugeChartConfiguration {
    DataLabels?: DataLabelOptions;
    FieldWells?: GaugeChartFieldWells;
    TooltipOptions?: TooltipOptions;
    GaugeChartOptions?: GaugeChartOptions;
    VisualPalette?: VisualPalette;
    constructor(properties: GaugeChartConfiguration);
}
export declare class GaugeChartFieldWells {
    TargetValues?: List<MeasureField>;
    Values?: List<MeasureField>;
    constructor(properties: GaugeChartFieldWells);
}
export declare class GaugeChartOptions {
    Arc?: ArcConfiguration;
    Comparison?: ComparisonConfiguration;
    PrimaryValueDisplayType?: Value<string>;
    ArcAxis?: ArcAxisConfiguration;
    PrimaryValueFontConfiguration?: FontConfiguration;
    constructor(properties: GaugeChartOptions);
}
export declare class GaugeChartPrimaryValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor;
    Icon?: ConditionalFormattingIcon;
    constructor(properties: GaugeChartPrimaryValueConditionalFormatting);
}
export declare class GaugeChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    ConditionalFormatting?: GaugeChartConditionalFormatting;
    VisualId: Value<string>;
    ChartConfiguration?: GaugeChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    constructor(properties: GaugeChartVisual);
}
export declare class GeospatialCoordinateBounds {
    West: Value<number>;
    South: Value<number>;
    North: Value<number>;
    East: Value<number>;
    constructor(properties: GeospatialCoordinateBounds);
}
export declare class GeospatialHeatmapColorScale {
    Colors?: List<GeospatialHeatmapDataColor>;
    constructor(properties: GeospatialHeatmapColorScale);
}
export declare class GeospatialHeatmapConfiguration {
    HeatmapColor?: GeospatialHeatmapColorScale;
    constructor(properties: GeospatialHeatmapConfiguration);
}
export declare class GeospatialHeatmapDataColor {
    Color: Value<string>;
    constructor(properties: GeospatialHeatmapDataColor);
}
export declare class GeospatialMapAggregatedFieldWells {
    Colors?: List<DimensionField>;
    Values?: List<MeasureField>;
    Geospatial?: List<DimensionField>;
    constructor(properties: GeospatialMapAggregatedFieldWells);
}
export declare class GeospatialMapConfiguration {
    Legend?: LegendOptions;
    MapStyleOptions?: GeospatialMapStyleOptions;
    FieldWells?: GeospatialMapFieldWells;
    Tooltip?: TooltipOptions;
    WindowOptions?: GeospatialWindowOptions;
    PointStyleOptions?: GeospatialPointStyleOptions;
    VisualPalette?: VisualPalette;
    constructor(properties: GeospatialMapConfiguration);
}
export declare class GeospatialMapFieldWells {
    GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
    constructor(properties: GeospatialMapFieldWells);
}
export declare class GeospatialMapStyleOptions {
    BaseMapStyle?: Value<string>;
    constructor(properties: GeospatialMapStyleOptions);
}
export declare class GeospatialMapVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: GeospatialMapConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: GeospatialMapVisual);
}
export declare class GeospatialPointStyleOptions {
    SelectedPointStyle?: Value<string>;
    ClusterMarkerConfiguration?: ClusterMarkerConfiguration;
    HeatmapConfiguration?: GeospatialHeatmapConfiguration;
    constructor(properties: GeospatialPointStyleOptions);
}
export declare class GeospatialWindowOptions {
    Bounds?: GeospatialCoordinateBounds;
    MapZoomMode?: Value<string>;
    constructor(properties: GeospatialWindowOptions);
}
export declare class GlobalTableBorderOptions {
    UniformBorder?: TableBorderOptions;
    SideSpecificBorder?: TableSideBorderOptions;
    constructor(properties: GlobalTableBorderOptions);
}
export declare class GradientColor {
    Stops?: List<GradientStop>;
    constructor(properties: GradientColor);
}
export declare class GradientStop {
    GradientOffset: Value<number>;
    DataValue?: Value<number>;
    Color?: Value<string>;
    constructor(properties: GradientStop);
}
export declare class GridLayoutCanvasSizeOptions {
    ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
    constructor(properties: GridLayoutCanvasSizeOptions);
}
export declare class GridLayoutConfiguration {
    CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
    Elements: List<GridLayoutElement>;
    constructor(properties: GridLayoutConfiguration);
}
export declare class GridLayoutElement {
    ElementType: Value<string>;
    ColumnSpan: Value<number>;
    ColumnIndex?: Value<number>;
    RowIndex?: Value<number>;
    RowSpan: Value<number>;
    ElementId: Value<string>;
    constructor(properties: GridLayoutElement);
}
export declare class GridLayoutScreenCanvasSizeOptions {
    OptimizedViewPortWidth?: Value<string>;
    ResizeOption: Value<string>;
    constructor(properties: GridLayoutScreenCanvasSizeOptions);
}
export declare class GrowthRateComputation {
    Value?: MeasureField;
    Time?: DimensionField;
    PeriodSize?: Value<number>;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: GrowthRateComputation);
}
export declare class HeaderFooterSectionConfiguration {
    Layout: SectionLayoutConfiguration;
    Style?: SectionStyle;
    SectionId: Value<string>;
    constructor(properties: HeaderFooterSectionConfiguration);
}
export declare class HeatMapAggregatedFieldWells {
    Values?: List<MeasureField>;
    Columns?: List<DimensionField>;
    Rows?: List<DimensionField>;
    constructor(properties: HeatMapAggregatedFieldWells);
}
export declare class HeatMapConfiguration {
    SortConfiguration?: HeatMapSortConfiguration;
    ColumnLabelOptions?: ChartAxisLabelOptions;
    Legend?: LegendOptions;
    DataLabels?: DataLabelOptions;
    FieldWells?: HeatMapFieldWells;
    Tooltip?: TooltipOptions;
    ColorScale?: ColorScale;
    RowLabelOptions?: ChartAxisLabelOptions;
    constructor(properties: HeatMapConfiguration);
}
export declare class HeatMapFieldWells {
    HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
    constructor(properties: HeatMapFieldWells);
}
export declare class HeatMapSortConfiguration {
    HeatMapRowSort?: List<FieldSortOptions>;
    HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;
    HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration;
    HeatMapColumnSort?: List<FieldSortOptions>;
    constructor(properties: HeatMapSortConfiguration);
}
export declare class HeatMapVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: HeatMapConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: HeatMapVisual);
}
export declare class HistogramAggregatedFieldWells {
    Values?: List<MeasureField>;
    constructor(properties: HistogramAggregatedFieldWells);
}
export declare class HistogramBinOptions {
    BinWidth?: BinWidthOptions;
    StartValue?: Value<number>;
    SelectedBinType?: Value<string>;
    BinCount?: BinCountOptions;
    constructor(properties: HistogramBinOptions);
}
export declare class HistogramConfiguration {
    YAxisDisplayOptions?: AxisDisplayOptions;
    DataLabels?: DataLabelOptions;
    BinOptions?: HistogramBinOptions;
    FieldWells?: HistogramFieldWells;
    Tooltip?: TooltipOptions;
    XAxisLabelOptions?: ChartAxisLabelOptions;
    VisualPalette?: VisualPalette;
    XAxisDisplayOptions?: AxisDisplayOptions;
    constructor(properties: HistogramConfiguration);
}
export declare class HistogramFieldWells {
    HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
    constructor(properties: HistogramFieldWells);
}
export declare class HistogramVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: HistogramConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    constructor(properties: HistogramVisual);
}
export declare class InsightConfiguration {
    Computations?: List<Computation>;
    CustomNarrative?: CustomNarrativeOptions;
    constructor(properties: InsightConfiguration);
}
export declare class InsightVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    Actions?: List<VisualCustomAction>;
    DataSetIdentifier: Value<string>;
    InsightConfiguration?: InsightConfiguration;
    Title?: VisualTitleLabelOptions;
    constructor(properties: InsightVisual);
}
export declare class IntegerDefaultValues {
    DynamicValue?: DynamicDefaultValue;
    StaticValues?: List<Value<number>>;
    constructor(properties: IntegerDefaultValues);
}
export declare class IntegerParameter {
    Values: List<Value<number>>;
    Name: Value<string>;
    constructor(properties: IntegerParameter);
}
export declare class IntegerParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>;
    DefaultValues?: IntegerDefaultValues;
    ParameterValueType: Value<string>;
    ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;
    Name: Value<string>;
    constructor(properties: IntegerParameterDeclaration);
}
export declare class IntegerValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>;
    CustomValue?: Value<number>;
    constructor(properties: IntegerValueWhenUnsetConfiguration);
}
export declare class ItemsLimitConfiguration {
    ItemsLimit?: Value<number>;
    OtherCategories?: Value<string>;
    constructor(properties: ItemsLimitConfiguration);
}
export declare class KPIActualValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor;
    Icon?: ConditionalFormattingIcon;
    constructor(properties: KPIActualValueConditionalFormatting);
}
export declare class KPIComparisonValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor;
    Icon?: ConditionalFormattingIcon;
    constructor(properties: KPIComparisonValueConditionalFormatting);
}
export declare class KPIConditionalFormatting {
    ConditionalFormattingOptions?: List<KPIConditionalFormattingOption>;
    constructor(properties: KPIConditionalFormatting);
}
export declare class KPIConditionalFormattingOption {
    PrimaryValue?: KPIPrimaryValueConditionalFormatting;
    ActualValue?: KPIActualValueConditionalFormatting;
    ComparisonValue?: KPIComparisonValueConditionalFormatting;
    ProgressBar?: KPIProgressBarConditionalFormatting;
    constructor(properties: KPIConditionalFormattingOption);
}
export declare class KPIConfiguration {
    SortConfiguration?: KPISortConfiguration;
    KPIOptions?: KPIOptions;
    FieldWells?: KPIFieldWells;
    constructor(properties: KPIConfiguration);
}
export declare class KPIFieldWells {
    TargetValues?: List<MeasureField>;
    TrendGroups?: List<DimensionField>;
    Values?: List<MeasureField>;
    constructor(properties: KPIFieldWells);
}
export declare class KPIOptions {
    SecondaryValueFontConfiguration?: FontConfiguration;
    VisualLayoutOptions?: KPIVisualLayoutOptions;
    TrendArrows?: TrendArrowOptions;
    SecondaryValue?: SecondaryValueOptions;
    Comparison?: ComparisonConfiguration;
    PrimaryValueDisplayType?: Value<string>;
    ProgressBar?: ProgressBarOptions;
    PrimaryValueFontConfiguration?: FontConfiguration;
    Sparkline?: KPISparklineOptions;
    constructor(properties: KPIOptions);
}
export declare class KPIPrimaryValueConditionalFormatting {
    TextColor?: ConditionalFormattingColor;
    Icon?: ConditionalFormattingIcon;
    constructor(properties: KPIPrimaryValueConditionalFormatting);
}
export declare class KPIProgressBarConditionalFormatting {
    ForegroundColor?: ConditionalFormattingColor;
    constructor(properties: KPIProgressBarConditionalFormatting);
}
export declare class KPISortConfiguration {
    TrendGroupSort?: List<FieldSortOptions>;
    constructor(properties: KPISortConfiguration);
}
export declare class KPISparklineOptions {
    Type: Value<string>;
    Color?: Value<string>;
    TooltipVisibility?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: KPISparklineOptions);
}
export declare class KPIVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    ConditionalFormatting?: KPIConditionalFormatting;
    VisualId: Value<string>;
    ChartConfiguration?: KPIConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: KPIVisual);
}
export declare class KPIVisualLayoutOptions {
    StandardLayout?: KPIVisualStandardLayout;
    constructor(properties: KPIVisualLayoutOptions);
}
export declare class KPIVisualStandardLayout {
    Type: Value<string>;
    constructor(properties: KPIVisualStandardLayout);
}
export declare class LabelOptions {
    CustomLabel?: Value<string>;
    Visibility?: Value<string>;
    FontConfiguration?: FontConfiguration;
    constructor(properties: LabelOptions);
}
export declare class Layout {
    Configuration: LayoutConfiguration;
    constructor(properties: Layout);
}
export declare class LayoutConfiguration {
    GridLayout?: GridLayoutConfiguration;
    FreeFormLayout?: FreeFormLayoutConfiguration;
    SectionBasedLayout?: SectionBasedLayoutConfiguration;
    constructor(properties: LayoutConfiguration);
}
export declare class LegendOptions {
    Position?: Value<string>;
    Title?: LabelOptions;
    Visibility?: Value<string>;
    Height?: Value<string>;
    Width?: Value<string>;
    constructor(properties: LegendOptions);
}
export declare class LineChartAggregatedFieldWells {
    Category?: List<DimensionField>;
    Colors?: List<DimensionField>;
    Values?: List<MeasureField>;
    SmallMultiples?: List<DimensionField>;
    constructor(properties: LineChartAggregatedFieldWells);
}
export declare class LineChartConfiguration {
    SortConfiguration?: LineChartSortConfiguration;
    Legend?: LegendOptions;
    ReferenceLines?: List<ReferenceLine>;
    DataLabels?: DataLabelOptions;
    Tooltip?: TooltipOptions;
    SmallMultiplesOptions?: SmallMultiplesOptions;
    PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
    VisualPalette?: VisualPalette;
    XAxisDisplayOptions?: AxisDisplayOptions;
    DefaultSeriesSettings?: LineChartDefaultSeriesSettings;
    SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
    ForecastConfigurations?: List<ForecastConfiguration>;
    Series?: List<SeriesItem>;
    Type?: Value<string>;
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    ContributionAnalysisDefaults?: List<ContributionAnalysisDefault>;
    FieldWells?: LineChartFieldWells;
    SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
    XAxisLabelOptions?: ChartAxisLabelOptions;
    constructor(properties: LineChartConfiguration);
}
export declare class LineChartDefaultSeriesSettings {
    LineStyleSettings?: LineChartLineStyleSettings;
    AxisBinding?: Value<string>;
    MarkerStyleSettings?: LineChartMarkerStyleSettings;
    constructor(properties: LineChartDefaultSeriesSettings);
}
export declare class LineChartFieldWells {
    LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
    constructor(properties: LineChartFieldWells);
}
export declare class LineChartLineStyleSettings {
    LineInterpolation?: Value<string>;
    LineStyle?: Value<string>;
    LineVisibility?: Value<string>;
    LineWidth?: Value<string>;
    constructor(properties: LineChartLineStyleSettings);
}
export declare class LineChartMarkerStyleSettings {
    MarkerShape?: Value<string>;
    MarkerSize?: Value<string>;
    MarkerVisibility?: Value<string>;
    MarkerColor?: Value<string>;
    constructor(properties: LineChartMarkerStyleSettings);
}
export declare class LineChartSeriesSettings {
    LineStyleSettings?: LineChartLineStyleSettings;
    MarkerStyleSettings?: LineChartMarkerStyleSettings;
    constructor(properties: LineChartSeriesSettings);
}
export declare class LineChartSortConfiguration {
    CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;
    ColorItemsLimitConfiguration?: ItemsLimitConfiguration;
    SmallMultiplesSort?: List<FieldSortOptions>;
    CategorySort?: List<FieldSortOptions>;
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
    constructor(properties: LineChartSortConfiguration);
}
export declare class LineChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: LineChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: LineChartVisual);
}
export declare class LineSeriesAxisDisplayOptions {
    MissingDataConfigurations?: List<MissingDataConfiguration>;
    AxisOptions?: AxisDisplayOptions;
    constructor(properties: LineSeriesAxisDisplayOptions);
}
export declare class LinkSharingConfiguration {
    Permissions?: List<ResourcePermission>;
    constructor(properties: LinkSharingConfiguration);
}
export declare class ListControlDisplayOptions {
    TitleOptions?: LabelOptions;
    SearchOptions?: ListControlSearchOptions;
    SelectAllOptions?: ListControlSelectAllOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    constructor(properties: ListControlDisplayOptions);
}
export declare class ListControlSearchOptions {
    Visibility?: Value<string>;
    constructor(properties: ListControlSearchOptions);
}
export declare class ListControlSelectAllOptions {
    Visibility?: Value<string>;
    constructor(properties: ListControlSelectAllOptions);
}
export declare class LoadingAnimation {
    Visibility?: Value<string>;
    constructor(properties: LoadingAnimation);
}
export declare class LocalNavigationConfiguration {
    TargetSheetId: Value<string>;
    constructor(properties: LocalNavigationConfiguration);
}
export declare class LongFormatText {
    RichText?: Value<string>;
    PlainText?: Value<string>;
    constructor(properties: LongFormatText);
}
export declare class MappedDataSetParameter {
    DataSetParameterName: Value<string>;
    DataSetIdentifier: Value<string>;
    constructor(properties: MappedDataSetParameter);
}
export declare class MaximumLabelType {
    Visibility?: Value<string>;
    constructor(properties: MaximumLabelType);
}
export declare class MaximumMinimumComputation {
    Type: Value<string>;
    Value?: MeasureField;
    Time?: DimensionField;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: MaximumMinimumComputation);
}
export declare class MeasureField {
    DateMeasureField?: DateMeasureField;
    NumericalMeasureField?: NumericalMeasureField;
    CategoricalMeasureField?: CategoricalMeasureField;
    CalculatedMeasureField?: CalculatedMeasureField;
    constructor(properties: MeasureField);
}
export declare class MetricComparisonComputation {
    TargetValue?: MeasureField;
    Time?: DimensionField;
    ComputationId: Value<string>;
    FromValue?: MeasureField;
    Name?: Value<string>;
    constructor(properties: MetricComparisonComputation);
}
export declare class MinimumLabelType {
    Visibility?: Value<string>;
    constructor(properties: MinimumLabelType);
}
export declare class MissingDataConfiguration {
    TreatmentOption?: Value<string>;
    constructor(properties: MissingDataConfiguration);
}
export declare class NegativeValueConfiguration {
    DisplayMode: Value<string>;
    constructor(properties: NegativeValueConfiguration);
}
export declare class NullValueFormatConfiguration {
    NullString: Value<string>;
    constructor(properties: NullValueFormatConfiguration);
}
export declare class NumberDisplayFormatConfiguration {
    NegativeValueConfiguration?: NegativeValueConfiguration;
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
    NumberScale?: Value<string>;
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    Suffix?: Value<string>;
    SeparatorConfiguration?: NumericSeparatorConfiguration;
    Prefix?: Value<string>;
    constructor(properties: NumberDisplayFormatConfiguration);
}
export declare class NumberFormatConfiguration {
    FormatConfiguration?: NumericFormatConfiguration;
    constructor(properties: NumberFormatConfiguration);
}
export declare class NumericAxisOptions {
    Scale?: AxisScale;
    Range?: AxisDisplayRange;
    constructor(properties: NumericAxisOptions);
}
export declare class NumericEqualityDrillDownFilter {
    Column: ColumnIdentifier;
    Value: Value<number>;
    constructor(properties: NumericEqualityDrillDownFilter);
}
export declare class NumericEqualityFilter {
    AggregationFunction?: AggregationFunction;
    Column: ColumnIdentifier;
    Value?: Value<number>;
    ParameterName?: Value<string>;
    NullOption: Value<string>;
    MatchOperator: Value<string>;
    SelectAllOptions?: Value<string>;
    FilterId: Value<string>;
    constructor(properties: NumericEqualityFilter);
}
export declare class NumericFormatConfiguration {
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
    CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;
    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
    constructor(properties: NumericFormatConfiguration);
}
export declare class NumericRangeFilter {
    AggregationFunction?: AggregationFunction;
    Column: ColumnIdentifier;
    IncludeMaximum?: Value<boolean>;
    RangeMinimum?: NumericRangeFilterValue;
    NullOption: Value<string>;
    SelectAllOptions?: Value<string>;
    FilterId: Value<string>;
    RangeMaximum?: NumericRangeFilterValue;
    IncludeMinimum?: Value<boolean>;
    constructor(properties: NumericRangeFilter);
}
export declare class NumericRangeFilterValue {
    StaticValue?: Value<number>;
    Parameter?: Value<string>;
    constructor(properties: NumericRangeFilterValue);
}
export declare class NumericSeparatorConfiguration {
    DecimalSeparator?: Value<string>;
    ThousandsSeparator?: ThousandSeparatorOptions;
    constructor(properties: NumericSeparatorConfiguration);
}
export declare class NumericalAggregationFunction {
    PercentileAggregation?: PercentileAggregation;
    SimpleNumericalAggregation?: Value<string>;
    constructor(properties: NumericalAggregationFunction);
}
export declare class NumericalDimensionField {
    HierarchyId?: Value<string>;
    FormatConfiguration?: NumberFormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: NumericalDimensionField);
}
export declare class NumericalMeasureField {
    AggregationFunction?: NumericalAggregationFunction;
    FormatConfiguration?: NumberFormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: NumericalMeasureField);
}
export declare class PaginationConfiguration {
    PageSize: Value<number>;
    PageNumber: Value<number>;
    constructor(properties: PaginationConfiguration);
}
export declare class PanelConfiguration {
    BorderThickness?: Value<string>;
    BorderStyle?: Value<string>;
    GutterSpacing?: Value<string>;
    BackgroundVisibility?: Value<string>;
    BorderVisibility?: Value<string>;
    BorderColor?: Value<string>;
    Title?: PanelTitleOptions;
    GutterVisibility?: Value<string>;
    BackgroundColor?: Value<string>;
    constructor(properties: PanelConfiguration);
}
export declare class PanelTitleOptions {
    Visibility?: Value<string>;
    FontConfiguration?: FontConfiguration;
    HorizontalTextAlignment?: Value<string>;
    constructor(properties: PanelTitleOptions);
}
export declare class ParameterControl {
    Slider?: ParameterSliderControl;
    TextArea?: ParameterTextAreaControl;
    Dropdown?: ParameterDropDownControl;
    TextField?: ParameterTextFieldControl;
    List?: ParameterListControl;
    DateTimePicker?: ParameterDateTimePickerControl;
    constructor(properties: ParameterControl);
}
export declare class ParameterDateTimePickerControl {
    ParameterControlId: Value<string>;
    DisplayOptions?: DateTimePickerControlDisplayOptions;
    SourceParameterName: Value<string>;
    Title: Value<string>;
    constructor(properties: ParameterDateTimePickerControl);
}
export declare class ParameterDeclaration {
    StringParameterDeclaration?: StringParameterDeclaration;
    DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
    DecimalParameterDeclaration?: DecimalParameterDeclaration;
    IntegerParameterDeclaration?: IntegerParameterDeclaration;
    constructor(properties: ParameterDeclaration);
}
export declare class ParameterDropDownControl {
    ParameterControlId: Value<string>;
    Type?: Value<string>;
    DisplayOptions?: DropDownControlDisplayOptions;
    SourceParameterName: Value<string>;
    CascadingControlConfiguration?: CascadingControlConfiguration;
    Title: Value<string>;
    SelectableValues?: ParameterSelectableValues;
    constructor(properties: ParameterDropDownControl);
}
export declare class ParameterListControl {
    ParameterControlId: Value<string>;
    Type?: Value<string>;
    DisplayOptions?: ListControlDisplayOptions;
    SourceParameterName: Value<string>;
    CascadingControlConfiguration?: CascadingControlConfiguration;
    Title: Value<string>;
    SelectableValues?: ParameterSelectableValues;
    constructor(properties: ParameterListControl);
}
export declare class ParameterSelectableValues {
    LinkToDataSetColumn?: ColumnIdentifier;
    Values?: List<Value<string>>;
    constructor(properties: ParameterSelectableValues);
}
export declare class ParameterSliderControl {
    ParameterControlId: Value<string>;
    StepSize: Value<number>;
    DisplayOptions?: SliderControlDisplayOptions;
    SourceParameterName: Value<string>;
    Title: Value<string>;
    MaximumValue: Value<number>;
    MinimumValue: Value<number>;
    constructor(properties: ParameterSliderControl);
}
export declare class ParameterTextAreaControl {
    ParameterControlId: Value<string>;
    Delimiter?: Value<string>;
    DisplayOptions?: TextAreaControlDisplayOptions;
    SourceParameterName: Value<string>;
    Title: Value<string>;
    constructor(properties: ParameterTextAreaControl);
}
export declare class ParameterTextFieldControl {
    ParameterControlId: Value<string>;
    DisplayOptions?: TextFieldControlDisplayOptions;
    SourceParameterName: Value<string>;
    Title: Value<string>;
    constructor(properties: ParameterTextFieldControl);
}
export declare class Parameters {
    StringParameters?: List<StringParameter>;
    DecimalParameters?: List<DecimalParameter>;
    IntegerParameters?: List<IntegerParameter>;
    DateTimeParameters?: List<DateTimeParameter>;
    constructor(properties: Parameters);
}
export declare class PercentVisibleRange {
    From?: Value<number>;
    To?: Value<number>;
    constructor(properties: PercentVisibleRange);
}
export declare class PercentageDisplayFormatConfiguration {
    NegativeValueConfiguration?: NegativeValueConfiguration;
    DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    Suffix?: Value<string>;
    SeparatorConfiguration?: NumericSeparatorConfiguration;
    Prefix?: Value<string>;
    constructor(properties: PercentageDisplayFormatConfiguration);
}
export declare class PercentileAggregation {
    PercentileValue?: Value<number>;
    constructor(properties: PercentileAggregation);
}
export declare class PeriodOverPeriodComputation {
    Value?: MeasureField;
    Time?: DimensionField;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: PeriodOverPeriodComputation);
}
export declare class PeriodToDateComputation {
    PeriodTimeGranularity?: Value<string>;
    Value?: MeasureField;
    Time?: DimensionField;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: PeriodToDateComputation);
}
export declare class PieChartAggregatedFieldWells {
    Category?: List<DimensionField>;
    Values?: List<MeasureField>;
    SmallMultiples?: List<DimensionField>;
    constructor(properties: PieChartAggregatedFieldWells);
}
export declare class PieChartConfiguration {
    SortConfiguration?: PieChartSortConfiguration;
    Legend?: LegendOptions;
    DataLabels?: DataLabelOptions;
    ContributionAnalysisDefaults?: List<ContributionAnalysisDefault>;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: PieChartFieldWells;
    Tooltip?: TooltipOptions;
    DonutOptions?: DonutOptions;
    SmallMultiplesOptions?: SmallMultiplesOptions;
    ValueLabelOptions?: ChartAxisLabelOptions;
    VisualPalette?: VisualPalette;
    constructor(properties: PieChartConfiguration);
}
export declare class PieChartFieldWells {
    PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
    constructor(properties: PieChartFieldWells);
}
export declare class PieChartSortConfiguration {
    SmallMultiplesSort?: List<FieldSortOptions>;
    CategoryItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
    constructor(properties: PieChartSortConfiguration);
}
export declare class PieChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: PieChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: PieChartVisual);
}
export declare class PivotFieldSortOptions {
    SortBy: PivotTableSortBy;
    FieldId: Value<string>;
    constructor(properties: PivotFieldSortOptions);
}
export declare class PivotTableAggregatedFieldWells {
    Values?: List<MeasureField>;
    Columns?: List<DimensionField>;
    Rows?: List<DimensionField>;
    constructor(properties: PivotTableAggregatedFieldWells);
}
export declare class PivotTableCellConditionalFormatting {
    Scope?: PivotTableConditionalFormattingScope;
    Scopes?: List<PivotTableConditionalFormattingScope>;
    FieldId: Value<string>;
    TextFormat?: TextConditionalFormat;
    constructor(properties: PivotTableCellConditionalFormatting);
}
export declare class PivotTableConditionalFormatting {
    ConditionalFormattingOptions?: List<PivotTableConditionalFormattingOption>;
    constructor(properties: PivotTableConditionalFormatting);
}
export declare class PivotTableConditionalFormattingOption {
    Cell?: PivotTableCellConditionalFormatting;
    constructor(properties: PivotTableConditionalFormattingOption);
}
export declare class PivotTableConditionalFormattingScope {
    Role?: Value<string>;
    constructor(properties: PivotTableConditionalFormattingScope);
}
export declare class PivotTableConfiguration {
    SortConfiguration?: PivotTableSortConfiguration;
    PaginatedReportOptions?: PivotTablePaginatedReportOptions;
    TableOptions?: PivotTableOptions;
    FieldWells?: PivotTableFieldWells;
    FieldOptions?: PivotTableFieldOptions;
    TotalOptions?: PivotTableTotalOptions;
    constructor(properties: PivotTableConfiguration);
}
export declare class PivotTableDataPathOption {
    DataPathList: List<DataPathValue>;
    Width?: Value<string>;
    constructor(properties: PivotTableDataPathOption);
}
export declare class PivotTableFieldCollapseStateOption {
    Target: PivotTableFieldCollapseStateTarget;
    State?: Value<string>;
    constructor(properties: PivotTableFieldCollapseStateOption);
}
export declare class PivotTableFieldCollapseStateTarget {
    FieldId?: Value<string>;
    FieldDataPathValues?: List<DataPathValue>;
    constructor(properties: PivotTableFieldCollapseStateTarget);
}
export declare class PivotTableFieldOption {
    CustomLabel?: Value<string>;
    FieldId: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: PivotTableFieldOption);
}
export declare class PivotTableFieldOptions {
    CollapseStateOptions?: List<PivotTableFieldCollapseStateOption>;
    DataPathOptions?: List<PivotTableDataPathOption>;
    SelectedFieldOptions?: List<PivotTableFieldOption>;
    constructor(properties: PivotTableFieldOptions);
}
export declare class PivotTableFieldSubtotalOptions {
    FieldId?: Value<string>;
    constructor(properties: PivotTableFieldSubtotalOptions);
}
export declare class PivotTableFieldWells {
    PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
    constructor(properties: PivotTableFieldWells);
}
export declare class PivotTableOptions {
    RowFieldNamesStyle?: TableCellStyle;
    RowHeaderStyle?: TableCellStyle;
    CollapsedRowDimensionsVisibility?: Value<string>;
    RowsLayout?: Value<string>;
    MetricPlacement?: Value<string>;
    DefaultCellWidth?: Value<string>;
    ColumnNamesVisibility?: Value<string>;
    RowsLabelOptions?: PivotTableRowsLabelOptions;
    SingleMetricVisibility?: Value<string>;
    ColumnHeaderStyle?: TableCellStyle;
    ToggleButtonsVisibility?: Value<string>;
    CellStyle?: TableCellStyle;
    RowAlternateColorOptions?: RowAlternateColorOptions;
    constructor(properties: PivotTableOptions);
}
export declare class PivotTablePaginatedReportOptions {
    OverflowColumnHeaderVisibility?: Value<string>;
    VerticalOverflowVisibility?: Value<string>;
    constructor(properties: PivotTablePaginatedReportOptions);
}
export declare class PivotTableRowsLabelOptions {
    CustomLabel?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: PivotTableRowsLabelOptions);
}
export declare class PivotTableSortBy {
    Field?: FieldSort;
    DataPath?: DataPathSort;
    Column?: ColumnSort;
    constructor(properties: PivotTableSortBy);
}
export declare class PivotTableSortConfiguration {
    FieldSortOptions?: List<PivotFieldSortOptions>;
    constructor(properties: PivotTableSortConfiguration);
}
export declare class PivotTableTotalOptions {
    ColumnSubtotalOptions?: SubtotalOptions;
    RowSubtotalOptions?: SubtotalOptions;
    RowTotalOptions?: PivotTotalOptions;
    ColumnTotalOptions?: PivotTotalOptions;
    constructor(properties: PivotTableTotalOptions);
}
export declare class PivotTableVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    ConditionalFormatting?: PivotTableConditionalFormatting;
    VisualId: Value<string>;
    ChartConfiguration?: PivotTableConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    constructor(properties: PivotTableVisual);
}
export declare class PivotTotalOptions {
    CustomLabel?: Value<string>;
    TotalAggregationOptions?: List<TotalAggregationOption>;
    ValueCellStyle?: TableCellStyle;
    ScrollStatus?: Value<string>;
    Placement?: Value<string>;
    TotalCellStyle?: TableCellStyle;
    TotalsVisibility?: Value<string>;
    MetricHeaderCellStyle?: TableCellStyle;
    constructor(properties: PivotTotalOptions);
}
export declare class PredefinedHierarchy {
    HierarchyId: Value<string>;
    DrillDownFilters?: List<DrillDownFilter>;
    Columns: List<ColumnIdentifier>;
    constructor(properties: PredefinedHierarchy);
}
export declare class ProgressBarOptions {
    Visibility?: Value<string>;
    constructor(properties: ProgressBarOptions);
}
export declare class RadarChartAggregatedFieldWells {
    Category?: List<DimensionField>;
    Color?: List<DimensionField>;
    Values?: List<MeasureField>;
    constructor(properties: RadarChartAggregatedFieldWells);
}
export declare class RadarChartAreaStyleSettings {
    Visibility?: Value<string>;
    constructor(properties: RadarChartAreaStyleSettings);
}
export declare class RadarChartConfiguration {
    SortConfiguration?: RadarChartSortConfiguration;
    Legend?: LegendOptions;
    Shape?: Value<string>;
    BaseSeriesSettings?: RadarChartSeriesSettings;
    ColorLabelOptions?: ChartAxisLabelOptions;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    AxesRangeScale?: Value<string>;
    VisualPalette?: VisualPalette;
    AlternateBandColorsVisibility?: Value<string>;
    StartAngle?: Value<number>;
    CategoryAxis?: AxisDisplayOptions;
    FieldWells?: RadarChartFieldWells;
    ColorAxis?: AxisDisplayOptions;
    AlternateBandOddColor?: Value<string>;
    AlternateBandEvenColor?: Value<string>;
    constructor(properties: RadarChartConfiguration);
}
export declare class RadarChartFieldWells {
    RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells;
    constructor(properties: RadarChartFieldWells);
}
export declare class RadarChartSeriesSettings {
    AreaStyleSettings?: RadarChartAreaStyleSettings;
    constructor(properties: RadarChartSeriesSettings);
}
export declare class RadarChartSortConfiguration {
    ColorSort?: List<FieldSortOptions>;
    ColorItemsLimit?: ItemsLimitConfiguration;
    CategoryItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    constructor(properties: RadarChartSortConfiguration);
}
export declare class RadarChartVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: RadarChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: RadarChartVisual);
}
export declare class RangeEndsLabelType {
    Visibility?: Value<string>;
    constructor(properties: RangeEndsLabelType);
}
export declare class ReferenceLine {
    Status?: Value<string>;
    DataConfiguration: ReferenceLineDataConfiguration;
    LabelConfiguration?: ReferenceLineLabelConfiguration;
    StyleConfiguration?: ReferenceLineStyleConfiguration;
    constructor(properties: ReferenceLine);
}
export declare class ReferenceLineCustomLabelConfiguration {
    CustomLabel: Value<string>;
    constructor(properties: ReferenceLineCustomLabelConfiguration);
}
export declare class ReferenceLineDataConfiguration {
    DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;
    AxisBinding?: Value<string>;
    SeriesType?: Value<string>;
    StaticConfiguration?: ReferenceLineStaticDataConfiguration;
    constructor(properties: ReferenceLineDataConfiguration);
}
export declare class ReferenceLineDynamicDataConfiguration {
    Column: ColumnIdentifier;
    MeasureAggregationFunction?: AggregationFunction;
    Calculation: NumericalAggregationFunction;
    constructor(properties: ReferenceLineDynamicDataConfiguration);
}
export declare class ReferenceLineLabelConfiguration {
    HorizontalPosition?: Value<string>;
    ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;
    CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;
    FontColor?: Value<string>;
    FontConfiguration?: FontConfiguration;
    VerticalPosition?: Value<string>;
    constructor(properties: ReferenceLineLabelConfiguration);
}
export declare class ReferenceLineStaticDataConfiguration {
    Value: Value<number>;
    constructor(properties: ReferenceLineStaticDataConfiguration);
}
export declare class ReferenceLineStyleConfiguration {
    Pattern?: Value<string>;
    Color?: Value<string>;
    constructor(properties: ReferenceLineStyleConfiguration);
}
export declare class ReferenceLineValueLabelConfiguration {
    FormatConfiguration?: NumericFormatConfiguration;
    RelativePosition?: Value<string>;
    constructor(properties: ReferenceLineValueLabelConfiguration);
}
export declare class RelativeDateTimeControlDisplayOptions {
    TitleOptions?: LabelOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    DateTimeFormat?: Value<string>;
    constructor(properties: RelativeDateTimeControlDisplayOptions);
}
export declare class RelativeDatesFilter {
    RelativeDateValue?: Value<number>;
    Column: ColumnIdentifier;
    RelativeDateType: Value<string>;
    TimeGranularity: Value<string>;
    ParameterName?: Value<string>;
    NullOption: Value<string>;
    FilterId: Value<string>;
    AnchorDateConfiguration: AnchorDateConfiguration;
    MinimumGranularity?: Value<string>;
    ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
    constructor(properties: RelativeDatesFilter);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Resource?: Value<string>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class RollingDateConfiguration {
    Expression: Value<string>;
    DataSetIdentifier?: Value<string>;
    constructor(properties: RollingDateConfiguration);
}
export declare class RowAlternateColorOptions {
    Status?: Value<string>;
    UsePrimaryBackgroundColor?: Value<string>;
    RowAlternateColors?: List<Value<string>>;
    constructor(properties: RowAlternateColorOptions);
}
export declare class SameSheetTargetVisualConfiguration {
    TargetVisualOptions?: Value<string>;
    TargetVisuals?: List<Value<string>>;
    constructor(properties: SameSheetTargetVisualConfiguration);
}
export declare class SankeyDiagramAggregatedFieldWells {
    Destination?: List<DimensionField>;
    Source?: List<DimensionField>;
    Weight?: List<MeasureField>;
    constructor(properties: SankeyDiagramAggregatedFieldWells);
}
export declare class SankeyDiagramChartConfiguration {
    SortConfiguration?: SankeyDiagramSortConfiguration;
    DataLabels?: DataLabelOptions;
    FieldWells?: SankeyDiagramFieldWells;
    constructor(properties: SankeyDiagramChartConfiguration);
}
export declare class SankeyDiagramFieldWells {
    SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
    constructor(properties: SankeyDiagramFieldWells);
}
export declare class SankeyDiagramSortConfiguration {
    WeightSort?: List<FieldSortOptions>;
    SourceItemsLimit?: ItemsLimitConfiguration;
    DestinationItemsLimit?: ItemsLimitConfiguration;
    constructor(properties: SankeyDiagramSortConfiguration);
}
export declare class SankeyDiagramVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: SankeyDiagramChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    constructor(properties: SankeyDiagramVisual);
}
export declare class ScatterPlotCategoricallyAggregatedFieldWells {
    Category?: List<DimensionField>;
    Size?: List<MeasureField>;
    Label?: List<DimensionField>;
    XAxis?: List<MeasureField>;
    YAxis?: List<MeasureField>;
    constructor(properties: ScatterPlotCategoricallyAggregatedFieldWells);
}
export declare class ScatterPlotConfiguration {
    YAxisLabelOptions?: ChartAxisLabelOptions;
    Legend?: LegendOptions;
    YAxisDisplayOptions?: AxisDisplayOptions;
    DataLabels?: DataLabelOptions;
    FieldWells?: ScatterPlotFieldWells;
    Tooltip?: TooltipOptions;
    XAxisLabelOptions?: ChartAxisLabelOptions;
    VisualPalette?: VisualPalette;
    XAxisDisplayOptions?: AxisDisplayOptions;
    constructor(properties: ScatterPlotConfiguration);
}
export declare class ScatterPlotFieldWells {
    ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
    ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;
    constructor(properties: ScatterPlotFieldWells);
}
export declare class ScatterPlotUnaggregatedFieldWells {
    Category?: List<DimensionField>;
    Size?: List<MeasureField>;
    Label?: List<DimensionField>;
    XAxis?: List<DimensionField>;
    YAxis?: List<DimensionField>;
    constructor(properties: ScatterPlotUnaggregatedFieldWells);
}
export declare class ScatterPlotVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: ScatterPlotConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: ScatterPlotVisual);
}
export declare class ScrollBarOptions {
    VisibleRange?: VisibleRangeOptions;
    Visibility?: Value<string>;
    constructor(properties: ScrollBarOptions);
}
export declare class SecondaryValueOptions {
    Visibility?: Value<string>;
    constructor(properties: SecondaryValueOptions);
}
export declare class SectionAfterPageBreak {
    Status?: Value<string>;
    constructor(properties: SectionAfterPageBreak);
}
export declare class SectionBasedLayoutCanvasSizeOptions {
    PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
    constructor(properties: SectionBasedLayoutCanvasSizeOptions);
}
export declare class SectionBasedLayoutConfiguration {
    CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
    FooterSections: List<HeaderFooterSectionConfiguration>;
    BodySections: List<BodySectionConfiguration>;
    HeaderSections: List<HeaderFooterSectionConfiguration>;
    constructor(properties: SectionBasedLayoutConfiguration);
}
export declare class SectionBasedLayoutPaperCanvasSizeOptions {
    PaperMargin?: Spacing;
    PaperSize?: Value<string>;
    PaperOrientation?: Value<string>;
    constructor(properties: SectionBasedLayoutPaperCanvasSizeOptions);
}
export declare class SectionLayoutConfiguration {
    FreeFormLayout: FreeFormSectionLayoutConfiguration;
    constructor(properties: SectionLayoutConfiguration);
}
export declare class SectionPageBreakConfiguration {
    After?: SectionAfterPageBreak;
    constructor(properties: SectionPageBreakConfiguration);
}
export declare class SectionStyle {
    Padding?: Spacing;
    Height?: Value<string>;
    constructor(properties: SectionStyle);
}
export declare class SelectedSheetsFilterScopeConfiguration {
    SheetVisualScopingConfigurations?: List<SheetVisualScopingConfiguration>;
    constructor(properties: SelectedSheetsFilterScopeConfiguration);
}
export declare class SeriesItem {
    FieldSeriesItem?: FieldSeriesItem;
    DataFieldSeriesItem?: DataFieldSeriesItem;
    constructor(properties: SeriesItem);
}
export declare class SetParameterValueConfiguration {
    DestinationParameterName: Value<string>;
    Value: DestinationParameterValueConfiguration;
    constructor(properties: SetParameterValueConfiguration);
}
export declare class ShapeConditionalFormat {
    BackgroundColor: ConditionalFormattingColor;
    constructor(properties: ShapeConditionalFormat);
}
export declare class Sheet {
    SheetId?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Sheet);
}
export declare class SheetControlInfoIconLabelOptions {
    Visibility?: Value<string>;
    InfoIconText?: Value<string>;
    constructor(properties: SheetControlInfoIconLabelOptions);
}
export declare class SheetControlLayout {
    Configuration: SheetControlLayoutConfiguration;
    constructor(properties: SheetControlLayout);
}
export declare class SheetControlLayoutConfiguration {
    GridLayout?: GridLayoutConfiguration;
    constructor(properties: SheetControlLayoutConfiguration);
}
export declare class SheetControlsOption {
    VisibilityState?: Value<string>;
    constructor(properties: SheetControlsOption);
}
export declare class SheetDefinition {
    Description?: Value<string>;
    ParameterControls?: List<ParameterControl>;
    TextBoxes?: List<SheetTextBox>;
    Layouts?: List<Layout>;
    ContentType?: Value<string>;
    SheetId: Value<string>;
    FilterControls?: List<FilterControl>;
    SheetControlLayouts?: List<SheetControlLayout>;
    Title?: Value<string>;
    Visuals?: List<Visual>;
    Name?: Value<string>;
    constructor(properties: SheetDefinition);
}
export declare class SheetElementConfigurationOverrides {
    Visibility?: Value<string>;
    constructor(properties: SheetElementConfigurationOverrides);
}
export declare class SheetElementRenderingRule {
    Expression: Value<string>;
    ConfigurationOverrides: SheetElementConfigurationOverrides;
    constructor(properties: SheetElementRenderingRule);
}
export declare class SheetLayoutElementMaximizationOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: SheetLayoutElementMaximizationOption);
}
export declare class SheetTextBox {
    SheetTextBoxId: Value<string>;
    Content?: Value<string>;
    constructor(properties: SheetTextBox);
}
export declare class SheetVisualScopingConfiguration {
    Scope: Value<string>;
    SheetId: Value<string>;
    VisualIds?: List<Value<string>>;
    constructor(properties: SheetVisualScopingConfiguration);
}
export declare class ShortFormatText {
    RichText?: Value<string>;
    PlainText?: Value<string>;
    constructor(properties: ShortFormatText);
}
export declare class SimpleClusterMarker {
    Color?: Value<string>;
    constructor(properties: SimpleClusterMarker);
}
export declare class SliderControlDisplayOptions {
    TitleOptions?: LabelOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    constructor(properties: SliderControlDisplayOptions);
}
export declare class SmallMultiplesAxisProperties {
    Placement?: Value<string>;
    Scale?: Value<string>;
    constructor(properties: SmallMultiplesAxisProperties);
}
export declare class SmallMultiplesOptions {
    MaxVisibleRows?: Value<number>;
    PanelConfiguration?: PanelConfiguration;
    MaxVisibleColumns?: Value<number>;
    XAxis?: SmallMultiplesAxisProperties;
    YAxis?: SmallMultiplesAxisProperties;
    constructor(properties: SmallMultiplesOptions);
}
export declare class Spacing {
    Left?: Value<string>;
    Top?: Value<string>;
    Right?: Value<string>;
    Bottom?: Value<string>;
    constructor(properties: Spacing);
}
export declare class StringDefaultValues {
    DynamicValue?: DynamicDefaultValue;
    StaticValues?: List<Value<string>>;
    constructor(properties: StringDefaultValues);
}
export declare class StringFormatConfiguration {
    NumericFormatConfiguration?: NumericFormatConfiguration;
    NullValueFormatConfiguration?: NullValueFormatConfiguration;
    constructor(properties: StringFormatConfiguration);
}
export declare class StringParameter {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: StringParameter);
}
export declare class StringParameterDeclaration {
    MappedDataSetParameters?: List<MappedDataSetParameter>;
    DefaultValues?: StringDefaultValues;
    ParameterValueType: Value<string>;
    ValueWhenUnset?: StringValueWhenUnsetConfiguration;
    Name: Value<string>;
    constructor(properties: StringParameterDeclaration);
}
export declare class StringValueWhenUnsetConfiguration {
    ValueWhenUnsetOption?: Value<string>;
    CustomValue?: Value<string>;
    constructor(properties: StringValueWhenUnsetConfiguration);
}
export declare class SubtotalOptions {
    CustomLabel?: Value<string>;
    FieldLevelOptions?: List<PivotTableFieldSubtotalOptions>;
    ValueCellStyle?: TableCellStyle;
    TotalCellStyle?: TableCellStyle;
    TotalsVisibility?: Value<string>;
    FieldLevel?: Value<string>;
    MetricHeaderCellStyle?: TableCellStyle;
    StyleTargets?: List<TableStyleTarget>;
    constructor(properties: SubtotalOptions);
}
export declare class TableAggregatedFieldWells {
    GroupBy?: List<DimensionField>;
    Values?: List<MeasureField>;
    constructor(properties: TableAggregatedFieldWells);
}
export declare class TableBorderOptions {
    Thickness?: Value<number>;
    Color?: Value<string>;
    Style?: Value<string>;
    constructor(properties: TableBorderOptions);
}
export declare class TableCellConditionalFormatting {
    FieldId: Value<string>;
    TextFormat?: TextConditionalFormat;
    constructor(properties: TableCellConditionalFormatting);
}
export declare class TableCellImageSizingConfiguration {
    TableCellImageScalingConfiguration?: Value<string>;
    constructor(properties: TableCellImageSizingConfiguration);
}
export declare class TableCellStyle {
    VerticalTextAlignment?: Value<string>;
    Visibility?: Value<string>;
    Height?: Value<number>;
    FontConfiguration?: FontConfiguration;
    Border?: GlobalTableBorderOptions;
    TextWrap?: Value<string>;
    HorizontalTextAlignment?: Value<string>;
    BackgroundColor?: Value<string>;
    constructor(properties: TableCellStyle);
}
export declare class TableConditionalFormatting {
    ConditionalFormattingOptions?: List<TableConditionalFormattingOption>;
    constructor(properties: TableConditionalFormatting);
}
export declare class TableConditionalFormattingOption {
    Row?: TableRowConditionalFormatting;
    Cell?: TableCellConditionalFormatting;
    constructor(properties: TableConditionalFormattingOption);
}
export declare class TableConfiguration {
    SortConfiguration?: TableSortConfiguration;
    PaginatedReportOptions?: TablePaginatedReportOptions;
    TableOptions?: TableOptions;
    TableInlineVisualizations?: List<TableInlineVisualization>;
    FieldWells?: TableFieldWells;
    FieldOptions?: TableFieldOptions;
    TotalOptions?: TotalOptions;
    constructor(properties: TableConfiguration);
}
export declare class TableFieldCustomIconContent {
    Icon?: Value<string>;
    constructor(properties: TableFieldCustomIconContent);
}
export declare class TableFieldCustomTextContent {
    Value?: Value<string>;
    FontConfiguration: FontConfiguration;
    constructor(properties: TableFieldCustomTextContent);
}
export declare class TableFieldImageConfiguration {
    SizingOptions?: TableCellImageSizingConfiguration;
    constructor(properties: TableFieldImageConfiguration);
}
export declare class TableFieldLinkConfiguration {
    Target: Value<string>;
    Content: TableFieldLinkContentConfiguration;
    constructor(properties: TableFieldLinkConfiguration);
}
export declare class TableFieldLinkContentConfiguration {
    CustomIconContent?: TableFieldCustomIconContent;
    CustomTextContent?: TableFieldCustomTextContent;
    constructor(properties: TableFieldLinkContentConfiguration);
}
export declare class TableFieldOption {
    CustomLabel?: Value<string>;
    URLStyling?: TableFieldURLConfiguration;
    FieldId: Value<string>;
    Visibility?: Value<string>;
    Width?: Value<string>;
    constructor(properties: TableFieldOption);
}
export declare class TableFieldOptions {
    Order?: List<Value<string>>;
    PinnedFieldOptions?: TablePinnedFieldOptions;
    SelectedFieldOptions?: List<TableFieldOption>;
    constructor(properties: TableFieldOptions);
}
export declare class TableFieldURLConfiguration {
    LinkConfiguration?: TableFieldLinkConfiguration;
    ImageConfiguration?: TableFieldImageConfiguration;
    constructor(properties: TableFieldURLConfiguration);
}
export declare class TableFieldWells {
    TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
    TableAggregatedFieldWells?: TableAggregatedFieldWells;
    constructor(properties: TableFieldWells);
}
export declare class TableInlineVisualization {
    DataBars?: DataBarsOptions;
    constructor(properties: TableInlineVisualization);
}
export declare class TableOptions {
    HeaderStyle?: TableCellStyle;
    CellStyle?: TableCellStyle;
    Orientation?: Value<string>;
    RowAlternateColorOptions?: RowAlternateColorOptions;
    constructor(properties: TableOptions);
}
export declare class TablePaginatedReportOptions {
    OverflowColumnHeaderVisibility?: Value<string>;
    VerticalOverflowVisibility?: Value<string>;
    constructor(properties: TablePaginatedReportOptions);
}
export declare class TablePinnedFieldOptions {
    PinnedLeftFields?: List<Value<string>>;
    constructor(properties: TablePinnedFieldOptions);
}
export declare class TableRowConditionalFormatting {
    TextColor?: ConditionalFormattingColor;
    BackgroundColor?: ConditionalFormattingColor;
    constructor(properties: TableRowConditionalFormatting);
}
export declare class TableSideBorderOptions {
    Left?: TableBorderOptions;
    Top?: TableBorderOptions;
    InnerHorizontal?: TableBorderOptions;
    Right?: TableBorderOptions;
    Bottom?: TableBorderOptions;
    InnerVertical?: TableBorderOptions;
    constructor(properties: TableSideBorderOptions);
}
export declare class TableSortConfiguration {
    RowSort?: List<FieldSortOptions>;
    PaginationConfiguration?: PaginationConfiguration;
    constructor(properties: TableSortConfiguration);
}
export declare class TableStyleTarget {
    CellType: Value<string>;
    constructor(properties: TableStyleTarget);
}
export declare class TableUnaggregatedFieldWells {
    Values?: List<UnaggregatedField>;
    constructor(properties: TableUnaggregatedFieldWells);
}
export declare class TableVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    ConditionalFormatting?: TableConditionalFormatting;
    VisualId: Value<string>;
    ChartConfiguration?: TableConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    constructor(properties: TableVisual);
}
export declare class TextAreaControlDisplayOptions {
    TitleOptions?: LabelOptions;
    PlaceholderOptions?: TextControlPlaceholderOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    constructor(properties: TextAreaControlDisplayOptions);
}
export declare class TextConditionalFormat {
    TextColor?: ConditionalFormattingColor;
    Icon?: ConditionalFormattingIcon;
    BackgroundColor?: ConditionalFormattingColor;
    constructor(properties: TextConditionalFormat);
}
export declare class TextControlPlaceholderOptions {
    Visibility?: Value<string>;
    constructor(properties: TextControlPlaceholderOptions);
}
export declare class TextFieldControlDisplayOptions {
    TitleOptions?: LabelOptions;
    PlaceholderOptions?: TextControlPlaceholderOptions;
    InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
    constructor(properties: TextFieldControlDisplayOptions);
}
export declare class ThousandSeparatorOptions {
    Symbol?: Value<string>;
    Visibility?: Value<string>;
    constructor(properties: ThousandSeparatorOptions);
}
export declare class TimeBasedForecastProperties {
    PeriodsBackward?: Value<number>;
    PeriodsForward?: Value<number>;
    PredictionInterval?: Value<number>;
    Seasonality?: Value<number>;
    UpperBoundary?: Value<number>;
    LowerBoundary?: Value<number>;
    constructor(properties: TimeBasedForecastProperties);
}
export declare class TimeEqualityFilter {
    Column: ColumnIdentifier;
    RollingDate?: RollingDateConfiguration;
    Value?: Value<string>;
    TimeGranularity?: Value<string>;
    ParameterName?: Value<string>;
    FilterId: Value<string>;
    constructor(properties: TimeEqualityFilter);
}
export declare class TimeRangeDrillDownFilter {
    Column: ColumnIdentifier;
    RangeMinimum: Value<string>;
    TimeGranularity: Value<string>;
    RangeMaximum: Value<string>;
    constructor(properties: TimeRangeDrillDownFilter);
}
export declare class TimeRangeFilter {
    RangeMinimumValue?: TimeRangeFilterValue;
    Column: ColumnIdentifier;
    RangeMaximumValue?: TimeRangeFilterValue;
    IncludeMaximum?: Value<boolean>;
    TimeGranularity?: Value<string>;
    NullOption: Value<string>;
    FilterId: Value<string>;
    IncludeMinimum?: Value<boolean>;
    ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
    constructor(properties: TimeRangeFilter);
}
export declare class TimeRangeFilterValue {
    RollingDate?: RollingDateConfiguration;
    StaticValue?: Value<string>;
    Parameter?: Value<string>;
    constructor(properties: TimeRangeFilterValue);
}
export declare class TooltipItem {
    FieldTooltipItem?: FieldTooltipItem;
    ColumnTooltipItem?: ColumnTooltipItem;
    constructor(properties: TooltipItem);
}
export declare class TooltipOptions {
    SelectedTooltipType?: Value<string>;
    TooltipVisibility?: Value<string>;
    FieldBasedTooltip?: FieldBasedTooltip;
    constructor(properties: TooltipOptions);
}
export declare class TopBottomFilter {
    AggregationSortConfigurations: List<AggregationSortConfiguration>;
    Column: ColumnIdentifier;
    TimeGranularity?: Value<string>;
    ParameterName?: Value<string>;
    Limit?: Value<number>;
    FilterId: Value<string>;
    constructor(properties: TopBottomFilter);
}
export declare class TopBottomMoversComputation {
    Type: Value<string>;
    Category?: DimensionField;
    Value?: MeasureField;
    SortOrder?: Value<string>;
    Time?: DimensionField;
    MoverSize?: Value<number>;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: TopBottomMoversComputation);
}
export declare class TopBottomRankedComputation {
    Type: Value<string>;
    Category?: DimensionField;
    ResultSize?: Value<number>;
    Value?: MeasureField;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: TopBottomRankedComputation);
}
export declare class TotalAggregationComputation {
    Value?: MeasureField;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: TotalAggregationComputation);
}
export declare class TotalAggregationFunction {
    SimpleTotalAggregationFunction?: Value<string>;
    constructor(properties: TotalAggregationFunction);
}
export declare class TotalAggregationOption {
    TotalAggregationFunction: TotalAggregationFunction;
    FieldId: Value<string>;
    constructor(properties: TotalAggregationOption);
}
export declare class TotalOptions {
    CustomLabel?: Value<string>;
    TotalAggregationOptions?: List<TotalAggregationOption>;
    ScrollStatus?: Value<string>;
    Placement?: Value<string>;
    TotalCellStyle?: TableCellStyle;
    TotalsVisibility?: Value<string>;
    constructor(properties: TotalOptions);
}
export declare class TreeMapAggregatedFieldWells {
    Sizes?: List<MeasureField>;
    Colors?: List<MeasureField>;
    Groups?: List<DimensionField>;
    constructor(properties: TreeMapAggregatedFieldWells);
}
export declare class TreeMapConfiguration {
    SortConfiguration?: TreeMapSortConfiguration;
    Legend?: LegendOptions;
    DataLabels?: DataLabelOptions;
    ColorLabelOptions?: ChartAxisLabelOptions;
    SizeLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: TreeMapFieldWells;
    Tooltip?: TooltipOptions;
    ColorScale?: ColorScale;
    GroupLabelOptions?: ChartAxisLabelOptions;
    constructor(properties: TreeMapConfiguration);
}
export declare class TreeMapFieldWells {
    TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
    constructor(properties: TreeMapFieldWells);
}
export declare class TreeMapSortConfiguration {
    TreeMapSort?: List<FieldSortOptions>;
    TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration;
    constructor(properties: TreeMapSortConfiguration);
}
export declare class TreeMapVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: TreeMapConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: TreeMapVisual);
}
export declare class TrendArrowOptions {
    Visibility?: Value<string>;
    constructor(properties: TrendArrowOptions);
}
export declare class UnaggregatedField {
    FormatConfiguration?: FormatConfiguration;
    Column: ColumnIdentifier;
    FieldId: Value<string>;
    constructor(properties: UnaggregatedField);
}
export declare class UniqueValuesComputation {
    Category?: DimensionField;
    ComputationId: Value<string>;
    Name?: Value<string>;
    constructor(properties: UniqueValuesComputation);
}
export declare class ValidationStrategy {
    Mode: Value<string>;
    constructor(properties: ValidationStrategy);
}
export declare class VisibleRangeOptions {
    PercentRange?: PercentVisibleRange;
    constructor(properties: VisibleRangeOptions);
}
export declare class Visual {
    FunnelChartVisual?: FunnelChartVisual;
    FilledMapVisual?: FilledMapVisual;
    BoxPlotVisual?: BoxPlotVisual;
    WaterfallVisual?: WaterfallVisual;
    CustomContentVisual?: CustomContentVisual;
    PieChartVisual?: PieChartVisual;
    KPIVisual?: KPIVisual;
    HistogramVisual?: HistogramVisual;
    TableVisual?: TableVisual;
    PivotTableVisual?: PivotTableVisual;
    GeospatialMapVisual?: GeospatialMapVisual;
    BarChartVisual?: BarChartVisual;
    ScatterPlotVisual?: ScatterPlotVisual;
    RadarChartVisual?: RadarChartVisual;
    HeatMapVisual?: HeatMapVisual;
    TreeMapVisual?: TreeMapVisual;
    ComboChartVisual?: ComboChartVisual;
    WordCloudVisual?: WordCloudVisual;
    InsightVisual?: InsightVisual;
    SankeyDiagramVisual?: SankeyDiagramVisual;
    GaugeChartVisual?: GaugeChartVisual;
    LineChartVisual?: LineChartVisual;
    EmptyVisual?: EmptyVisual;
    constructor(properties: Visual);
}
export declare class VisualAxisSortOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: VisualAxisSortOption);
}
export declare class VisualCustomAction {
    Status?: Value<string>;
    Trigger: Value<string>;
    CustomActionId: Value<string>;
    Name: Value<string>;
    ActionOperations: List<VisualCustomActionOperation>;
    constructor(properties: VisualCustomAction);
}
export declare class VisualCustomActionOperation {
    NavigationOperation?: CustomActionNavigationOperation;
    SetParametersOperation?: CustomActionSetParametersOperation;
    FilterOperation?: CustomActionFilterOperation;
    URLOperation?: CustomActionURLOperation;
    constructor(properties: VisualCustomActionOperation);
}
export declare class VisualMenuOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: VisualMenuOption);
}
export declare class VisualPalette {
    ChartColor?: Value<string>;
    ColorMap?: List<DataPathColor>;
    constructor(properties: VisualPalette);
}
export declare class VisualSubtitleLabelOptions {
    Visibility?: Value<string>;
    FormatText?: LongFormatText;
    constructor(properties: VisualSubtitleLabelOptions);
}
export declare class VisualTitleLabelOptions {
    Visibility?: Value<string>;
    FormatText?: ShortFormatText;
    constructor(properties: VisualTitleLabelOptions);
}
export declare class WaterfallChartAggregatedFieldWells {
    Categories?: List<DimensionField>;
    Breakdowns?: List<DimensionField>;
    Values?: List<MeasureField>;
    constructor(properties: WaterfallChartAggregatedFieldWells);
}
export declare class WaterfallChartConfiguration {
    CategoryAxisLabelOptions?: ChartAxisLabelOptions;
    SortConfiguration?: WaterfallChartSortConfiguration;
    Legend?: LegendOptions;
    DataLabels?: DataLabelOptions;
    PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: WaterfallChartFieldWells;
    WaterfallChartOptions?: WaterfallChartOptions;
    CategoryAxisDisplayOptions?: AxisDisplayOptions;
    PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
    VisualPalette?: VisualPalette;
    constructor(properties: WaterfallChartConfiguration);
}
export declare class WaterfallChartFieldWells {
    WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
    constructor(properties: WaterfallChartFieldWells);
}
export declare class WaterfallChartOptions {
    TotalBarLabel?: Value<string>;
    constructor(properties: WaterfallChartOptions);
}
export declare class WaterfallChartSortConfiguration {
    BreakdownItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    constructor(properties: WaterfallChartSortConfiguration);
}
export declare class WaterfallVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: WaterfallChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: WaterfallVisual);
}
export declare class WhatIfPointScenario {
    Value: Value<number>;
    Date: Value<string>;
    constructor(properties: WhatIfPointScenario);
}
export declare class WhatIfRangeScenario {
    StartDate: Value<string>;
    Value: Value<number>;
    EndDate: Value<string>;
    constructor(properties: WhatIfRangeScenario);
}
export declare class WordCloudAggregatedFieldWells {
    GroupBy?: List<DimensionField>;
    Size?: List<MeasureField>;
    constructor(properties: WordCloudAggregatedFieldWells);
}
export declare class WordCloudChartConfiguration {
    SortConfiguration?: WordCloudSortConfiguration;
    CategoryLabelOptions?: ChartAxisLabelOptions;
    FieldWells?: WordCloudFieldWells;
    WordCloudOptions?: WordCloudOptions;
    constructor(properties: WordCloudChartConfiguration);
}
export declare class WordCloudFieldWells {
    WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells;
    constructor(properties: WordCloudFieldWells);
}
export declare class WordCloudOptions {
    WordOrientation?: Value<string>;
    WordScaling?: Value<string>;
    CloudLayout?: Value<string>;
    MaximumStringLength?: Value<number>;
    WordCasing?: Value<string>;
    WordPadding?: Value<string>;
    constructor(properties: WordCloudOptions);
}
export declare class WordCloudSortConfiguration {
    CategoryItemsLimit?: ItemsLimitConfiguration;
    CategorySort?: List<FieldSortOptions>;
    constructor(properties: WordCloudSortConfiguration);
}
export declare class WordCloudVisual {
    Subtitle?: VisualSubtitleLabelOptions;
    VisualId: Value<string>;
    ChartConfiguration?: WordCloudChartConfiguration;
    Actions?: List<VisualCustomAction>;
    Title?: VisualTitleLabelOptions;
    ColumnHierarchies?: List<ColumnHierarchy>;
    constructor(properties: WordCloudVisual);
}
export interface DashboardProperties {
    Parameters?: Parameters;
    VersionDescription?: Value<string>;
    SourceEntity?: DashboardSourceEntity;
    ThemeArn?: Value<string>;
    Definition?: DashboardVersionDefinition;
    ValidationStrategy?: ValidationStrategy;
    DashboardId: Value<string>;
    LinkSharingConfiguration?: LinkSharingConfiguration;
    Name: Value<string>;
    DashboardPublishOptions?: DashboardPublishOptions;
    AwsAccountId: Value<string>;
    Permissions?: List<ResourcePermission>;
    Tags?: List<ResourceTag>;
}
export default class Dashboard extends ResourceBase<DashboardProperties> {
    static AdHocFilteringOption: typeof AdHocFilteringOption;
    static AggregationFunction: typeof AggregationFunction;
    static AggregationSortConfiguration: typeof AggregationSortConfiguration;
    static AnalysisDefaults: typeof AnalysisDefaults;
    static AnchorDateConfiguration: typeof AnchorDateConfiguration;
    static ArcAxisConfiguration: typeof ArcAxisConfiguration;
    static ArcAxisDisplayRange: typeof ArcAxisDisplayRange;
    static ArcConfiguration: typeof ArcConfiguration;
    static ArcOptions: typeof ArcOptions;
    static AssetOptions: typeof AssetOptions;
    static AttributeAggregationFunction: typeof AttributeAggregationFunction;
    static AxisDataOptions: typeof AxisDataOptions;
    static AxisDisplayMinMaxRange: typeof AxisDisplayMinMaxRange;
    static AxisDisplayOptions: typeof AxisDisplayOptions;
    static AxisDisplayRange: typeof AxisDisplayRange;
    static AxisLabelOptions: typeof AxisLabelOptions;
    static AxisLabelReferenceOptions: typeof AxisLabelReferenceOptions;
    static AxisLinearScale: typeof AxisLinearScale;
    static AxisLogarithmicScale: typeof AxisLogarithmicScale;
    static AxisScale: typeof AxisScale;
    static AxisTickLabelOptions: typeof AxisTickLabelOptions;
    static BarChartAggregatedFieldWells: typeof BarChartAggregatedFieldWells;
    static BarChartConfiguration: typeof BarChartConfiguration;
    static BarChartFieldWells: typeof BarChartFieldWells;
    static BarChartSortConfiguration: typeof BarChartSortConfiguration;
    static BarChartVisual: typeof BarChartVisual;
    static BinCountOptions: typeof BinCountOptions;
    static BinWidthOptions: typeof BinWidthOptions;
    static BodySectionConfiguration: typeof BodySectionConfiguration;
    static BodySectionContent: typeof BodySectionContent;
    static BoxPlotAggregatedFieldWells: typeof BoxPlotAggregatedFieldWells;
    static BoxPlotChartConfiguration: typeof BoxPlotChartConfiguration;
    static BoxPlotFieldWells: typeof BoxPlotFieldWells;
    static BoxPlotOptions: typeof BoxPlotOptions;
    static BoxPlotSortConfiguration: typeof BoxPlotSortConfiguration;
    static BoxPlotStyleOptions: typeof BoxPlotStyleOptions;
    static BoxPlotVisual: typeof BoxPlotVisual;
    static CalculatedField: typeof CalculatedField;
    static CalculatedMeasureField: typeof CalculatedMeasureField;
    static CascadingControlConfiguration: typeof CascadingControlConfiguration;
    static CascadingControlSource: typeof CascadingControlSource;
    static CategoricalDimensionField: typeof CategoricalDimensionField;
    static CategoricalMeasureField: typeof CategoricalMeasureField;
    static CategoryDrillDownFilter: typeof CategoryDrillDownFilter;
    static CategoryFilter: typeof CategoryFilter;
    static CategoryFilterConfiguration: typeof CategoryFilterConfiguration;
    static ChartAxisLabelOptions: typeof ChartAxisLabelOptions;
    static ClusterMarker: typeof ClusterMarker;
    static ClusterMarkerConfiguration: typeof ClusterMarkerConfiguration;
    static ColorScale: typeof ColorScale;
    static ColorsConfiguration: typeof ColorsConfiguration;
    static ColumnConfiguration: typeof ColumnConfiguration;
    static ColumnHierarchy: typeof ColumnHierarchy;
    static ColumnIdentifier: typeof ColumnIdentifier;
    static ColumnSort: typeof ColumnSort;
    static ColumnTooltipItem: typeof ColumnTooltipItem;
    static ComboChartAggregatedFieldWells: typeof ComboChartAggregatedFieldWells;
    static ComboChartConfiguration: typeof ComboChartConfiguration;
    static ComboChartFieldWells: typeof ComboChartFieldWells;
    static ComboChartSortConfiguration: typeof ComboChartSortConfiguration;
    static ComboChartVisual: typeof ComboChartVisual;
    static ComparisonConfiguration: typeof ComparisonConfiguration;
    static ComparisonFormatConfiguration: typeof ComparisonFormatConfiguration;
    static Computation: typeof Computation;
    static ConditionalFormattingColor: typeof ConditionalFormattingColor;
    static ConditionalFormattingCustomIconCondition: typeof ConditionalFormattingCustomIconCondition;
    static ConditionalFormattingCustomIconOptions: typeof ConditionalFormattingCustomIconOptions;
    static ConditionalFormattingGradientColor: typeof ConditionalFormattingGradientColor;
    static ConditionalFormattingIcon: typeof ConditionalFormattingIcon;
    static ConditionalFormattingIconDisplayConfiguration: typeof ConditionalFormattingIconDisplayConfiguration;
    static ConditionalFormattingIconSet: typeof ConditionalFormattingIconSet;
    static ConditionalFormattingSolidColor: typeof ConditionalFormattingSolidColor;
    static ContributionAnalysisDefault: typeof ContributionAnalysisDefault;
    static CurrencyDisplayFormatConfiguration: typeof CurrencyDisplayFormatConfiguration;
    static CustomActionFilterOperation: typeof CustomActionFilterOperation;
    static CustomActionNavigationOperation: typeof CustomActionNavigationOperation;
    static CustomActionSetParametersOperation: typeof CustomActionSetParametersOperation;
    static CustomActionURLOperation: typeof CustomActionURLOperation;
    static CustomColor: typeof CustomColor;
    static CustomContentConfiguration: typeof CustomContentConfiguration;
    static CustomContentVisual: typeof CustomContentVisual;
    static CustomFilterConfiguration: typeof CustomFilterConfiguration;
    static CustomFilterListConfiguration: typeof CustomFilterListConfiguration;
    static CustomNarrativeOptions: typeof CustomNarrativeOptions;
    static CustomParameterValues: typeof CustomParameterValues;
    static CustomValuesConfiguration: typeof CustomValuesConfiguration;
    static DashboardError: typeof DashboardError;
    static DashboardPublishOptions: typeof DashboardPublishOptions;
    static DashboardSourceEntity: typeof DashboardSourceEntity;
    static DashboardSourceTemplate: typeof DashboardSourceTemplate;
    static DashboardVersion: typeof DashboardVersion;
    static DashboardVersionDefinition: typeof DashboardVersionDefinition;
    static DashboardVisualPublishOptions: typeof DashboardVisualPublishOptions;
    static DataBarsOptions: typeof DataBarsOptions;
    static DataColor: typeof DataColor;
    static DataFieldSeriesItem: typeof DataFieldSeriesItem;
    static DataLabelOptions: typeof DataLabelOptions;
    static DataLabelType: typeof DataLabelType;
    static DataPathColor: typeof DataPathColor;
    static DataPathLabelType: typeof DataPathLabelType;
    static DataPathSort: typeof DataPathSort;
    static DataPathType: typeof DataPathType;
    static DataPathValue: typeof DataPathValue;
    static DataPointDrillUpDownOption: typeof DataPointDrillUpDownOption;
    static DataPointMenuLabelOption: typeof DataPointMenuLabelOption;
    static DataPointTooltipOption: typeof DataPointTooltipOption;
    static DataSetIdentifierDeclaration: typeof DataSetIdentifierDeclaration;
    static DataSetReference: typeof DataSetReference;
    static DateAxisOptions: typeof DateAxisOptions;
    static DateDimensionField: typeof DateDimensionField;
    static DateMeasureField: typeof DateMeasureField;
    static DateTimeDefaultValues: typeof DateTimeDefaultValues;
    static DateTimeFormatConfiguration: typeof DateTimeFormatConfiguration;
    static DateTimeHierarchy: typeof DateTimeHierarchy;
    static DateTimeParameter: typeof DateTimeParameter;
    static DateTimeParameterDeclaration: typeof DateTimeParameterDeclaration;
    static DateTimePickerControlDisplayOptions: typeof DateTimePickerControlDisplayOptions;
    static DateTimeValueWhenUnsetConfiguration: typeof DateTimeValueWhenUnsetConfiguration;
    static DecimalDefaultValues: typeof DecimalDefaultValues;
    static DecimalParameter: typeof DecimalParameter;
    static DecimalParameterDeclaration: typeof DecimalParameterDeclaration;
    static DecimalPlacesConfiguration: typeof DecimalPlacesConfiguration;
    static DecimalValueWhenUnsetConfiguration: typeof DecimalValueWhenUnsetConfiguration;
    static DefaultFreeFormLayoutConfiguration: typeof DefaultFreeFormLayoutConfiguration;
    static DefaultGridLayoutConfiguration: typeof DefaultGridLayoutConfiguration;
    static DefaultInteractiveLayoutConfiguration: typeof DefaultInteractiveLayoutConfiguration;
    static DefaultNewSheetConfiguration: typeof DefaultNewSheetConfiguration;
    static DefaultPaginatedLayoutConfiguration: typeof DefaultPaginatedLayoutConfiguration;
    static DefaultSectionBasedLayoutConfiguration: typeof DefaultSectionBasedLayoutConfiguration;
    static DestinationParameterValueConfiguration: typeof DestinationParameterValueConfiguration;
    static DimensionField: typeof DimensionField;
    static DonutCenterOptions: typeof DonutCenterOptions;
    static DonutOptions: typeof DonutOptions;
    static DrillDownFilter: typeof DrillDownFilter;
    static DropDownControlDisplayOptions: typeof DropDownControlDisplayOptions;
    static DynamicDefaultValue: typeof DynamicDefaultValue;
    static EmptyVisual: typeof EmptyVisual;
    static Entity: typeof Entity;
    static ExcludePeriodConfiguration: typeof ExcludePeriodConfiguration;
    static ExplicitHierarchy: typeof ExplicitHierarchy;
    static ExportHiddenFieldsOption: typeof ExportHiddenFieldsOption;
    static ExportToCSVOption: typeof ExportToCSVOption;
    static ExportWithHiddenFieldsOption: typeof ExportWithHiddenFieldsOption;
    static FieldBasedTooltip: typeof FieldBasedTooltip;
    static FieldLabelType: typeof FieldLabelType;
    static FieldSeriesItem: typeof FieldSeriesItem;
    static FieldSort: typeof FieldSort;
    static FieldSortOptions: typeof FieldSortOptions;
    static FieldTooltipItem: typeof FieldTooltipItem;
    static FilledMapAggregatedFieldWells: typeof FilledMapAggregatedFieldWells;
    static FilledMapConditionalFormatting: typeof FilledMapConditionalFormatting;
    static FilledMapConditionalFormattingOption: typeof FilledMapConditionalFormattingOption;
    static FilledMapConfiguration: typeof FilledMapConfiguration;
    static FilledMapFieldWells: typeof FilledMapFieldWells;
    static FilledMapShapeConditionalFormatting: typeof FilledMapShapeConditionalFormatting;
    static FilledMapSortConfiguration: typeof FilledMapSortConfiguration;
    static FilledMapVisual: typeof FilledMapVisual;
    static Filter: typeof Filter;
    static FilterControl: typeof FilterControl;
    static FilterDateTimePickerControl: typeof FilterDateTimePickerControl;
    static FilterDropDownControl: typeof FilterDropDownControl;
    static FilterGroup: typeof FilterGroup;
    static FilterListConfiguration: typeof FilterListConfiguration;
    static FilterListControl: typeof FilterListControl;
    static FilterOperationSelectedFieldsConfiguration: typeof FilterOperationSelectedFieldsConfiguration;
    static FilterOperationTargetVisualsConfiguration: typeof FilterOperationTargetVisualsConfiguration;
    static FilterRelativeDateTimeControl: typeof FilterRelativeDateTimeControl;
    static FilterScopeConfiguration: typeof FilterScopeConfiguration;
    static FilterSelectableValues: typeof FilterSelectableValues;
    static FilterSliderControl: typeof FilterSliderControl;
    static FilterTextAreaControl: typeof FilterTextAreaControl;
    static FilterTextFieldControl: typeof FilterTextFieldControl;
    static FontConfiguration: typeof FontConfiguration;
    static FontSize: typeof FontSize;
    static FontWeight: typeof FontWeight;
    static ForecastComputation: typeof ForecastComputation;
    static ForecastConfiguration: typeof ForecastConfiguration;
    static ForecastScenario: typeof ForecastScenario;
    static FormatConfiguration: typeof FormatConfiguration;
    static FreeFormLayoutCanvasSizeOptions: typeof FreeFormLayoutCanvasSizeOptions;
    static FreeFormLayoutConfiguration: typeof FreeFormLayoutConfiguration;
    static FreeFormLayoutElement: typeof FreeFormLayoutElement;
    static FreeFormLayoutElementBackgroundStyle: typeof FreeFormLayoutElementBackgroundStyle;
    static FreeFormLayoutElementBorderStyle: typeof FreeFormLayoutElementBorderStyle;
    static FreeFormLayoutScreenCanvasSizeOptions: typeof FreeFormLayoutScreenCanvasSizeOptions;
    static FreeFormSectionLayoutConfiguration: typeof FreeFormSectionLayoutConfiguration;
    static FunnelChartAggregatedFieldWells: typeof FunnelChartAggregatedFieldWells;
    static FunnelChartConfiguration: typeof FunnelChartConfiguration;
    static FunnelChartDataLabelOptions: typeof FunnelChartDataLabelOptions;
    static FunnelChartFieldWells: typeof FunnelChartFieldWells;
    static FunnelChartSortConfiguration: typeof FunnelChartSortConfiguration;
    static FunnelChartVisual: typeof FunnelChartVisual;
    static GaugeChartArcConditionalFormatting: typeof GaugeChartArcConditionalFormatting;
    static GaugeChartConditionalFormatting: typeof GaugeChartConditionalFormatting;
    static GaugeChartConditionalFormattingOption: typeof GaugeChartConditionalFormattingOption;
    static GaugeChartConfiguration: typeof GaugeChartConfiguration;
    static GaugeChartFieldWells: typeof GaugeChartFieldWells;
    static GaugeChartOptions: typeof GaugeChartOptions;
    static GaugeChartPrimaryValueConditionalFormatting: typeof GaugeChartPrimaryValueConditionalFormatting;
    static GaugeChartVisual: typeof GaugeChartVisual;
    static GeospatialCoordinateBounds: typeof GeospatialCoordinateBounds;
    static GeospatialHeatmapColorScale: typeof GeospatialHeatmapColorScale;
    static GeospatialHeatmapConfiguration: typeof GeospatialHeatmapConfiguration;
    static GeospatialHeatmapDataColor: typeof GeospatialHeatmapDataColor;
    static GeospatialMapAggregatedFieldWells: typeof GeospatialMapAggregatedFieldWells;
    static GeospatialMapConfiguration: typeof GeospatialMapConfiguration;
    static GeospatialMapFieldWells: typeof GeospatialMapFieldWells;
    static GeospatialMapStyleOptions: typeof GeospatialMapStyleOptions;
    static GeospatialMapVisual: typeof GeospatialMapVisual;
    static GeospatialPointStyleOptions: typeof GeospatialPointStyleOptions;
    static GeospatialWindowOptions: typeof GeospatialWindowOptions;
    static GlobalTableBorderOptions: typeof GlobalTableBorderOptions;
    static GradientColor: typeof GradientColor;
    static GradientStop: typeof GradientStop;
    static GridLayoutCanvasSizeOptions: typeof GridLayoutCanvasSizeOptions;
    static GridLayoutConfiguration: typeof GridLayoutConfiguration;
    static GridLayoutElement: typeof GridLayoutElement;
    static GridLayoutScreenCanvasSizeOptions: typeof GridLayoutScreenCanvasSizeOptions;
    static GrowthRateComputation: typeof GrowthRateComputation;
    static HeaderFooterSectionConfiguration: typeof HeaderFooterSectionConfiguration;
    static HeatMapAggregatedFieldWells: typeof HeatMapAggregatedFieldWells;
    static HeatMapConfiguration: typeof HeatMapConfiguration;
    static HeatMapFieldWells: typeof HeatMapFieldWells;
    static HeatMapSortConfiguration: typeof HeatMapSortConfiguration;
    static HeatMapVisual: typeof HeatMapVisual;
    static HistogramAggregatedFieldWells: typeof HistogramAggregatedFieldWells;
    static HistogramBinOptions: typeof HistogramBinOptions;
    static HistogramConfiguration: typeof HistogramConfiguration;
    static HistogramFieldWells: typeof HistogramFieldWells;
    static HistogramVisual: typeof HistogramVisual;
    static InsightConfiguration: typeof InsightConfiguration;
    static InsightVisual: typeof InsightVisual;
    static IntegerDefaultValues: typeof IntegerDefaultValues;
    static IntegerParameter: typeof IntegerParameter;
    static IntegerParameterDeclaration: typeof IntegerParameterDeclaration;
    static IntegerValueWhenUnsetConfiguration: typeof IntegerValueWhenUnsetConfiguration;
    static ItemsLimitConfiguration: typeof ItemsLimitConfiguration;
    static KPIActualValueConditionalFormatting: typeof KPIActualValueConditionalFormatting;
    static KPIComparisonValueConditionalFormatting: typeof KPIComparisonValueConditionalFormatting;
    static KPIConditionalFormatting: typeof KPIConditionalFormatting;
    static KPIConditionalFormattingOption: typeof KPIConditionalFormattingOption;
    static KPIConfiguration: typeof KPIConfiguration;
    static KPIFieldWells: typeof KPIFieldWells;
    static KPIOptions: typeof KPIOptions;
    static KPIPrimaryValueConditionalFormatting: typeof KPIPrimaryValueConditionalFormatting;
    static KPIProgressBarConditionalFormatting: typeof KPIProgressBarConditionalFormatting;
    static KPISortConfiguration: typeof KPISortConfiguration;
    static KPISparklineOptions: typeof KPISparklineOptions;
    static KPIVisual: typeof KPIVisual;
    static KPIVisualLayoutOptions: typeof KPIVisualLayoutOptions;
    static KPIVisualStandardLayout: typeof KPIVisualStandardLayout;
    static LabelOptions: typeof LabelOptions;
    static Layout: typeof Layout;
    static LayoutConfiguration: typeof LayoutConfiguration;
    static LegendOptions: typeof LegendOptions;
    static LineChartAggregatedFieldWells: typeof LineChartAggregatedFieldWells;
    static LineChartConfiguration: typeof LineChartConfiguration;
    static LineChartDefaultSeriesSettings: typeof LineChartDefaultSeriesSettings;
    static LineChartFieldWells: typeof LineChartFieldWells;
    static LineChartLineStyleSettings: typeof LineChartLineStyleSettings;
    static LineChartMarkerStyleSettings: typeof LineChartMarkerStyleSettings;
    static LineChartSeriesSettings: typeof LineChartSeriesSettings;
    static LineChartSortConfiguration: typeof LineChartSortConfiguration;
    static LineChartVisual: typeof LineChartVisual;
    static LineSeriesAxisDisplayOptions: typeof LineSeriesAxisDisplayOptions;
    static LinkSharingConfiguration: typeof LinkSharingConfiguration;
    static ListControlDisplayOptions: typeof ListControlDisplayOptions;
    static ListControlSearchOptions: typeof ListControlSearchOptions;
    static ListControlSelectAllOptions: typeof ListControlSelectAllOptions;
    static LoadingAnimation: typeof LoadingAnimation;
    static LocalNavigationConfiguration: typeof LocalNavigationConfiguration;
    static LongFormatText: typeof LongFormatText;
    static MappedDataSetParameter: typeof MappedDataSetParameter;
    static MaximumLabelType: typeof MaximumLabelType;
    static MaximumMinimumComputation: typeof MaximumMinimumComputation;
    static MeasureField: typeof MeasureField;
    static MetricComparisonComputation: typeof MetricComparisonComputation;
    static MinimumLabelType: typeof MinimumLabelType;
    static MissingDataConfiguration: typeof MissingDataConfiguration;
    static NegativeValueConfiguration: typeof NegativeValueConfiguration;
    static NullValueFormatConfiguration: typeof NullValueFormatConfiguration;
    static NumberDisplayFormatConfiguration: typeof NumberDisplayFormatConfiguration;
    static NumberFormatConfiguration: typeof NumberFormatConfiguration;
    static NumericAxisOptions: typeof NumericAxisOptions;
    static NumericEqualityDrillDownFilter: typeof NumericEqualityDrillDownFilter;
    static NumericEqualityFilter: typeof NumericEqualityFilter;
    static NumericFormatConfiguration: typeof NumericFormatConfiguration;
    static NumericRangeFilter: typeof NumericRangeFilter;
    static NumericRangeFilterValue: typeof NumericRangeFilterValue;
    static NumericSeparatorConfiguration: typeof NumericSeparatorConfiguration;
    static NumericalAggregationFunction: typeof NumericalAggregationFunction;
    static NumericalDimensionField: typeof NumericalDimensionField;
    static NumericalMeasureField: typeof NumericalMeasureField;
    static PaginationConfiguration: typeof PaginationConfiguration;
    static PanelConfiguration: typeof PanelConfiguration;
    static PanelTitleOptions: typeof PanelTitleOptions;
    static ParameterControl: typeof ParameterControl;
    static ParameterDateTimePickerControl: typeof ParameterDateTimePickerControl;
    static ParameterDeclaration: typeof ParameterDeclaration;
    static ParameterDropDownControl: typeof ParameterDropDownControl;
    static ParameterListControl: typeof ParameterListControl;
    static ParameterSelectableValues: typeof ParameterSelectableValues;
    static ParameterSliderControl: typeof ParameterSliderControl;
    static ParameterTextAreaControl: typeof ParameterTextAreaControl;
    static ParameterTextFieldControl: typeof ParameterTextFieldControl;
    static Parameters: typeof Parameters;
    static PercentVisibleRange: typeof PercentVisibleRange;
    static PercentageDisplayFormatConfiguration: typeof PercentageDisplayFormatConfiguration;
    static PercentileAggregation: typeof PercentileAggregation;
    static PeriodOverPeriodComputation: typeof PeriodOverPeriodComputation;
    static PeriodToDateComputation: typeof PeriodToDateComputation;
    static PieChartAggregatedFieldWells: typeof PieChartAggregatedFieldWells;
    static PieChartConfiguration: typeof PieChartConfiguration;
    static PieChartFieldWells: typeof PieChartFieldWells;
    static PieChartSortConfiguration: typeof PieChartSortConfiguration;
    static PieChartVisual: typeof PieChartVisual;
    static PivotFieldSortOptions: typeof PivotFieldSortOptions;
    static PivotTableAggregatedFieldWells: typeof PivotTableAggregatedFieldWells;
    static PivotTableCellConditionalFormatting: typeof PivotTableCellConditionalFormatting;
    static PivotTableConditionalFormatting: typeof PivotTableConditionalFormatting;
    static PivotTableConditionalFormattingOption: typeof PivotTableConditionalFormattingOption;
    static PivotTableConditionalFormattingScope: typeof PivotTableConditionalFormattingScope;
    static PivotTableConfiguration: typeof PivotTableConfiguration;
    static PivotTableDataPathOption: typeof PivotTableDataPathOption;
    static PivotTableFieldCollapseStateOption: typeof PivotTableFieldCollapseStateOption;
    static PivotTableFieldCollapseStateTarget: typeof PivotTableFieldCollapseStateTarget;
    static PivotTableFieldOption: typeof PivotTableFieldOption;
    static PivotTableFieldOptions: typeof PivotTableFieldOptions;
    static PivotTableFieldSubtotalOptions: typeof PivotTableFieldSubtotalOptions;
    static PivotTableFieldWells: typeof PivotTableFieldWells;
    static PivotTableOptions: typeof PivotTableOptions;
    static PivotTablePaginatedReportOptions: typeof PivotTablePaginatedReportOptions;
    static PivotTableRowsLabelOptions: typeof PivotTableRowsLabelOptions;
    static PivotTableSortBy: typeof PivotTableSortBy;
    static PivotTableSortConfiguration: typeof PivotTableSortConfiguration;
    static PivotTableTotalOptions: typeof PivotTableTotalOptions;
    static PivotTableVisual: typeof PivotTableVisual;
    static PivotTotalOptions: typeof PivotTotalOptions;
    static PredefinedHierarchy: typeof PredefinedHierarchy;
    static ProgressBarOptions: typeof ProgressBarOptions;
    static RadarChartAggregatedFieldWells: typeof RadarChartAggregatedFieldWells;
    static RadarChartAreaStyleSettings: typeof RadarChartAreaStyleSettings;
    static RadarChartConfiguration: typeof RadarChartConfiguration;
    static RadarChartFieldWells: typeof RadarChartFieldWells;
    static RadarChartSeriesSettings: typeof RadarChartSeriesSettings;
    static RadarChartSortConfiguration: typeof RadarChartSortConfiguration;
    static RadarChartVisual: typeof RadarChartVisual;
    static RangeEndsLabelType: typeof RangeEndsLabelType;
    static ReferenceLine: typeof ReferenceLine;
    static ReferenceLineCustomLabelConfiguration: typeof ReferenceLineCustomLabelConfiguration;
    static ReferenceLineDataConfiguration: typeof ReferenceLineDataConfiguration;
    static ReferenceLineDynamicDataConfiguration: typeof ReferenceLineDynamicDataConfiguration;
    static ReferenceLineLabelConfiguration: typeof ReferenceLineLabelConfiguration;
    static ReferenceLineStaticDataConfiguration: typeof ReferenceLineStaticDataConfiguration;
    static ReferenceLineStyleConfiguration: typeof ReferenceLineStyleConfiguration;
    static ReferenceLineValueLabelConfiguration: typeof ReferenceLineValueLabelConfiguration;
    static RelativeDateTimeControlDisplayOptions: typeof RelativeDateTimeControlDisplayOptions;
    static RelativeDatesFilter: typeof RelativeDatesFilter;
    static ResourcePermission: typeof ResourcePermission;
    static RollingDateConfiguration: typeof RollingDateConfiguration;
    static RowAlternateColorOptions: typeof RowAlternateColorOptions;
    static SameSheetTargetVisualConfiguration: typeof SameSheetTargetVisualConfiguration;
    static SankeyDiagramAggregatedFieldWells: typeof SankeyDiagramAggregatedFieldWells;
    static SankeyDiagramChartConfiguration: typeof SankeyDiagramChartConfiguration;
    static SankeyDiagramFieldWells: typeof SankeyDiagramFieldWells;
    static SankeyDiagramSortConfiguration: typeof SankeyDiagramSortConfiguration;
    static SankeyDiagramVisual: typeof SankeyDiagramVisual;
    static ScatterPlotCategoricallyAggregatedFieldWells: typeof ScatterPlotCategoricallyAggregatedFieldWells;
    static ScatterPlotConfiguration: typeof ScatterPlotConfiguration;
    static ScatterPlotFieldWells: typeof ScatterPlotFieldWells;
    static ScatterPlotUnaggregatedFieldWells: typeof ScatterPlotUnaggregatedFieldWells;
    static ScatterPlotVisual: typeof ScatterPlotVisual;
    static ScrollBarOptions: typeof ScrollBarOptions;
    static SecondaryValueOptions: typeof SecondaryValueOptions;
    static SectionAfterPageBreak: typeof SectionAfterPageBreak;
    static SectionBasedLayoutCanvasSizeOptions: typeof SectionBasedLayoutCanvasSizeOptions;
    static SectionBasedLayoutConfiguration: typeof SectionBasedLayoutConfiguration;
    static SectionBasedLayoutPaperCanvasSizeOptions: typeof SectionBasedLayoutPaperCanvasSizeOptions;
    static SectionLayoutConfiguration: typeof SectionLayoutConfiguration;
    static SectionPageBreakConfiguration: typeof SectionPageBreakConfiguration;
    static SectionStyle: typeof SectionStyle;
    static SelectedSheetsFilterScopeConfiguration: typeof SelectedSheetsFilterScopeConfiguration;
    static SeriesItem: typeof SeriesItem;
    static SetParameterValueConfiguration: typeof SetParameterValueConfiguration;
    static ShapeConditionalFormat: typeof ShapeConditionalFormat;
    static Sheet: typeof Sheet;
    static SheetControlInfoIconLabelOptions: typeof SheetControlInfoIconLabelOptions;
    static SheetControlLayout: typeof SheetControlLayout;
    static SheetControlLayoutConfiguration: typeof SheetControlLayoutConfiguration;
    static SheetControlsOption: typeof SheetControlsOption;
    static SheetDefinition: typeof SheetDefinition;
    static SheetElementConfigurationOverrides: typeof SheetElementConfigurationOverrides;
    static SheetElementRenderingRule: typeof SheetElementRenderingRule;
    static SheetLayoutElementMaximizationOption: typeof SheetLayoutElementMaximizationOption;
    static SheetTextBox: typeof SheetTextBox;
    static SheetVisualScopingConfiguration: typeof SheetVisualScopingConfiguration;
    static ShortFormatText: typeof ShortFormatText;
    static SimpleClusterMarker: typeof SimpleClusterMarker;
    static SliderControlDisplayOptions: typeof SliderControlDisplayOptions;
    static SmallMultiplesAxisProperties: typeof SmallMultiplesAxisProperties;
    static SmallMultiplesOptions: typeof SmallMultiplesOptions;
    static Spacing: typeof Spacing;
    static StringDefaultValues: typeof StringDefaultValues;
    static StringFormatConfiguration: typeof StringFormatConfiguration;
    static StringParameter: typeof StringParameter;
    static StringParameterDeclaration: typeof StringParameterDeclaration;
    static StringValueWhenUnsetConfiguration: typeof StringValueWhenUnsetConfiguration;
    static SubtotalOptions: typeof SubtotalOptions;
    static TableAggregatedFieldWells: typeof TableAggregatedFieldWells;
    static TableBorderOptions: typeof TableBorderOptions;
    static TableCellConditionalFormatting: typeof TableCellConditionalFormatting;
    static TableCellImageSizingConfiguration: typeof TableCellImageSizingConfiguration;
    static TableCellStyle: typeof TableCellStyle;
    static TableConditionalFormatting: typeof TableConditionalFormatting;
    static TableConditionalFormattingOption: typeof TableConditionalFormattingOption;
    static TableConfiguration: typeof TableConfiguration;
    static TableFieldCustomIconContent: typeof TableFieldCustomIconContent;
    static TableFieldCustomTextContent: typeof TableFieldCustomTextContent;
    static TableFieldImageConfiguration: typeof TableFieldImageConfiguration;
    static TableFieldLinkConfiguration: typeof TableFieldLinkConfiguration;
    static TableFieldLinkContentConfiguration: typeof TableFieldLinkContentConfiguration;
    static TableFieldOption: typeof TableFieldOption;
    static TableFieldOptions: typeof TableFieldOptions;
    static TableFieldURLConfiguration: typeof TableFieldURLConfiguration;
    static TableFieldWells: typeof TableFieldWells;
    static TableInlineVisualization: typeof TableInlineVisualization;
    static TableOptions: typeof TableOptions;
    static TablePaginatedReportOptions: typeof TablePaginatedReportOptions;
    static TablePinnedFieldOptions: typeof TablePinnedFieldOptions;
    static TableRowConditionalFormatting: typeof TableRowConditionalFormatting;
    static TableSideBorderOptions: typeof TableSideBorderOptions;
    static TableSortConfiguration: typeof TableSortConfiguration;
    static TableStyleTarget: typeof TableStyleTarget;
    static TableUnaggregatedFieldWells: typeof TableUnaggregatedFieldWells;
    static TableVisual: typeof TableVisual;
    static TextAreaControlDisplayOptions: typeof TextAreaControlDisplayOptions;
    static TextConditionalFormat: typeof TextConditionalFormat;
    static TextControlPlaceholderOptions: typeof TextControlPlaceholderOptions;
    static TextFieldControlDisplayOptions: typeof TextFieldControlDisplayOptions;
    static ThousandSeparatorOptions: typeof ThousandSeparatorOptions;
    static TimeBasedForecastProperties: typeof TimeBasedForecastProperties;
    static TimeEqualityFilter: typeof TimeEqualityFilter;
    static TimeRangeDrillDownFilter: typeof TimeRangeDrillDownFilter;
    static TimeRangeFilter: typeof TimeRangeFilter;
    static TimeRangeFilterValue: typeof TimeRangeFilterValue;
    static TooltipItem: typeof TooltipItem;
    static TooltipOptions: typeof TooltipOptions;
    static TopBottomFilter: typeof TopBottomFilter;
    static TopBottomMoversComputation: typeof TopBottomMoversComputation;
    static TopBottomRankedComputation: typeof TopBottomRankedComputation;
    static TotalAggregationComputation: typeof TotalAggregationComputation;
    static TotalAggregationFunction: typeof TotalAggregationFunction;
    static TotalAggregationOption: typeof TotalAggregationOption;
    static TotalOptions: typeof TotalOptions;
    static TreeMapAggregatedFieldWells: typeof TreeMapAggregatedFieldWells;
    static TreeMapConfiguration: typeof TreeMapConfiguration;
    static TreeMapFieldWells: typeof TreeMapFieldWells;
    static TreeMapSortConfiguration: typeof TreeMapSortConfiguration;
    static TreeMapVisual: typeof TreeMapVisual;
    static TrendArrowOptions: typeof TrendArrowOptions;
    static UnaggregatedField: typeof UnaggregatedField;
    static UniqueValuesComputation: typeof UniqueValuesComputation;
    static ValidationStrategy: typeof ValidationStrategy;
    static VisibleRangeOptions: typeof VisibleRangeOptions;
    static Visual: typeof Visual;
    static VisualAxisSortOption: typeof VisualAxisSortOption;
    static VisualCustomAction: typeof VisualCustomAction;
    static VisualCustomActionOperation: typeof VisualCustomActionOperation;
    static VisualMenuOption: typeof VisualMenuOption;
    static VisualPalette: typeof VisualPalette;
    static VisualSubtitleLabelOptions: typeof VisualSubtitleLabelOptions;
    static VisualTitleLabelOptions: typeof VisualTitleLabelOptions;
    static WaterfallChartAggregatedFieldWells: typeof WaterfallChartAggregatedFieldWells;
    static WaterfallChartConfiguration: typeof WaterfallChartConfiguration;
    static WaterfallChartFieldWells: typeof WaterfallChartFieldWells;
    static WaterfallChartOptions: typeof WaterfallChartOptions;
    static WaterfallChartSortConfiguration: typeof WaterfallChartSortConfiguration;
    static WaterfallVisual: typeof WaterfallVisual;
    static WhatIfPointScenario: typeof WhatIfPointScenario;
    static WhatIfRangeScenario: typeof WhatIfRangeScenario;
    static WordCloudAggregatedFieldWells: typeof WordCloudAggregatedFieldWells;
    static WordCloudChartConfiguration: typeof WordCloudChartConfiguration;
    static WordCloudFieldWells: typeof WordCloudFieldWells;
    static WordCloudOptions: typeof WordCloudOptions;
    static WordCloudSortConfiguration: typeof WordCloudSortConfiguration;
    static WordCloudVisual: typeof WordCloudVisual;
    constructor(properties: DashboardProperties);
}
