import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "*" | "random" | "spread" | "binpack"

export interface PlacementStrategiesProperties {
    Type?: Value<Type>
    Field?: Value<string>
}

export default class PlacementStrategies extends ResourceBase {
    constructor(properties: PlacementStrategiesProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::PlacementStrategies', properties, dependsOn)
    }
}