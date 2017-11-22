/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface RuleGroupProperties {
    PatchRules?: Rule[]
}

export class RuleGroup extends ResourceBase {
    constructor(properties: RuleGroupProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::RuleGroup', properties, dependsOn)
    }
}

export interface PatchFilterProperties {
    Values?: Value<string>[]
    Key?: Value<string>
}

export class PatchFilter extends ResourceBase {
    constructor(properties: PatchFilterProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::PatchFilter', properties, dependsOn)
    }
}

export interface RuleProperties {
    PatchFilterGroup?: PatchFilterGroup
    ApproveAfterDays?: Value<number>
    ComplianceLevel?: Value<string>
}

export class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::Rule', properties, dependsOn)
    }
}

export interface PatchFilterGroupProperties {
    PatchFilters?: PatchFilter[]
}

export class PatchFilterGroup extends ResourceBase {
    constructor(properties: PatchFilterGroupProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::PatchFilterGroup', properties, dependsOn)
    }
}

export interface PatchBaselineProperties {
    OperatingSystem?: Value<string>
    ApprovedPatches?: Value<string>[]
    PatchGroups?: Value<string>[]
    Description?: Value<string>
    ApprovedPatchesComplianceLevel?: Value<string>
    ApprovalRules?: RuleGroup
    GlobalFilters?: PatchFilterGroup
    Name: Value<string>
    RejectedPatches?: Value<string>[]
}

export default class PatchBaseline extends ResourceBase {
    constructor(properties: PatchBaselineProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::PatchBaseline', properties, dependsOn)
    }
}