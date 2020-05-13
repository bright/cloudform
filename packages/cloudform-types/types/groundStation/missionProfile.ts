/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DataflowEdge {
    Source?: Value<string>
    Destination?: Value<string>

    constructor(properties: DataflowEdge) {
        Object.assign(this, properties)
    }
}

export interface MissionProfileProperties {
    Name: Value<string>
    ContactPrePassDurationSeconds?: Value<number>
    ContactPostPassDurationSeconds?: Value<number>
    MinimumViableContactDurationSeconds: Value<number>
    DataflowEdges: List<DataflowEdge>
    TrackingConfigArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class MissionProfile extends ResourceBase<MissionProfileProperties> {
    static DataflowEdge = DataflowEdge

    constructor(properties: MissionProfileProperties) {
        super('AWS::GroundStation::MissionProfile', properties)
    }
}
