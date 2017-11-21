import {ResourceBase} from '../resource'
import {Value} from '../internal'
import AssociationParameter from './associationParameter'



export interface SsmAssociationsProperties {
    AssociationParameters?: AssociationParameter[]
    DocumentName?: Value<string>
}

export default class SsmAssociations extends ResourceBase {
    constructor(properties: SsmAssociationsProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SsmAssociations', properties, dependsOn)
    }
}