/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ProvisionalConfiguration {
    MaxTimeToLiveInMinutes!: Value<number>

    constructor(properties: ProvisionalConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConsumptionConfiguration {
    RenewType?: Value<string>

    constructor(properties: ConsumptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class IssuerData {
    Name!: Value<string>
    SignKey?: Value<string>

    constructor(properties: IssuerData) {
        Object.assign(this, properties)
    }
}

export class BorrowConfiguration {
    MaxTimeToLiveInMinutes!: Value<number>
    AllowEarlyCheckIn!: Value<boolean>

    constructor(properties: BorrowConfiguration) {
        Object.assign(this, properties)
    }
}

export class Metadata {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: Metadata) {
        Object.assign(this, properties)
    }
}

export class Entitlement {
    Name!: Value<string>
    Value?: Value<string>
    MaxCount?: Value<number>
    Overage?: Value<boolean>
    Unit!: Value<string>
    AllowCheckIn?: Value<boolean>

    constructor(properties: Entitlement) {
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
    LicenseName: Value<string>
    ProductName: Value<string>
    HomeRegion: Value<string>
    Beneficiary?: Value<string>
    Status?: Value<string>
}

export default class License extends ResourceBase<LicenseProperties> {
    static ProvisionalConfiguration = ProvisionalConfiguration
    static ConsumptionConfiguration = ConsumptionConfiguration
    static IssuerData = IssuerData
    static BorrowConfiguration = BorrowConfiguration
    static Metadata = Metadata
    static Entitlement = Entitlement
    static ValidityDateFormat = ValidityDateFormat

    constructor(properties: LicenseProperties) {
        super('AWS::LicenseManager::License', properties)
    }
}
