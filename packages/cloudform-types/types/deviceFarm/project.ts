/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VpcConfig {
    VpcId!: Value<string>
    SecurityGroupIds!: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface ProjectProperties {
    DefaultJobTimeoutMinutes?: Value<number>
    VpcConfig?: VpcConfig
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Project extends ResourceBase<ProjectProperties> {
    static VpcConfig = VpcConfig

    constructor(properties: ProjectProperties) {
        super('AWS::DeviceFarm::Project', properties)
    }
}
