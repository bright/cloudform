import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AggregateColumn {
    Function: Value<string>;
    ColumnNames: List<Value<string>>;
    constructor(properties: AggregateColumn);
}
export declare class AggregationConstraint {
    ColumnName: Value<string>;
    Minimum: Value<number>;
    Type: Value<string>;
    constructor(properties: AggregationConstraint);
}
export declare class AnalysisRule {
    Policy: ConfiguredTableAnalysisRulePolicy;
    Type: Value<string>;
    constructor(properties: AnalysisRule);
}
export declare class AnalysisRuleAggregation {
    AllowedJoinOperators?: List<Value<string>>;
    ScalarFunctions: List<Value<string>>;
    OutputConstraints: List<AggregationConstraint>;
    DimensionColumns: List<Value<string>>;
    JoinColumns: List<Value<string>>;
    JoinRequired?: Value<string>;
    AggregateColumns: List<AggregateColumn>;
    constructor(properties: AnalysisRuleAggregation);
}
export declare class AnalysisRuleCustom {
    AllowedAnalysisProviders?: List<Value<string>>;
    AllowedAnalyses: List<Value<string>>;
    constructor(properties: AnalysisRuleCustom);
}
export declare class AnalysisRuleList {
    AllowedJoinOperators?: List<Value<string>>;
    ListColumns: List<Value<string>>;
    JoinColumns: List<Value<string>>;
    constructor(properties: AnalysisRuleList);
}
export declare class ConfiguredTableAnalysisRulePolicy {
    V1: ConfiguredTableAnalysisRulePolicyV1;
    constructor(properties: ConfiguredTableAnalysisRulePolicy);
}
export declare class ConfiguredTableAnalysisRulePolicyV1 {
    Aggregation?: AnalysisRuleAggregation;
    List?: AnalysisRuleList;
    Custom?: AnalysisRuleCustom;
    constructor(properties: ConfiguredTableAnalysisRulePolicyV1);
}
export declare class GlueTableReference {
    TableName: Value<string>;
    DatabaseName: Value<string>;
    constructor(properties: GlueTableReference);
}
export declare class TableReference {
    Glue: GlueTableReference;
    constructor(properties: TableReference);
}
export interface ConfiguredTableProperties {
    AnalysisMethod: Value<string>;
    TableReference: TableReference;
    Description?: Value<string>;
    AnalysisRules?: List<AnalysisRule>;
    AllowedColumns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ConfiguredTable extends ResourceBase<ConfiguredTableProperties> {
    static AggregateColumn: typeof AggregateColumn;
    static AggregationConstraint: typeof AggregationConstraint;
    static AnalysisRule: typeof AnalysisRule;
    static AnalysisRuleAggregation: typeof AnalysisRuleAggregation;
    static AnalysisRuleCustom: typeof AnalysisRuleCustom;
    static AnalysisRuleList: typeof AnalysisRuleList;
    static ConfiguredTableAnalysisRulePolicy: typeof ConfiguredTableAnalysisRulePolicy;
    static ConfiguredTableAnalysisRulePolicyV1: typeof ConfiguredTableAnalysisRulePolicyV1;
    static GlueTableReference: typeof GlueTableReference;
    static TableReference: typeof TableReference;
    constructor(properties: ConfiguredTableProperties);
}
