/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Core {
    SyncShadow?: Value<boolean>
    ThingArn!: Value<string>
    Id!: Value<string>
    CertificateArn!: Value<string>

    constructor(properties: Core) {
        Object.assign(this, properties)
    }
}

export class CoreDefinitionVersion {
    Cores!: List<Core>

    constructor(properties: CoreDefinitionVersion) {
        Object.assign(this, properties)
    }
}

export interface CoreDefinitionProperties {
    InitialVersion?: CoreDefinitionVersion
    Name: Value<string>
}

export default class CoreDefinition extends ResourceBase<CoreDefinitionProperties> {
    static Core = Core
    static CoreDefinitionVersion = CoreDefinitionVersion

    constructor(properties: CoreDefinitionProperties) {
        super('AWS::Greengrass::CoreDefinition', properties)
    }
}
