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

export class ManifestOverridesPayload {
    PayloadData?: Value<string>

    constructor(properties: ManifestOverridesPayload) {
        Object.assign(this, properties)
    }
}

export class ManifestPayload {
    PayloadData?: Value<string>

    constructor(properties: ManifestPayload) {
        Object.assign(this, properties)
    }
}

export interface ApplicationInstanceProperties {
    DefaultRuntimeContextDevice: Value<string>
    Description?: Value<string>
    ApplicationInstanceIdToReplace?: Value<string>
    ManifestOverridesPayload?: ManifestOverridesPayload
    RuntimeRoleArn?: Value<string>
    ManifestPayload: ManifestPayload
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class ApplicationInstance extends ResourceBase<ApplicationInstanceProperties> {
    static ManifestOverridesPayload = ManifestOverridesPayload
    static ManifestPayload = ManifestPayload

    constructor(properties: ApplicationInstanceProperties) {
        super('AWS::Panorama::ApplicationInstance', properties)
    }
}
