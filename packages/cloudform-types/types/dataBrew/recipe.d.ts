import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    Parameters?: RecipeParameters;
    Operation: Value<string>;
    constructor(properties: Action);
}
export declare class ConditionExpression {
    Condition: Value<string>;
    Value?: Value<string>;
    TargetColumn: Value<string>;
    constructor(properties: ConditionExpression);
}
export declare class DataCatalogInputDefinition {
    TableName?: Value<string>;
    TempDirectory?: S3Location;
    DatabaseName?: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: DataCatalogInputDefinition);
}
export declare class Input {
    S3InputDefinition?: S3Location;
    DataCatalogInputDefinition?: DataCatalogInputDefinition;
    constructor(properties: Input);
}
export declare class RecipeParameters {
    IgnoreCase?: Value<string>;
    PatternOptions?: Value<string>;
    Count?: Value<string>;
    OrderByColumn?: Value<string>;
    UpperBound?: Value<string>;
    JoinKeys?: Value<string>;
    RemoveLeadingAndTrailingPunctuation?: Value<string>;
    StepIndex?: Value<string>;
    GroupByAggFunctionOptions?: Value<string>;
    Position?: Value<string>;
    StopWordsMode?: Value<string>;
    SourceColumn?: Value<string>;
    CustomCharacters?: Value<string>;
    TimeZone?: Value<string>;
    RemoveLeadingAndTrailingQuotes?: Value<string>;
    SourceColumn2?: Value<string>;
    CollapseConsecutiveWhitespace?: Value<string>;
    NumRowsAfter?: Value<string>;
    RemoveLetters?: Value<string>;
    SourceColumn1?: Value<string>;
    UseNewDataFrame?: Value<string>;
    Interval?: Value<string>;
    LowerBound?: Value<string>;
    TokenizerPattern?: Value<string>;
    LeftColumns?: Value<string>;
    CharsToRemove?: Value<string>;
    Value1?: Value<string>;
    DeleteOtherRows?: Value<string>;
    Value2?: Value<string>;
    CategoryMap?: Value<string>;
    StartPattern?: Value<string>;
    StartPosition?: Value<string>;
    SheetIndexes?: List<Value<number>>;
    TargetIndex?: Value<string>;
    RemoveSourceColumn?: Value<string>;
    DateTimeParameters?: Value<string>;
    EndValue?: Value<string>;
    RemoveCustomCharacters?: Value<string>;
    EndPosition?: Value<string>;
    Pattern?: Value<string>;
    Delimiter?: Value<string>;
    RemoveSpecialCharacters?: Value<string>;
    RemoveAllQuotes?: Value<string>;
    EndPattern?: Value<string>;
    StartColumnIndex?: Value<string>;
    ModeType?: Value<string>;
    SecondaryInputs?: List<SecondaryInput>;
    SampleType?: Value<string>;
    DateTimeFormat?: Value<string>;
    Other?: Value<string>;
    CaseStatement?: Value<string>;
    FalseString?: Value<string>;
    RemoveAllPunctuation?: Value<string>;
    CustomStopWords?: Value<string>;
    MapType?: Value<string>;
    ColumnRange?: Value<string>;
    CustomValue?: Value<string>;
    Input?: Input;
    StepCount?: Value<string>;
    TargetDateFormat?: Value<string>;
    SecondInput?: Value<string>;
    GroupByColumns?: Value<string>;
    NumRowsBefore?: Value<string>;
    IsText?: Value<string>;
    TargetColumn?: Value<string>;
    RemoveNumbers?: Value<string>;
    Period?: Value<string>;
    NumRows?: Value<string>;
    RightColumns?: Value<string>;
    StemmingMode?: Value<string>;
    Units?: Value<string>;
    SampleSize?: Value<string>;
    IncludeInSplit?: Value<string>;
    AggregateFunction?: Value<string>;
    Value?: Value<string>;
    Exponent?: Value<string>;
    StartValue?: Value<string>;
    PatternOption2?: Value<string>;
    RemoveCustomValue?: Value<string>;
    PatternOption1?: Value<string>;
    MultiLine?: Value<boolean>;
    TrueString?: Value<string>;
    RemoveLeadingAndTrailingWhitespace?: Value<string>;
    HiddenColumns?: Value<string>;
    RemoveAllWhitespace?: Value<string>;
    ViewFrame?: Value<string>;
    ColumnDataType?: Value<string>;
    JoinType?: Value<string>;
    Base?: Value<string>;
    ValueColumn?: Value<string>;
    DatasetsColumns?: Value<string>;
    UdfLang?: Value<string>;
    TargetColumnNames?: Value<string>;
    DateAddValue?: Value<string>;
    ExpandContractions?: Value<string>;
    UnpivotColumn?: Value<string>;
    Strategy?: Value<string>;
    SheetNames?: List<Value<string>>;
    Limit?: Value<string>;
    OrderByColumns?: Value<string>;
    SourceColumns?: Value<string>;
    constructor(properties: RecipeParameters);
}
export declare class RecipeStep {
    Action: Action;
    ConditionExpressions?: List<ConditionExpression>;
    constructor(properties: RecipeStep);
}
export declare class S3Location {
    Bucket: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3Location);
}
export declare class SecondaryInput {
    S3InputDefinition?: S3Location;
    DataCatalogInputDefinition?: DataCatalogInputDefinition;
    constructor(properties: SecondaryInput);
}
export interface RecipeProperties {
    Steps: List<RecipeStep>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Recipe extends ResourceBase<RecipeProperties> {
    static Action: typeof Action;
    static ConditionExpression: typeof ConditionExpression;
    static DataCatalogInputDefinition: typeof DataCatalogInputDefinition;
    static Input: typeof Input;
    static RecipeParameters: typeof RecipeParameters;
    static RecipeStep: typeof RecipeStep;
    static S3Location: typeof S3Location;
    static SecondaryInput: typeof SecondaryInput;
    constructor(properties: RecipeProperties);
}
