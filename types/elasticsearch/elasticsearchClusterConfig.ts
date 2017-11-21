import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type DedicatedMasterType = "*" | "t2.micro.elasticsearch" | "t2.small.elasticsearch" | "t2.medium.elasticsearch" | "m3.medium.elasticsearch" | "m3.large.elasticsearch" | "m3.xlarge.elasticsearch" | "m3.2xlarge.elasticsearch" | "r3.large.elasticsearch" | "r3.xlarge.elasticsearch" | "r3.2xlarge.elasticsearch" | "r3.4xlarge.elasticsearch" | "r3.8xlarge.elasticsearch" | "i2.xlarge.elasticsearch" | "i2.2xlarge.elasticsearch"
export type InstanceType = "*" | "t2.micro.elasticsearch" | "t2.small.elasticsearch" | "t2.medium.elasticsearch" | "m3.medium.elasticsearch" | "m3.large.elasticsearch" | "m3.xlarge.elasticsearch" | "m3.2xlarge.elasticsearch" | "r3.large.elasticsearch" | "r3.xlarge.elasticsearch" | "r3.2xlarge.elasticsearch" | "r3.4xlarge.elasticsearch" | "r3.8xlarge.elasticsearch" | "i2.xlarge.elasticsearch" | "i2.2xlarge.elasticsearch"

export interface ElasticsearchClusterConfigProperties {
    DedicatedMasterCount?: Value<number>
    DedicatedMasterEnabled?: Value<boolean>
    DedicatedMasterType?: Value<DedicatedMasterType>
    InstanceCount?: Value<number>
    InstanceType?: Value<InstanceType>
    ZoneAwarenessEnabled?: Value<boolean>
}

export default class ElasticsearchClusterConfig extends ResourceBase {
    constructor(properties: ElasticsearchClusterConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Elasticsearch::ElasticsearchClusterConfig', properties, dependsOn)
    }
}