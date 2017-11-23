import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RuleGroup {
    PatchRules?: List<Rule>;
    constructor(properties: RuleGroup);
}
export declare class PatchFilter {
    Values?: List<Value<string>>;
    Key?: Value<string>;
    constructor(properties: PatchFilter);
}
export declare class Rule {
    PatchFilterGroup?: PatchFilterGroup;
    ApproveAfterDays?: Value<number>;
    ComplianceLevel?: Value<string>;
    constructor(properties: Rule);
}
export declare class PatchFilterGroup {
    PatchFilters?: List<PatchFilter>;
    constructor(properties: PatchFilterGroup);
}
export interface PatchBaselineProperties {
    OperatingSystem?: Value<string>;
    ApprovedPatches?: List<Value<string>>;
    PatchGroups?: List<Value<string>>;
    Description?: Value<string>;
    ApprovedPatchesComplianceLevel?: Value<string>;
    ApprovalRules?: RuleGroup;
    GlobalFilters?: PatchFilterGroup;
    Name: Value<string>;
    RejectedPatches?: List<Value<string>>;
}
export default class PatchBaseline extends ResourceBase {
    constructor(properties: PatchBaselineProperties);
}
