/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ReferenceItem {
    ReferenceArn!: Value<string>

    constructor(properties: ReferenceItem) {
        Object.assign(this, properties)
    }
}

export class SseConfig {
    Type!: Value<string>
    KeyArn?: Value<string>

    constructor(properties: SseConfig) {
        Object.assign(this, properties)
    }
}

export interface VariantStoreProperties {
    Description?: Value<string>
    Reference: ReferenceItem
    SseConfig?: SseConfig
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
}

export default class VariantStore extends ResourceBase<VariantStoreProperties> {
    static ReferenceItem = ReferenceItem
    static SseConfig = SseConfig

    constructor(properties: VariantStoreProperties) {
        super('AWS::Omics::VariantStore', properties)
    }
}
