import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface DisableInboundStageTransitionProperties {
    Reason: Value<string>
    StageName: Value<string>
}

export default class DisableInboundStageTransition extends ResourceBase {
    constructor(properties: DisableInboundStageTransitionProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::DisableInboundStageTransition', properties, dependsOn)
    }
}