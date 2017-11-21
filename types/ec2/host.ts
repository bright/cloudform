import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type InstanceType = "*" | "t1.micro" | "t2.nano" | "t2.micro" | "t2.small" | "t2.medium" | "t2.large" | "m1.small" | "m1.medium" | "m1.large" | "m1.xlarge" | "m2.xlarge" | "m2.2xlarge" | "m2.4xlarge" | "m3.medium" | "m3.large" | "m3.xlarge" | "m3.2xlarge" | "m4.large" | "m4.xlarge" | "m4.2xlarge" | "m4.4xlarge" | "m4.10xlarge" | "m4.16xlarge" | "c1.medium" | "c1.xlarge" | "cr1.8xlarge" | "c3.large" | "c3.xlarge" | "c3.2xlarge" | "c3.4xlarge" | "c3.8xlarge" | "c4.large" | "c4.xlarge" | "c4.2xlarge" | "c4.4xlarge" | "c4.8xlarge" | "cc1.4xlarge" | "cc2.8xlarge" | "cg1.4xlarge" | "d2.xlarge" | "d2.2xlarge" | "d2.4xlarge" | "d2.8xlarge" | "g2.2xlarge" | "g2.8xlarge" | "hi1.4xlarge" | "hs1.8xlarge" | "i2.xlarge" | "i2.2xlarge" | "i2.4xlarge" | "i2.8xlarge" | "p2.xlarge" | "p2.8xlarge" | "p2.16xlarge" | "r3.large" | "r3.xlarge" | "r3.2xlarge" | "r3.4xlarge" | "r3.8xlarge" | "x1.32xlarge"

export interface HostProperties {
    AutoPlacement?: Value<string>
    AvailabilityZone: Value<string>
    InstanceType?: Value<InstanceType>
}

export default class Host extends ResourceBase {
    constructor(properties: HostProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Host', properties, dependsOn)
    }
}