/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface AnomalyMonitorProperties {
    MonitorType: Value<string>
    MonitorName: Value<string>
    MonitorDimension?: Value<string>
    MonitorSpecification?: Value<string>
}

export default class AnomalyMonitor extends ResourceBase<AnomalyMonitorProperties> {


    constructor(properties: AnomalyMonitorProperties) {
        super('AWS::CE::AnomalyMonitor', properties)
    }
}
