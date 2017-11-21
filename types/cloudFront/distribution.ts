import {ResourceBase} from '../resource'
import {Value} from '../internal'
import DistributionConfig from './distributionConfig'



export interface DistributionProperties {
    DistributionConfig: DistributionConfig
}

export default class Distribution extends ResourceBase {
    constructor(properties: DistributionProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::Distribution', properties, dependsOn)
    }
}