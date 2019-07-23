/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RenderingEngine {
    Version!: Value<string>
    Name!: Value<string>

    constructor(properties: RenderingEngine) {
        Object.assign(this, properties)
    }
}

export class SimulationSoftwareSuite {
    Version!: Value<string>
    Name!: Value<string>

    constructor(properties: SimulationSoftwareSuite) {
        Object.assign(this, properties)
    }
}

export class RobotSoftwareSuite {
    Version!: Value<string>
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

export interface SimulationApplicationProperties {
    RenderingEngine: RenderingEngine
    SimulationSoftwareSuite: SimulationSoftwareSuite
    CurrentRevisionId?: Value<string>
    RobotSoftwareSuite: RobotSoftwareSuite
    Sources: List<SourceConfig>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class SimulationApplication extends ResourceBase<SimulationApplicationProperties> {
    static RenderingEngine = RenderingEngine
    static SimulationSoftwareSuite = SimulationSoftwareSuite
    static RobotSoftwareSuite = RobotSoftwareSuite
    static SourceConfig = SourceConfig

    constructor(properties: SimulationApplicationProperties) {
        super('AWS::RoboMaker::SimulationApplication', properties)
    }
}
