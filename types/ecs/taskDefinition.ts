import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ContainerDefinition from './containerDefinition'
import PlacementConstraints from './placementConstraints'
import Volume from './volume'

export type NetworkMode = "*" | "bridge" | "host" | "none"

export interface TaskDefinitionProperties {
    ContainerDefinitions: ContainerDefinition[]
    Family: Value<string>
    NetworkMode?: Value<NetworkMode>
    PlacementConstraints?: PlacementConstraints
    TaskRoleArn: Value<string>
    Volumes: Volume[]
}

export default class TaskDefinition extends ResourceBase {
    constructor(properties: TaskDefinitionProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::TaskDefinition', properties, dependsOn)
    }
}