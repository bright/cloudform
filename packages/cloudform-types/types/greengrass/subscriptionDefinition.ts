/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SubscriptionDefinitionVersion {
    Subscriptions!: List<Subscription>

    constructor(properties: SubscriptionDefinitionVersion) {
        Object.assign(this, properties)
    }
}

export class Subscription {
    Target!: Value<string>
    Id!: Value<string>
    Source!: Value<string>
    Subject!: Value<string>

    constructor(properties: Subscription) {
        Object.assign(this, properties)
    }
}

export interface SubscriptionDefinitionProperties {
    InitialVersion?: SubscriptionDefinitionVersion
    Tags?: {[key: string]: any}
    Name: Value<string>
}

export default class SubscriptionDefinition extends ResourceBase<SubscriptionDefinitionProperties> {
    static SubscriptionDefinitionVersion = SubscriptionDefinitionVersion
    static Subscription = Subscription

    constructor(properties: SubscriptionDefinitionProperties) {
        super('AWS::Greengrass::SubscriptionDefinition', properties)
    }
}
