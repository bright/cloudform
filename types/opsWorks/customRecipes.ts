import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface CustomRecipesProperties {
    Configure?: Value<string>[]
    Deploy?: Value<string>[]
    Setup?: Value<string>[]
    Shutdown?: Value<string>[]
    Undeploy?: Value<string>[]
}

export default class CustomRecipes extends ResourceBase {
    constructor(properties: CustomRecipesProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::CustomRecipes', properties, dependsOn)
    }
}