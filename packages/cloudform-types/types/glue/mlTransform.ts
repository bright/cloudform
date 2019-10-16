/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase} from '../resource'
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

export class TransformParameters {
    TransformType!: Value<string>
    FindMatchesParameters?: FindMatchesParameters

    constructor(properties: TransformParameters) {
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

export interface MLTransformProperties {
    Role: Value<string>
    MaxRetries?: Value<number>
    WorkerType?: Value<string>
    Description?: Value<string>
    Timeout?: Value<number>
    TransformParameters: TransformParameters
    InputRecordTables: InputRecordTables
    NumberOfWorkers?: Value<number>
    Name?: Value<string>
    MaxCapacity?: Value<number>
}

export default class MLTransform extends ResourceBase<MLTransformProperties> {
    static FindMatchesParameters = FindMatchesParameters
    static TransformParameters = TransformParameters
    static InputRecordTables = InputRecordTables
    static GlueTables = GlueTables

    constructor(properties: MLTransformProperties) {
        super('AWS::Glue::MLTransform', properties)
    }
}
