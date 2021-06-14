/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class MethodResponse {
    StatusCode!: Value<string>

    constructor(properties: MethodResponse) {
        Object.assign(this, properties)
    }
}

export class Integration {
    CacheNamespace?: Value<string>
    ConnectionId?: Value<string>
    ConnectionType?: Value<string>
    ContentHandling?: Value<string>
    Credentials?: Value<string>
    IntegrationHttpMethod?: Value<string>
    PassthroughBehavior?: Value<string>
    TimeoutInMillis?: Value<number>
    Type?: Value<string>
    Uri?: Value<string>

    constructor(properties: Integration) {
        Object.assign(this, properties)
    }
}

export class IntegrationResponse {
    ContentHandling?: Value<string>
    SelectionPattern?: Value<string>
    StatusCode!: Value<string>

    constructor(properties: IntegrationResponse) {
        Object.assign(this, properties)
    }
}

export interface MethodProperties {
    ApiKeyRequired?: Value<boolean>
    AuthorizationType?: Value<string>
    AuthorizerId?: Value<string>
    HttpMethod: Value<string>
    OperationName?: Value<string>
    RequestValidatorId?: Value<string>
    ResourceId: Value<string>
    RestApiId: Value<string>
}

export default class Method extends ResourceBase<MethodProperties> {
    static MethodResponse = MethodResponse
    static Integration = Integration
    static IntegrationResponse = IntegrationResponse

    constructor(properties: MethodProperties) {
        super('AWS::ApiGateway::Method', properties)
    }
}
