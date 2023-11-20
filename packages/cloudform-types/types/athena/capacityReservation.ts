/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CapacityAssignment {
    WorkgroupNames!: List<Value<string>>

    constructor(properties: CapacityAssignment) {
        Object.assign(this, properties)
    }
}

export class CapacityAssignmentConfiguration {
    CapacityAssignments!: List<CapacityAssignment>

    constructor(properties: CapacityAssignmentConfiguration) {
        Object.assign(this, properties)
    }
}

export interface CapacityReservationProperties {
    TargetDpus: Value<number>
    CapacityAssignmentConfiguration?: CapacityAssignmentConfiguration
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class CapacityReservation extends ResourceBase<CapacityReservationProperties> {
    static CapacityAssignment = CapacityAssignment
    static CapacityAssignmentConfiguration = CapacityAssignmentConfiguration

    constructor(properties: CapacityReservationProperties) {
        super('AWS::Athena::CapacityReservation', properties)
    }
}
