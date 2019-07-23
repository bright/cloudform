/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RuleGroup {
    PatchRules?: List<Rule>

    constructor(properties: RuleGroup) {
        Object.assign(this, properties)
    }
}

export class PatchFilter {
    Values?: List<Value<string>>
    Key?: Value<string>

    constructor(properties: PatchFilter) {
        Object.assign(this, properties)
    }
}

export class Rule {
    EnableNonSecurity?: Value<boolean>
    PatchFilterGroup?: PatchFilterGroup
    ApproveAfterDays?: Value<number>
    ComplianceLevel?: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class PatchFilterGroup {
    PatchFilters?: List<PatchFilter>

    constructor(properties: PatchFilterGroup) {
        Object.assign(this, properties)
    }
}

export class PatchSource {
    Products?: List<Value<string>>
    Configuration?: Value<string>
    Name?: Value<string>

    constructor(properties: PatchSource) {
        Object.assign(this, properties)
    }
}

export interface PatchBaselineProperties {
    OperatingSystem?: Value<string>
    Description?: Value<string>
    ApprovalRules?: RuleGroup
    Sources?: List<PatchSource>
    Name: Value<string>
    RejectedPatches?: List<Value<string>>
    ApprovedPatches?: List<Value<string>>
    RejectedPatchesAction?: Value<string>
    PatchGroups?: List<Value<string>>
    ApprovedPatchesComplianceLevel?: Value<string>
    ApprovedPatchesEnableNonSecurity?: Value<boolean>
    GlobalFilters?: PatchFilterGroup
    Tags?: List<ResourceTag>
}

export default class PatchBaseline extends ResourceBase<PatchBaselineProperties> {
    static RuleGroup = RuleGroup
    static PatchFilter = PatchFilter
    static Rule = Rule
    static PatchFilterGroup = PatchFilterGroup
    static PatchSource = PatchSource

    constructor(properties: PatchBaselineProperties) {
        super('AWS::SSM::PatchBaseline', properties)
    }
}
