/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ProvisioningParameter {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: ProvisioningParameter) {
        Object.assign(this, properties)
    }
}

export class ProvisioningPreferences {
    StackSetAccounts?: List<Value<string>>
    StackSetFailureToleranceCount?: Value<number>
    StackSetFailureTolerancePercentage?: Value<number>
    StackSetMaxConcurrencyCount?: Value<number>
    StackSetMaxConcurrencyPercentage?: Value<number>
    StackSetOperationType?: Value<string>
    StackSetRegions?: List<Value<string>>

    constructor(properties: ProvisioningPreferences) {
        Object.assign(this, properties)
    }
}

export interface CloudFormationProvisionedProductProperties {
    AcceptLanguage?: Value<string>
    NotificationArns?: List<Value<string>>
    PathId?: Value<string>
    ProductId?: Value<string>
    ProductName?: Value<string>
    ProvisionedProductName?: Value<string>
    ProvisioningArtifactId?: Value<string>
    ProvisioningArtifactName?: Value<string>
    ProvisioningParameters?: List<ProvisioningParameter>
    ProvisioningPreferences?: ProvisioningPreferences
    Tags?: List<ResourceTag>
}

export default class CloudFormationProvisionedProduct extends ResourceBase<CloudFormationProvisionedProductProperties> {
    static ProvisioningParameter = ProvisioningParameter
    static ProvisioningPreferences = ProvisioningPreferences

    constructor(properties?: CloudFormationProvisionedProductProperties) {
        super('AWS::ServiceCatalog::CloudFormationProvisionedProduct', properties || {})
    }
}
