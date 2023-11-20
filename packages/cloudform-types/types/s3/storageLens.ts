/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class AccountLevel {
    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics
    StorageLensGroupLevel?: StorageLensGroupLevel
    ActivityMetrics?: ActivityMetrics
    BucketLevel!: BucketLevel
    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics
    DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics

    constructor(properties: AccountLevel) {
        Object.assign(this, properties)
    }
}

export class ActivityMetrics {
    IsEnabled?: Value<boolean>

    constructor(properties: ActivityMetrics) {
        Object.assign(this, properties)
    }
}

export class AdvancedCostOptimizationMetrics {
    IsEnabled?: Value<boolean>

    constructor(properties: AdvancedCostOptimizationMetrics) {
        Object.assign(this, properties)
    }
}

export class AdvancedDataProtectionMetrics {
    IsEnabled?: Value<boolean>

    constructor(properties: AdvancedDataProtectionMetrics) {
        Object.assign(this, properties)
    }
}

export class AwsOrg {
    Arn!: Value<string>

    constructor(properties: AwsOrg) {
        Object.assign(this, properties)
    }
}

export class BucketLevel {
    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics
    PrefixLevel?: PrefixLevel
    ActivityMetrics?: ActivityMetrics
    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics
    DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics

    constructor(properties: BucketLevel) {
        Object.assign(this, properties)
    }
}

export class BucketsAndRegions {
    Regions?: List<Value<string>>
    Buckets?: List<Value<string>>

    constructor(properties: BucketsAndRegions) {
        Object.assign(this, properties)
    }
}

export class CloudWatchMetrics {
    IsEnabled!: Value<boolean>

    constructor(properties: CloudWatchMetrics) {
        Object.assign(this, properties)
    }
}

export class DataExport {
    S3BucketDestination?: S3BucketDestination
    CloudWatchMetrics?: CloudWatchMetrics

    constructor(properties: DataExport) {
        Object.assign(this, properties)
    }
}

export class DetailedStatusCodesMetrics {
    IsEnabled?: Value<boolean>

    constructor(properties: DetailedStatusCodesMetrics) {
        Object.assign(this, properties)
    }
}

export class Encryption {
    SSEKMS?: SSEKMS
    SSES3?: {[key: string]: any}

    constructor(properties: Encryption) {
        Object.assign(this, properties)
    }
}

export class PrefixLevel {
    StorageMetrics!: PrefixLevelStorageMetrics

    constructor(properties: PrefixLevel) {
        Object.assign(this, properties)
    }
}

export class PrefixLevelStorageMetrics {
    IsEnabled?: Value<boolean>
    SelectionCriteria?: SelectionCriteria

    constructor(properties: PrefixLevelStorageMetrics) {
        Object.assign(this, properties)
    }
}

export class S3BucketDestination {
    OutputSchemaVersion!: Value<string>
    Format!: Value<string>
    AccountId!: Value<string>
    Prefix?: Value<string>
    Encryption?: Encryption
    Arn!: Value<string>

    constructor(properties: S3BucketDestination) {
        Object.assign(this, properties)
    }
}

export class SSEKMS {
    KeyId!: Value<string>

    constructor(properties: SSEKMS) {
        Object.assign(this, properties)
    }
}

export class SelectionCriteria {
    Delimiter?: Value<string>
    MaxDepth?: Value<number>
    MinStorageBytesPercentage?: Value<number>

    constructor(properties: SelectionCriteria) {
        Object.assign(this, properties)
    }
}

export class StorageLensConfiguration {
    AccountLevel!: AccountLevel
    Exclude?: BucketsAndRegions
    IsEnabled!: Value<boolean>
    Include?: BucketsAndRegions
    AwsOrg?: AwsOrg
    Id!: Value<string>
    StorageLensArn?: Value<string>
    DataExport?: DataExport

    constructor(properties: StorageLensConfiguration) {
        Object.assign(this, properties)
    }
}

export class StorageLensGroupLevel {
    StorageLensGroupSelectionCriteria?: StorageLensGroupSelectionCriteria

    constructor(properties: StorageLensGroupLevel) {
        Object.assign(this, properties)
    }
}

export class StorageLensGroupSelectionCriteria {
    Exclude?: List<Value<string>>
    Include?: List<Value<string>>

    constructor(properties: StorageLensGroupSelectionCriteria) {
        Object.assign(this, properties)
    }
}

export interface StorageLensProperties {
    StorageLensConfiguration: StorageLensConfiguration
    Tags?: List<ResourceTag>
}

export default class StorageLens extends ResourceBase<StorageLensProperties> {
    static AccountLevel = AccountLevel
    static ActivityMetrics = ActivityMetrics
    static AdvancedCostOptimizationMetrics = AdvancedCostOptimizationMetrics
    static AdvancedDataProtectionMetrics = AdvancedDataProtectionMetrics
    static AwsOrg = AwsOrg
    static BucketLevel = BucketLevel
    static BucketsAndRegions = BucketsAndRegions
    static CloudWatchMetrics = CloudWatchMetrics
    static DataExport = DataExport
    static DetailedStatusCodesMetrics = DetailedStatusCodesMetrics
    static Encryption = Encryption
    static PrefixLevel = PrefixLevel
    static PrefixLevelStorageMetrics = PrefixLevelStorageMetrics
    static S3BucketDestination = S3BucketDestination
    static SSEKMS = SSEKMS
    static SelectionCriteria = SelectionCriteria
    static StorageLensConfiguration = StorageLensConfiguration
    static StorageLensGroupLevel = StorageLensGroupLevel
    static StorageLensGroupSelectionCriteria = StorageLensGroupSelectionCriteria

    constructor(properties: StorageLensProperties) {
        super('AWS::S3::StorageLens', properties)
    }
}
