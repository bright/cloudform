/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FindMatchesParameters {
    PrecisionRecallTradeoff?: Value<number>
    EnforceProvidedLabels?: Value<boolean>
    PrimaryKeyColumnName!: Value<string>
    AccuracyCostTradeoff?: Value<number>

    constructor(properties: FindMatchesParameters) {
        Object.assign(this, properties)
    }
}

export class MLUserDataEncryption {
    MLUserDataEncryptionMode!: Value<string>
    KmsKeyId?: Value<string>

    constructor(properties: MLUserDataEncryption) {
        Object.assign(this, properties)
    }
}

export class InputRecordTables {
    GlueTables?: List<GlueTables>

    constructor(properties: InputRecordTables) {
        Object.assign(this, properties)
    }
}

export class GlueTables {
    ConnectionName?: Value<string>
    TableName!: Value<string>
    DatabaseName!: Value<string>
    CatalogId?: Value<string>

    constructor(properties: GlueTables) {
        Object.assign(this, properties)
    }
}

export class TransformEncryption {
    MLUserDataEncryption?: MLUserDataEncryption
    TaskRunSecurityConfigurationName?: Value<string>

    constructor(properties: TransformEncryption) {
        Object.assign(this, properties)
    }
}

export class TransformParameters {
    TransformType!: Value<string>
    FindMatchesParameters?: FindMatchesParameters

    constructor(properties: TransformParameters) {
        Object.assign(this, properties)
    }
}

export interface MLTransformProperties {
    MaxRetries?: Value<number>
    Description?: Value<string>
    TransformEncryption?: TransformEncryption
    Timeout?: Value<number>
    Name?: Value<string>
    Role: Value<string>
    WorkerType?: Value<string>
    GlueVersion?: Value<string>
    TransformParameters: TransformParameters
    InputRecordTables: InputRecordTables
    NumberOfWorkers?: Value<number>
    Tags?: {[key: string]: any}
    MaxCapacity?: Value<number>
}

export default class MLTransform extends ResourceBase<MLTransformProperties> {
    static FindMatchesParameters = FindMatchesParameters
    static MLUserDataEncryption = MLUserDataEncryption
    static InputRecordTables = InputRecordTables
    static GlueTables = GlueTables
    static TransformEncryption = TransformEncryption
    static TransformParameters = TransformParameters

    constructor(properties: MLTransformProperties) {
        super('AWS::Glue::MLTransform', properties)
    }
}
