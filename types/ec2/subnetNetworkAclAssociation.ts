/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface SubnetNetworkAclAssociationProperties {
    NetworkAclId: Value<string>
    SubnetId: Value<string>
}

export default class SubnetNetworkAclAssociation extends ResourceBase {
    constructor(properties: SubnetNetworkAclAssociationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SubnetNetworkAclAssociation', properties, dependsOn)
    }
}
