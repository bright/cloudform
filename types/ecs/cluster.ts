/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface ClusterProperties {
    ClusterName?: Value<string>
}

export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::Cluster', properties, dependsOn)
    }
}
