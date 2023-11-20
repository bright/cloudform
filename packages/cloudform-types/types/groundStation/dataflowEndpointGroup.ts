/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AwsGroundStationAgentEndpoint {
    AgentStatus?: Value<string>
    IngressAddress?: RangedConnectionDetails
    AuditResults?: Value<string>
    Name?: Value<string>
    EgressAddress?: ConnectionDetails

    constructor(properties: AwsGroundStationAgentEndpoint) {
        Object.assign(this, properties)
    }
}

export class ConnectionDetails {
    SocketAddress?: SocketAddress
    Mtu?: Value<number>

    constructor(properties: ConnectionDetails) {
        Object.assign(this, properties)
    }
}

export class DataflowEndpoint {
    Address?: SocketAddress
    Name?: Value<string>
    Mtu?: Value<number>

    constructor(properties: DataflowEndpoint) {
        Object.assign(this, properties)
    }
}

export class EndpointDetails {
    Endpoint?: DataflowEndpoint
    AwsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint
    SecurityDetails?: SecurityDetails

    constructor(properties: EndpointDetails) {
        Object.assign(this, properties)
    }
}

export class IntegerRange {
    Minimum?: Value<number>
    Maximum?: Value<number>

    constructor(properties: IntegerRange) {
        Object.assign(this, properties)
    }
}

export class RangedConnectionDetails {
    SocketAddress?: RangedSocketAddress
    Mtu?: Value<number>

    constructor(properties: RangedConnectionDetails) {
        Object.assign(this, properties)
    }
}

export class RangedSocketAddress {
    PortRange?: IntegerRange
    Name?: Value<string>

    constructor(properties: RangedSocketAddress) {
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
    Port?: Value<number>
    Name?: Value<string>

    constructor(properties: SocketAddress) {
        Object.assign(this, properties)
    }
}

export interface DataflowEndpointGroupProperties {
    ContactPostPassDurationSeconds?: Value<number>
    EndpointDetails: List<EndpointDetails>
    Tags?: List<ResourceTag>
    ContactPrePassDurationSeconds?: Value<number>
}

export default class DataflowEndpointGroup extends ResourceBase<DataflowEndpointGroupProperties> {
    static AwsGroundStationAgentEndpoint = AwsGroundStationAgentEndpoint
    static ConnectionDetails = ConnectionDetails
    static DataflowEndpoint = DataflowEndpoint
    static EndpointDetails = EndpointDetails
    static IntegerRange = IntegerRange
    static RangedConnectionDetails = RangedConnectionDetails
    static RangedSocketAddress = RangedSocketAddress
    static SecurityDetails = SecurityDetails
    static SocketAddress = SocketAddress

    constructor(properties: DataflowEndpointGroupProperties) {
        super('AWS::GroundStation::DataflowEndpointGroup', properties)
    }
}
