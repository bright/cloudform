/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TimeToLiveSpecification {
    AttributeName: Value<string>
    Enabled: Value<boolean>

    constructor(properties: TimeToLiveSpecification) {
        Object.assign(this, properties)
    }
}

export class AttributeDefinition {
    AttributeName: Value<string>
    AttributeType: Value<string>

    constructor(properties: AttributeDefinition) {
        Object.assign(this, properties)
    }
}

export class LocalSecondaryIndex {
    IndexName: Value<string>
    KeySchema: List<KeySchema>
    Projection: Projection

    constructor(properties: LocalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class ProvisionedThroughput {
    ReadCapacityUnits: Value<number>
    WriteCapacityUnits: Value<number>

    constructor(properties: ProvisionedThroughput) {
        Object.assign(this, properties)
    }
}

export class GlobalSecondaryIndex {
    IndexName: Value<string>
    KeySchema: List<KeySchema>
    Projection: Projection
    ProvisionedThroughput: ProvisionedThroughput

    constructor(properties: GlobalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class KeySchema {
    AttributeName: Value<string>
    KeyType: Value<string>

    constructor(properties: KeySchema) {
        Object.assign(this, properties)
    }
}

export class Projection {
    NonKeyAttributes?: List<Value<string>>
    ProjectionType?: Value<string>

    constructor(properties: Projection) {
        Object.assign(this, properties)
    }
}

export class StreamSpecification {
    StreamViewType: Value<string>

    constructor(properties: StreamSpecification) {
        Object.assign(this, properties)
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
