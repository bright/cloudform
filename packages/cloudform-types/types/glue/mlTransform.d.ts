import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FindMatchesParameters {
    PrecisionRecallTradeoff?: Value<number>;
    EnforceProvidedLabels?: Value<boolean>;
    PrimaryKeyColumnName: Value<string>;
    AccuracyCostTradeoff?: Value<number>;
    constructor(properties: FindMatchesParameters);
}
export declare class MLUserDataEncryption {
    MLUserDataEncryptionMode: Value<string>;
    KmsKeyId?: Value<string>;
    constructor(properties: MLUserDataEncryption);
}
export declare class InputRecordTables {
    GlueTables?: List<GlueTables>;
    constructor(properties: InputRecordTables);
}
export declare class GlueTables {
    ConnectionName?: Value<string>;
    TableName: Value<string>;
    DatabaseName: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: GlueTables);
}
export declare class TransformEncryption {
    MLUserDataEncryption?: MLUserDataEncryption;
    TaskRunSecurityConfigurationName?: Value<string>;
    constructor(properties: TransformEncryption);
}
export declare class TransformParameters {
    TransformType: Value<string>;
    FindMatchesParameters?: FindMatchesParameters;
    constructor(properties: TransformParameters);
}
export interface MLTransformProperties {
    MaxRetries?: Value<number>;
    Description?: Value<string>;
    TransformEncryption?: TransformEncryption;
    Timeout?: Value<number>;
    Name?: Value<string>;
    Role: Value<string>;
    WorkerType?: Value<string>;
    GlueVersion?: Value<string>;
    TransformParameters: TransformParameters;
    InputRecordTables: InputRecordTables;
    NumberOfWorkers?: Value<number>;
    Tags?: {
        [key: string]: any;
    };
    MaxCapacity?: Value<number>;
}
export default class MLTransform extends ResourceBase<MLTransformProperties> {
    static FindMatchesParameters: typeof FindMatchesParameters;
    static MLUserDataEncryption: typeof MLUserDataEncryption;
    static InputRecordTables: typeof InputRecordTables;
    static GlueTables: typeof GlueTables;
    static TransformEncryption: typeof TransformEncryption;
    static TransformParameters: typeof TransformParameters;
    constructor(properties: MLTransformProperties);
}
