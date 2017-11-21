import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import EBSOptions from './ebsOptions'
import ElasticsearchClusterConfig from './elasticsearchClusterConfig'
import SnapshotOptions from './snapshotOptions'

export type ElasticsearchVersion = "*" | "1.5" | "2.3"

export interface DomainProperties {
    AccessPolicies?: any
    AdvancedOptions?: any
    DomainName?: Value<string>
    EBSOptions?: EBSOptions
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig
    ElasticsearchVersion?: Value<ElasticsearchVersion>
    SnapshotOptions?: SnapshotOptions
    Tags?: ResourceTag[]
}

export default class Domain extends ResourceBase {
    constructor(properties: DomainProperties, dependsOn?: Value<string>) {
        super('AWS::Elasticsearch::Domain', properties, dependsOn)
    }
}