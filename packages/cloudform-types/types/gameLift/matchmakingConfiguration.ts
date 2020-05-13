/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class GameProperty {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: GameProperty) {
        Object.assign(this, properties)
    }
}

export interface MatchmakingConfigurationProperties {
    GameProperties?: List<GameProperty>
    GameSessionData?: Value<string>
    Description?: Value<string>
    AcceptanceTimeoutSeconds?: Value<number>
    NotificationTarget?: Value<string>
    CustomEventData?: Value<string>
    Name: Value<string>
    AdditionalPlayerCount?: Value<number>
    BackfillMode?: Value<string>
    RequestTimeoutSeconds: Value<number>
    AcceptanceRequired: Value<boolean>
    RuleSetName: Value<string>
    GameSessionQueueArns: List<Value<string>>
}

export default class MatchmakingConfiguration extends ResourceBase<MatchmakingConfigurationProperties> {
    static GameProperty = GameProperty

    constructor(properties: MatchmakingConfigurationProperties) {
        super('AWS::GameLift::MatchmakingConfiguration', properties)
    }
}
