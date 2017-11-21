import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Action from './action'
import Blocker from './blocker'



export interface StageProperties {
    Actions: Action[]
    Blockers?: Blocker[]
    Name: Value<string>
}

export default class Stage extends ResourceBase {
    constructor(properties: StageProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::Stage', properties, dependsOn)
    }
}