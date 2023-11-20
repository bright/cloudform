import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeTypesSelector {
    Address?: List<Value<string>>;
    AttributeMatchingModel: Value<string>;
    PhoneNumber?: List<Value<string>>;
    EmailAddress?: List<Value<string>>;
    constructor(properties: AttributeTypesSelector);
}
export declare class AutoMerging {
    Consolidation?: Consolidation;
    Enabled: Value<boolean>;
    ConflictResolution?: ConflictResolution;
    MinAllowedConfidenceScoreForMerging?: Value<number>;
    constructor(properties: AutoMerging);
}
export declare class ConflictResolution {
    ConflictResolvingModel: Value<string>;
    SourceName?: Value<string>;
    constructor(properties: ConflictResolution);
}
export declare class Consolidation {
    MatchingAttributesList: {
        [key: string]: any;
    };
    constructor(properties: Consolidation);
}
export declare class DomainStats {
    MeteringProfileCount?: Value<number>;
    ProfileCount?: Value<number>;
    ObjectCount?: Value<number>;
    TotalSize?: Value<number>;
    constructor(properties: DomainStats);
}
export declare class ExportingConfig {
    S3Exporting?: S3ExportingConfig;
    constructor(properties: ExportingConfig);
}
export declare class JobSchedule {
    DayOfTheWeek: Value<string>;
    Time: Value<string>;
    constructor(properties: JobSchedule);
}
export declare class Matching {
    AutoMerging?: AutoMerging;
    JobSchedule?: JobSchedule;
    Enabled: Value<boolean>;
    ExportingConfig?: ExportingConfig;
    constructor(properties: Matching);
}
export declare class MatchingRule {
    Rule: List<Value<string>>;
    constructor(properties: MatchingRule);
}
export declare class RuleBasedMatching {
    Status?: Value<string>;
    MaxAllowedRuleLevelForMerging?: Value<number>;
    Enabled: Value<boolean>;
    MatchingRules?: List<MatchingRule>;
    AttributeTypesSelector?: AttributeTypesSelector;
    ConflictResolution?: ConflictResolution;
    ExportingConfig?: ExportingConfig;
    MaxAllowedRuleLevelForMatching?: Value<number>;
    constructor(properties: RuleBasedMatching);
}
export declare class S3ExportingConfig {
    S3BucketName: Value<string>;
    S3KeyName?: Value<string>;
    constructor(properties: S3ExportingConfig);
}
export interface DomainProperties {
    Matching?: Matching;
    DefaultExpirationDays?: Value<number>;
    DomainName: Value<string>;
    DeadLetterQueueUrl?: Value<string>;
    DefaultEncryptionKey?: Value<string>;
    RuleBasedMatching?: RuleBasedMatching;
    Tags?: List<ResourceTag>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static AttributeTypesSelector: typeof AttributeTypesSelector;
    static AutoMerging: typeof AutoMerging;
    static ConflictResolution: typeof ConflictResolution;
    static Consolidation: typeof Consolidation;
    static DomainStats: typeof DomainStats;
    static ExportingConfig: typeof ExportingConfig;
    static JobSchedule: typeof JobSchedule;
    static Matching: typeof Matching;
    static MatchingRule: typeof MatchingRule;
    static RuleBasedMatching: typeof RuleBasedMatching;
    static S3ExportingConfig: typeof S3ExportingConfig;
    constructor(properties: DomainProperties);
}
