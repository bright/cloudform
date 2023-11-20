/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AgentPermissions {
    Principals!: List<Value<string>>

    constructor(properties: AgentPermissions) {
        Object.assign(this, properties)
    }
}

export class Channel {
    channelUri!: Value<string>
    channelId?: Value<string>

    constructor(properties: Channel) {
        Object.assign(this, properties)
    }
}

export interface ProfilingGroupProperties {
    AnomalyDetectionNotificationConfiguration?: List<Channel>
    AgentPermissions?: AgentPermissions
    ComputePlatform?: Value<string>
    ProfilingGroupName: Value<string>
    Tags?: List<ResourceTag>
}

export default class ProfilingGroup extends ResourceBase<ProfilingGroupProperties> {
    static AgentPermissions = AgentPermissions
    static Channel = Channel

    constructor(properties: ProfilingGroupProperties) {
        super('AWS::CodeGuruProfiler::ProfilingGroup', properties)
    }
}
