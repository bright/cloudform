/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DeviceShadowEnrich {
    Attribute?: Value<string>
    Next?: Value<string>
    ThingName?: Value<string>
    RoleArn?: Value<string>
    Name?: Value<string>

    constructor(properties: DeviceShadowEnrich) {
        Object.assign(this, properties)
    }
}

export class SelectAttributes {
    Next?: Value<string>
    Attributes?: List<Value<string>>
    Name?: Value<string>

    constructor(properties: SelectAttributes) {
        Object.assign(this, properties)
    }
}

export class RemoveAttributes {
    Next?: Value<string>
    Attributes?: List<Value<string>>
    Name?: Value<string>

    constructor(properties: RemoveAttributes) {
        Object.assign(this, properties)
    }
}

export class Datastore {
    DatastoreName?: Value<string>
    Name?: Value<string>

    constructor(properties: Datastore) {
        Object.assign(this, properties)
    }
}

export class DeviceRegistryEnrich {
    Attribute?: Value<string>
    Next?: Value<string>
    ThingName?: Value<string>
    RoleArn?: Value<string>
    Name?: Value<string>

    constructor(properties: DeviceRegistryEnrich) {
        Object.assign(this, properties)
    }
}

export class Lambda {
    BatchSize?: Value<number>
    Next?: Value<string>
    LambdaName?: Value<string>
    Name?: Value<string>

    constructor(properties: Lambda) {
        Object.assign(this, properties)
    }
}

export class Channel {
    ChannelName?: Value<string>
    Next?: Value<string>
    Name?: Value<string>

    constructor(properties: Channel) {
        Object.assign(this, properties)
    }
}

export class Filter {
    Filter?: Value<string>
    Next?: Value<string>
    Name?: Value<string>

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class Activity {
    SelectAttributes?: SelectAttributes
    Datastore?: Datastore
    Filter?: Filter
    AddAttributes?: AddAttributes
    Channel?: Channel
    DeviceShadowEnrich?: DeviceShadowEnrich
    Math?: Math
    Lambda?: Lambda
    DeviceRegistryEnrich?: DeviceRegistryEnrich
    RemoveAttributes?: RemoveAttributes

    constructor(properties: Activity) {
        Object.assign(this, properties)
    }
}

export class Math {
    Attribute?: Value<string>
    Next?: Value<string>
    Math?: Value<string>
    Name?: Value<string>

    constructor(properties: Math) {
        Object.assign(this, properties)
    }
}

export class AddAttributes {
    Next?: Value<string>
    Attributes?: {[key: string]: any}
    Name?: Value<string>

    constructor(properties: AddAttributes) {
        Object.assign(this, properties)
    }
}

export interface PipelineProperties {
    PipelineName?: Value<string>
    Tags?: List<ResourceTag>
    PipelineActivities: List<Activity>
}

export default class Pipeline extends ResourceBase<PipelineProperties> {
    static DeviceShadowEnrich = DeviceShadowEnrich
    static SelectAttributes = SelectAttributes
    static RemoveAttributes = RemoveAttributes
    static Datastore = Datastore
    static DeviceRegistryEnrich = DeviceRegistryEnrich
    static Lambda = Lambda
    static Channel = Channel
    static Filter = Filter
    static Activity = Activity
    static Math = Math
    static AddAttributes = AddAttributes

    constructor(properties: PipelineProperties) {
        super('AWS::IoTAnalytics::Pipeline', properties)
    }
}
