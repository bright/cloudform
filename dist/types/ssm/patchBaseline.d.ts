import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RuleGroupProperties {
    PatchRules?: Rule[];
}
export declare class RuleGroup extends ResourceBase {
    constructor(properties: RuleGroupProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PatchFilterProperties {
    Values?: Value<string>[];
    Key?: Value<string>;
}
export declare class PatchFilter extends ResourceBase {
    constructor(properties: PatchFilterProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RuleProperties {
    PatchFilterGroup?: PatchFilterGroup;
    ApproveAfterDays?: Value<number>;
    ComplianceLevel?: Value<string>;
}
export declare class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PatchFilterGroupProperties {
    PatchFilters?: PatchFilter[];
}
export declare class PatchFilterGroup extends ResourceBase {
    constructor(properties: PatchFilterGroupProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PatchBaselineProperties {
    OperatingSystem?: Value<string>;
    ApprovedPatches?: Value<string>[];
    PatchGroups?: Value<string>[];
    Description?: Value<string>;
    ApprovedPatchesComplianceLevel?: Value<string>;
    ApprovalRules?: RuleGroup;
    GlobalFilters?: PatchFilterGroup;
    Name: Value<string>;
    RejectedPatches?: Value<string>[];
}
export default class PatchBaseline extends ResourceBase {
    constructor(properties: PatchBaselineProperties, dependsOn?: Value<string> | Value<string>[]);
}
