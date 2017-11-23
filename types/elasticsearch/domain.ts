/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface VPCOptionsProperties {
    SecurityGroupIds?: Value<string>[]
    SubnetIds?: Value<string>[]
}

export class VPCOptions extends ResourceBase {
    constructor(properties: VPCOptionsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Elasticsearch::VPCOptions', properties, dependsOn)
    }
}

export interface ElasticsearchClusterConfigProperties {
    DedicatedMasterCount?: Value<number>
    DedicatedMasterEnabled?: Value<boolean>
    DedicatedMasterType?: Value<string>
    InstanceCount?: Value<number>
    InstanceType?: Value<string>
    ZoneAwarenessEnabled?: Value<boolean>
}

export class ElasticsearchClusterConfig extends ResourceBase {
    constructor(properties: ElasticsearchClusterConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Elasticsearch::ElasticsearchClusterConfig', properties, dependsOn)
    }
}

export interface SnapshotOptionsProperties {
    AutomatedSnapshotStartHour?: Value<number>
}

export class SnapshotOptions extends ResourceBase {
    constructor(properties: SnapshotOptionsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Elasticsearch::SnapshotOptions', properties, dependsOn)
    }
}

export interface EBSOptionsProperties {
    EBSEnabled?: Value<boolean>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>
}

export class EBSOptions extends ResourceBase {
    constructor(properties: EBSOptionsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Elasticsearch::EBSOptions', properties, dependsOn)
    }
}

export interface DomainProperties {
    AccessPolicies?: any
    AdvancedOptions?: {[key: string]: Value<string>}
    DomainName?: Value<string>
    EBSOptions?: EBSOptions
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig
    ElasticsearchVersion?: Value<string>
    SnapshotOptions?: SnapshotOptions
    Tags?: ResourceTag[]
    VPCOptions?: VPCOptions
}

export default class Domain extends ResourceBase {
    constructor(properties: DomainProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Elasticsearch::Domain', properties, dependsOn)
    }
}
