import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface DBSecurityGroupIngresProperties {
    CIDRIP?: Value<string>
    EC2SecurityGroupId?: Value<string>
    EC2SecurityGroupName?: Value<string>
    EC2SecurityGroupOwnerId?: Value<string>
}

export default class DBSecurityGroupIngres extends ResourceBase {
    constructor(properties: DBSecurityGroupIngresProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBSecurityGroupIngres', properties, dependsOn)
    }
}