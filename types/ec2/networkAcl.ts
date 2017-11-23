/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface NetworkAclProperties {
    Tags?: ResourceTag[]
    VpcId: Value<string>
}

export default class NetworkAcl extends ResourceBase {
    constructor(properties: NetworkAclProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkAcl', properties, dependsOn)
    }
}
