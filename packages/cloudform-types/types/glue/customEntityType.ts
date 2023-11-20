/* Generated from: 
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface CustomEntityTypeProperties {
    ContextWords?: List<Value<string>>
    RegexString?: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class CustomEntityType extends ResourceBase<CustomEntityTypeProperties> {


    constructor(properties?: CustomEntityTypeProperties) {
        super('AWS::Glue::CustomEntityType', properties || {})
    }
}
