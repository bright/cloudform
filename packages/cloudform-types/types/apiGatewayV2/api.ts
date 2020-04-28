/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Cors {
    AllowOrigins?: List<Value<string>>
    AllowCredentials?: Value<boolean>
    ExposeHeaders?: List<Value<string>>
    AllowHeaders?: List<Value<string>>
    MaxAge?: Value<number>
    AllowMethods?: List<Value<string>>

    constructor(properties: Cors) {
        Object.assign(this, properties)
    }
}

export class BodyS3Location {
    Etag?: Value<string>
    Bucket?: Value<string>
    Version?: Value<string>
    Key?: Value<string>

    constructor(properties: BodyS3Location) {
        Object.assign(this, properties)
    }
}

export interface ApiProperties {
    RouteSelectionExpression?: Value<string>
    BodyS3Location?: BodyS3Location
    Description?: Value<string>
    BasePath?: Value<string>
    FailOnWarnings?: Value<boolean>
    DisableSchemaValidation?: Value<boolean>
    Name?: Value<string>
    Target?: Value<string>
    CredentialsArn?: Value<string>
    CorsConfiguration?: Cors
    Version?: Value<string>
    ProtocolType?: Value<string>
    RouteKey?: Value<string>
    Body?: {[key: string]: any}
    Tags?: {[key: string]: any}
    ApiKeySelectionExpression?: Value<string>
}

export default class Api extends ResourceBase<ApiProperties> {
    static Cors = Cors
    static BodyS3Location = BodyS3Location

    constructor(properties?: ApiProperties) {
        super('AWS::ApiGatewayV2::Api', properties || {})
    }
}
