"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Column {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Column = Column;
class TableInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableInput = TableInput;
class SerdeInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SerdeInfo = SerdeInfo;
class SchemaId {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaId = SchemaId;
class Order {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Order = Order;
class SkewedInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SkewedInfo = SkewedInfo;
class StorageDescriptor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageDescriptor = StorageDescriptor;
class SchemaReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaReference = SchemaReference;
class TableIdentifier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableIdentifier = TableIdentifier;
class Table extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Glue::Table', properties);
    }
}
exports.default = Table;
Table.Column = Column;
Table.TableInput = TableInput;
Table.SerdeInfo = SerdeInfo;
Table.SchemaId = SchemaId;
Table.Order = Order;
Table.SkewedInfo = SkewedInfo;
Table.StorageDescriptor = StorageDescriptor;
Table.SchemaReference = SchemaReference;
Table.TableIdentifier = TableIdentifier;
