/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourceTag {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: ResourceTag) {
        Object.assign(this, properties)
    }
}

export interface AnomalyMonitorProperties {
    MonitorType: Value<string>
    ResourceTags?: List<ResourceTag>
    MonitorName: Value<string>
    MonitorSpecification?: Value<string>
    MonitorDimension?: Value<string>
}

export default class AnomalyMonitor extends ResourceBase<AnomalyMonitorProperties> {
    static ResourceTag = ResourceTag

    constructor(properties: AnomalyMonitorProperties) {
        super('AWS::CE::AnomalyMonitor', properties)
    }
}
