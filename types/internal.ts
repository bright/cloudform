import Parameter from "./parameter"

export interface CloudformTemplate {
    Description?: string
    Metadata?: any
    Parameters?: {[key: string]: Parameter}
    Mappings?: any
    Conditions?: any
    Transform?: any
    Resources?: any
    Outputs?: any
}
