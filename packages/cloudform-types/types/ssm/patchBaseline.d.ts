import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PatchFilter {
    Values?: List<Value<string>>;
    Key?: Value<string>;
    constructor(properties: PatchFilter);
}
export declare class PatchFilterGroup {
    PatchFilters?: List<PatchFilter>;
    constructor(properties: PatchFilterGroup);
}
export declare class PatchSource {
    Products?: List<Value<string>>;
    Configuration?: Value<string>;
    Name?: Value<string>;
    constructor(properties: PatchSource);
}
export declare type PatchStringDate = Value<string>;
export declare class Rule {
    ApproveUntilDate?: PatchStringDate;
    EnableNonSecurity?: Value<boolean>;
    PatchFilterGroup?: PatchFilterGroup;
    ApproveAfterDays?: Value<number>;
    ComplianceLevel?: Value<string>;
    constructor(properties: Rule);
}
export declare class RuleGroup {
    PatchRules?: List<Rule>;
    constructor(properties: RuleGroup);
}
export interface PatchBaselineProperties {
    OperatingSystem?: Value<string>;
    Description?: Value<string>;
    ApprovalRules?: RuleGroup;
    Sources?: List<PatchSource>;
    Name: Value<string>;
    RejectedPatches?: List<Value<string>>;
    ApprovedPatches?: List<Value<string>>;
    RejectedPatchesAction?: Value<string>;
    PatchGroups?: List<Value<string>>;
    ApprovedPatchesComplianceLevel?: Value<string>;
    ApprovedPatchesEnableNonSecurity?: Value<boolean>;
    GlobalFilters?: PatchFilterGroup;
    Tags?: List<ResourceTag>;
}
export default class PatchBaseline extends ResourceBase<PatchBaselineProperties> {
    static PatchFilter: typeof PatchFilter;
    static PatchFilterGroup: typeof PatchFilterGroup;
    static PatchSource: typeof PatchSource;
    static Rule: typeof Rule;
    static RuleGroup: typeof RuleGroup;
    constructor(properties: PatchBaselineProperties);
}
