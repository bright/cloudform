/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface NetworkInterfacePermissionProperties {
    AwsAccountId: Value<string>
    NetworkInterfaceId: Value<string>
    Permission: Value<string>
}

export default class NetworkInterfacePermission extends ResourceBase {
    constructor(properties: NetworkInterfacePermissionProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkInterfacePermission', properties, dependsOn)
    }
}
