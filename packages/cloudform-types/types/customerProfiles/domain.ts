/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributeTypesSelector {
    Address?: List<Value<string>>
    AttributeMatchingModel!: Value<string>
    PhoneNumber?: List<Value<string>>
    EmailAddress?: List<Value<string>>

    constructor(properties: AttributeTypesSelector) {
        Object.assign(this, properties)
    }
}

export class AutoMerging {
    Consolidation?: Consolidation
    Enabled!: Value<boolean>
    ConflictResolution?: ConflictResolution
    MinAllowedConfidenceScoreForMerging?: Value<number>

    constructor(properties: AutoMerging) {
        Object.assign(this, properties)
    }
}

export class ConflictResolution {
    ConflictResolvingModel!: Value<string>
    SourceName?: Value<string>

    constructor(properties: ConflictResolution) {
        Object.assign(this, properties)
    }
}

export class Consolidation {
    MatchingAttributesList!: {[key: string]: any}

    constructor(properties: Consolidation) {
        Object.assign(this, properties)
    }
}

export class DomainStats {
    MeteringProfileCount?: Value<number>
    ProfileCount?: Value<number>
    ObjectCount?: Value<number>
    TotalSize?: Value<number>

    constructor(properties: DomainStats) {
        Object.assign(this, properties)
    }
}

export class ExportingConfig {
    S3Exporting?: S3ExportingConfig

    constructor(properties: ExportingConfig) {
        Object.assign(this, properties)
    }
}

export class JobSchedule {
    DayOfTheWeek!: Value<string>
    Time!: Value<string>

    constructor(properties: JobSchedule) {
        Object.assign(this, properties)
    }
}

export class Matching {
    AutoMerging?: AutoMerging
    JobSchedule?: JobSchedule
    Enabled!: Value<boolean>
    ExportingConfig?: ExportingConfig

    constructor(properties: Matching) {
        Object.assign(this, properties)
    }
}

export class MatchingRule {
    Rule!: List<Value<string>>

    constructor(properties: MatchingRule) {
        Object.assign(this, properties)
    }
}

export class RuleBasedMatching {
    Status?: Value<string>
    MaxAllowedRuleLevelForMerging?: Value<number>
    Enabled!: Value<boolean>
    MatchingRules?: List<MatchingRule>
    AttributeTypesSelector?: AttributeTypesSelector
    ConflictResolution?: ConflictResolution
    ExportingConfig?: ExportingConfig
    MaxAllowedRuleLevelForMatching?: Value<number>

    constructor(properties: RuleBasedMatching) {
        Object.assign(this, properties)
    }
}

export class S3ExportingConfig {
    S3BucketName!: Value<string>
    S3KeyName?: Value<string>

    constructor(properties: S3ExportingConfig) {
        Object.assign(this, properties)
    }
}

export interface DomainProperties {
    Matching?: Matching
    DefaultExpirationDays?: Value<number>
    DomainName: Value<string>
    DeadLetterQueueUrl?: Value<string>
    DefaultEncryptionKey?: Value<string>
    RuleBasedMatching?: RuleBasedMatching
    Tags?: List<ResourceTag>
}

export default class Domain extends ResourceBase<DomainProperties> {
    static AttributeTypesSelector = AttributeTypesSelector
    static AutoMerging = AutoMerging
    static ConflictResolution = ConflictResolution
    static Consolidation = Consolidation
    static DomainStats = DomainStats
    static ExportingConfig = ExportingConfig
    static JobSchedule = JobSchedule
    static Matching = Matching
    static MatchingRule = MatchingRule
    static RuleBasedMatching = RuleBasedMatching
    static S3ExportingConfig = S3ExportingConfig

    constructor(properties: DomainProperties) {
        super('AWS::CustomerProfiles::Domain', properties)
    }
}
