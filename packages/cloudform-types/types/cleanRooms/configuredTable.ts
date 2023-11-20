/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AggregateColumn {
    Function!: Value<string>
    ColumnNames!: List<Value<string>>

    constructor(properties: AggregateColumn) {
        Object.assign(this, properties)
    }
}

export class AggregationConstraint {
    ColumnName!: Value<string>
    Minimum!: Value<number>
    Type!: Value<string>

    constructor(properties: AggregationConstraint) {
        Object.assign(this, properties)
    }
}

export class AnalysisRule {
    Policy!: ConfiguredTableAnalysisRulePolicy
    Type!: Value<string>

    constructor(properties: AnalysisRule) {
        Object.assign(this, properties)
    }
}

export class AnalysisRuleAggregation {
    AllowedJoinOperators?: List<Value<string>>
    ScalarFunctions!: List<Value<string>>
    OutputConstraints!: List<AggregationConstraint>
    DimensionColumns!: List<Value<string>>
    JoinColumns!: List<Value<string>>
    JoinRequired?: Value<string>
    AggregateColumns!: List<AggregateColumn>

    constructor(properties: AnalysisRuleAggregation) {
        Object.assign(this, properties)
    }
}

export class AnalysisRuleCustom {
    AllowedAnalysisProviders?: List<Value<string>>
    AllowedAnalyses!: List<Value<string>>

    constructor(properties: AnalysisRuleCustom) {
        Object.assign(this, properties)
    }
}

export class AnalysisRuleList {
    AllowedJoinOperators?: List<Value<string>>
    ListColumns!: List<Value<string>>
    JoinColumns!: List<Value<string>>

    constructor(properties: AnalysisRuleList) {
        Object.assign(this, properties)
    }
}

export class ConfiguredTableAnalysisRulePolicy {
    V1!: ConfiguredTableAnalysisRulePolicyV1

    constructor(properties: ConfiguredTableAnalysisRulePolicy) {
        Object.assign(this, properties)
    }
}

export class ConfiguredTableAnalysisRulePolicyV1 {
    Aggregation?: AnalysisRuleAggregation
    List?: AnalysisRuleList
    Custom?: AnalysisRuleCustom

    constructor(properties: ConfiguredTableAnalysisRulePolicyV1) {
        Object.assign(this, properties)
    }
}

export class GlueTableReference {
    TableName!: Value<string>
    DatabaseName!: Value<string>

    constructor(properties: GlueTableReference) {
        Object.assign(this, properties)
    }
}

export class TableReference {
    Glue!: GlueTableReference

    constructor(properties: TableReference) {
        Object.assign(this, properties)
    }
}

export interface ConfiguredTableProperties {
    AnalysisMethod: Value<string>
    TableReference: TableReference
    Description?: Value<string>
    AnalysisRules?: List<AnalysisRule>
    AllowedColumns: List<Value<string>>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class ConfiguredTable extends ResourceBase<ConfiguredTableProperties> {
    static AggregateColumn = AggregateColumn
    static AggregationConstraint = AggregationConstraint
    static AnalysisRule = AnalysisRule
    static AnalysisRuleAggregation = AnalysisRuleAggregation
    static AnalysisRuleCustom = AnalysisRuleCustom
    static AnalysisRuleList = AnalysisRuleList
    static ConfiguredTableAnalysisRulePolicy = ConfiguredTableAnalysisRulePolicy
    static ConfiguredTableAnalysisRulePolicyV1 = ConfiguredTableAnalysisRulePolicyV1
    static GlueTableReference = GlueTableReference
    static TableReference = TableReference

    constructor(properties: ConfiguredTableProperties) {
        super('AWS::CleanRooms::ConfiguredTable', properties)
    }
}
