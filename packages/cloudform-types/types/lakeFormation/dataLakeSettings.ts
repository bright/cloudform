/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>

    constructor(properties: DataLakePrincipal) {
        Object.assign(this, properties)
    }
}

export type Admins = List<DataLakePrincipal>

export interface DataLakeSettingsProperties {
    Admins?: Admins
    TrustedResourceOwners?: List<Value<string>>
}

export default class DataLakeSettings extends ResourceBase<DataLakeSettingsProperties> {
    static DataLakePrincipal = DataLakePrincipal

    constructor(properties?: DataLakeSettingsProperties) {
        super('AWS::LakeFormation::DataLakeSettings', properties || {})
    }
}
