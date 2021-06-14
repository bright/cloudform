/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RecipeStep {
    Action!: Action
    ConditionExpressions?: List<ConditionExpression>

    constructor(properties: RecipeStep) {
        Object.assign(this, properties)
    }
}

export class SecondaryInput {
    S3InputDefinition?: S3Location
    DataCatalogInputDefinition?: DataCatalogInputDefinition

    constructor(properties: SecondaryInput) {
        Object.assign(this, properties)
    }
}

export class Action {
    Operation!: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class RecipeParameters {
    AggregateFunction?: Value<string>
    Base?: Value<string>
    CaseStatement?: Value<string>
    CategoryMap?: Value<string>
    CharsToRemove?: Value<string>
    CollapseConsecutiveWhitespace?: Value<string>
    ColumnDataType?: Value<string>
    ColumnRange?: Value<string>
    Count?: Value<string>
    CustomCharacters?: Value<string>
    CustomStopWords?: Value<string>
    CustomValue?: Value<string>
    DatasetsColumns?: Value<string>
    DateAddValue?: Value<string>
    DateTimeFormat?: Value<string>
    DateTimeParameters?: Value<string>
    DeleteOtherRows?: Value<string>
    Delimiter?: Value<string>
    EndPattern?: Value<string>
    EndPosition?: Value<string>
    EndValue?: Value<string>
    ExpandContractions?: Value<string>
    Exponent?: Value<string>
    FalseString?: Value<string>
    GroupByAggFunctionOptions?: Value<string>
    GroupByColumns?: Value<string>
    HiddenColumns?: Value<string>
    IgnoreCase?: Value<string>
    IncludeInSplit?: Value<string>
    Interval?: Value<string>
    IsText?: Value<string>
    JoinKeys?: Value<string>
    JoinType?: Value<string>
    LeftColumns?: Value<string>
    Limit?: Value<string>
    LowerBound?: Value<string>
    MapType?: Value<string>
    ModeType?: Value<string>
    MultiLine?: Value<boolean>
    NumRows?: Value<string>
    NumRowsAfter?: Value<string>
    NumRowsBefore?: Value<string>
    OrderByColumn?: Value<string>
    OrderByColumns?: Value<string>
    Other?: Value<string>
    Pattern?: Value<string>
    PatternOption1?: Value<string>
    PatternOption2?: Value<string>
    PatternOptions?: Value<string>
    Period?: Value<string>
    Position?: Value<string>
    RemoveAllPunctuation?: Value<string>
    RemoveAllQuotes?: Value<string>
    RemoveAllWhitespace?: Value<string>
    RemoveCustomCharacters?: Value<string>
    RemoveCustomValue?: Value<string>
    RemoveLeadingAndTrailingPunctuation?: Value<string>
    RemoveLeadingAndTrailingQuotes?: Value<string>
    RemoveLeadingAndTrailingWhitespace?: Value<string>
    RemoveLetters?: Value<string>
    RemoveNumbers?: Value<string>
    RemoveSourceColumn?: Value<string>
    RemoveSpecialCharacters?: Value<string>
    RightColumns?: Value<string>
    SampleSize?: Value<string>
    SampleType?: Value<string>
    SecondInput?: Value<string>
    SecondaryInputs?: List<SecondaryInput>
    SourceColumn?: Value<string>
    SourceColumn1?: Value<string>
    SourceColumn2?: Value<string>
    SourceColumns?: Value<string>
    StartColumnIndex?: Value<string>
    StartPattern?: Value<string>
    StartPosition?: Value<string>
    StartValue?: Value<string>
    StemmingMode?: Value<string>
    StepCount?: Value<string>
    StepIndex?: Value<string>
    StopWordsMode?: Value<string>
    Strategy?: Value<string>
    SheetNames?: List<Value<string>>
    SheetIndexes?: List<Value<number>>
    TargetColumn?: Value<string>
    TargetColumnNames?: Value<string>
    TargetDateFormat?: Value<string>
    TargetIndex?: Value<string>
    TimeZone?: Value<string>
    TokenizerPattern?: Value<string>
    TrueString?: Value<string>
    UdfLang?: Value<string>
    Units?: Value<string>
    UnpivotColumn?: Value<string>
    UpperBound?: Value<string>
    UseNewDataFrame?: Value<string>
    Value?: Value<string>
    Value1?: Value<string>
    Value2?: Value<string>
    ValueColumn?: Value<string>
    ViewFrame?: Value<string>
    Input?: {[key: string]: any}

    constructor(properties: RecipeParameters) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    Key?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class ConditionExpression {
    Condition!: Value<string>
    Value?: Value<string>
    TargetColumn!: Value<string>

    constructor(properties: ConditionExpression) {
        Object.assign(this, properties)
    }
}

export class DataCatalogInputDefinition {
    CatalogId?: Value<string>
    DatabaseName?: Value<string>
    TableName?: Value<string>
    TempDirectory?: S3Location

    constructor(properties: DataCatalogInputDefinition) {
        Object.assign(this, properties)
    }
}

export interface RecipeProperties {
    Description?: Value<string>
    Name: Value<string>
    Steps: List<RecipeStep>
    Tags?: List<ResourceTag>
}

export default class Recipe extends ResourceBase<RecipeProperties> {
    static RecipeStep = RecipeStep
    static SecondaryInput = SecondaryInput
    static Action = Action
    static RecipeParameters = RecipeParameters
    static S3Location = S3Location
    static ConditionExpression = ConditionExpression
    static DataCatalogInputDefinition = DataCatalogInputDefinition

    constructor(properties: RecipeProperties) {
        super('AWS::DataBrew::Recipe', properties)
    }
}
