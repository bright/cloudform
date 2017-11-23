/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface RouteTableProperties {
    Tags?: ResourceTag[]
    VpcId: Value<string>
}

export default class RouteTable extends ResourceBase {
    constructor(properties: RouteTableProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::RouteTable', properties, dependsOn)
    }
}
