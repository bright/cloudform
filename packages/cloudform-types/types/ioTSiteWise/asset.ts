/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AssetHierarchy {
    LogicalId!: Value<string>
    ChildAssetId!: Value<string>

    constructor(properties: AssetHierarchy) {
        Object.assign(this, properties)
    }
}

export class AssetProperty {
    LogicalId!: Value<string>
    Alias?: Value<string>
    NotificationState?: Value<string>

    constructor(properties: AssetProperty) {
        Object.assign(this, properties)
    }
}

export interface AssetProperties {
    AssetModelId: Value<string>
    AssetName: Value<string>
}

export default class Asset extends ResourceBase<AssetProperties> {
    static AssetHierarchy = AssetHierarchy
    static AssetProperty = AssetProperty

    constructor(properties: AssetProperties) {
        super('AWS::IoTSiteWise::Asset', properties)
    }
}
