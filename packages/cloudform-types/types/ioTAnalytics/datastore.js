"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampPartition = exports.SchemaDefinition = exports.RetentionPeriod = exports.Partition = exports.ParquetConfiguration = exports.IotSiteWiseMultiLayerStorage = exports.FileFormatConfiguration = exports.DatastoreStorage = exports.DatastorePartitions = exports.DatastorePartition = exports.CustomerManagedS3Storage = exports.CustomerManagedS3 = exports.Column = void 0;
const resource_1 = require("../resource");
class Column {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Column = Column;
class CustomerManagedS3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomerManagedS3 = CustomerManagedS3;
class CustomerManagedS3Storage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomerManagedS3Storage = CustomerManagedS3Storage;
class DatastorePartition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatastorePartition = DatastorePartition;
class DatastorePartitions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatastorePartitions = DatastorePartitions;
class DatastoreStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatastoreStorage = DatastoreStorage;
class FileFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileFormatConfiguration = FileFormatConfiguration;
class IotSiteWiseMultiLayerStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotSiteWiseMultiLayerStorage = IotSiteWiseMultiLayerStorage;
class ParquetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParquetConfiguration = ParquetConfiguration;
class Partition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Partition = Partition;
class RetentionPeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetentionPeriod = RetentionPeriod;
class SchemaDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaDefinition = SchemaDefinition;
class TimestampPartition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestampPartition = TimestampPartition;
class Datastore extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTAnalytics::Datastore', properties || {});
    }
}
exports.default = Datastore;
Datastore.Column = Column;
Datastore.CustomerManagedS3 = CustomerManagedS3;
Datastore.CustomerManagedS3Storage = CustomerManagedS3Storage;
Datastore.DatastorePartition = DatastorePartition;
Datastore.DatastorePartitions = DatastorePartitions;
Datastore.DatastoreStorage = DatastoreStorage;
Datastore.FileFormatConfiguration = FileFormatConfiguration;
Datastore.IotSiteWiseMultiLayerStorage = IotSiteWiseMultiLayerStorage;
Datastore.ParquetConfiguration = ParquetConfiguration;
Datastore.Partition = Partition;
Datastore.RetentionPeriod = RetentionPeriod;
Datastore.SchemaDefinition = SchemaDefinition;
Datastore.TimestampPartition = TimestampPartition;
