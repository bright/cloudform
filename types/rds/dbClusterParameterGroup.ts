/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface DBClusterParameterGroupProperties {
    Description: Value<string>
    Family: Value<string>
    Parameters: any
    Tags?: ResourceTag[]
}

export default class DBClusterParameterGroup extends ResourceBase {
    constructor(properties: DBClusterParameterGroupProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBClusterParameterGroup', properties, dependsOn)
    }
}
