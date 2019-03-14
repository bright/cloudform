/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface RobotProperties {
    Fleet?: Value<string>
    Architecture: Value<string>
    GreengrassGroupId: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class Robot extends ResourceBase<RobotProperties> {


    constructor(properties: RobotProperties) {
        super('AWS::RoboMaker::Robot', properties)
    }
}
