/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class WebhookFilterRule {
    JsonPath!: Value<string>
    MatchEquals?: Value<string>

    constructor(properties: WebhookFilterRule) {
        Object.assign(this, properties)
    }
}

export class WebhookAuthConfiguration {
    AllowedIPRange?: Value<string>
    SecretToken?: Value<string>

    constructor(properties: WebhookAuthConfiguration) {
        Object.assign(this, properties)
    }
}

export interface WebhookProperties {
    AuthenticationConfiguration: WebhookAuthConfiguration
    Filters: List<WebhookFilterRule>
    Authentication: Value<string>
    TargetPipeline: Value<string>
    TargetAction: Value<string>
    Name?: Value<string>
    TargetPipelineVersion: Value<number>
    RegisterWithThirdParty?: Value<boolean>
}

export default class Webhook extends ResourceBase {
    static WebhookFilterRule = WebhookFilterRule
    static WebhookAuthConfiguration = WebhookAuthConfiguration

    constructor(properties?: WebhookProperties) {
        super('AWS::CodePipeline::Webhook', properties)
    }
}
