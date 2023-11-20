/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ColumnWildcard {
    ExcludedColumnNames?: List<Value<string>>

    constructor(properties: ColumnWildcard) {
        Object.assign(this, properties)
    }
}

export class DataCellsFilterResource {
    TableName!: Value<string>
    DatabaseName!: Value<string>
    TableCatalogId!: Value<string>
    Name!: Value<string>

    constructor(properties: DataCellsFilterResource) {
        Object.assign(this, properties)
    }
}

export class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>

    constructor(properties: DataLakePrincipal) {
        Object.assign(this, properties)
    }
}

export class DataLocationResource {
    ResourceArn!: Value<string>
    CatalogId!: Value<string>

    constructor(properties: DataLocationResource) {
        Object.assign(this, properties)
    }
}

export class DatabaseResource {
    CatalogId!: Value<string>
    Name!: Value<string>

    constructor(properties: DatabaseResource) {
        Object.assign(this, properties)
    }
}

export class LFTag {
    TagKey?: Value<string>
    TagValues?: List<Value<string>>

    constructor(properties: LFTag) {
        Object.assign(this, properties)
    }
}

export class LFTagKeyResource {
    TagKey!: Value<string>
    CatalogId!: Value<string>
    TagValues!: List<Value<string>>

    constructor(properties: LFTagKeyResource) {
        Object.assign(this, properties)
    }
}

export class LFTagPolicyResource {
    Expression!: List<LFTag>
    ResourceType!: Value<string>
    CatalogId!: Value<string>

    constructor(properties: LFTagPolicyResource) {
        Object.assign(this, properties)
    }
}

export class Resource {
    LFTag?: LFTagKeyResource
    Table?: TableResource
    DataCellsFilter?: DataCellsFilterResource
    TableWithColumns?: TableWithColumnsResource
    LFTagPolicy?: LFTagPolicyResource
    Database?: DatabaseResource
    DataLocation?: DataLocationResource
    Catalog?: {[key: string]: any}

    constructor(properties: Resource) {
        Object.assign(this, properties)
    }
}

export class TableResource {
    DatabaseName!: Value<string>
    CatalogId!: Value<string>
    TableWildcard?: {[key: string]: any}
    Name?: Value<string>

    constructor(properties: TableResource) {
        Object.assign(this, properties)
    }
}

export class TableWithColumnsResource {
    ColumnNames?: List<Value<string>>
    DatabaseName!: Value<string>
    CatalogId!: Value<string>
    Name!: Value<string>
    ColumnWildcard?: ColumnWildcard

    constructor(properties: TableWithColumnsResource) {
        Object.assign(this, properties)
    }
}

export interface PrincipalPermissionsProperties {
    Resource: Resource
    Permissions: List<Value<string>>
    Catalog?: Value<string>
    Principal: DataLakePrincipal
    PermissionsWithGrantOption: List<Value<string>>
}

export default class PrincipalPermissions extends ResourceBase<PrincipalPermissionsProperties> {
    static ColumnWildcard = ColumnWildcard
    static DataCellsFilterResource = DataCellsFilterResource
    static DataLakePrincipal = DataLakePrincipal
    static DataLocationResource = DataLocationResource
    static DatabaseResource = DatabaseResource
    static LFTag = LFTag
    static LFTagKeyResource = LFTagKeyResource
    static LFTagPolicyResource = LFTagPolicyResource
    static Resource = Resource
    static TableResource = TableResource
    static TableWithColumnsResource = TableWithColumnsResource

    constructor(properties: PrincipalPermissionsProperties) {
        super('AWS::LakeFormation::PrincipalPermissions', properties)
    }
}
