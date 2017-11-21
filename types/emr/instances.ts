import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Placement from './placement'
import InstanceGroupConfig from './instanceGroupConfig'

export type HadoopVersion = "*" | "0.18" | "0.20" | "0.20.205" | "1.0.3" | "2.2.0" | "2.4.0"

export interface InstancesProperties {
    AdditionalMasterSecurityGroups?: Value<string>[]
    AdditionalSlaveSecurityGroups?: Value<string>[]
    Ec2KeyName?: Value<string>
    Ec2SubnetId?: Value<string>
    EmrManagedMasterSecurityGroup?: Value<string>
    EmrManagedSlaveSecurityGroup?: Value<string>
    HadoopVersion?: Value<HadoopVersion>
    Placement?: Placement
    ServiceAccessSecurityGroup?: Value<string>
    TerminationProtected?: Value<boolean>
    CoreInstanceGroup: InstanceGroupConfig
    MasterInstanceGroup: InstanceGroupConfig
}

export default class Instances extends ResourceBase {
    constructor(properties: InstancesProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Instances', properties, dependsOn)
    }
}