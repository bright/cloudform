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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BorrowConfiguration {
    AllowEarlyCheckIn!: Value<boolean>
    MaxTimeToLiveInMinutes!: Value<number>

    constructor(properties: BorrowConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConsumptionConfiguration {
    BorrowConfiguration?: BorrowConfiguration
    RenewType?: Value<string>
    ProvisionalConfiguration?: ProvisionalConfiguration

    constructor(properties: ConsumptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class Entitlement {
    AllowCheckIn?: Value<boolean>
    Overage?: Value<boolean>
    Value?: Value<string>
    MaxCount?: Value<number>
    Unit!: Value<string>
    Name!: Value<string>

    constructor(properties: Entitlement) {
        Object.assign(this, properties)
    }
}

export class IssuerData {
    SignKey?: Value<string>
    Name!: Value<string>

    constructor(properties: IssuerData) {
        Object.assign(this, properties)
    }
}

export class Metadata {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: Metadata) {
        Object.assign(this, properties)
    }
}

export class ProvisionalConfiguration {
    MaxTimeToLiveInMinutes!: Value<number>

    constructor(properties: ProvisionalConfiguration) {
        Object.assign(this, properties)
    }
}

export class ValidityDateFormat {
    Begin!: Value<string>
    End!: Value<string>

    constructor(properties: ValidityDateFormat) {
        Object.assign(this, properties)
    }
}

export interface LicenseProperties {
    ProductSKU?: Value<string>
    Status?: Value<string>
    ConsumptionConfiguration: ConsumptionConfiguration
    Validity: ValidityDateFormat
    ProductName: Value<string>
    Issuer: IssuerData
    HomeRegion: Value<string>
    Entitlements: List<Entitlement>
    LicenseMetadata?: List<Metadata>
    LicenseName: Value<string>
    Beneficiary?: Value<string>
}

export default class License extends ResourceBase<LicenseProperties> {
    static BorrowConfiguration = BorrowConfiguration
    static ConsumptionConfiguration = ConsumptionConfiguration
    static Entitlement = Entitlement
    static IssuerData = IssuerData
    static Metadata = Metadata
    static ProvisionalConfiguration = ProvisionalConfiguration
    static ValidityDateFormat = ValidityDateFormat

    constructor(properties: LicenseProperties) {
        super('AWS::LicenseManager::License', properties)
    }
}
