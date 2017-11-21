import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type AttributeType = "S" | "N" | "B"

export interface AttributeDefinitionProperties {
    AttributeName: Value<string>
    AttributeType: Value<AttributeType>
}

export default class AttributeDefinition extends ResourceBase {
    constructor(properties: AttributeDefinitionProperties, dependsOn?: Value<string>) {
        super('AWS::DynamoDB::AttributeDefinition', properties, dependsOn)
    }
}