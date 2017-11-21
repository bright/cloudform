import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type StreamViewType = "KEYS_ONLY" | "NEW_IMAGE" | "OLD_IMAGE" | "NEW_AND_OLD_IMAGES" | "*"

export interface StreamSpecificationProperties {
    StreamViewType: Value<StreamViewType>
}

export default class StreamSpecification extends ResourceBase {
    constructor(properties: StreamSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::DynamoDB::StreamSpecification', properties, dependsOn)
    }
}