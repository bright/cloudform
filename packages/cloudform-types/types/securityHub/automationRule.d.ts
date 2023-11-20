import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutomationRulesAction {
    Type: Value<string>;
    FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate;
    constructor(properties: AutomationRulesAction);
}
export declare class AutomationRulesFindingFieldsUpdate {
    Types?: List<Value<string>>;
    Confidence?: Value<number>;
    Note?: NoteUpdate;
    VerificationState?: Value<string>;
    RelatedFindings?: List<RelatedFinding>;
    Workflow?: WorkflowUpdate;
    Severity?: SeverityUpdate;
    UserDefinedFields?: {
        [key: string]: Value<string>;
    };
    Criticality?: Value<number>;
    constructor(properties: AutomationRulesFindingFieldsUpdate);
}
export declare class AutomationRulesFindingFilters {
    ProductArn?: List<StringFilter>;
    SourceUrl?: List<StringFilter>;
    ResourceDetailsOther?: List<MapFilter>;
    Description?: List<StringFilter>;
    ProductName?: List<StringFilter>;
    ResourceTags?: List<MapFilter>;
    FirstObservedAt?: List<DateFilter>;
    CreatedAt?: List<DateFilter>;
    NoteText?: List<StringFilter>;
    LastObservedAt?: List<DateFilter>;
    UserDefinedFields?: List<MapFilter>;
    NoteUpdatedAt?: List<DateFilter>;
    ComplianceSecurityControlId?: List<StringFilter>;
    CompanyName?: List<StringFilter>;
    ResourceRegion?: List<StringFilter>;
    NoteUpdatedBy?: List<StringFilter>;
    Confidence?: List<NumberFilter>;
    ResourcePartition?: List<StringFilter>;
    VerificationState?: List<StringFilter>;
    Criticality?: List<NumberFilter>;
    SeverityLabel?: List<StringFilter>;
    RelatedFindingsProductArn?: List<StringFilter>;
    ComplianceStatus?: List<StringFilter>;
    GeneratorId?: List<StringFilter>;
    RecordState?: List<StringFilter>;
    Title?: List<StringFilter>;
    ResourceType?: List<StringFilter>;
    ComplianceAssociatedStandardsId?: List<StringFilter>;
    UpdatedAt?: List<DateFilter>;
    RelatedFindingsId?: List<StringFilter>;
    WorkflowStatus?: List<StringFilter>;
    Type?: List<StringFilter>;
    ResourceId?: List<StringFilter>;
    AwsAccountId?: List<StringFilter>;
    Id?: List<StringFilter>;
    constructor(properties: AutomationRulesFindingFilters);
}
export declare class DateFilter {
    DateRange?: DateRange;
    Start?: Value<string>;
    End?: Value<string>;
    constructor(properties: DateFilter);
}
export declare class DateRange {
    Value: Value<number>;
    Unit: Value<string>;
    constructor(properties: DateRange);
}
export declare class MapFilter {
    Comparison: Value<string>;
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: MapFilter);
}
export declare class NoteUpdate {
    UpdatedBy: {
        [key: string]: any;
    };
    Text: Value<string>;
    constructor(properties: NoteUpdate);
}
export declare class NumberFilter {
    Gte?: Value<number>;
    Eq?: Value<number>;
    Lte?: Value<number>;
    constructor(properties: NumberFilter);
}
export declare class RelatedFinding {
    ProductArn: Value<string>;
    Id: {
        [key: string]: any;
    };
    constructor(properties: RelatedFinding);
}
export declare class SeverityUpdate {
    Normalized?: Value<number>;
    Label?: Value<string>;
    Product?: Value<number>;
    constructor(properties: SeverityUpdate);
}
export declare class StringFilter {
    Comparison: Value<string>;
    Value: Value<string>;
    constructor(properties: StringFilter);
}
export declare class WorkflowUpdate {
    Status: Value<string>;
    constructor(properties: WorkflowUpdate);
}
export interface AutomationRuleProperties {
    Description?: Value<string>;
    Actions?: List<AutomationRulesAction>;
    IsTerminal?: Value<boolean>;
    RuleStatus?: Value<string>;
    Criteria?: AutomationRulesFindingFilters;
    RuleOrder?: Value<number>;
    RuleName?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class AutomationRule extends ResourceBase<AutomationRuleProperties> {
    static AutomationRulesAction: typeof AutomationRulesAction;
    static AutomationRulesFindingFieldsUpdate: typeof AutomationRulesFindingFieldsUpdate;
    static AutomationRulesFindingFilters: typeof AutomationRulesFindingFilters;
    static DateFilter: typeof DateFilter;
    static DateRange: typeof DateRange;
    static MapFilter: typeof MapFilter;
    static NoteUpdate: typeof NoteUpdate;
    static NumberFilter: typeof NumberFilter;
    static RelatedFinding: typeof RelatedFinding;
    static SeverityUpdate: typeof SeverityUpdate;
    static StringFilter: typeof StringFilter;
    static WorkflowUpdate: typeof WorkflowUpdate;
    constructor(properties?: AutomationRuleProperties);
}
