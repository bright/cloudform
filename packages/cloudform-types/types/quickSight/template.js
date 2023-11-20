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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsConfiguration = exports.ColorScale = exports.ClusterMarkerConfiguration = exports.ClusterMarker = exports.ChartAxisLabelOptions = exports.CategoryFilterConfiguration = exports.CategoryFilter = exports.CategoryDrillDownFilter = exports.CategoricalMeasureField = exports.CategoricalDimensionField = exports.CascadingControlSource = exports.CascadingControlConfiguration = exports.CalculatedMeasureField = exports.CalculatedField = exports.BoxPlotVisual = exports.BoxPlotStyleOptions = exports.BoxPlotSortConfiguration = exports.BoxPlotOptions = exports.BoxPlotFieldWells = exports.BoxPlotChartConfiguration = exports.BoxPlotAggregatedFieldWells = exports.BodySectionContent = exports.BodySectionConfiguration = exports.BinWidthOptions = exports.BinCountOptions = exports.BarChartVisual = exports.BarChartSortConfiguration = exports.BarChartFieldWells = exports.BarChartConfiguration = exports.BarChartAggregatedFieldWells = exports.AxisTickLabelOptions = exports.AxisScale = exports.AxisLogarithmicScale = exports.AxisLinearScale = exports.AxisLabelReferenceOptions = exports.AxisLabelOptions = exports.AxisDisplayRange = exports.AxisDisplayOptions = exports.AxisDisplayMinMaxRange = exports.AxisDataOptions = exports.AttributeAggregationFunction = exports.AssetOptions = exports.ArcOptions = exports.ArcConfiguration = exports.ArcAxisDisplayRange = exports.ArcAxisConfiguration = exports.AnchorDateConfiguration = exports.AnalysisDefaults = exports.AggregationSortConfiguration = exports.AggregationFunction = void 0;
exports.DataSetReference = exports.DataSetConfiguration = exports.DataPathValue = exports.DataPathType = exports.DataPathSort = exports.DataPathLabelType = exports.DataPathColor = exports.DataLabelType = exports.DataLabelOptions = exports.DataFieldSeriesItem = exports.DataColor = exports.DataBarsOptions = exports.CustomValuesConfiguration = exports.CustomParameterValues = exports.CustomNarrativeOptions = exports.CustomFilterListConfiguration = exports.CustomFilterConfiguration = exports.CustomContentVisual = exports.CustomContentConfiguration = exports.CustomColor = exports.CustomActionURLOperation = exports.CustomActionSetParametersOperation = exports.CustomActionNavigationOperation = exports.CustomActionFilterOperation = exports.CurrencyDisplayFormatConfiguration = exports.ContributionAnalysisDefault = exports.ConditionalFormattingSolidColor = exports.ConditionalFormattingIconSet = exports.ConditionalFormattingIconDisplayConfiguration = exports.ConditionalFormattingIcon = exports.ConditionalFormattingGradientColor = exports.ConditionalFormattingCustomIconOptions = exports.ConditionalFormattingCustomIconCondition = exports.ConditionalFormattingColor = exports.Computation = exports.ComparisonFormatConfiguration = exports.ComparisonConfiguration = exports.ComboChartVisual = exports.ComboChartSortConfiguration = exports.ComboChartFieldWells = exports.ComboChartConfiguration = exports.ComboChartAggregatedFieldWells = exports.ColumnTooltipItem = exports.ColumnSort = exports.ColumnSchema = exports.ColumnIdentifier = exports.ColumnHierarchy = exports.ColumnGroupSchema = exports.ColumnGroupColumnSchema = exports.ColumnConfiguration = void 0;
exports.FilterGroup = exports.FilterDropDownControl = exports.FilterDateTimePickerControl = exports.FilterControl = exports.Filter = exports.FilledMapVisual = exports.FilledMapSortConfiguration = exports.FilledMapShapeConditionalFormatting = exports.FilledMapFieldWells = exports.FilledMapConfiguration = exports.FilledMapConditionalFormattingOption = exports.FilledMapConditionalFormatting = exports.FilledMapAggregatedFieldWells = exports.FieldTooltipItem = exports.FieldSortOptions = exports.FieldSort = exports.FieldSeriesItem = exports.FieldLabelType = exports.FieldBasedTooltip = exports.ExplicitHierarchy = exports.ExcludePeriodConfiguration = exports.Entity = exports.EmptyVisual = exports.DynamicDefaultValue = exports.DropDownControlDisplayOptions = exports.DrillDownFilter = exports.DonutOptions = exports.DonutCenterOptions = exports.DimensionField = exports.DestinationParameterValueConfiguration = exports.DefaultSectionBasedLayoutConfiguration = exports.DefaultPaginatedLayoutConfiguration = exports.DefaultNewSheetConfiguration = exports.DefaultInteractiveLayoutConfiguration = exports.DefaultGridLayoutConfiguration = exports.DefaultFreeFormLayoutConfiguration = exports.DecimalValueWhenUnsetConfiguration = exports.DecimalPlacesConfiguration = exports.DecimalParameterDeclaration = exports.DecimalDefaultValues = exports.DateTimeValueWhenUnsetConfiguration = exports.DateTimePickerControlDisplayOptions = exports.DateTimeParameterDeclaration = exports.DateTimeHierarchy = exports.DateTimeFormatConfiguration = exports.DateTimeDefaultValues = exports.DateMeasureField = exports.DateDimensionField = exports.DateAxisOptions = exports.DataSetSchema = void 0;
exports.GlobalTableBorderOptions = exports.GeospatialWindowOptions = exports.GeospatialPointStyleOptions = exports.GeospatialMapVisual = exports.GeospatialMapStyleOptions = exports.GeospatialMapFieldWells = exports.GeospatialMapConfiguration = exports.GeospatialMapAggregatedFieldWells = exports.GeospatialHeatmapDataColor = exports.GeospatialHeatmapConfiguration = exports.GeospatialHeatmapColorScale = exports.GeospatialCoordinateBounds = exports.GaugeChartVisual = exports.GaugeChartPrimaryValueConditionalFormatting = exports.GaugeChartOptions = exports.GaugeChartFieldWells = exports.GaugeChartConfiguration = exports.GaugeChartConditionalFormattingOption = exports.GaugeChartConditionalFormatting = exports.GaugeChartArcConditionalFormatting = exports.FunnelChartVisual = exports.FunnelChartSortConfiguration = exports.FunnelChartFieldWells = exports.FunnelChartDataLabelOptions = exports.FunnelChartConfiguration = exports.FunnelChartAggregatedFieldWells = exports.FreeFormSectionLayoutConfiguration = exports.FreeFormLayoutScreenCanvasSizeOptions = exports.FreeFormLayoutElementBorderStyle = exports.FreeFormLayoutElementBackgroundStyle = exports.FreeFormLayoutElement = exports.FreeFormLayoutConfiguration = exports.FreeFormLayoutCanvasSizeOptions = exports.FormatConfiguration = exports.ForecastScenario = exports.ForecastConfiguration = exports.ForecastComputation = exports.FontWeight = exports.FontSize = exports.FontConfiguration = exports.FilterTextFieldControl = exports.FilterTextAreaControl = exports.FilterSliderControl = exports.FilterSelectableValues = exports.FilterScopeConfiguration = exports.FilterRelativeDateTimeControl = exports.FilterOperationTargetVisualsConfiguration = exports.FilterOperationSelectedFieldsConfiguration = exports.FilterListControl = exports.FilterListConfiguration = void 0;
exports.LineChartSortConfiguration = exports.LineChartSeriesSettings = exports.LineChartMarkerStyleSettings = exports.LineChartLineStyleSettings = exports.LineChartFieldWells = exports.LineChartDefaultSeriesSettings = exports.LineChartConfiguration = exports.LineChartAggregatedFieldWells = exports.LegendOptions = exports.LayoutConfiguration = exports.Layout = exports.LabelOptions = exports.KPIVisualStandardLayout = exports.KPIVisualLayoutOptions = exports.KPIVisual = exports.KPISparklineOptions = exports.KPISortConfiguration = exports.KPIProgressBarConditionalFormatting = exports.KPIPrimaryValueConditionalFormatting = exports.KPIOptions = exports.KPIFieldWells = exports.KPIConfiguration = exports.KPIConditionalFormattingOption = exports.KPIConditionalFormatting = exports.KPIComparisonValueConditionalFormatting = exports.KPIActualValueConditionalFormatting = exports.ItemsLimitConfiguration = exports.IntegerValueWhenUnsetConfiguration = exports.IntegerParameterDeclaration = exports.IntegerDefaultValues = exports.InsightVisual = exports.InsightConfiguration = exports.HistogramVisual = exports.HistogramFieldWells = exports.HistogramConfiguration = exports.HistogramBinOptions = exports.HistogramAggregatedFieldWells = exports.HeatMapVisual = exports.HeatMapSortConfiguration = exports.HeatMapFieldWells = exports.HeatMapConfiguration = exports.HeatMapAggregatedFieldWells = exports.HeaderFooterSectionConfiguration = exports.GrowthRateComputation = exports.GridLayoutScreenCanvasSizeOptions = exports.GridLayoutElement = exports.GridLayoutConfiguration = exports.GridLayoutCanvasSizeOptions = exports.GradientStop = exports.GradientColor = void 0;
exports.PieChartSortConfiguration = exports.PieChartFieldWells = exports.PieChartConfiguration = exports.PieChartAggregatedFieldWells = exports.PeriodToDateComputation = exports.PeriodOverPeriodComputation = exports.PercentileAggregation = exports.PercentageDisplayFormatConfiguration = exports.PercentVisibleRange = exports.ParameterTextFieldControl = exports.ParameterTextAreaControl = exports.ParameterSliderControl = exports.ParameterSelectableValues = exports.ParameterListControl = exports.ParameterDropDownControl = exports.ParameterDeclaration = exports.ParameterDateTimePickerControl = exports.ParameterControl = exports.PanelTitleOptions = exports.PanelConfiguration = exports.PaginationConfiguration = exports.NumericalMeasureField = exports.NumericalDimensionField = exports.NumericalAggregationFunction = exports.NumericSeparatorConfiguration = exports.NumericRangeFilterValue = exports.NumericRangeFilter = exports.NumericFormatConfiguration = exports.NumericEqualityFilter = exports.NumericEqualityDrillDownFilter = exports.NumericAxisOptions = exports.NumberFormatConfiguration = exports.NumberDisplayFormatConfiguration = exports.NullValueFormatConfiguration = exports.NegativeValueConfiguration = exports.MissingDataConfiguration = exports.MinimumLabelType = exports.MetricComparisonComputation = exports.MeasureField = exports.MaximumMinimumComputation = exports.MaximumLabelType = exports.MappedDataSetParameter = exports.LongFormatText = exports.LocalNavigationConfiguration = exports.LoadingAnimation = exports.ListControlSelectAllOptions = exports.ListControlSearchOptions = exports.ListControlDisplayOptions = exports.LineSeriesAxisDisplayOptions = exports.LineChartVisual = void 0;
exports.SankeyDiagramFieldWells = exports.SankeyDiagramChartConfiguration = exports.SankeyDiagramAggregatedFieldWells = exports.SameSheetTargetVisualConfiguration = exports.RowAlternateColorOptions = exports.RollingDateConfiguration = exports.ResourcePermission = exports.RelativeDatesFilter = exports.RelativeDateTimeControlDisplayOptions = exports.ReferenceLineValueLabelConfiguration = exports.ReferenceLineStyleConfiguration = exports.ReferenceLineStaticDataConfiguration = exports.ReferenceLineLabelConfiguration = exports.ReferenceLineDynamicDataConfiguration = exports.ReferenceLineDataConfiguration = exports.ReferenceLineCustomLabelConfiguration = exports.ReferenceLine = exports.RangeEndsLabelType = exports.RadarChartVisual = exports.RadarChartSortConfiguration = exports.RadarChartSeriesSettings = exports.RadarChartFieldWells = exports.RadarChartConfiguration = exports.RadarChartAreaStyleSettings = exports.RadarChartAggregatedFieldWells = exports.ProgressBarOptions = exports.PredefinedHierarchy = exports.PivotTotalOptions = exports.PivotTableVisual = exports.PivotTableTotalOptions = exports.PivotTableSortConfiguration = exports.PivotTableSortBy = exports.PivotTableRowsLabelOptions = exports.PivotTablePaginatedReportOptions = exports.PivotTableOptions = exports.PivotTableFieldWells = exports.PivotTableFieldSubtotalOptions = exports.PivotTableFieldOptions = exports.PivotTableFieldOption = exports.PivotTableFieldCollapseStateTarget = exports.PivotTableFieldCollapseStateOption = exports.PivotTableDataPathOption = exports.PivotTableConfiguration = exports.PivotTableConditionalFormattingScope = exports.PivotTableConditionalFormattingOption = exports.PivotTableConditionalFormatting = exports.PivotTableCellConditionalFormatting = exports.PivotTableAggregatedFieldWells = exports.PivotFieldSortOptions = exports.PieChartVisual = void 0;
exports.TableFieldCustomTextContent = exports.TableFieldCustomIconContent = exports.TableConfiguration = exports.TableConditionalFormattingOption = exports.TableConditionalFormatting = exports.TableCellStyle = exports.TableCellImageSizingConfiguration = exports.TableCellConditionalFormatting = exports.TableBorderOptions = exports.TableAggregatedFieldWells = exports.SubtotalOptions = exports.StringValueWhenUnsetConfiguration = exports.StringParameterDeclaration = exports.StringFormatConfiguration = exports.StringDefaultValues = exports.Spacing = exports.SmallMultiplesOptions = exports.SmallMultiplesAxisProperties = exports.SliderControlDisplayOptions = exports.SimpleClusterMarker = exports.ShortFormatText = exports.SheetVisualScopingConfiguration = exports.SheetTextBox = exports.SheetElementRenderingRule = exports.SheetElementConfigurationOverrides = exports.SheetDefinition = exports.SheetControlLayoutConfiguration = exports.SheetControlLayout = exports.SheetControlInfoIconLabelOptions = exports.Sheet = exports.ShapeConditionalFormat = exports.SetParameterValueConfiguration = exports.SeriesItem = exports.SelectedSheetsFilterScopeConfiguration = exports.SectionStyle = exports.SectionPageBreakConfiguration = exports.SectionLayoutConfiguration = exports.SectionBasedLayoutPaperCanvasSizeOptions = exports.SectionBasedLayoutConfiguration = exports.SectionBasedLayoutCanvasSizeOptions = exports.SectionAfterPageBreak = exports.SecondaryValueOptions = exports.ScrollBarOptions = exports.ScatterPlotVisual = exports.ScatterPlotUnaggregatedFieldWells = exports.ScatterPlotFieldWells = exports.ScatterPlotConfiguration = exports.ScatterPlotCategoricallyAggregatedFieldWells = exports.SankeyDiagramVisual = exports.SankeyDiagramSortConfiguration = void 0;
exports.UniqueValuesComputation = exports.UnaggregatedField = exports.TrendArrowOptions = exports.TreeMapVisual = exports.TreeMapSortConfiguration = exports.TreeMapFieldWells = exports.TreeMapConfiguration = exports.TreeMapAggregatedFieldWells = exports.TotalOptions = exports.TotalAggregationOption = exports.TotalAggregationFunction = exports.TotalAggregationComputation = exports.TopBottomRankedComputation = exports.TopBottomMoversComputation = exports.TopBottomFilter = exports.TooltipOptions = exports.TooltipItem = exports.TimeRangeFilterValue = exports.TimeRangeFilter = exports.TimeRangeDrillDownFilter = exports.TimeEqualityFilter = exports.TimeBasedForecastProperties = exports.ThousandSeparatorOptions = exports.TextFieldControlDisplayOptions = exports.TextControlPlaceholderOptions = exports.TextConditionalFormat = exports.TextAreaControlDisplayOptions = exports.TemplateVersionDefinition = exports.TemplateVersion = exports.TemplateSourceTemplate = exports.TemplateSourceEntity = exports.TemplateSourceAnalysis = exports.TemplateError = exports.TableVisual = exports.TableUnaggregatedFieldWells = exports.TableStyleTarget = exports.TableSortConfiguration = exports.TableSideBorderOptions = exports.TableRowConditionalFormatting = exports.TablePinnedFieldOptions = exports.TablePaginatedReportOptions = exports.TableOptions = exports.TableInlineVisualization = exports.TableFieldWells = exports.TableFieldURLConfiguration = exports.TableFieldOptions = exports.TableFieldOption = exports.TableFieldLinkContentConfiguration = exports.TableFieldLinkConfiguration = exports.TableFieldImageConfiguration = void 0;
exports.WordCloudVisual = exports.WordCloudSortConfiguration = exports.WordCloudOptions = exports.WordCloudFieldWells = exports.WordCloudChartConfiguration = exports.WordCloudAggregatedFieldWells = exports.WhatIfRangeScenario = exports.WhatIfPointScenario = exports.WaterfallVisual = exports.WaterfallChartSortConfiguration = exports.WaterfallChartOptions = exports.WaterfallChartFieldWells = exports.WaterfallChartConfiguration = exports.WaterfallChartAggregatedFieldWells = exports.VisualTitleLabelOptions = exports.VisualSubtitleLabelOptions = exports.VisualPalette = exports.VisualCustomActionOperation = exports.VisualCustomAction = exports.Visual = exports.VisibleRangeOptions = exports.ValidationStrategy = void 0;
const resource_1 = require("../resource");
class AggregationFunction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AggregationFunction = AggregationFunction;
class AggregationSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AggregationSortConfiguration = AggregationSortConfiguration;
class AnalysisDefaults {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisDefaults = AnalysisDefaults;
class AnchorDateConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnchorDateConfiguration = AnchorDateConfiguration;
class ArcAxisConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArcAxisConfiguration = ArcAxisConfiguration;
class ArcAxisDisplayRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArcAxisDisplayRange = ArcAxisDisplayRange;
class ArcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArcConfiguration = ArcConfiguration;
class ArcOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArcOptions = ArcOptions;
class AssetOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetOptions = AssetOptions;
class AttributeAggregationFunction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeAggregationFunction = AttributeAggregationFunction;
class AxisDataOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisDataOptions = AxisDataOptions;
class AxisDisplayMinMaxRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisDisplayMinMaxRange = AxisDisplayMinMaxRange;
class AxisDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisDisplayOptions = AxisDisplayOptions;
class AxisDisplayRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisDisplayRange = AxisDisplayRange;
class AxisLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisLabelOptions = AxisLabelOptions;
class AxisLabelReferenceOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisLabelReferenceOptions = AxisLabelReferenceOptions;
class AxisLinearScale {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisLinearScale = AxisLinearScale;
class AxisLogarithmicScale {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisLogarithmicScale = AxisLogarithmicScale;
class AxisScale {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisScale = AxisScale;
class AxisTickLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AxisTickLabelOptions = AxisTickLabelOptions;
class BarChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BarChartAggregatedFieldWells = BarChartAggregatedFieldWells;
class BarChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BarChartConfiguration = BarChartConfiguration;
class BarChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BarChartFieldWells = BarChartFieldWells;
class BarChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BarChartSortConfiguration = BarChartSortConfiguration;
class BarChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BarChartVisual = BarChartVisual;
class BinCountOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BinCountOptions = BinCountOptions;
class BinWidthOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BinWidthOptions = BinWidthOptions;
class BodySectionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BodySectionConfiguration = BodySectionConfiguration;
class BodySectionContent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BodySectionContent = BodySectionContent;
class BoxPlotAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotAggregatedFieldWells = BoxPlotAggregatedFieldWells;
class BoxPlotChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotChartConfiguration = BoxPlotChartConfiguration;
class BoxPlotFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotFieldWells = BoxPlotFieldWells;
class BoxPlotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotOptions = BoxPlotOptions;
class BoxPlotSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotSortConfiguration = BoxPlotSortConfiguration;
class BoxPlotStyleOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotStyleOptions = BoxPlotStyleOptions;
class BoxPlotVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoxPlotVisual = BoxPlotVisual;
class CalculatedField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CalculatedField = CalculatedField;
class CalculatedMeasureField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CalculatedMeasureField = CalculatedMeasureField;
class CascadingControlConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CascadingControlConfiguration = CascadingControlConfiguration;
class CascadingControlSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CascadingControlSource = CascadingControlSource;
class CategoricalDimensionField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CategoricalDimensionField = CategoricalDimensionField;
class CategoricalMeasureField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CategoricalMeasureField = CategoricalMeasureField;
class CategoryDrillDownFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CategoryDrillDownFilter = CategoryDrillDownFilter;
class CategoryFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CategoryFilter = CategoryFilter;
class CategoryFilterConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CategoryFilterConfiguration = CategoryFilterConfiguration;
class ChartAxisLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ChartAxisLabelOptions = ChartAxisLabelOptions;
class ClusterMarker {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterMarker = ClusterMarker;
class ClusterMarkerConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterMarkerConfiguration = ClusterMarkerConfiguration;
class ColorScale {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColorScale = ColorScale;
class ColorsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColorsConfiguration = ColorsConfiguration;
class ColumnConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnConfiguration = ColumnConfiguration;
class ColumnGroupColumnSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnGroupColumnSchema = ColumnGroupColumnSchema;
class ColumnGroupSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnGroupSchema = ColumnGroupSchema;
class ColumnHierarchy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnHierarchy = ColumnHierarchy;
class ColumnIdentifier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnIdentifier = ColumnIdentifier;
class ColumnSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnSchema = ColumnSchema;
class ColumnSort {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnSort = ColumnSort;
class ColumnTooltipItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnTooltipItem = ColumnTooltipItem;
class ComboChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComboChartAggregatedFieldWells = ComboChartAggregatedFieldWells;
class ComboChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComboChartConfiguration = ComboChartConfiguration;
class ComboChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComboChartFieldWells = ComboChartFieldWells;
class ComboChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComboChartSortConfiguration = ComboChartSortConfiguration;
class ComboChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComboChartVisual = ComboChartVisual;
class ComparisonConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComparisonConfiguration = ComparisonConfiguration;
class ComparisonFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComparisonFormatConfiguration = ComparisonFormatConfiguration;
class Computation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Computation = Computation;
class ConditionalFormattingColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingColor = ConditionalFormattingColor;
class ConditionalFormattingCustomIconCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingCustomIconCondition = ConditionalFormattingCustomIconCondition;
class ConditionalFormattingCustomIconOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingCustomIconOptions = ConditionalFormattingCustomIconOptions;
class ConditionalFormattingGradientColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingGradientColor = ConditionalFormattingGradientColor;
class ConditionalFormattingIcon {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingIcon = ConditionalFormattingIcon;
class ConditionalFormattingIconDisplayConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingIconDisplayConfiguration = ConditionalFormattingIconDisplayConfiguration;
class ConditionalFormattingIconSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingIconSet = ConditionalFormattingIconSet;
class ConditionalFormattingSolidColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalFormattingSolidColor = ConditionalFormattingSolidColor;
class ContributionAnalysisDefault {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContributionAnalysisDefault = ContributionAnalysisDefault;
class CurrencyDisplayFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CurrencyDisplayFormatConfiguration = CurrencyDisplayFormatConfiguration;
class CustomActionFilterOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomActionFilterOperation = CustomActionFilterOperation;
class CustomActionNavigationOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomActionNavigationOperation = CustomActionNavigationOperation;
class CustomActionSetParametersOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomActionSetParametersOperation = CustomActionSetParametersOperation;
class CustomActionURLOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomActionURLOperation = CustomActionURLOperation;
class CustomColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomColor = CustomColor;
class CustomContentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomContentConfiguration = CustomContentConfiguration;
class CustomContentVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomContentVisual = CustomContentVisual;
class CustomFilterConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomFilterConfiguration = CustomFilterConfiguration;
class CustomFilterListConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomFilterListConfiguration = CustomFilterListConfiguration;
class CustomNarrativeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomNarrativeOptions = CustomNarrativeOptions;
class CustomParameterValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomParameterValues = CustomParameterValues;
class CustomValuesConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomValuesConfiguration = CustomValuesConfiguration;
class DataBarsOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataBarsOptions = DataBarsOptions;
class DataColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataColor = DataColor;
class DataFieldSeriesItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataFieldSeriesItem = DataFieldSeriesItem;
class DataLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataLabelOptions = DataLabelOptions;
class DataLabelType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataLabelType = DataLabelType;
class DataPathColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataPathColor = DataPathColor;
class DataPathLabelType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataPathLabelType = DataPathLabelType;
class DataPathSort {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataPathSort = DataPathSort;
class DataPathType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataPathType = DataPathType;
class DataPathValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataPathValue = DataPathValue;
class DataSetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetConfiguration = DataSetConfiguration;
class DataSetReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetReference = DataSetReference;
class DataSetSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetSchema = DataSetSchema;
class DateAxisOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateAxisOptions = DateAxisOptions;
class DateDimensionField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateDimensionField = DateDimensionField;
class DateMeasureField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateMeasureField = DateMeasureField;
class DateTimeDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeDefaultValues = DateTimeDefaultValues;
class DateTimeFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeFormatConfiguration = DateTimeFormatConfiguration;
class DateTimeHierarchy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeHierarchy = DateTimeHierarchy;
class DateTimeParameterDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeParameterDeclaration = DateTimeParameterDeclaration;
class DateTimePickerControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimePickerControlDisplayOptions = DateTimePickerControlDisplayOptions;
class DateTimeValueWhenUnsetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeValueWhenUnsetConfiguration = DateTimeValueWhenUnsetConfiguration;
class DecimalDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalDefaultValues = DecimalDefaultValues;
class DecimalParameterDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalParameterDeclaration = DecimalParameterDeclaration;
class DecimalPlacesConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalPlacesConfiguration = DecimalPlacesConfiguration;
class DecimalValueWhenUnsetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalValueWhenUnsetConfiguration = DecimalValueWhenUnsetConfiguration;
class DefaultFreeFormLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultFreeFormLayoutConfiguration = DefaultFreeFormLayoutConfiguration;
class DefaultGridLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultGridLayoutConfiguration = DefaultGridLayoutConfiguration;
class DefaultInteractiveLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultInteractiveLayoutConfiguration = DefaultInteractiveLayoutConfiguration;
class DefaultNewSheetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultNewSheetConfiguration = DefaultNewSheetConfiguration;
class DefaultPaginatedLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultPaginatedLayoutConfiguration = DefaultPaginatedLayoutConfiguration;
class DefaultSectionBasedLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultSectionBasedLayoutConfiguration = DefaultSectionBasedLayoutConfiguration;
class DestinationParameterValueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationParameterValueConfiguration = DestinationParameterValueConfiguration;
class DimensionField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DimensionField = DimensionField;
class DonutCenterOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DonutCenterOptions = DonutCenterOptions;
class DonutOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DonutOptions = DonutOptions;
class DrillDownFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DrillDownFilter = DrillDownFilter;
class DropDownControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DropDownControlDisplayOptions = DropDownControlDisplayOptions;
class DynamicDefaultValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamicDefaultValue = DynamicDefaultValue;
class EmptyVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmptyVisual = EmptyVisual;
class Entity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Entity = Entity;
class ExcludePeriodConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExcludePeriodConfiguration = ExcludePeriodConfiguration;
class ExplicitHierarchy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExplicitHierarchy = ExplicitHierarchy;
class FieldBasedTooltip {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldBasedTooltip = FieldBasedTooltip;
class FieldLabelType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldLabelType = FieldLabelType;
class FieldSeriesItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldSeriesItem = FieldSeriesItem;
class FieldSort {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldSort = FieldSort;
class FieldSortOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldSortOptions = FieldSortOptions;
class FieldTooltipItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldTooltipItem = FieldTooltipItem;
class FilledMapAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapAggregatedFieldWells = FilledMapAggregatedFieldWells;
class FilledMapConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapConditionalFormatting = FilledMapConditionalFormatting;
class FilledMapConditionalFormattingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapConditionalFormattingOption = FilledMapConditionalFormattingOption;
class FilledMapConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapConfiguration = FilledMapConfiguration;
class FilledMapFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapFieldWells = FilledMapFieldWells;
class FilledMapShapeConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapShapeConditionalFormatting = FilledMapShapeConditionalFormatting;
class FilledMapSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapSortConfiguration = FilledMapSortConfiguration;
class FilledMapVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilledMapVisual = FilledMapVisual;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class FilterControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterControl = FilterControl;
class FilterDateTimePickerControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterDateTimePickerControl = FilterDateTimePickerControl;
class FilterDropDownControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterDropDownControl = FilterDropDownControl;
class FilterGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterGroup = FilterGroup;
class FilterListConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterListConfiguration = FilterListConfiguration;
class FilterListControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterListControl = FilterListControl;
class FilterOperationSelectedFieldsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterOperationSelectedFieldsConfiguration = FilterOperationSelectedFieldsConfiguration;
class FilterOperationTargetVisualsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterOperationTargetVisualsConfiguration = FilterOperationTargetVisualsConfiguration;
class FilterRelativeDateTimeControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterRelativeDateTimeControl = FilterRelativeDateTimeControl;
class FilterScopeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterScopeConfiguration = FilterScopeConfiguration;
class FilterSelectableValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterSelectableValues = FilterSelectableValues;
class FilterSliderControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterSliderControl = FilterSliderControl;
class FilterTextAreaControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterTextAreaControl = FilterTextAreaControl;
class FilterTextFieldControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterTextFieldControl = FilterTextFieldControl;
class FontConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FontConfiguration = FontConfiguration;
class FontSize {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FontSize = FontSize;
class FontWeight {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FontWeight = FontWeight;
class ForecastComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForecastComputation = ForecastComputation;
class ForecastConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForecastConfiguration = ForecastConfiguration;
class ForecastScenario {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForecastScenario = ForecastScenario;
class FormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FormatConfiguration = FormatConfiguration;
class FreeFormLayoutCanvasSizeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormLayoutCanvasSizeOptions = FreeFormLayoutCanvasSizeOptions;
class FreeFormLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormLayoutConfiguration = FreeFormLayoutConfiguration;
class FreeFormLayoutElement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormLayoutElement = FreeFormLayoutElement;
class FreeFormLayoutElementBackgroundStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormLayoutElementBackgroundStyle = FreeFormLayoutElementBackgroundStyle;
class FreeFormLayoutElementBorderStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormLayoutElementBorderStyle = FreeFormLayoutElementBorderStyle;
class FreeFormLayoutScreenCanvasSizeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormLayoutScreenCanvasSizeOptions = FreeFormLayoutScreenCanvasSizeOptions;
class FreeFormSectionLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeFormSectionLayoutConfiguration = FreeFormSectionLayoutConfiguration;
class FunnelChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunnelChartAggregatedFieldWells = FunnelChartAggregatedFieldWells;
class FunnelChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunnelChartConfiguration = FunnelChartConfiguration;
class FunnelChartDataLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunnelChartDataLabelOptions = FunnelChartDataLabelOptions;
class FunnelChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunnelChartFieldWells = FunnelChartFieldWells;
class FunnelChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunnelChartSortConfiguration = FunnelChartSortConfiguration;
class FunnelChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunnelChartVisual = FunnelChartVisual;
class GaugeChartArcConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartArcConditionalFormatting = GaugeChartArcConditionalFormatting;
class GaugeChartConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartConditionalFormatting = GaugeChartConditionalFormatting;
class GaugeChartConditionalFormattingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartConditionalFormattingOption = GaugeChartConditionalFormattingOption;
class GaugeChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartConfiguration = GaugeChartConfiguration;
class GaugeChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartFieldWells = GaugeChartFieldWells;
class GaugeChartOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartOptions = GaugeChartOptions;
class GaugeChartPrimaryValueConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartPrimaryValueConditionalFormatting = GaugeChartPrimaryValueConditionalFormatting;
class GaugeChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GaugeChartVisual = GaugeChartVisual;
class GeospatialCoordinateBounds {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialCoordinateBounds = GeospatialCoordinateBounds;
class GeospatialHeatmapColorScale {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialHeatmapColorScale = GeospatialHeatmapColorScale;
class GeospatialHeatmapConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialHeatmapConfiguration = GeospatialHeatmapConfiguration;
class GeospatialHeatmapDataColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialHeatmapDataColor = GeospatialHeatmapDataColor;
class GeospatialMapAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialMapAggregatedFieldWells = GeospatialMapAggregatedFieldWells;
class GeospatialMapConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialMapConfiguration = GeospatialMapConfiguration;
class GeospatialMapFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialMapFieldWells = GeospatialMapFieldWells;
class GeospatialMapStyleOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialMapStyleOptions = GeospatialMapStyleOptions;
class GeospatialMapVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialMapVisual = GeospatialMapVisual;
class GeospatialPointStyleOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialPointStyleOptions = GeospatialPointStyleOptions;
class GeospatialWindowOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeospatialWindowOptions = GeospatialWindowOptions;
class GlobalTableBorderOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlobalTableBorderOptions = GlobalTableBorderOptions;
class GradientColor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GradientColor = GradientColor;
class GradientStop {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GradientStop = GradientStop;
class GridLayoutCanvasSizeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GridLayoutCanvasSizeOptions = GridLayoutCanvasSizeOptions;
class GridLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GridLayoutConfiguration = GridLayoutConfiguration;
class GridLayoutElement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GridLayoutElement = GridLayoutElement;
class GridLayoutScreenCanvasSizeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GridLayoutScreenCanvasSizeOptions = GridLayoutScreenCanvasSizeOptions;
class GrowthRateComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrowthRateComputation = GrowthRateComputation;
class HeaderFooterSectionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderFooterSectionConfiguration = HeaderFooterSectionConfiguration;
class HeatMapAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeatMapAggregatedFieldWells = HeatMapAggregatedFieldWells;
class HeatMapConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeatMapConfiguration = HeatMapConfiguration;
class HeatMapFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeatMapFieldWells = HeatMapFieldWells;
class HeatMapSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeatMapSortConfiguration = HeatMapSortConfiguration;
class HeatMapVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeatMapVisual = HeatMapVisual;
class HistogramAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HistogramAggregatedFieldWells = HistogramAggregatedFieldWells;
class HistogramBinOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HistogramBinOptions = HistogramBinOptions;
class HistogramConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HistogramConfiguration = HistogramConfiguration;
class HistogramFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HistogramFieldWells = HistogramFieldWells;
class HistogramVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HistogramVisual = HistogramVisual;
class InsightConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InsightConfiguration = InsightConfiguration;
class InsightVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InsightVisual = InsightVisual;
class IntegerDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerDefaultValues = IntegerDefaultValues;
class IntegerParameterDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerParameterDeclaration = IntegerParameterDeclaration;
class IntegerValueWhenUnsetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerValueWhenUnsetConfiguration = IntegerValueWhenUnsetConfiguration;
class ItemsLimitConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ItemsLimitConfiguration = ItemsLimitConfiguration;
class KPIActualValueConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIActualValueConditionalFormatting = KPIActualValueConditionalFormatting;
class KPIComparisonValueConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIComparisonValueConditionalFormatting = KPIComparisonValueConditionalFormatting;
class KPIConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIConditionalFormatting = KPIConditionalFormatting;
class KPIConditionalFormattingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIConditionalFormattingOption = KPIConditionalFormattingOption;
class KPIConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIConfiguration = KPIConfiguration;
class KPIFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIFieldWells = KPIFieldWells;
class KPIOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIOptions = KPIOptions;
class KPIPrimaryValueConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIPrimaryValueConditionalFormatting = KPIPrimaryValueConditionalFormatting;
class KPIProgressBarConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIProgressBarConditionalFormatting = KPIProgressBarConditionalFormatting;
class KPISortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPISortConfiguration = KPISortConfiguration;
class KPISparklineOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPISparklineOptions = KPISparklineOptions;
class KPIVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIVisual = KPIVisual;
class KPIVisualLayoutOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIVisualLayoutOptions = KPIVisualLayoutOptions;
class KPIVisualStandardLayout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KPIVisualStandardLayout = KPIVisualStandardLayout;
class LabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LabelOptions = LabelOptions;
class Layout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Layout = Layout;
class LayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LayoutConfiguration = LayoutConfiguration;
class LegendOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LegendOptions = LegendOptions;
class LineChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartAggregatedFieldWells = LineChartAggregatedFieldWells;
class LineChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartConfiguration = LineChartConfiguration;
class LineChartDefaultSeriesSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartDefaultSeriesSettings = LineChartDefaultSeriesSettings;
class LineChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartFieldWells = LineChartFieldWells;
class LineChartLineStyleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartLineStyleSettings = LineChartLineStyleSettings;
class LineChartMarkerStyleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartMarkerStyleSettings = LineChartMarkerStyleSettings;
class LineChartSeriesSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartSeriesSettings = LineChartSeriesSettings;
class LineChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartSortConfiguration = LineChartSortConfiguration;
class LineChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineChartVisual = LineChartVisual;
class LineSeriesAxisDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineSeriesAxisDisplayOptions = LineSeriesAxisDisplayOptions;
class ListControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListControlDisplayOptions = ListControlDisplayOptions;
class ListControlSearchOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListControlSearchOptions = ListControlSearchOptions;
class ListControlSelectAllOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListControlSelectAllOptions = ListControlSelectAllOptions;
class LoadingAnimation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoadingAnimation = LoadingAnimation;
class LocalNavigationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalNavigationConfiguration = LocalNavigationConfiguration;
class LongFormatText {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LongFormatText = LongFormatText;
class MappedDataSetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappedDataSetParameter = MappedDataSetParameter;
class MaximumLabelType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaximumLabelType = MaximumLabelType;
class MaximumMinimumComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaximumMinimumComputation = MaximumMinimumComputation;
class MeasureField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MeasureField = MeasureField;
class MetricComparisonComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricComparisonComputation = MetricComparisonComputation;
class MinimumLabelType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MinimumLabelType = MinimumLabelType;
class MissingDataConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MissingDataConfiguration = MissingDataConfiguration;
class NegativeValueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NegativeValueConfiguration = NegativeValueConfiguration;
class NullValueFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NullValueFormatConfiguration = NullValueFormatConfiguration;
class NumberDisplayFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumberDisplayFormatConfiguration = NumberDisplayFormatConfiguration;
class NumberFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumberFormatConfiguration = NumberFormatConfiguration;
class NumericAxisOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericAxisOptions = NumericAxisOptions;
class NumericEqualityDrillDownFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericEqualityDrillDownFilter = NumericEqualityDrillDownFilter;
class NumericEqualityFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericEqualityFilter = NumericEqualityFilter;
class NumericFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericFormatConfiguration = NumericFormatConfiguration;
class NumericRangeFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericRangeFilter = NumericRangeFilter;
class NumericRangeFilterValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericRangeFilterValue = NumericRangeFilterValue;
class NumericSeparatorConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericSeparatorConfiguration = NumericSeparatorConfiguration;
class NumericalAggregationFunction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericalAggregationFunction = NumericalAggregationFunction;
class NumericalDimensionField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericalDimensionField = NumericalDimensionField;
class NumericalMeasureField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericalMeasureField = NumericalMeasureField;
class PaginationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PaginationConfiguration = PaginationConfiguration;
class PanelConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PanelConfiguration = PanelConfiguration;
class PanelTitleOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PanelTitleOptions = PanelTitleOptions;
class ParameterControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterControl = ParameterControl;
class ParameterDateTimePickerControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterDateTimePickerControl = ParameterDateTimePickerControl;
class ParameterDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterDeclaration = ParameterDeclaration;
class ParameterDropDownControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterDropDownControl = ParameterDropDownControl;
class ParameterListControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterListControl = ParameterListControl;
class ParameterSelectableValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterSelectableValues = ParameterSelectableValues;
class ParameterSliderControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterSliderControl = ParameterSliderControl;
class ParameterTextAreaControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterTextAreaControl = ParameterTextAreaControl;
class ParameterTextFieldControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterTextFieldControl = ParameterTextFieldControl;
class PercentVisibleRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PercentVisibleRange = PercentVisibleRange;
class PercentageDisplayFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PercentageDisplayFormatConfiguration = PercentageDisplayFormatConfiguration;
class PercentileAggregation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PercentileAggregation = PercentileAggregation;
class PeriodOverPeriodComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PeriodOverPeriodComputation = PeriodOverPeriodComputation;
class PeriodToDateComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PeriodToDateComputation = PeriodToDateComputation;
class PieChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PieChartAggregatedFieldWells = PieChartAggregatedFieldWells;
class PieChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PieChartConfiguration = PieChartConfiguration;
class PieChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PieChartFieldWells = PieChartFieldWells;
class PieChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PieChartSortConfiguration = PieChartSortConfiguration;
class PieChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PieChartVisual = PieChartVisual;
class PivotFieldSortOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotFieldSortOptions = PivotFieldSortOptions;
class PivotTableAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableAggregatedFieldWells = PivotTableAggregatedFieldWells;
class PivotTableCellConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableCellConditionalFormatting = PivotTableCellConditionalFormatting;
class PivotTableConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableConditionalFormatting = PivotTableConditionalFormatting;
class PivotTableConditionalFormattingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableConditionalFormattingOption = PivotTableConditionalFormattingOption;
class PivotTableConditionalFormattingScope {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableConditionalFormattingScope = PivotTableConditionalFormattingScope;
class PivotTableConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableConfiguration = PivotTableConfiguration;
class PivotTableDataPathOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableDataPathOption = PivotTableDataPathOption;
class PivotTableFieldCollapseStateOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableFieldCollapseStateOption = PivotTableFieldCollapseStateOption;
class PivotTableFieldCollapseStateTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableFieldCollapseStateTarget = PivotTableFieldCollapseStateTarget;
class PivotTableFieldOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableFieldOption = PivotTableFieldOption;
class PivotTableFieldOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableFieldOptions = PivotTableFieldOptions;
class PivotTableFieldSubtotalOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableFieldSubtotalOptions = PivotTableFieldSubtotalOptions;
class PivotTableFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableFieldWells = PivotTableFieldWells;
class PivotTableOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableOptions = PivotTableOptions;
class PivotTablePaginatedReportOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTablePaginatedReportOptions = PivotTablePaginatedReportOptions;
class PivotTableRowsLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableRowsLabelOptions = PivotTableRowsLabelOptions;
class PivotTableSortBy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableSortBy = PivotTableSortBy;
class PivotTableSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableSortConfiguration = PivotTableSortConfiguration;
class PivotTableTotalOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableTotalOptions = PivotTableTotalOptions;
class PivotTableVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTableVisual = PivotTableVisual;
class PivotTotalOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PivotTotalOptions = PivotTotalOptions;
class PredefinedHierarchy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedHierarchy = PredefinedHierarchy;
class ProgressBarOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProgressBarOptions = ProgressBarOptions;
class RadarChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartAggregatedFieldWells = RadarChartAggregatedFieldWells;
class RadarChartAreaStyleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartAreaStyleSettings = RadarChartAreaStyleSettings;
class RadarChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartConfiguration = RadarChartConfiguration;
class RadarChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartFieldWells = RadarChartFieldWells;
class RadarChartSeriesSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartSeriesSettings = RadarChartSeriesSettings;
class RadarChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartSortConfiguration = RadarChartSortConfiguration;
class RadarChartVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RadarChartVisual = RadarChartVisual;
class RangeEndsLabelType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RangeEndsLabelType = RangeEndsLabelType;
class ReferenceLine {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLine = ReferenceLine;
class ReferenceLineCustomLabelConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineCustomLabelConfiguration = ReferenceLineCustomLabelConfiguration;
class ReferenceLineDataConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineDataConfiguration = ReferenceLineDataConfiguration;
class ReferenceLineDynamicDataConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineDynamicDataConfiguration = ReferenceLineDynamicDataConfiguration;
class ReferenceLineLabelConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineLabelConfiguration = ReferenceLineLabelConfiguration;
class ReferenceLineStaticDataConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineStaticDataConfiguration = ReferenceLineStaticDataConfiguration;
class ReferenceLineStyleConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineStyleConfiguration = ReferenceLineStyleConfiguration;
class ReferenceLineValueLabelConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceLineValueLabelConfiguration = ReferenceLineValueLabelConfiguration;
class RelativeDateTimeControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelativeDateTimeControlDisplayOptions = RelativeDateTimeControlDisplayOptions;
class RelativeDatesFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelativeDatesFilter = RelativeDatesFilter;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class RollingDateConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RollingDateConfiguration = RollingDateConfiguration;
class RowAlternateColorOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RowAlternateColorOptions = RowAlternateColorOptions;
class SameSheetTargetVisualConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SameSheetTargetVisualConfiguration = SameSheetTargetVisualConfiguration;
class SankeyDiagramAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SankeyDiagramAggregatedFieldWells = SankeyDiagramAggregatedFieldWells;
class SankeyDiagramChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SankeyDiagramChartConfiguration = SankeyDiagramChartConfiguration;
class SankeyDiagramFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SankeyDiagramFieldWells = SankeyDiagramFieldWells;
class SankeyDiagramSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SankeyDiagramSortConfiguration = SankeyDiagramSortConfiguration;
class SankeyDiagramVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SankeyDiagramVisual = SankeyDiagramVisual;
class ScatterPlotCategoricallyAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScatterPlotCategoricallyAggregatedFieldWells = ScatterPlotCategoricallyAggregatedFieldWells;
class ScatterPlotConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScatterPlotConfiguration = ScatterPlotConfiguration;
class ScatterPlotFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScatterPlotFieldWells = ScatterPlotFieldWells;
class ScatterPlotUnaggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScatterPlotUnaggregatedFieldWells = ScatterPlotUnaggregatedFieldWells;
class ScatterPlotVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScatterPlotVisual = ScatterPlotVisual;
class ScrollBarOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScrollBarOptions = ScrollBarOptions;
class SecondaryValueOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecondaryValueOptions = SecondaryValueOptions;
class SectionAfterPageBreak {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionAfterPageBreak = SectionAfterPageBreak;
class SectionBasedLayoutCanvasSizeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionBasedLayoutCanvasSizeOptions = SectionBasedLayoutCanvasSizeOptions;
class SectionBasedLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionBasedLayoutConfiguration = SectionBasedLayoutConfiguration;
class SectionBasedLayoutPaperCanvasSizeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionBasedLayoutPaperCanvasSizeOptions = SectionBasedLayoutPaperCanvasSizeOptions;
class SectionLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionLayoutConfiguration = SectionLayoutConfiguration;
class SectionPageBreakConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionPageBreakConfiguration = SectionPageBreakConfiguration;
class SectionStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SectionStyle = SectionStyle;
class SelectedSheetsFilterScopeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelectedSheetsFilterScopeConfiguration = SelectedSheetsFilterScopeConfiguration;
class SeriesItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SeriesItem = SeriesItem;
class SetParameterValueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetParameterValueConfiguration = SetParameterValueConfiguration;
class ShapeConditionalFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ShapeConditionalFormat = ShapeConditionalFormat;
class Sheet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sheet = Sheet;
class SheetControlInfoIconLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetControlInfoIconLabelOptions = SheetControlInfoIconLabelOptions;
class SheetControlLayout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetControlLayout = SheetControlLayout;
class SheetControlLayoutConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetControlLayoutConfiguration = SheetControlLayoutConfiguration;
class SheetDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetDefinition = SheetDefinition;
class SheetElementConfigurationOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetElementConfigurationOverrides = SheetElementConfigurationOverrides;
class SheetElementRenderingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetElementRenderingRule = SheetElementRenderingRule;
class SheetTextBox {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetTextBox = SheetTextBox;
class SheetVisualScopingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetVisualScopingConfiguration = SheetVisualScopingConfiguration;
class ShortFormatText {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ShortFormatText = ShortFormatText;
class SimpleClusterMarker {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SimpleClusterMarker = SimpleClusterMarker;
class SliderControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SliderControlDisplayOptions = SliderControlDisplayOptions;
class SmallMultiplesAxisProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SmallMultiplesAxisProperties = SmallMultiplesAxisProperties;
class SmallMultiplesOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SmallMultiplesOptions = SmallMultiplesOptions;
class Spacing {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Spacing = Spacing;
class StringDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringDefaultValues = StringDefaultValues;
class StringFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringFormatConfiguration = StringFormatConfiguration;
class StringParameterDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringParameterDeclaration = StringParameterDeclaration;
class StringValueWhenUnsetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringValueWhenUnsetConfiguration = StringValueWhenUnsetConfiguration;
class SubtotalOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubtotalOptions = SubtotalOptions;
class TableAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableAggregatedFieldWells = TableAggregatedFieldWells;
class TableBorderOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableBorderOptions = TableBorderOptions;
class TableCellConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableCellConditionalFormatting = TableCellConditionalFormatting;
class TableCellImageSizingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableCellImageSizingConfiguration = TableCellImageSizingConfiguration;
class TableCellStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableCellStyle = TableCellStyle;
class TableConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableConditionalFormatting = TableConditionalFormatting;
class TableConditionalFormattingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableConditionalFormattingOption = TableConditionalFormattingOption;
class TableConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableConfiguration = TableConfiguration;
class TableFieldCustomIconContent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldCustomIconContent = TableFieldCustomIconContent;
class TableFieldCustomTextContent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldCustomTextContent = TableFieldCustomTextContent;
class TableFieldImageConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldImageConfiguration = TableFieldImageConfiguration;
class TableFieldLinkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldLinkConfiguration = TableFieldLinkConfiguration;
class TableFieldLinkContentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldLinkContentConfiguration = TableFieldLinkContentConfiguration;
class TableFieldOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldOption = TableFieldOption;
class TableFieldOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldOptions = TableFieldOptions;
class TableFieldURLConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldURLConfiguration = TableFieldURLConfiguration;
class TableFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableFieldWells = TableFieldWells;
class TableInlineVisualization {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableInlineVisualization = TableInlineVisualization;
class TableOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableOptions = TableOptions;
class TablePaginatedReportOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TablePaginatedReportOptions = TablePaginatedReportOptions;
class TablePinnedFieldOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TablePinnedFieldOptions = TablePinnedFieldOptions;
class TableRowConditionalFormatting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableRowConditionalFormatting = TableRowConditionalFormatting;
class TableSideBorderOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableSideBorderOptions = TableSideBorderOptions;
class TableSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableSortConfiguration = TableSortConfiguration;
class TableStyleTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableStyleTarget = TableStyleTarget;
class TableUnaggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableUnaggregatedFieldWells = TableUnaggregatedFieldWells;
class TableVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableVisual = TableVisual;
class TemplateError {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateError = TemplateError;
class TemplateSourceAnalysis {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateSourceAnalysis = TemplateSourceAnalysis;
class TemplateSourceEntity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateSourceEntity = TemplateSourceEntity;
class TemplateSourceTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateSourceTemplate = TemplateSourceTemplate;
class TemplateVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateVersion = TemplateVersion;
class TemplateVersionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateVersionDefinition = TemplateVersionDefinition;
class TextAreaControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextAreaControlDisplayOptions = TextAreaControlDisplayOptions;
class TextConditionalFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextConditionalFormat = TextConditionalFormat;
class TextControlPlaceholderOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextControlPlaceholderOptions = TextControlPlaceholderOptions;
class TextFieldControlDisplayOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextFieldControlDisplayOptions = TextFieldControlDisplayOptions;
class ThousandSeparatorOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThousandSeparatorOptions = ThousandSeparatorOptions;
class TimeBasedForecastProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeBasedForecastProperties = TimeBasedForecastProperties;
class TimeEqualityFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeEqualityFilter = TimeEqualityFilter;
class TimeRangeDrillDownFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeRangeDrillDownFilter = TimeRangeDrillDownFilter;
class TimeRangeFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeRangeFilter = TimeRangeFilter;
class TimeRangeFilterValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeRangeFilterValue = TimeRangeFilterValue;
class TooltipItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TooltipItem = TooltipItem;
class TooltipOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TooltipOptions = TooltipOptions;
class TopBottomFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopBottomFilter = TopBottomFilter;
class TopBottomMoversComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopBottomMoversComputation = TopBottomMoversComputation;
class TopBottomRankedComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopBottomRankedComputation = TopBottomRankedComputation;
class TotalAggregationComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalAggregationComputation = TotalAggregationComputation;
class TotalAggregationFunction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalAggregationFunction = TotalAggregationFunction;
class TotalAggregationOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalAggregationOption = TotalAggregationOption;
class TotalOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalOptions = TotalOptions;
class TreeMapAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TreeMapAggregatedFieldWells = TreeMapAggregatedFieldWells;
class TreeMapConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TreeMapConfiguration = TreeMapConfiguration;
class TreeMapFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TreeMapFieldWells = TreeMapFieldWells;
class TreeMapSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TreeMapSortConfiguration = TreeMapSortConfiguration;
class TreeMapVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TreeMapVisual = TreeMapVisual;
class TrendArrowOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrendArrowOptions = TrendArrowOptions;
class UnaggregatedField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UnaggregatedField = UnaggregatedField;
class UniqueValuesComputation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UniqueValuesComputation = UniqueValuesComputation;
class ValidationStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ValidationStrategy = ValidationStrategy;
class VisibleRangeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisibleRangeOptions = VisibleRangeOptions;
class Visual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Visual = Visual;
class VisualCustomAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisualCustomAction = VisualCustomAction;
class VisualCustomActionOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisualCustomActionOperation = VisualCustomActionOperation;
class VisualPalette {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisualPalette = VisualPalette;
class VisualSubtitleLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisualSubtitleLabelOptions = VisualSubtitleLabelOptions;
class VisualTitleLabelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisualTitleLabelOptions = VisualTitleLabelOptions;
class WaterfallChartAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaterfallChartAggregatedFieldWells = WaterfallChartAggregatedFieldWells;
class WaterfallChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaterfallChartConfiguration = WaterfallChartConfiguration;
class WaterfallChartFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaterfallChartFieldWells = WaterfallChartFieldWells;
class WaterfallChartOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaterfallChartOptions = WaterfallChartOptions;
class WaterfallChartSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaterfallChartSortConfiguration = WaterfallChartSortConfiguration;
class WaterfallVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaterfallVisual = WaterfallVisual;
class WhatIfPointScenario {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WhatIfPointScenario = WhatIfPointScenario;
class WhatIfRangeScenario {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WhatIfRangeScenario = WhatIfRangeScenario;
class WordCloudAggregatedFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WordCloudAggregatedFieldWells = WordCloudAggregatedFieldWells;
class WordCloudChartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WordCloudChartConfiguration = WordCloudChartConfiguration;
class WordCloudFieldWells {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WordCloudFieldWells = WordCloudFieldWells;
class WordCloudOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WordCloudOptions = WordCloudOptions;
class WordCloudSortConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WordCloudSortConfiguration = WordCloudSortConfiguration;
class WordCloudVisual {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WordCloudVisual = WordCloudVisual;
class Template extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::Template', properties);
    }
}
exports.default = Template;
Template.AggregationFunction = AggregationFunction;
Template.AggregationSortConfiguration = AggregationSortConfiguration;
Template.AnalysisDefaults = AnalysisDefaults;
Template.AnchorDateConfiguration = AnchorDateConfiguration;
Template.ArcAxisConfiguration = ArcAxisConfiguration;
Template.ArcAxisDisplayRange = ArcAxisDisplayRange;
Template.ArcConfiguration = ArcConfiguration;
Template.ArcOptions = ArcOptions;
Template.AssetOptions = AssetOptions;
Template.AttributeAggregationFunction = AttributeAggregationFunction;
Template.AxisDataOptions = AxisDataOptions;
Template.AxisDisplayMinMaxRange = AxisDisplayMinMaxRange;
Template.AxisDisplayOptions = AxisDisplayOptions;
Template.AxisDisplayRange = AxisDisplayRange;
Template.AxisLabelOptions = AxisLabelOptions;
Template.AxisLabelReferenceOptions = AxisLabelReferenceOptions;
Template.AxisLinearScale = AxisLinearScale;
Template.AxisLogarithmicScale = AxisLogarithmicScale;
Template.AxisScale = AxisScale;
Template.AxisTickLabelOptions = AxisTickLabelOptions;
Template.BarChartAggregatedFieldWells = BarChartAggregatedFieldWells;
Template.BarChartConfiguration = BarChartConfiguration;
Template.BarChartFieldWells = BarChartFieldWells;
Template.BarChartSortConfiguration = BarChartSortConfiguration;
Template.BarChartVisual = BarChartVisual;
Template.BinCountOptions = BinCountOptions;
Template.BinWidthOptions = BinWidthOptions;
Template.BodySectionConfiguration = BodySectionConfiguration;
Template.BodySectionContent = BodySectionContent;
Template.BoxPlotAggregatedFieldWells = BoxPlotAggregatedFieldWells;
Template.BoxPlotChartConfiguration = BoxPlotChartConfiguration;
Template.BoxPlotFieldWells = BoxPlotFieldWells;
Template.BoxPlotOptions = BoxPlotOptions;
Template.BoxPlotSortConfiguration = BoxPlotSortConfiguration;
Template.BoxPlotStyleOptions = BoxPlotStyleOptions;
Template.BoxPlotVisual = BoxPlotVisual;
Template.CalculatedField = CalculatedField;
Template.CalculatedMeasureField = CalculatedMeasureField;
Template.CascadingControlConfiguration = CascadingControlConfiguration;
Template.CascadingControlSource = CascadingControlSource;
Template.CategoricalDimensionField = CategoricalDimensionField;
Template.CategoricalMeasureField = CategoricalMeasureField;
Template.CategoryDrillDownFilter = CategoryDrillDownFilter;
Template.CategoryFilter = CategoryFilter;
Template.CategoryFilterConfiguration = CategoryFilterConfiguration;
Template.ChartAxisLabelOptions = ChartAxisLabelOptions;
Template.ClusterMarker = ClusterMarker;
Template.ClusterMarkerConfiguration = ClusterMarkerConfiguration;
Template.ColorScale = ColorScale;
Template.ColorsConfiguration = ColorsConfiguration;
Template.ColumnConfiguration = ColumnConfiguration;
Template.ColumnGroupColumnSchema = ColumnGroupColumnSchema;
Template.ColumnGroupSchema = ColumnGroupSchema;
Template.ColumnHierarchy = ColumnHierarchy;
Template.ColumnIdentifier = ColumnIdentifier;
Template.ColumnSchema = ColumnSchema;
Template.ColumnSort = ColumnSort;
Template.ColumnTooltipItem = ColumnTooltipItem;
Template.ComboChartAggregatedFieldWells = ComboChartAggregatedFieldWells;
Template.ComboChartConfiguration = ComboChartConfiguration;
Template.ComboChartFieldWells = ComboChartFieldWells;
Template.ComboChartSortConfiguration = ComboChartSortConfiguration;
Template.ComboChartVisual = ComboChartVisual;
Template.ComparisonConfiguration = ComparisonConfiguration;
Template.ComparisonFormatConfiguration = ComparisonFormatConfiguration;
Template.Computation = Computation;
Template.ConditionalFormattingColor = ConditionalFormattingColor;
Template.ConditionalFormattingCustomIconCondition = ConditionalFormattingCustomIconCondition;
Template.ConditionalFormattingCustomIconOptions = ConditionalFormattingCustomIconOptions;
Template.ConditionalFormattingGradientColor = ConditionalFormattingGradientColor;
Template.ConditionalFormattingIcon = ConditionalFormattingIcon;
Template.ConditionalFormattingIconDisplayConfiguration = ConditionalFormattingIconDisplayConfiguration;
Template.ConditionalFormattingIconSet = ConditionalFormattingIconSet;
Template.ConditionalFormattingSolidColor = ConditionalFormattingSolidColor;
Template.ContributionAnalysisDefault = ContributionAnalysisDefault;
Template.CurrencyDisplayFormatConfiguration = CurrencyDisplayFormatConfiguration;
Template.CustomActionFilterOperation = CustomActionFilterOperation;
Template.CustomActionNavigationOperation = CustomActionNavigationOperation;
Template.CustomActionSetParametersOperation = CustomActionSetParametersOperation;
Template.CustomActionURLOperation = CustomActionURLOperation;
Template.CustomColor = CustomColor;
Template.CustomContentConfiguration = CustomContentConfiguration;
Template.CustomContentVisual = CustomContentVisual;
Template.CustomFilterConfiguration = CustomFilterConfiguration;
Template.CustomFilterListConfiguration = CustomFilterListConfiguration;
Template.CustomNarrativeOptions = CustomNarrativeOptions;
Template.CustomParameterValues = CustomParameterValues;
Template.CustomValuesConfiguration = CustomValuesConfiguration;
Template.DataBarsOptions = DataBarsOptions;
Template.DataColor = DataColor;
Template.DataFieldSeriesItem = DataFieldSeriesItem;
Template.DataLabelOptions = DataLabelOptions;
Template.DataLabelType = DataLabelType;
Template.DataPathColor = DataPathColor;
Template.DataPathLabelType = DataPathLabelType;
Template.DataPathSort = DataPathSort;
Template.DataPathType = DataPathType;
Template.DataPathValue = DataPathValue;
Template.DataSetConfiguration = DataSetConfiguration;
Template.DataSetReference = DataSetReference;
Template.DataSetSchema = DataSetSchema;
Template.DateAxisOptions = DateAxisOptions;
Template.DateDimensionField = DateDimensionField;
Template.DateMeasureField = DateMeasureField;
Template.DateTimeDefaultValues = DateTimeDefaultValues;
Template.DateTimeFormatConfiguration = DateTimeFormatConfiguration;
Template.DateTimeHierarchy = DateTimeHierarchy;
Template.DateTimeParameterDeclaration = DateTimeParameterDeclaration;
Template.DateTimePickerControlDisplayOptions = DateTimePickerControlDisplayOptions;
Template.DateTimeValueWhenUnsetConfiguration = DateTimeValueWhenUnsetConfiguration;
Template.DecimalDefaultValues = DecimalDefaultValues;
Template.DecimalParameterDeclaration = DecimalParameterDeclaration;
Template.DecimalPlacesConfiguration = DecimalPlacesConfiguration;
Template.DecimalValueWhenUnsetConfiguration = DecimalValueWhenUnsetConfiguration;
Template.DefaultFreeFormLayoutConfiguration = DefaultFreeFormLayoutConfiguration;
Template.DefaultGridLayoutConfiguration = DefaultGridLayoutConfiguration;
Template.DefaultInteractiveLayoutConfiguration = DefaultInteractiveLayoutConfiguration;
Template.DefaultNewSheetConfiguration = DefaultNewSheetConfiguration;
Template.DefaultPaginatedLayoutConfiguration = DefaultPaginatedLayoutConfiguration;
Template.DefaultSectionBasedLayoutConfiguration = DefaultSectionBasedLayoutConfiguration;
Template.DestinationParameterValueConfiguration = DestinationParameterValueConfiguration;
Template.DimensionField = DimensionField;
Template.DonutCenterOptions = DonutCenterOptions;
Template.DonutOptions = DonutOptions;
Template.DrillDownFilter = DrillDownFilter;
Template.DropDownControlDisplayOptions = DropDownControlDisplayOptions;
Template.DynamicDefaultValue = DynamicDefaultValue;
Template.EmptyVisual = EmptyVisual;
Template.Entity = Entity;
Template.ExcludePeriodConfiguration = ExcludePeriodConfiguration;
Template.ExplicitHierarchy = ExplicitHierarchy;
Template.FieldBasedTooltip = FieldBasedTooltip;
Template.FieldLabelType = FieldLabelType;
Template.FieldSeriesItem = FieldSeriesItem;
Template.FieldSort = FieldSort;
Template.FieldSortOptions = FieldSortOptions;
Template.FieldTooltipItem = FieldTooltipItem;
Template.FilledMapAggregatedFieldWells = FilledMapAggregatedFieldWells;
Template.FilledMapConditionalFormatting = FilledMapConditionalFormatting;
Template.FilledMapConditionalFormattingOption = FilledMapConditionalFormattingOption;
Template.FilledMapConfiguration = FilledMapConfiguration;
Template.FilledMapFieldWells = FilledMapFieldWells;
Template.FilledMapShapeConditionalFormatting = FilledMapShapeConditionalFormatting;
Template.FilledMapSortConfiguration = FilledMapSortConfiguration;
Template.FilledMapVisual = FilledMapVisual;
Template.Filter = Filter;
Template.FilterControl = FilterControl;
Template.FilterDateTimePickerControl = FilterDateTimePickerControl;
Template.FilterDropDownControl = FilterDropDownControl;
Template.FilterGroup = FilterGroup;
Template.FilterListConfiguration = FilterListConfiguration;
Template.FilterListControl = FilterListControl;
Template.FilterOperationSelectedFieldsConfiguration = FilterOperationSelectedFieldsConfiguration;
Template.FilterOperationTargetVisualsConfiguration = FilterOperationTargetVisualsConfiguration;
Template.FilterRelativeDateTimeControl = FilterRelativeDateTimeControl;
Template.FilterScopeConfiguration = FilterScopeConfiguration;
Template.FilterSelectableValues = FilterSelectableValues;
Template.FilterSliderControl = FilterSliderControl;
Template.FilterTextAreaControl = FilterTextAreaControl;
Template.FilterTextFieldControl = FilterTextFieldControl;
Template.FontConfiguration = FontConfiguration;
Template.FontSize = FontSize;
Template.FontWeight = FontWeight;
Template.ForecastComputation = ForecastComputation;
Template.ForecastConfiguration = ForecastConfiguration;
Template.ForecastScenario = ForecastScenario;
Template.FormatConfiguration = FormatConfiguration;
Template.FreeFormLayoutCanvasSizeOptions = FreeFormLayoutCanvasSizeOptions;
Template.FreeFormLayoutConfiguration = FreeFormLayoutConfiguration;
Template.FreeFormLayoutElement = FreeFormLayoutElement;
Template.FreeFormLayoutElementBackgroundStyle = FreeFormLayoutElementBackgroundStyle;
Template.FreeFormLayoutElementBorderStyle = FreeFormLayoutElementBorderStyle;
Template.FreeFormLayoutScreenCanvasSizeOptions = FreeFormLayoutScreenCanvasSizeOptions;
Template.FreeFormSectionLayoutConfiguration = FreeFormSectionLayoutConfiguration;
Template.FunnelChartAggregatedFieldWells = FunnelChartAggregatedFieldWells;
Template.FunnelChartConfiguration = FunnelChartConfiguration;
Template.FunnelChartDataLabelOptions = FunnelChartDataLabelOptions;
Template.FunnelChartFieldWells = FunnelChartFieldWells;
Template.FunnelChartSortConfiguration = FunnelChartSortConfiguration;
Template.FunnelChartVisual = FunnelChartVisual;
Template.GaugeChartArcConditionalFormatting = GaugeChartArcConditionalFormatting;
Template.GaugeChartConditionalFormatting = GaugeChartConditionalFormatting;
Template.GaugeChartConditionalFormattingOption = GaugeChartConditionalFormattingOption;
Template.GaugeChartConfiguration = GaugeChartConfiguration;
Template.GaugeChartFieldWells = GaugeChartFieldWells;
Template.GaugeChartOptions = GaugeChartOptions;
Template.GaugeChartPrimaryValueConditionalFormatting = GaugeChartPrimaryValueConditionalFormatting;
Template.GaugeChartVisual = GaugeChartVisual;
Template.GeospatialCoordinateBounds = GeospatialCoordinateBounds;
Template.GeospatialHeatmapColorScale = GeospatialHeatmapColorScale;
Template.GeospatialHeatmapConfiguration = GeospatialHeatmapConfiguration;
Template.GeospatialHeatmapDataColor = GeospatialHeatmapDataColor;
Template.GeospatialMapAggregatedFieldWells = GeospatialMapAggregatedFieldWells;
Template.GeospatialMapConfiguration = GeospatialMapConfiguration;
Template.GeospatialMapFieldWells = GeospatialMapFieldWells;
Template.GeospatialMapStyleOptions = GeospatialMapStyleOptions;
Template.GeospatialMapVisual = GeospatialMapVisual;
Template.GeospatialPointStyleOptions = GeospatialPointStyleOptions;
Template.GeospatialWindowOptions = GeospatialWindowOptions;
Template.GlobalTableBorderOptions = GlobalTableBorderOptions;
Template.GradientColor = GradientColor;
Template.GradientStop = GradientStop;
Template.GridLayoutCanvasSizeOptions = GridLayoutCanvasSizeOptions;
Template.GridLayoutConfiguration = GridLayoutConfiguration;
Template.GridLayoutElement = GridLayoutElement;
Template.GridLayoutScreenCanvasSizeOptions = GridLayoutScreenCanvasSizeOptions;
Template.GrowthRateComputation = GrowthRateComputation;
Template.HeaderFooterSectionConfiguration = HeaderFooterSectionConfiguration;
Template.HeatMapAggregatedFieldWells = HeatMapAggregatedFieldWells;
Template.HeatMapConfiguration = HeatMapConfiguration;
Template.HeatMapFieldWells = HeatMapFieldWells;
Template.HeatMapSortConfiguration = HeatMapSortConfiguration;
Template.HeatMapVisual = HeatMapVisual;
Template.HistogramAggregatedFieldWells = HistogramAggregatedFieldWells;
Template.HistogramBinOptions = HistogramBinOptions;
Template.HistogramConfiguration = HistogramConfiguration;
Template.HistogramFieldWells = HistogramFieldWells;
Template.HistogramVisual = HistogramVisual;
Template.InsightConfiguration = InsightConfiguration;
Template.InsightVisual = InsightVisual;
Template.IntegerDefaultValues = IntegerDefaultValues;
Template.IntegerParameterDeclaration = IntegerParameterDeclaration;
Template.IntegerValueWhenUnsetConfiguration = IntegerValueWhenUnsetConfiguration;
Template.ItemsLimitConfiguration = ItemsLimitConfiguration;
Template.KPIActualValueConditionalFormatting = KPIActualValueConditionalFormatting;
Template.KPIComparisonValueConditionalFormatting = KPIComparisonValueConditionalFormatting;
Template.KPIConditionalFormatting = KPIConditionalFormatting;
Template.KPIConditionalFormattingOption = KPIConditionalFormattingOption;
Template.KPIConfiguration = KPIConfiguration;
Template.KPIFieldWells = KPIFieldWells;
Template.KPIOptions = KPIOptions;
Template.KPIPrimaryValueConditionalFormatting = KPIPrimaryValueConditionalFormatting;
Template.KPIProgressBarConditionalFormatting = KPIProgressBarConditionalFormatting;
Template.KPISortConfiguration = KPISortConfiguration;
Template.KPISparklineOptions = KPISparklineOptions;
Template.KPIVisual = KPIVisual;
Template.KPIVisualLayoutOptions = KPIVisualLayoutOptions;
Template.KPIVisualStandardLayout = KPIVisualStandardLayout;
Template.LabelOptions = LabelOptions;
Template.Layout = Layout;
Template.LayoutConfiguration = LayoutConfiguration;
Template.LegendOptions = LegendOptions;
Template.LineChartAggregatedFieldWells = LineChartAggregatedFieldWells;
Template.LineChartConfiguration = LineChartConfiguration;
Template.LineChartDefaultSeriesSettings = LineChartDefaultSeriesSettings;
Template.LineChartFieldWells = LineChartFieldWells;
Template.LineChartLineStyleSettings = LineChartLineStyleSettings;
Template.LineChartMarkerStyleSettings = LineChartMarkerStyleSettings;
Template.LineChartSeriesSettings = LineChartSeriesSettings;
Template.LineChartSortConfiguration = LineChartSortConfiguration;
Template.LineChartVisual = LineChartVisual;
Template.LineSeriesAxisDisplayOptions = LineSeriesAxisDisplayOptions;
Template.ListControlDisplayOptions = ListControlDisplayOptions;
Template.ListControlSearchOptions = ListControlSearchOptions;
Template.ListControlSelectAllOptions = ListControlSelectAllOptions;
Template.LoadingAnimation = LoadingAnimation;
Template.LocalNavigationConfiguration = LocalNavigationConfiguration;
Template.LongFormatText = LongFormatText;
Template.MappedDataSetParameter = MappedDataSetParameter;
Template.MaximumLabelType = MaximumLabelType;
Template.MaximumMinimumComputation = MaximumMinimumComputation;
Template.MeasureField = MeasureField;
Template.MetricComparisonComputation = MetricComparisonComputation;
Template.MinimumLabelType = MinimumLabelType;
Template.MissingDataConfiguration = MissingDataConfiguration;
Template.NegativeValueConfiguration = NegativeValueConfiguration;
Template.NullValueFormatConfiguration = NullValueFormatConfiguration;
Template.NumberDisplayFormatConfiguration = NumberDisplayFormatConfiguration;
Template.NumberFormatConfiguration = NumberFormatConfiguration;
Template.NumericAxisOptions = NumericAxisOptions;
Template.NumericEqualityDrillDownFilter = NumericEqualityDrillDownFilter;
Template.NumericEqualityFilter = NumericEqualityFilter;
Template.NumericFormatConfiguration = NumericFormatConfiguration;
Template.NumericRangeFilter = NumericRangeFilter;
Template.NumericRangeFilterValue = NumericRangeFilterValue;
Template.NumericSeparatorConfiguration = NumericSeparatorConfiguration;
Template.NumericalAggregationFunction = NumericalAggregationFunction;
Template.NumericalDimensionField = NumericalDimensionField;
Template.NumericalMeasureField = NumericalMeasureField;
Template.PaginationConfiguration = PaginationConfiguration;
Template.PanelConfiguration = PanelConfiguration;
Template.PanelTitleOptions = PanelTitleOptions;
Template.ParameterControl = ParameterControl;
Template.ParameterDateTimePickerControl = ParameterDateTimePickerControl;
Template.ParameterDeclaration = ParameterDeclaration;
Template.ParameterDropDownControl = ParameterDropDownControl;
Template.ParameterListControl = ParameterListControl;
Template.ParameterSelectableValues = ParameterSelectableValues;
Template.ParameterSliderControl = ParameterSliderControl;
Template.ParameterTextAreaControl = ParameterTextAreaControl;
Template.ParameterTextFieldControl = ParameterTextFieldControl;
Template.PercentVisibleRange = PercentVisibleRange;
Template.PercentageDisplayFormatConfiguration = PercentageDisplayFormatConfiguration;
Template.PercentileAggregation = PercentileAggregation;
Template.PeriodOverPeriodComputation = PeriodOverPeriodComputation;
Template.PeriodToDateComputation = PeriodToDateComputation;
Template.PieChartAggregatedFieldWells = PieChartAggregatedFieldWells;
Template.PieChartConfiguration = PieChartConfiguration;
Template.PieChartFieldWells = PieChartFieldWells;
Template.PieChartSortConfiguration = PieChartSortConfiguration;
Template.PieChartVisual = PieChartVisual;
Template.PivotFieldSortOptions = PivotFieldSortOptions;
Template.PivotTableAggregatedFieldWells = PivotTableAggregatedFieldWells;
Template.PivotTableCellConditionalFormatting = PivotTableCellConditionalFormatting;
Template.PivotTableConditionalFormatting = PivotTableConditionalFormatting;
Template.PivotTableConditionalFormattingOption = PivotTableConditionalFormattingOption;
Template.PivotTableConditionalFormattingScope = PivotTableConditionalFormattingScope;
Template.PivotTableConfiguration = PivotTableConfiguration;
Template.PivotTableDataPathOption = PivotTableDataPathOption;
Template.PivotTableFieldCollapseStateOption = PivotTableFieldCollapseStateOption;
Template.PivotTableFieldCollapseStateTarget = PivotTableFieldCollapseStateTarget;
Template.PivotTableFieldOption = PivotTableFieldOption;
Template.PivotTableFieldOptions = PivotTableFieldOptions;
Template.PivotTableFieldSubtotalOptions = PivotTableFieldSubtotalOptions;
Template.PivotTableFieldWells = PivotTableFieldWells;
Template.PivotTableOptions = PivotTableOptions;
Template.PivotTablePaginatedReportOptions = PivotTablePaginatedReportOptions;
Template.PivotTableRowsLabelOptions = PivotTableRowsLabelOptions;
Template.PivotTableSortBy = PivotTableSortBy;
Template.PivotTableSortConfiguration = PivotTableSortConfiguration;
Template.PivotTableTotalOptions = PivotTableTotalOptions;
Template.PivotTableVisual = PivotTableVisual;
Template.PivotTotalOptions = PivotTotalOptions;
Template.PredefinedHierarchy = PredefinedHierarchy;
Template.ProgressBarOptions = ProgressBarOptions;
Template.RadarChartAggregatedFieldWells = RadarChartAggregatedFieldWells;
Template.RadarChartAreaStyleSettings = RadarChartAreaStyleSettings;
Template.RadarChartConfiguration = RadarChartConfiguration;
Template.RadarChartFieldWells = RadarChartFieldWells;
Template.RadarChartSeriesSettings = RadarChartSeriesSettings;
Template.RadarChartSortConfiguration = RadarChartSortConfiguration;
Template.RadarChartVisual = RadarChartVisual;
Template.RangeEndsLabelType = RangeEndsLabelType;
Template.ReferenceLine = ReferenceLine;
Template.ReferenceLineCustomLabelConfiguration = ReferenceLineCustomLabelConfiguration;
Template.ReferenceLineDataConfiguration = ReferenceLineDataConfiguration;
Template.ReferenceLineDynamicDataConfiguration = ReferenceLineDynamicDataConfiguration;
Template.ReferenceLineLabelConfiguration = ReferenceLineLabelConfiguration;
Template.ReferenceLineStaticDataConfiguration = ReferenceLineStaticDataConfiguration;
Template.ReferenceLineStyleConfiguration = ReferenceLineStyleConfiguration;
Template.ReferenceLineValueLabelConfiguration = ReferenceLineValueLabelConfiguration;
Template.RelativeDateTimeControlDisplayOptions = RelativeDateTimeControlDisplayOptions;
Template.RelativeDatesFilter = RelativeDatesFilter;
Template.ResourcePermission = ResourcePermission;
Template.RollingDateConfiguration = RollingDateConfiguration;
Template.RowAlternateColorOptions = RowAlternateColorOptions;
Template.SameSheetTargetVisualConfiguration = SameSheetTargetVisualConfiguration;
Template.SankeyDiagramAggregatedFieldWells = SankeyDiagramAggregatedFieldWells;
Template.SankeyDiagramChartConfiguration = SankeyDiagramChartConfiguration;
Template.SankeyDiagramFieldWells = SankeyDiagramFieldWells;
Template.SankeyDiagramSortConfiguration = SankeyDiagramSortConfiguration;
Template.SankeyDiagramVisual = SankeyDiagramVisual;
Template.ScatterPlotCategoricallyAggregatedFieldWells = ScatterPlotCategoricallyAggregatedFieldWells;
Template.ScatterPlotConfiguration = ScatterPlotConfiguration;
Template.ScatterPlotFieldWells = ScatterPlotFieldWells;
Template.ScatterPlotUnaggregatedFieldWells = ScatterPlotUnaggregatedFieldWells;
Template.ScatterPlotVisual = ScatterPlotVisual;
Template.ScrollBarOptions = ScrollBarOptions;
Template.SecondaryValueOptions = SecondaryValueOptions;
Template.SectionAfterPageBreak = SectionAfterPageBreak;
Template.SectionBasedLayoutCanvasSizeOptions = SectionBasedLayoutCanvasSizeOptions;
Template.SectionBasedLayoutConfiguration = SectionBasedLayoutConfiguration;
Template.SectionBasedLayoutPaperCanvasSizeOptions = SectionBasedLayoutPaperCanvasSizeOptions;
Template.SectionLayoutConfiguration = SectionLayoutConfiguration;
Template.SectionPageBreakConfiguration = SectionPageBreakConfiguration;
Template.SectionStyle = SectionStyle;
Template.SelectedSheetsFilterScopeConfiguration = SelectedSheetsFilterScopeConfiguration;
Template.SeriesItem = SeriesItem;
Template.SetParameterValueConfiguration = SetParameterValueConfiguration;
Template.ShapeConditionalFormat = ShapeConditionalFormat;
Template.Sheet = Sheet;
Template.SheetControlInfoIconLabelOptions = SheetControlInfoIconLabelOptions;
Template.SheetControlLayout = SheetControlLayout;
Template.SheetControlLayoutConfiguration = SheetControlLayoutConfiguration;
Template.SheetDefinition = SheetDefinition;
Template.SheetElementConfigurationOverrides = SheetElementConfigurationOverrides;
Template.SheetElementRenderingRule = SheetElementRenderingRule;
Template.SheetTextBox = SheetTextBox;
Template.SheetVisualScopingConfiguration = SheetVisualScopingConfiguration;
Template.ShortFormatText = ShortFormatText;
Template.SimpleClusterMarker = SimpleClusterMarker;
Template.SliderControlDisplayOptions = SliderControlDisplayOptions;
Template.SmallMultiplesAxisProperties = SmallMultiplesAxisProperties;
Template.SmallMultiplesOptions = SmallMultiplesOptions;
Template.Spacing = Spacing;
Template.StringDefaultValues = StringDefaultValues;
Template.StringFormatConfiguration = StringFormatConfiguration;
Template.StringParameterDeclaration = StringParameterDeclaration;
Template.StringValueWhenUnsetConfiguration = StringValueWhenUnsetConfiguration;
Template.SubtotalOptions = SubtotalOptions;
Template.TableAggregatedFieldWells = TableAggregatedFieldWells;
Template.TableBorderOptions = TableBorderOptions;
Template.TableCellConditionalFormatting = TableCellConditionalFormatting;
Template.TableCellImageSizingConfiguration = TableCellImageSizingConfiguration;
Template.TableCellStyle = TableCellStyle;
Template.TableConditionalFormatting = TableConditionalFormatting;
Template.TableConditionalFormattingOption = TableConditionalFormattingOption;
Template.TableConfiguration = TableConfiguration;
Template.TableFieldCustomIconContent = TableFieldCustomIconContent;
Template.TableFieldCustomTextContent = TableFieldCustomTextContent;
Template.TableFieldImageConfiguration = TableFieldImageConfiguration;
Template.TableFieldLinkConfiguration = TableFieldLinkConfiguration;
Template.TableFieldLinkContentConfiguration = TableFieldLinkContentConfiguration;
Template.TableFieldOption = TableFieldOption;
Template.TableFieldOptions = TableFieldOptions;
Template.TableFieldURLConfiguration = TableFieldURLConfiguration;
Template.TableFieldWells = TableFieldWells;
Template.TableInlineVisualization = TableInlineVisualization;
Template.TableOptions = TableOptions;
Template.TablePaginatedReportOptions = TablePaginatedReportOptions;
Template.TablePinnedFieldOptions = TablePinnedFieldOptions;
Template.TableRowConditionalFormatting = TableRowConditionalFormatting;
Template.TableSideBorderOptions = TableSideBorderOptions;
Template.TableSortConfiguration = TableSortConfiguration;
Template.TableStyleTarget = TableStyleTarget;
Template.TableUnaggregatedFieldWells = TableUnaggregatedFieldWells;
Template.TableVisual = TableVisual;
Template.TemplateError = TemplateError;
Template.TemplateSourceAnalysis = TemplateSourceAnalysis;
Template.TemplateSourceEntity = TemplateSourceEntity;
Template.TemplateSourceTemplate = TemplateSourceTemplate;
Template.TemplateVersion = TemplateVersion;
Template.TemplateVersionDefinition = TemplateVersionDefinition;
Template.TextAreaControlDisplayOptions = TextAreaControlDisplayOptions;
Template.TextConditionalFormat = TextConditionalFormat;
Template.TextControlPlaceholderOptions = TextControlPlaceholderOptions;
Template.TextFieldControlDisplayOptions = TextFieldControlDisplayOptions;
Template.ThousandSeparatorOptions = ThousandSeparatorOptions;
Template.TimeBasedForecastProperties = TimeBasedForecastProperties;
Template.TimeEqualityFilter = TimeEqualityFilter;
Template.TimeRangeDrillDownFilter = TimeRangeDrillDownFilter;
Template.TimeRangeFilter = TimeRangeFilter;
Template.TimeRangeFilterValue = TimeRangeFilterValue;
Template.TooltipItem = TooltipItem;
Template.TooltipOptions = TooltipOptions;
Template.TopBottomFilter = TopBottomFilter;
Template.TopBottomMoversComputation = TopBottomMoversComputation;
Template.TopBottomRankedComputation = TopBottomRankedComputation;
Template.TotalAggregationComputation = TotalAggregationComputation;
Template.TotalAggregationFunction = TotalAggregationFunction;
Template.TotalAggregationOption = TotalAggregationOption;
Template.TotalOptions = TotalOptions;
Template.TreeMapAggregatedFieldWells = TreeMapAggregatedFieldWells;
Template.TreeMapConfiguration = TreeMapConfiguration;
Template.TreeMapFieldWells = TreeMapFieldWells;
Template.TreeMapSortConfiguration = TreeMapSortConfiguration;
Template.TreeMapVisual = TreeMapVisual;
Template.TrendArrowOptions = TrendArrowOptions;
Template.UnaggregatedField = UnaggregatedField;
Template.UniqueValuesComputation = UniqueValuesComputation;
Template.ValidationStrategy = ValidationStrategy;
Template.VisibleRangeOptions = VisibleRangeOptions;
Template.Visual = Visual;
Template.VisualCustomAction = VisualCustomAction;
Template.VisualCustomActionOperation = VisualCustomActionOperation;
Template.VisualPalette = VisualPalette;
Template.VisualSubtitleLabelOptions = VisualSubtitleLabelOptions;
Template.VisualTitleLabelOptions = VisualTitleLabelOptions;
Template.WaterfallChartAggregatedFieldWells = WaterfallChartAggregatedFieldWells;
Template.WaterfallChartConfiguration = WaterfallChartConfiguration;
Template.WaterfallChartFieldWells = WaterfallChartFieldWells;
Template.WaterfallChartOptions = WaterfallChartOptions;
Template.WaterfallChartSortConfiguration = WaterfallChartSortConfiguration;
Template.WaterfallVisual = WaterfallVisual;
Template.WhatIfPointScenario = WhatIfPointScenario;
Template.WhatIfRangeScenario = WhatIfRangeScenario;
Template.WordCloudAggregatedFieldWells = WordCloudAggregatedFieldWells;
Template.WordCloudChartConfiguration = WordCloudChartConfiguration;
Template.WordCloudFieldWells = WordCloudFieldWells;
Template.WordCloudOptions = WordCloudOptions;
Template.WordCloudSortConfiguration = WordCloudSortConfiguration;
Template.WordCloudVisual = WordCloudVisual;
