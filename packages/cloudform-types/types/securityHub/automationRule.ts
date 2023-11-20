/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class AutomationRulesAction {
    Type!: Value<string>
    FindingFieldsUpdate!: AutomationRulesFindingFieldsUpdate

    constructor(properties: AutomationRulesAction) {
        Object.assign(this, properties)
    }
}

export class AutomationRulesFindingFieldsUpdate {
    Types?: List<Value<string>>
    Confidence?: Value<number>
    Note?: NoteUpdate
    VerificationState?: Value<string>
    RelatedFindings?: List<RelatedFinding>
    Workflow?: WorkflowUpdate
    Severity?: SeverityUpdate
    UserDefinedFields?: {[key: string]: Value<string>}
    Criticality?: Value<number>

    constructor(properties: AutomationRulesFindingFieldsUpdate) {
        Object.assign(this, properties)
    }
}

export class AutomationRulesFindingFilters {
    ProductArn?: List<StringFilter>
    SourceUrl?: List<StringFilter>
    ResourceDetailsOther?: List<MapFilter>
    Description?: List<StringFilter>
    ProductName?: List<StringFilter>
    ResourceTags?: List<MapFilter>
    FirstObservedAt?: List<DateFilter>
    CreatedAt?: List<DateFilter>
    NoteText?: List<StringFilter>
    LastObservedAt?: List<DateFilter>
    UserDefinedFields?: List<MapFilter>
    NoteUpdatedAt?: List<DateFilter>
    ComplianceSecurityControlId?: List<StringFilter>
    CompanyName?: List<StringFilter>
    ResourceRegion?: List<StringFilter>
    NoteUpdatedBy?: List<StringFilter>
    Confidence?: List<NumberFilter>
    ResourcePartition?: List<StringFilter>
    VerificationState?: List<StringFilter>
    Criticality?: List<NumberFilter>
    SeverityLabel?: List<StringFilter>
    RelatedFindingsProductArn?: List<StringFilter>
    ComplianceStatus?: List<StringFilter>
    GeneratorId?: List<StringFilter>
    RecordState?: List<StringFilter>
    Title?: List<StringFilter>
    ResourceType?: List<StringFilter>
    ComplianceAssociatedStandardsId?: List<StringFilter>
    UpdatedAt?: List<DateFilter>
    RelatedFindingsId?: List<StringFilter>
    WorkflowStatus?: List<StringFilter>
    Type?: List<StringFilter>
    ResourceId?: List<StringFilter>
    AwsAccountId?: List<StringFilter>
    Id?: List<StringFilter>

    constructor(properties: AutomationRulesFindingFilters) {
        Object.assign(this, properties)
    }
}

export class DateFilter {
    DateRange?: DateRange
    Start?: Value<string>
    End?: Value<string>

    constructor(properties: DateFilter) {
        Object.assign(this, properties)
    }
}

export class DateRange {
    Value!: Value<number>
    Unit!: Value<string>

    constructor(properties: DateRange) {
        Object.assign(this, properties)
    }
}

export class MapFilter {
    Comparison!: Value<string>
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: MapFilter) {
        Object.assign(this, properties)
    }
}

export class NoteUpdate {
    UpdatedBy!: {[key: string]: any}
    Text!: Value<string>

    constructor(properties: NoteUpdate) {
        Object.assign(this, properties)
    }
}

export class NumberFilter {
    Gte?: Value<number>
    Eq?: Value<number>
    Lte?: Value<number>

    constructor(properties: NumberFilter) {
        Object.assign(this, properties)
    }
}

export class RelatedFinding {
    ProductArn!: Value<string>
    Id!: {[key: string]: any}

    constructor(properties: RelatedFinding) {
        Object.assign(this, properties)
    }
}

export class SeverityUpdate {
    Normalized?: Value<number>
    Label?: Value<string>
    Product?: Value<number>

    constructor(properties: SeverityUpdate) {
        Object.assign(this, properties)
    }
}

export class StringFilter {
    Comparison!: Value<string>
    Value!: Value<string>

    constructor(properties: StringFilter) {
        Object.assign(this, properties)
    }
}

export class WorkflowUpdate {
    Status!: Value<string>

    constructor(properties: WorkflowUpdate) {
        Object.assign(this, properties)
    }
}

export interface AutomationRuleProperties {
    Description?: Value<string>
    Actions?: List<AutomationRulesAction>
    IsTerminal?: Value<boolean>
    RuleStatus?: Value<string>
    Criteria?: AutomationRulesFindingFilters
    RuleOrder?: Value<number>
    RuleName?: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class AutomationRule extends ResourceBase<AutomationRuleProperties> {
    static AutomationRulesAction = AutomationRulesAction
    static AutomationRulesFindingFieldsUpdate = AutomationRulesFindingFieldsUpdate
    static AutomationRulesFindingFilters = AutomationRulesFindingFilters
    static DateFilter = DateFilter
    static DateRange = DateRange
    static MapFilter = MapFilter
    static NoteUpdate = NoteUpdate
    static NumberFilter = NumberFilter
    static RelatedFinding = RelatedFinding
    static SeverityUpdate = SeverityUpdate
    static StringFilter = StringFilter
    static WorkflowUpdate = WorkflowUpdate

    constructor(properties?: AutomationRuleProperties) {
        super('AWS::SecurityHub::AutomationRule', properties || {})
    }
}
