import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
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
export declare class ConnectionPasswordEncryption {
    ReturnConnectionPasswordEncrypted?: Value<boolean>;
    KmsKeyId?: Value<string>;
    constructor(properties: ConnectionPasswordEncryption);
}
export interface DataCatalogEncryptionSettingsProperties {
    DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
    CatalogId: Value<string>;
}
export default class DataCatalogEncryptionSettings extends ResourceBase<DataCatalogEncryptionSettingsProperties> {
    static DataCatalogEncryptionSettings: typeof DataCatalogEncryptionSettingsInner;
    static EncryptionAtRest: typeof EncryptionAtRest;
    static ConnectionPasswordEncryption: typeof ConnectionPasswordEncryption;
    constructor(properties: DataCatalogEncryptionSettingsProperties);
}
