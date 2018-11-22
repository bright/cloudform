/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DeviceTemplate {
    DeviceType?: Value<string>
    CallbackOverrides?: any

    constructor(properties: DeviceTemplate) {
        Object.assign(this, properties)
    }
}

export class PlacementTemplate {
    DeviceTemplates?: any
    DefaultAttributes?: any

    constructor(properties: PlacementTemplate) {
        Object.assign(this, properties)
    }
}

export interface ProjectProperties {
    Description?: Value<string>
    PlacementTemplate: PlacementTemplate
    ProjectName?: Value<string>
}

export default class Project extends ResourceBase {
    static DeviceTemplate = DeviceTemplate
    static PlacementTemplate = PlacementTemplate

    constructor(properties?: ProjectProperties) {
        super('AWS::IoT1Click::Project', properties)
    }
}
