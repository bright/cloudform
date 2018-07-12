/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VpcConfig {
    Subnets!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export class ContainerDefinition {
    ContainerHostname?: Value<string>
    Environment?: any
    ModelDataUrl?: Value<string>
    Image!: Value<string>

    constructor(properties: ContainerDefinition) {
        Object.assign(this, properties)
    }
}

export interface ModelProperties {
    ExecutionRoleArn: Value<string>
    PrimaryContainer: ContainerDefinition
    ModelName?: Value<string>
    VpcConfig?: VpcConfig
    Tags?: ResourceTag[]
}

export default class Model extends ResourceBase {
    static VpcConfig = VpcConfig
    static ContainerDefinition = ContainerDefinition

    constructor(properties?: ModelProperties) {
        super('AWS::SageMaker::Model', properties)
    }
}
