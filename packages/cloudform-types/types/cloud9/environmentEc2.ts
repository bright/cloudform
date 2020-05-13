/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Repository {
    PathComponent!: Value<string>
    RepositoryUrl!: Value<string>

    constructor(properties: Repository) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentEC2Properties {
    Repositories?: List<Repository>
    OwnerArn?: Value<string>
    Description?: Value<string>
    ConnectionType?: Value<string>
    AutomaticStopTimeMinutes?: Value<number>
    SubnetId?: Value<string>
    InstanceType: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class EnvironmentEC2 extends ResourceBase<EnvironmentEC2Properties> {
    static Repository = Repository

    constructor(properties: EnvironmentEC2Properties) {
        super('AWS::Cloud9::EnvironmentEC2', properties)
    }
}
