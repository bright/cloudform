/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RobotSoftwareSuite {
    Version?: Value<string>
    Name!: Value<string>

    constructor(properties: RobotSoftwareSuite) {
        Object.assign(this, properties)
    }
}

export class SourceConfig {
    S3Bucket!: Value<string>
    Architecture!: Value<string>
    S3Key!: Value<string>

    constructor(properties: SourceConfig) {
        Object.assign(this, properties)
    }
}

export interface RobotApplicationProperties {
    CurrentRevisionId?: Value<string>
    Environment?: Value<string>
    RobotSoftwareSuite: RobotSoftwareSuite
    Sources?: List<SourceConfig>
    Tags?: {[key: string]: Value<string>}
    Name?: Value<string>
}

export default class RobotApplication extends ResourceBase<RobotApplicationProperties> {
    static RobotSoftwareSuite = RobotSoftwareSuite
    static SourceConfig = SourceConfig

    constructor(properties: RobotApplicationProperties) {
        super('AWS::RoboMaker::RobotApplication', properties)
    }
}
