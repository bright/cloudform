import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface DBParameterGroupProperties {
    Description: Value<string>
    Family: Value<string>
    Parameters: any
    Tags?: ResourceTag[]
}

export default class DBParameterGroup extends ResourceBase {
    constructor(properties: DBParameterGroupProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBParameterGroup', properties, dependsOn)
    }
}