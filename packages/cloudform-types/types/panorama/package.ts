/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StorageLocation {
    RepoPrefixLocation?: Value<string>
    GeneratedPrefixLocation?: Value<string>
    BinaryPrefixLocation?: Value<string>
    Bucket?: Value<string>
    ManifestPrefixLocation?: Value<string>

    constructor(properties: StorageLocation) {
        Object.assign(this, properties)
    }
}

export interface PackageProperties {
    PackageName: Value<string>
    StorageLocation?: StorageLocation
    Tags?: List<ResourceTag>
}

export default class Package extends ResourceBase<PackageProperties> {
    static StorageLocation = StorageLocation

    constructor(properties: PackageProperties) {
        super('AWS::Panorama::Package', properties)
    }
}
