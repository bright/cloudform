/* Generated from: 
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributeMapItems {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: AttributeMapItems) {
        Object.assign(this, properties)
    }
}

export class FederationParameters {
    AttributeMap?: List<AttributeMapItems>
    FederationProviderName?: Value<string>
    SamlMetadataURL?: Value<string>
    FederationURN?: Value<string>
    SamlMetadataDocument?: Value<string>
    ApplicationCallBackURL?: Value<string>

    constructor(properties: FederationParameters) {
        Object.assign(this, properties)
    }
}

export class SuperuserParameters {
    FirstName?: Value<string>
    LastName?: Value<string>
    EmailAddress?: Value<string>

    constructor(properties: SuperuserParameters) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentProperties {
    Description?: Value<string>
    KmsKeyId?: Value<string>
    FederationParameters?: FederationParameters
    FederationMode?: Value<string>
    SuperuserParameters?: SuperuserParameters
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Environment extends ResourceBase<EnvironmentProperties> {
    static AttributeMapItems = AttributeMapItems
    static FederationParameters = FederationParameters
    static SuperuserParameters = SuperuserParameters

    constructor(properties: EnvironmentProperties) {
        super('AWS::FinSpace::Environment', properties)
    }
}
