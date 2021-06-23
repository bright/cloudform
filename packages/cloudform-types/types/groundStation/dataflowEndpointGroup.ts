/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DataflowEndpoint {
    Name?: Value<string>
    Address?: SocketAddress
    Mtu?: Value<number>

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

export class EndpointDetails {
    SecurityDetails?: SecurityDetails
    Endpoint?: DataflowEndpoint

    constructor(properties: EndpointDetails) {
        Object.assign(this, properties)
    }
}

export interface DataflowEndpointGroupProperties {
    EndpointDetails: List<EndpointDetails>
    Tags?: List<ResourceTag>
}

export default class DataflowEndpointGroup extends ResourceBase<DataflowEndpointGroupProperties> {
    static DataflowEndpoint = DataflowEndpoint
    static SecurityDetails = SecurityDetails
    static SocketAddress = SocketAddress
    static EndpointDetails = EndpointDetails

    constructor(properties: DataflowEndpointGroupProperties) {
        super('AWS::GroundStation::DataflowEndpointGroup', properties)
    }
}
