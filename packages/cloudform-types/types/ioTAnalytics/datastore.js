"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FileFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileFormatConfiguration = FileFormatConfiguration;
class ServiceManagedS3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceManagedS3 = ServiceManagedS3;
class RetentionPeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetentionPeriod = RetentionPeriod;
class CustomerManagedS3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomerManagedS3 = CustomerManagedS3;
class SchemaDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaDefinition = SchemaDefinition;
class Column {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Column = Column;
class ParquetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParquetConfiguration = ParquetConfiguration;
class DatastoreStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatastoreStorage = DatastoreStorage;
class JsonConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonConfiguration = JsonConfiguration;
class Datastore extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTAnalytics::Datastore', properties || {});
    }
}
exports.default = Datastore;
Datastore.FileFormatConfiguration = FileFormatConfiguration;
Datastore.ServiceManagedS3 = ServiceManagedS3;
Datastore.RetentionPeriod = RetentionPeriod;
Datastore.CustomerManagedS3 = CustomerManagedS3;
Datastore.SchemaDefinition = SchemaDefinition;
Datastore.Column = Column;
Datastore.ParquetConfiguration = ParquetConfiguration;
Datastore.DatastoreStorage = DatastoreStorage;
Datastore.JsonConfiguration = JsonConfiguration;
