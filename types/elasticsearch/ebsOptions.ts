import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type VolumeType = "gp2" | "io1" | "*"

export interface EBSOptionsProperties {
    EBSEnabled?: Value<boolean>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    VolumeType?: Value<VolumeType>
}

export default class EBSOptions extends ResourceBase {
    constructor(properties: EBSOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::Elasticsearch::EBSOptions', properties, dependsOn)
    }
}