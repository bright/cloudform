import {ResourceBase} from '../resource'
import {Value} from '../internal'
import CloudwatchAlarm from './cloudwatchAlarm'
import CloudwatchMetric from './cloudwatchMetric'
import DynamoDB from './dynamoDb'
import Elasticsearch from './elasticsearch'
import Firehose from './firehose'
import Kinesis from './kinesis'
import Lambda from './lambda'
import Republish from './republish'
import S3 from './s3'
import Sns from './sns'
import Sqs from './sqs'



export interface ActionProperties {
    CloudwatchAlarm?: CloudwatchAlarm
    CloudwatchMetric?: CloudwatchMetric
    DynamoDB?: DynamoDB
    Elasticsearch?: Elasticsearch
    Firehose?: Firehose
    Kinesis?: Kinesis
    Lambda?: Lambda
    Republish?: Republish
    S3?: S3
    Sns?: Sns
    Sqs?: Sqs
}

export default class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::Action', properties, dependsOn)
    }
}