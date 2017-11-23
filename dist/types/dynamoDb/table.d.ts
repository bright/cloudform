import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface TimeToLiveSpecificationProperties {
    AttributeName: Value<string>;
    Enabled: Value<boolean>;
}
export declare class TimeToLiveSpecification extends ResourceBase {
    constructor(properties: TimeToLiveSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AttributeDefinitionProperties {
    AttributeName: Value<string>;
    AttributeType: Value<string>;
}
export declare class AttributeDefinition extends ResourceBase {
    constructor(properties: AttributeDefinitionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LocalSecondaryIndexProperties {
    IndexName: Value<string>;
    KeySchema: KeySchema[];
    Projection: Projection;
}
export declare class LocalSecondaryIndex extends ResourceBase {
    constructor(properties: LocalSecondaryIndexProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ProvisionedThroughputProperties {
    ReadCapacityUnits: Value<number>;
    WriteCapacityUnits: Value<number>;
}
export declare class ProvisionedThroughput extends ResourceBase {
    constructor(properties: ProvisionedThroughputProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface GlobalSecondaryIndexProperties {
    IndexName: Value<string>;
    KeySchema: KeySchema[];
    Projection: Projection;
    ProvisionedThroughput: ProvisionedThroughput;
}
export declare class GlobalSecondaryIndex extends ResourceBase {
    constructor(properties: GlobalSecondaryIndexProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface KeySchemaProperties {
    AttributeName: Value<string>;
    KeyType: Value<string>;
}
export declare class KeySchema extends ResourceBase {
    constructor(properties: KeySchemaProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ProjectionProperties {
    NonKeyAttributes?: Value<string>[];
    ProjectionType?: Value<string>;
}
export declare class Projection extends ResourceBase {
    constructor(properties: ProjectionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StreamSpecificationProperties {
    StreamViewType: Value<string>;
}
export declare class StreamSpecification extends ResourceBase {
    constructor(properties: StreamSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TableProperties {
    AttributeDefinitions?: AttributeDefinition[];
    GlobalSecondaryIndexes?: GlobalSecondaryIndex[];
    KeySchema: KeySchema[];
    LocalSecondaryIndexes?: LocalSecondaryIndex[];
    ProvisionedThroughput: ProvisionedThroughput;
    StreamSpecification?: StreamSpecification;
    TableName?: Value<string>;
    Tags?: ResourceTag[];
    TimeToLiveSpecification?: TimeToLiveSpecification;
}
export default class Table extends ResourceBase {
    constructor(properties: TableProperties, dependsOn?: Value<string> | Value<string>[]);
}
