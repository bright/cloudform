import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface TargetProperties {
    Key?: Value<string>
    Values?: Value<string>[]
}

export default class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::Target', properties, dependsOn)
    }
}