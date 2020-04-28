/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface CostCategoryProperties {
    Name: Value<string>
    RuleVersion: Value<string>
    Rules: Value<string>
}

export default class CostCategory extends ResourceBase<CostCategoryProperties> {


    constructor(properties: CostCategoryProperties) {
        super('AWS::CE::CostCategory', properties)
    }
}
