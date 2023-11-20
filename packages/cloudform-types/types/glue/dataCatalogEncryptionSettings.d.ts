import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ConnectionPasswordEncryption {
    ReturnConnectionPasswordEncrypted?: Value<boolean>;
    KmsKeyId?: Value<string>;
    constructor(properties: ConnectionPasswordEncryption);
}
export declare class DataCatalogEncryptionSettingsInner {
    ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
    EncryptionAtRest?: EncryptionAtRest;
    constructor(properties: DataCatalogEncryptionSettingsInner);
}
export declare class EncryptionAtRest {
    CatalogEncryptionMode?: Value<string>;
    SseAwsKmsKeyId?: Value<string>;
    constructor(properties: EncryptionAtRest);
}
export interface DataCatalogEncryptionSettingsProperties {
    DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
    CatalogId: Value<string>;
}
export default class DataCatalogEncryptionSettings extends ResourceBase<DataCatalogEncryptionSettingsProperties> {
    static ConnectionPasswordEncryption: typeof ConnectionPasswordEncryption;
    static DataCatalogEncryptionSettings: typeof DataCatalogEncryptionSettingsInner;
    static EncryptionAtRest: typeof EncryptionAtRest;
    constructor(properties: DataCatalogEncryptionSettingsProperties);
}
