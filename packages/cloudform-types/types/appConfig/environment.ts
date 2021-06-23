/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Monitors {
    AlarmArn?: Value<string>
    AlarmRoleArn?: Value<string>

    constructor(properties: Monitors) {
        Object.assign(this, properties)
    }
}

export class Tags {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: Tags) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentProperties {
    Description?: Value<string>
    Monitors?: List<Monitors>
    ApplicationId: Value<string>
    Tags?: List<Tags>
    Name: Value<string>
}

export default class Environment extends ResourceBase<EnvironmentProperties> {
    static Monitors = Monitors
    static Tags = Tags

    constructor(properties: EnvironmentProperties) {
        super('AWS::AppConfig::Environment', properties)
    }
}
