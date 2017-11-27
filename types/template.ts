import Parameter from "./parameter"
import Resource from "./resource"
import {Condition} from "./dataTypes"

export default interface Template {
    Description?: string
    // TODO Metadata?: any
    Parameters?: { [key: string]: Parameter }
    Mappings?: { [key: string]: { [key: string]: { [key: string]: string | number } } }
    Conditions?: { [key: string]: Condition }
    // TODO Transform?: any
    Resources?: { [key: string]: Resource }
    // TODO Outputs?: any
}
