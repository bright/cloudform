import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import DBSecurityGroupIngres from './dbSecurityGroupIngres'



export interface DBSecurityGroupProperties {
    EC2VpcId?: Value<string>
    DBSecurityGroupIngress: DBSecurityGroupIngres[]
    GroupDescription: Value<string>
    Tags?: ResourceTag[]
}

export default class DBSecurityGroup extends ResourceBase {
    constructor(properties: DBSecurityGroupProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBSecurityGroup', properties, dependsOn)
    }
}