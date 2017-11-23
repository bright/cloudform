/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface FlowLogProperties {
    DeliverLogsPermissionArn: Value<string>
    LogGroupName: Value<string>
    ResourceId: Value<string>
    ResourceType: Value<string>
    TrafficType: Value<string>
}

export default class FlowLog extends ResourceBase {
    constructor(properties: FlowLogProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::FlowLog', properties, dependsOn)
    }
}
