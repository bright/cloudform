/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface ParameterProperties {
    ParameterName: Value<string>
    ParameterValue: Value<string>
}

export class Parameter extends ResourceBase {
    constructor(properties: ParameterProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Redshift::Parameter', properties, dependsOn)
    }
}

export interface ClusterParameterGroupProperties {
    Description: Value<string>
    ParameterGroupFamily: Value<string>
    Parameters?: Parameter[]
    Tags?: ResourceTag[]
}

export default class ClusterParameterGroup extends ResourceBase {
    constructor(properties: ClusterParameterGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Redshift::ClusterParameterGroup', properties, dependsOn)
    }
}
