import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AugmentedManifestsListItem {
    S3Uri: Value<string>;
    AttributeNames: List<Value<string>>;
    Split?: Value<string>;
    constructor(properties: AugmentedManifestsListItem);
}
export declare class DocumentClassifierDocuments {
    S3Uri: Value<string>;
    TestS3Uri?: Value<string>;
    constructor(properties: DocumentClassifierDocuments);
}
export declare class DocumentClassifierInputDataConfig {
    DocumentReaderConfig?: DocumentReaderConfig;
    S3Uri?: Value<string>;
    Documents?: DocumentClassifierDocuments;
    DataFormat?: Value<string>;
    DocumentType?: Value<string>;
    AugmentedManifests?: List<AugmentedManifestsListItem>;
    LabelDelimiter?: Value<string>;
    TestS3Uri?: Value<string>;
    constructor(properties: DocumentClassifierInputDataConfig);
}
export declare class DocumentClassifierOutputDataConfig {
    KmsKeyId?: Value<string>;
    S3Uri?: Value<string>;
    constructor(properties: DocumentClassifierOutputDataConfig);
}
export declare class DocumentReaderConfig {
    FeatureTypes?: List<Value<string>>;
    DocumentReadMode?: Value<string>;
    DocumentReadAction: Value<string>;
    constructor(properties: DocumentReaderConfig);
}
export declare class VpcConfig {
    Subnets: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface DocumentClassifierProperties {
    LanguageCode: Value<string>;
    DataAccessRoleArn: Value<string>;
    OutputDataConfig?: DocumentClassifierOutputDataConfig;
    VpcConfig?: VpcConfig;
    DocumentClassifierName: Value<string>;
    Mode?: Value<string>;
    VolumeKmsKeyId?: Value<string>;
    ModelKmsKeyId?: Value<string>;
    VersionName?: Value<string>;
    ModelPolicy?: Value<string>;
    InputDataConfig: DocumentClassifierInputDataConfig;
    Tags?: List<ResourceTag>;
}
export default class DocumentClassifier extends ResourceBase<DocumentClassifierProperties> {
    static AugmentedManifestsListItem: typeof AugmentedManifestsListItem;
    static DocumentClassifierDocuments: typeof DocumentClassifierDocuments;
    static DocumentClassifierInputDataConfig: typeof DocumentClassifierInputDataConfig;
    static DocumentClassifierOutputDataConfig: typeof DocumentClassifierOutputDataConfig;
    static DocumentReaderConfig: typeof DocumentReaderConfig;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: DocumentClassifierProperties);
}
