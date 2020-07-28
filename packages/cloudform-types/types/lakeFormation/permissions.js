"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.TableWithColumnsResource = exports.TableResource = exports.DataLakePrincipal = exports.DatabaseResource = exports.ColumnWildcard = exports.DataLocationResource = void 0;
const resource_1 = require("../resource");
class DataLocationResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataLocationResource = DataLocationResource;
class ColumnWildcard {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnWildcard = ColumnWildcard;
class DatabaseResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatabaseResource = DatabaseResource;
class DataLakePrincipal {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataLakePrincipal = DataLakePrincipal;
class TableResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableResource = TableResource;
class TableWithColumnsResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableWithColumnsResource = TableWithColumnsResource;
class Resource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Resource = Resource;
class Permissions extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::LakeFormation::Permissions', properties);
    }
}
exports.default = Permissions;
Permissions.DataLocationResource = DataLocationResource;
Permissions.ColumnWildcard = ColumnWildcard;
Permissions.DatabaseResource = DatabaseResource;
Permissions.DataLakePrincipal = DataLakePrincipal;
Permissions.TableResource = TableResource;
Permissions.TableWithColumnsResource = TableWithColumnsResource;
Permissions.Resource = Resource;
