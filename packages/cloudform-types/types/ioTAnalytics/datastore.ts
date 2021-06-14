/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FileFormatConfiguration {
    ParquetConfiguration?: ParquetConfiguration
    JsonConfiguration?: JsonConfiguration

    constructor(properties: FileFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceManagedS3 {


    constructor(properties: ServiceManagedS3) {
        Object.assign(this, properties)
    }
}

export class RetentionPeriod {
    NumberOfDays?: Value<number>
    Unlimited?: Value<boolean>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class CustomerManagedS3 {
    Bucket!: Value<string>
    RoleArn!: Value<string>
    KeyPrefix?: Value<string>

    constructor(properties: CustomerManagedS3) {
        Object.assign(this, properties)
    }
}

export class SchemaDefinition {
    Columns?: List<Column>

    constructor(properties: SchemaDefinition) {
        Object.assign(this, properties)
    }
}

export class Column {
    Type!: Value<string>
    Name!: Value<string>

    constructor(properties: Column) {
        Object.assign(this, properties)
    }
}

export class ParquetConfiguration {
    SchemaDefinition?: SchemaDefinition

    constructor(properties: ParquetConfiguration) {
        Object.assign(this, properties)
    }
}

export class DatastoreStorage {
    CustomerManagedS3?: CustomerManagedS3
    ServiceManagedS3?: ServiceManagedS3

    constructor(properties: DatastoreStorage) {
        Object.assign(this, properties)
    }
}

export class JsonConfiguration {


    constructor(properties: JsonConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DatastoreProperties {
    DatastoreStorage?: DatastoreStorage
    FileFormatConfiguration?: FileFormatConfiguration
    DatastoreName?: Value<string>
    RetentionPeriod?: RetentionPeriod
    Tags?: List<ResourceTag>
}

export default class Datastore extends ResourceBase<DatastoreProperties> {
    static FileFormatConfiguration = FileFormatConfiguration
    static ServiceManagedS3 = ServiceManagedS3
    static RetentionPeriod = RetentionPeriod
    static CustomerManagedS3 = CustomerManagedS3
    static SchemaDefinition = SchemaDefinition
    static Column = Column
    static ParquetConfiguration = ParquetConfiguration
    static DatastoreStorage = DatastoreStorage
    static JsonConfiguration = JsonConfiguration

    constructor(properties?: DatastoreProperties) {
        super('AWS::IoTAnalytics::Datastore', properties || {})
    }
}
