/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Logging {
    AccessLog?: AccessLog

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export class ServiceDiscovery {
    DNS?: DnsServiceDiscovery
    AWSCloudMap?: AwsCloudMapServiceDiscovery

    constructor(properties: ServiceDiscovery) {
        Object.assign(this, properties)
    }
}

export class FileAccessLog {
    Path!: Value<string>

    constructor(properties: FileAccessLog) {
        Object.assign(this, properties)
    }
}

export class AwsCloudMapInstanceAttribute {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: AwsCloudMapInstanceAttribute) {
        Object.assign(this, properties)
    }
}

export class Backend {
    VirtualService?: VirtualServiceBackend

    constructor(properties: Backend) {
        Object.assign(this, properties)
    }
}

export class PortMapping {
    Port!: Value<number>
    Protocol!: Value<string>

    constructor(properties: PortMapping) {
        Object.assign(this, properties)
    }
}

export class VirtualServiceBackend {
    VirtualServiceName!: Value<string>

    constructor(properties: VirtualServiceBackend) {
        Object.assign(this, properties)
    }
}

export class HealthCheck {
    Path?: Value<string>
    UnhealthyThreshold!: Value<number>
    Port?: Value<number>
    HealthyThreshold!: Value<number>
    TimeoutMillis!: Value<number>
    Protocol!: Value<string>
    IntervalMillis!: Value<number>

    constructor(properties: HealthCheck) {
        Object.assign(this, properties)
    }
}

export class AwsCloudMapServiceDiscovery {
    NamespaceName!: Value<string>
    ServiceName!: Value<string>
    Attributes?: List<AwsCloudMapInstanceAttribute>

    constructor(properties: AwsCloudMapServiceDiscovery) {
        Object.assign(this, properties)
    }
}

export class AccessLog {
    File?: FileAccessLog

    constructor(properties: AccessLog) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeSpec {
    Logging?: Logging
    Backends?: List<Backend>
    Listeners?: List<Listener>
    ServiceDiscovery?: ServiceDiscovery

    constructor(properties: VirtualNodeSpec) {
        Object.assign(this, properties)
    }
}

export class Listener {
    HealthCheck?: HealthCheck
    PortMapping!: PortMapping

    constructor(properties: Listener) {
        Object.assign(this, properties)
    }
}

export class DnsServiceDiscovery {
    Hostname!: Value<string>

    constructor(properties: DnsServiceDiscovery) {
        Object.assign(this, properties)
    }
}

export interface VirtualNodeProperties {
    MeshName: Value<string>
    Spec: VirtualNodeSpec
    VirtualNodeName: Value<string>
    Tags?: List<ResourceTag>
}

export default class VirtualNode extends ResourceBase<VirtualNodeProperties> {
    static Logging = Logging
    static ServiceDiscovery = ServiceDiscovery
    static FileAccessLog = FileAccessLog
    static AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute
    static Backend = Backend
    static PortMapping = PortMapping
    static VirtualServiceBackend = VirtualServiceBackend
    static HealthCheck = HealthCheck
    static AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery
    static AccessLog = AccessLog
    static VirtualNodeSpec = VirtualNodeSpec
    static Listener = Listener
    static DnsServiceDiscovery = DnsServiceDiscovery

    constructor(properties: VirtualNodeProperties) {
        super('AWS::AppMesh::VirtualNode', properties)
    }
}
