/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EndpointDetails {
    SecurityDetails?: SecurityDetails
    Endpoint?: DataflowEndpoint

    constructor(properties: EndpointDetails) {
        Object.assign(this, properties)
    }
}

export class DataflowEndpoint {
    Name?: Value<string>
    Address?: SocketAddress

    constructor(properties: DataflowEndpoint) {
        Object.assign(this, properties)
    }
}

export class SecurityDetails {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    RoleArn?: Value<string>

    constructor(properties: SecurityDetails) {
        Object.assign(this, properties)
    }
}

export class SocketAddress {
    Name?: Value<string>
    Port?: Value<number>

    constructor(properties: SocketAddress) {
        Object.assign(this, properties)
    }
}

export interface DataflowEndpointGroupProperties {
    EndpointDetails: List<EndpointDetails>
    Tags?: List<ResourceTag>
}

export default class DataflowEndpointGroup extends ResourceBase<DataflowEndpointGroupProperties> {
    static EndpointDetails = EndpointDetails
    static DataflowEndpoint = DataflowEndpoint
    static SecurityDetails = SecurityDetails
    static SocketAddress = SocketAddress

    constructor(properties: DataflowEndpointGroupProperties) {
        super('AWS::GroundStation::DataflowEndpointGroup', properties)
    }
}
