import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Parameter from './parameter'



export interface ClusterParameterGroupProperties {
    Description?: Value<string>
    ParameterGroupFamily: Value<string>
    Parameters?: Parameter[]
}

export default class ClusterParameterGroup extends ResourceBase {
    constructor(properties: ClusterParameterGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Redshift::ClusterParameterGroup', properties, dependsOn)
    }
}