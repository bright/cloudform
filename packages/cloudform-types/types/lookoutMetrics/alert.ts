/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    LambdaConfiguration?: LambdaConfiguration
    SNSConfiguration?: SNSConfiguration

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class LambdaConfiguration {
    LambdaArn!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: LambdaConfiguration) {
        Object.assign(this, properties)
    }
}

export class SNSConfiguration {
    SnsTopicArn!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: SNSConfiguration) {
        Object.assign(this, properties)
    }
}

export interface AlertProperties {
    AlertDescription?: Value<string>
    Action: Action
    AlertName?: Value<string>
    AlertSensitivityThreshold: Value<number>
    AnomalyDetectorArn: Value<string>
}

export default class Alert extends ResourceBase<AlertProperties> {
    static Action = Action
    static LambdaConfiguration = LambdaConfiguration
    static SNSConfiguration = SNSConfiguration

    constructor(properties: AlertProperties) {
        super('AWS::LookoutMetrics::Alert', properties)
    }
}
