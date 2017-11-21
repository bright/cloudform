import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




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