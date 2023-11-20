/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AcknowledgeFlow {
    Enabled?: Value<boolean>

    constructor(properties: AcknowledgeFlow) {
        Object.assign(this, properties)
    }
}

export class AlarmAction {
    DynamoDBv2?: DynamoDBv2
    IotEvents?: IotEvents
    IotSiteWise?: IotSiteWise
    Sqs?: Sqs
    Firehose?: Firehose
    DynamoDB?: DynamoDB
    IotTopicPublish?: IotTopicPublish
    Sns?: Sns
    Lambda?: Lambda

    constructor(properties: AlarmAction) {
        Object.assign(this, properties)
    }
}

export class AlarmCapabilities {
    AcknowledgeFlow?: AcknowledgeFlow
    InitializationConfiguration?: InitializationConfiguration

    constructor(properties: AlarmCapabilities) {
        Object.assign(this, properties)
    }
}

export class AlarmEventActions {
    AlarmActions?: List<AlarmAction>

    constructor(properties: AlarmEventActions) {
        Object.assign(this, properties)
    }
}

export class AlarmRule {
    SimpleRule?: SimpleRule

    constructor(properties: AlarmRule) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyTimestamp {
    TimeInSeconds!: Value<string>
    OffsetInNanos?: Value<string>

    constructor(properties: AssetPropertyTimestamp) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyValue {
    Quality?: Value<string>
    Value!: AssetPropertyVariant
    Timestamp?: AssetPropertyTimestamp

    constructor(properties: AssetPropertyValue) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyVariant {
    DoubleValue?: Value<string>
    BooleanValue?: Value<string>
    IntegerValue?: Value<string>
    StringValue?: Value<string>

    constructor(properties: AssetPropertyVariant) {
        Object.assign(this, properties)
    }
}

export class DynamoDB {
    TableName!: Value<string>
    PayloadField?: Value<string>
    RangeKeyField?: Value<string>
    HashKeyField!: Value<string>
    RangeKeyValue?: Value<string>
    RangeKeyType?: Value<string>
    HashKeyType?: Value<string>
    HashKeyValue!: Value<string>
    Payload?: Payload
    Operation?: Value<string>

    constructor(properties: DynamoDB) {
        Object.assign(this, properties)
    }
}

export class DynamoDBv2 {
    TableName!: Value<string>
    Payload?: Payload

    constructor(properties: DynamoDBv2) {
        Object.assign(this, properties)
    }
}

export class Firehose {
    DeliveryStreamName!: Value<string>
    Payload?: Payload
    Separator?: Value<string>

    constructor(properties: Firehose) {
        Object.assign(this, properties)
    }
}

export class InitializationConfiguration {
    DisabledOnInitialization!: Value<boolean>

    constructor(properties: InitializationConfiguration) {
        Object.assign(this, properties)
    }
}

export class IotEvents {
    InputName!: Value<string>
    Payload?: Payload

    constructor(properties: IotEvents) {
        Object.assign(this, properties)
    }
}

export class IotSiteWise {
    EntryId?: Value<string>
    PropertyAlias?: Value<string>
    PropertyValue?: AssetPropertyValue
    AssetId?: Value<string>
    PropertyId?: Value<string>

    constructor(properties: IotSiteWise) {
        Object.assign(this, properties)
    }
}

export class IotTopicPublish {
    MqttTopic!: Value<string>
    Payload?: Payload

    constructor(properties: IotTopicPublish) {
        Object.assign(this, properties)
    }
}

export class Lambda {
    FunctionArn!: Value<string>
    Payload?: Payload

    constructor(properties: Lambda) {
        Object.assign(this, properties)
    }
}

export class Payload {
    ContentExpression!: Value<string>
    Type!: Value<string>

    constructor(properties: Payload) {
        Object.assign(this, properties)
    }
}

export class SimpleRule {
    ComparisonOperator!: Value<string>
    InputProperty!: Value<string>
    Threshold!: Value<string>

    constructor(properties: SimpleRule) {
        Object.assign(this, properties)
    }
}

export class Sns {
    TargetArn!: Value<string>
    Payload?: Payload

    constructor(properties: Sns) {
        Object.assign(this, properties)
    }
}

export class Sqs {
    UseBase64?: Value<boolean>
    Payload?: Payload
    QueueUrl!: Value<string>

    constructor(properties: Sqs) {
        Object.assign(this, properties)
    }
}

export interface AlarmModelProperties {
    AlarmRule: AlarmRule
    AlarmModelName?: Value<string>
    AlarmModelDescription?: Value<string>
    Severity?: Value<number>
    AlarmCapabilities?: AlarmCapabilities
    RoleArn: Value<string>
    Key?: Value<string>
    AlarmEventActions?: AlarmEventActions
    Tags?: List<ResourceTag>
}

export default class AlarmModel extends ResourceBase<AlarmModelProperties> {
    static AcknowledgeFlow = AcknowledgeFlow
    static AlarmAction = AlarmAction
    static AlarmCapabilities = AlarmCapabilities
    static AlarmEventActions = AlarmEventActions
    static AlarmRule = AlarmRule
    static AssetPropertyTimestamp = AssetPropertyTimestamp
    static AssetPropertyValue = AssetPropertyValue
    static AssetPropertyVariant = AssetPropertyVariant
    static DynamoDB = DynamoDB
    static DynamoDBv2 = DynamoDBv2
    static Firehose = Firehose
    static InitializationConfiguration = InitializationConfiguration
    static IotEvents = IotEvents
    static IotSiteWise = IotSiteWise
    static IotTopicPublish = IotTopicPublish
    static Lambda = Lambda
    static Payload = Payload
    static SimpleRule = SimpleRule
    static Sns = Sns
    static Sqs = Sqs

    constructor(properties: AlarmModelProperties) {
        super('AWS::IoTEvents::AlarmModel', properties)
    }
}
