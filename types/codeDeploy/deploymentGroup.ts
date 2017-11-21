import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Deployment from './deployment'
import Ec2TagFilter from './ec2TagFilter'
import OnPremisesInstanceTagFilter from './onPremisesInstanceTagFilter'



export interface DeploymentGroupProperties {
    ApplicationName: Value<string>
    AutoScalingGroups: Value<string>[]
    Deployment?: Deployment
    DeploymentConfigName?: Value<string>
    DeploymentGroupName?: Value<string>
    Ec2TagFilters?: Ec2TagFilter[]
    OnPremisesInstanceTagFilters?: OnPremisesInstanceTagFilter[]
    ServiceRoleArn: Value<string>
}

export default class DeploymentGroup extends ResourceBase {
    constructor(properties: DeploymentGroupProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::DeploymentGroup', properties, dependsOn)
    }
}