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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    Parameters?: RecipeParameters
    Operation!: Value<string>

    constructor(properties: Action) {
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
    TableName?: Value<string>
    TempDirectory?: S3Location
    DatabaseName?: Value<string>
    CatalogId?: Value<string>

    constructor(properties: DataCatalogInputDefinition) {
        Object.assign(this, properties)
    }
}

export class Input {
    S3InputDefinition?: S3Location
    DataCatalogInputDefinition?: DataCatalogInputDefinition

    constructor(properties: Input) {
        Object.assign(this, properties)
    }
}

export class RecipeParameters {
    IgnoreCase?: Value<string>
    PatternOptions?: Value<string>
    Count?: Value<string>
    OrderByColumn?: Value<string>
    UpperBound?: Value<string>
    JoinKeys?: Value<string>
    RemoveLeadingAndTrailingPunctuation?: Value<string>
    StepIndex?: Value<string>
    GroupByAggFunctionOptions?: Value<string>
    Position?: Value<string>
    StopWordsMode?: Value<string>
    SourceColumn?: Value<string>
    CustomCharacters?: Value<string>
    TimeZone?: Value<string>
    RemoveLeadingAndTrailingQuotes?: Value<string>
    SourceColumn2?: Value<string>
    CollapseConsecutiveWhitespace?: Value<string>
    NumRowsAfter?: Value<string>
    RemoveLetters?: Value<string>
    SourceColumn1?: Value<string>
    UseNewDataFrame?: Value<string>
    Interval?: Value<string>
    LowerBound?: Value<string>
    TokenizerPattern?: Value<string>
    LeftColumns?: Value<string>
    CharsToRemove?: Value<string>
    Value1?: Value<string>
    DeleteOtherRows?: Value<string>
    Value2?: Value<string>
    CategoryMap?: Value<string>
    StartPattern?: Value<string>
    StartPosition?: Value<string>
    SheetIndexes?: List<Value<number>>
    TargetIndex?: Value<string>
    RemoveSourceColumn?: Value<string>
    DateTimeParameters?: Value<string>
    EndValue?: Value<string>
    RemoveCustomCharacters?: Value<string>
    EndPosition?: Value<string>
    Pattern?: Value<string>
    Delimiter?: Value<string>
    RemoveSpecialCharacters?: Value<string>
    RemoveAllQuotes?: Value<string>
    EndPattern?: Value<string>
    StartColumnIndex?: Value<string>
    ModeType?: Value<string>
    SecondaryInputs?: List<SecondaryInput>
    SampleType?: Value<string>
    DateTimeFormat?: Value<string>
    Other?: Value<string>
    CaseStatement?: Value<string>
    FalseString?: Value<string>
    RemoveAllPunctuation?: Value<string>
    CustomStopWords?: Value<string>
    MapType?: Value<string>
    ColumnRange?: Value<string>
    CustomValue?: Value<string>
    Input?: Input
    StepCount?: Value<string>
    TargetDateFormat?: Value<string>
    SecondInput?: Value<string>
    GroupByColumns?: Value<string>
    NumRowsBefore?: Value<string>
    IsText?: Value<string>
    TargetColumn?: Value<string>
    RemoveNumbers?: Value<string>
    Period?: Value<string>
    NumRows?: Value<string>
    RightColumns?: Value<string>
    StemmingMode?: Value<string>
    Units?: Value<string>
    SampleSize?: Value<string>
    IncludeInSplit?: Value<string>
    AggregateFunction?: Value<string>
    Value?: Value<string>
    Exponent?: Value<string>
    StartValue?: Value<string>
    PatternOption2?: Value<string>
    RemoveCustomValue?: Value<string>
    PatternOption1?: Value<string>
    MultiLine?: Value<boolean>
    TrueString?: Value<string>
    RemoveLeadingAndTrailingWhitespace?: Value<string>
    HiddenColumns?: Value<string>
    RemoveAllWhitespace?: Value<string>
    ViewFrame?: Value<string>
    ColumnDataType?: Value<string>
    JoinType?: Value<string>
    Base?: Value<string>
    ValueColumn?: Value<string>
    DatasetsColumns?: Value<string>
    UdfLang?: Value<string>
    TargetColumnNames?: Value<string>
    DateAddValue?: Value<string>
    ExpandContractions?: Value<string>
    UnpivotColumn?: Value<string>
    Strategy?: Value<string>
    SheetNames?: List<Value<string>>
    Limit?: Value<string>
    OrderByColumns?: Value<string>
    SourceColumns?: Value<string>

    constructor(properties: RecipeParameters) {
        Object.assign(this, properties)
    }
}

export class RecipeStep {
    Action!: Action
    ConditionExpressions?: List<ConditionExpression>

    constructor(properties: RecipeStep) {
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

export class SecondaryInput {
    S3InputDefinition?: S3Location
    DataCatalogInputDefinition?: DataCatalogInputDefinition

    constructor(properties: SecondaryInput) {
        Object.assign(this, properties)
    }
}

export interface RecipeProperties {
    Steps: List<RecipeStep>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Recipe extends ResourceBase<RecipeProperties> {
    static Action = Action
    static ConditionExpression = ConditionExpression
    static DataCatalogInputDefinition = DataCatalogInputDefinition
    static Input = Input
    static RecipeParameters = RecipeParameters
    static RecipeStep = RecipeStep
    static S3Location = S3Location
    static SecondaryInput = SecondaryInput

    constructor(properties: RecipeProperties) {
        super('AWS::DataBrew::Recipe', properties)
    }
}
