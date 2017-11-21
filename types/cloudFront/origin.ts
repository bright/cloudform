import {ResourceBase} from '../resource'
import {Value} from '../internal'
import CustomOriginConfig from './customOriginConfig'
import OriginCustomHeaders from './originCustomHeaders'
import S3OriginConfig from './s3OriginConfig'



export interface OriginProperties {
    CustomOriginConfig?: CustomOriginConfig
    DomainName: Value<string>
    Id: Value<string>
    OriginCustomHeaders?: OriginCustomHeaders
    OriginPath: Value<string>
    S3OriginConfig?: S3OriginConfig
}

export default class Origin extends ResourceBase {
    constructor(properties: OriginProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::Origin', properties, dependsOn)
    }
}