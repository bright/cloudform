import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SubnetGroupProperties {
    CacheSubnetGroupName?: Value<string>
    Description: Value<string>
    SubnetIds: Value<string>
}

export default class SubnetGroup extends ResourceBase {
    constructor(properties: SubnetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::ElastiCache::SubnetGroup', properties, dependsOn)
    }
}