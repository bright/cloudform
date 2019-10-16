import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FindMatchesParameters {
    PrecisionRecallTradeoff?: Value<number>;
    EnforceProvidedLabels?: Value<boolean>;
    PrimaryKeyColumnName: Value<string>;
    AccuracyCostTradeoff?: Value<number>;
    constructor(properties: FindMatchesParameters);
}
export declare class TransformParameters {
    TransformType: Value<string>;
    FindMatchesParameters?: FindMatchesParameters;
    constructor(properties: TransformParameters);
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
export interface MLTransformProperties {
    Role: Value<string>;
    MaxRetries?: Value<number>;
    WorkerType?: Value<string>;
    Description?: Value<string>;
    Timeout?: Value<number>;
    TransformParameters: TransformParameters;
    InputRecordTables: InputRecordTables;
    NumberOfWorkers?: Value<number>;
    Name?: Value<string>;
    MaxCapacity?: Value<number>;
}
export default class MLTransform extends ResourceBase<MLTransformProperties> {
    static FindMatchesParameters: typeof FindMatchesParameters;
    static TransformParameters: typeof TransformParameters;
    static InputRecordTables: typeof InputRecordTables;
    static GlueTables: typeof GlueTables;
    constructor(properties: MLTransformProperties);
}
