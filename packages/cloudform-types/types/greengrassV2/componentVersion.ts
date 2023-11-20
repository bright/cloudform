/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ComponentDependencyRequirement {
    VersionRequirement?: Value<string>
    DependencyType?: Value<string>

    constructor(properties: ComponentDependencyRequirement) {
        Object.assign(this, properties)
    }
}

export class ComponentPlatform {
    Attributes?: {[key: string]: Value<string>}
    Name?: Value<string>

    constructor(properties: ComponentPlatform) {
        Object.assign(this, properties)
    }
}

export class LambdaContainerParams {
    Volumes?: List<LambdaVolumeMount>
    MountROSysfs?: Value<boolean>
    MemorySizeInKB?: Value<number>
    Devices?: List<LambdaDeviceMount>

    constructor(properties: LambdaContainerParams) {
        Object.assign(this, properties)
    }
}

export class LambdaDeviceMount {
    Path?: Value<string>
    AddGroupOwner?: Value<boolean>
    Permission?: Value<string>

    constructor(properties: LambdaDeviceMount) {
        Object.assign(this, properties)
    }
}

export class LambdaEventSource {
    Type?: Value<string>
    Topic?: Value<string>

    constructor(properties: LambdaEventSource) {
        Object.assign(this, properties)
    }
}

export class LambdaExecutionParameters {
    MaxInstancesCount?: Value<number>
    TimeoutInSeconds?: Value<number>
    EnvironmentVariables?: {[key: string]: Value<string>}
    EventSources?: List<LambdaEventSource>
    Pinned?: Value<boolean>
    ExecArgs?: List<Value<string>>
    LinuxProcessParams?: LambdaLinuxProcessParams
    InputPayloadEncodingType?: Value<string>
    MaxQueueSize?: Value<number>
    StatusTimeoutInSeconds?: Value<number>
    MaxIdleTimeInSeconds?: Value<number>

    constructor(properties: LambdaExecutionParameters) {
        Object.assign(this, properties)
    }
}

export class LambdaFunctionRecipeSource {
    ComponentDependencies?: {[key: string]: ComponentDependencyRequirement}
    ComponentLambdaParameters?: LambdaExecutionParameters
    LambdaArn?: Value<string>
    ComponentPlatforms?: List<ComponentPlatform>
    ComponentName?: Value<string>
    ComponentVersion?: Value<string>

    constructor(properties: LambdaFunctionRecipeSource) {
        Object.assign(this, properties)
    }
}

export class LambdaLinuxProcessParams {
    IsolationMode?: Value<string>
    ContainerParams?: LambdaContainerParams

    constructor(properties: LambdaLinuxProcessParams) {
        Object.assign(this, properties)
    }
}

export class LambdaVolumeMount {
    SourcePath?: Value<string>
    DestinationPath?: Value<string>
    AddGroupOwner?: Value<boolean>
    Permission?: Value<string>

    constructor(properties: LambdaVolumeMount) {
        Object.assign(this, properties)
    }
}

export interface ComponentVersionProperties {
    LambdaFunction?: LambdaFunctionRecipeSource
    InlineRecipe?: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class ComponentVersion extends ResourceBase<ComponentVersionProperties> {
    static ComponentDependencyRequirement = ComponentDependencyRequirement
    static ComponentPlatform = ComponentPlatform
    static LambdaContainerParams = LambdaContainerParams
    static LambdaDeviceMount = LambdaDeviceMount
    static LambdaEventSource = LambdaEventSource
    static LambdaExecutionParameters = LambdaExecutionParameters
    static LambdaFunctionRecipeSource = LambdaFunctionRecipeSource
    static LambdaLinuxProcessParams = LambdaLinuxProcessParams
    static LambdaVolumeMount = LambdaVolumeMount

    constructor(properties?: ComponentVersionProperties) {
        super('AWS::GreengrassV2::ComponentVersion', properties || {})
    }
}
