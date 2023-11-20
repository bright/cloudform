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
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ClientAuthentication {
    Sasl!: Sasl

    constructor(properties: ClientAuthentication) {
        Object.assign(this, properties)
    }
}

export class Iam {
    Enabled!: Value<boolean>

    constructor(properties: Iam) {
        Object.assign(this, properties)
    }
}

export class Sasl {
    Iam!: Iam

    constructor(properties: Sasl) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    SecurityGroups?: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface ServerlessClusterProperties {
    VpcConfigs: List<VpcConfig>
    ClusterName: Value<string>
    ClientAuthentication: ClientAuthentication
    Tags?: {[key: string]: Value<string>}
}

export default class ServerlessCluster extends ResourceBase<ServerlessClusterProperties> {
    static ClientAuthentication = ClientAuthentication
    static Iam = Iam
    static Sasl = Sasl
    static VpcConfig = VpcConfig

    constructor(properties: ServerlessClusterProperties) {
        super('AWS::MSK::ServerlessCluster', properties)
    }
}
