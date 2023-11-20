import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataSecurityConfig {
    VpcConfig?: VpcConfig;
    VolumeKmsKeyId?: Value<string>;
    ModelKmsKeyId?: Value<string>;
    DataLakeKmsKeyId?: Value<string>;
    constructor(properties: DataSecurityConfig);
}
export declare class DocumentClassificationConfig {
    Mode: Value<string>;
    Labels?: List<Value<string>>;
    constructor(properties: DocumentClassificationConfig);
}
export declare class EntityRecognitionConfig {
    EntityTypes?: List<EntityTypesListItem>;
    constructor(properties: EntityRecognitionConfig);
}
export declare class EntityTypesListItem {
    Type: Value<string>;
    constructor(properties: EntityTypesListItem);
}
export declare class TaskConfig {
    LanguageCode: Value<string>;
    DocumentClassificationConfig?: DocumentClassificationConfig;
    EntityRecognitionConfig?: EntityRecognitionConfig;
    constructor(properties: TaskConfig);
}
export declare class VpcConfig {
    Subnets: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface FlywheelProperties {
    DataLakeS3Uri: Value<string>;
    DataAccessRoleArn: Value<string>;
    FlywheelName: Value<string>;
    ModelType?: Value<string>;
    TaskConfig?: TaskConfig;
    ActiveModelArn?: Value<string>;
    DataSecurityConfig?: DataSecurityConfig;
    Tags?: List<ResourceTag>;
}
export default class Flywheel extends ResourceBase<FlywheelProperties> {
    static DataSecurityConfig: typeof DataSecurityConfig;
    static DocumentClassificationConfig: typeof DocumentClassificationConfig;
    static EntityRecognitionConfig: typeof EntityRecognitionConfig;
    static EntityTypesListItem: typeof EntityTypesListItem;
    static TaskConfig: typeof TaskConfig;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: FlywheelProperties);
}
