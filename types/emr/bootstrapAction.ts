import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface BootstrapActionProperties {
    Name: Value<string>
    ScriptBootstrapAction: Value<string>
}

export default class BootstrapAction extends ResourceBase {
    constructor(properties: BootstrapActionProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::BootstrapAction', properties, dependsOn)
    }
}