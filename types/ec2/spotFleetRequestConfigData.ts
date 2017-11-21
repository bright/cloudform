import {ResourceBase} from '../resource'
import {Value} from '../internal'
import LaunchSpecifications from './launchSpecifications'



export interface SpotFleetRequestConfigDataProperties {
    AllocationStrategy?: Value<string>
    ExcessCapacityTerminationPolicy?: Value<string>
    IamFleetRole: Value<string>
    LaunchSpecifications: LaunchSpecifications
    SpotPrice: Value<string>
    TargetCapacity: Value<number>
    TerminateInstancesWithExpiration?: Value<boolean>
    ValidFrom?: Value<string>
    ValidUntil?: Value<string>
}

export default class SpotFleetRequestConfigData extends ResourceBase {
    constructor(properties: SpotFleetRequestConfigDataProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SpotFleetRequestConfigData', properties, dependsOn)
    }
}