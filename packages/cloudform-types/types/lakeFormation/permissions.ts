/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DatabaseResource {
    Name?: Value<string>

    constructor(properties: DatabaseResource) {
        Object.assign(this, properties)
    }
}

export class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>

    constructor(properties: DataLakePrincipal) {
        Object.assign(this, properties)
    }
}

export class TableResource {
    DatabaseName?: Value<string>
    Name?: Value<string>

    constructor(properties: TableResource) {
        Object.assign(this, properties)
    }
}

export class Resource {
    TableResource?: TableResource
    DatabaseResource?: DatabaseResource

    constructor(properties: Resource) {
        Object.assign(this, properties)
    }
}

export interface PermissionsProperties {
    DataLakePrincipal: DataLakePrincipal
    Resource: Resource
    Permissions?: List<Value<string>>
    PermissionsWithGrantOption?: List<Value<string>>
}

export default class Permissions extends ResourceBase<PermissionsProperties> {
    static DatabaseResource = DatabaseResource
    static DataLakePrincipal = DataLakePrincipal
    static TableResource = TableResource
    static Resource = Resource

    constructor(properties: PermissionsProperties) {
        super('AWS::LakeFormation::Permissions', properties)
    }
}
