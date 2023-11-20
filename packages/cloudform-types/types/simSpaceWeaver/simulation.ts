/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Location {
    BucketName!: Value<string>
    ObjectKey!: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export interface SimulationProperties {
    SchemaS3Location?: S3Location
    SnapshotS3Location?: S3Location
    MaximumDuration?: Value<string>
    RoleArn: Value<string>
    Name: Value<string>
}

export default class Simulation extends ResourceBase<SimulationProperties> {
    static S3Location = S3Location

    constructor(properties: SimulationProperties) {
        super('AWS::SimSpaceWeaver::Simulation', properties)
    }
}
