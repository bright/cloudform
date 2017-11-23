/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export interface TimeToLiveSpecificationProperties {
    AttributeName: Value<string>
    Enabled: Value<boolean>
}

export class TimeToLiveSpecification extends ResourceBase {
    constructor(properties: TimeToLiveSpecificationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::TimeToLiveSpecification', properties, dependsOn)
    }
}

export interface AttributeDefinitionProperties {
    AttributeName: Value<string>
    AttributeType: Value<string>
}

export class AttributeDefinition extends ResourceBase {
    constructor(properties: AttributeDefinitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::AttributeDefinition', properties, dependsOn)
    }
}

export interface LocalSecondaryIndexProperties {
    IndexName: Value<string>
    KeySchema: List<KeySchema>
    Projection: Projection
}

export class LocalSecondaryIndex extends ResourceBase {
    constructor(properties: LocalSecondaryIndexProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::LocalSecondaryIndex', properties, dependsOn)
    }
}

export interface ProvisionedThroughputProperties {
    ReadCapacityUnits: Value<number>
    WriteCapacityUnits: Value<number>
}

export class ProvisionedThroughput extends ResourceBase {
    constructor(properties: ProvisionedThroughputProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::ProvisionedThroughput', properties, dependsOn)
    }
}

export interface GlobalSecondaryIndexProperties {
    IndexName: Value<string>
    KeySchema: List<KeySchema>
    Projection: Projection
    ProvisionedThroughput: ProvisionedThroughput
}

export class GlobalSecondaryIndex extends ResourceBase {
    constructor(properties: GlobalSecondaryIndexProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::GlobalSecondaryIndex', properties, dependsOn)
    }
}

export interface KeySchemaProperties {
    AttributeName: Value<string>
    KeyType: Value<string>
}

export class KeySchema extends ResourceBase {
    constructor(properties: KeySchemaProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::KeySchema', properties, dependsOn)
    }
}

export interface ProjectionProperties {
    NonKeyAttributes?: List<Value<string>>
    ProjectionType?: Value<string>
}

export class Projection extends ResourceBase {
    constructor(properties: ProjectionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::Projection', properties, dependsOn)
    }
}

export interface StreamSpecificationProperties {
    StreamViewType: Value<string>
}

export class StreamSpecification extends ResourceBase {
    constructor(properties: StreamSpecificationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::StreamSpecification', properties, dependsOn)
    }
}

export interface TableProperties {
    AttributeDefinitions?: List<AttributeDefinition>
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>
    KeySchema: List<KeySchema>
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>
    ProvisionedThroughput: ProvisionedThroughput
    StreamSpecification?: StreamSpecification
    TableName?: Value<string>
    Tags?: ResourceTag[]
    TimeToLiveSpecification?: TimeToLiveSpecification
}

export default class Table extends ResourceBase {
    constructor(properties: TableProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DynamoDB::Table', properties, dependsOn)
    }
}
