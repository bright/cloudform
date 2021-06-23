/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ComponentPlatform {
    Name?: Value<string>
    Attributes?: {[key: string]: Value<string>}

    constructor(properties: ComponentPlatform) {
        Object.assign(this, properties)
    }
}

export class LambdaContainerParams {
    MemorySizeInKB?: Value<number>
    MountROSysfs?: Value<boolean>
    Volumes?: List<LambdaVolumeMount>
    Devices?: List<LambdaDeviceMount>

    constructor(properties: LambdaContainerParams) {
        Object.assign(this, properties)
    }
}

export class LambdaVolumeMount {
    SourcePath?: Value<string>
    DestinationPath?: Value<string>
    Permission?: Value<string>
    AddGroupOwner?: Value<boolean>

    constructor(properties: LambdaVolumeMount) {
        Object.assign(this, properties)
    }
}

export class LambdaFunctionRecipeSource {
    LambdaArn?: Value<string>
    ComponentName?: Value<string>
    ComponentVersion?: Value<string>
    ComponentPlatforms?: List<ComponentPlatform>
    ComponentDependencies?: {[key: string]: ComponentDependencyRequirement}
    ComponentLambdaParameters?: LambdaExecutionParameters

    constructor(properties: LambdaFunctionRecipeSource) {
        Object.assign(this, properties)
    }
}

export class ComponentDependencyRequirement {
    VersionRequirement?: Value<string>
    DependencyType?: Value<string>

    constructor(properties: ComponentDependencyRequirement) {
        Object.assign(this, properties)
    }
}

export class LambdaDeviceMount {
    Path?: Value<string>
    Permission?: Value<string>
    AddGroupOwner?: Value<boolean>

    constructor(properties: LambdaDeviceMount) {
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

export class LambdaEventSource {
    Topic?: Value<string>
    Type?: Value<string>

    constructor(properties: LambdaEventSource) {
        Object.assign(this, properties)
    }
}

export class LambdaExecutionParameters {
    EventSources?: List<LambdaEventSource>
    MaxQueueSize?: Value<number>
    MaxInstancesCount?: Value<number>
    MaxIdleTimeInSeconds?: Value<number>
    TimeoutInSeconds?: Value<number>
    StatusTimeoutInSeconds?: Value<number>
    Pinned?: Value<boolean>
    InputPayloadEncodingType?: Value<string>
    ExecArgs?: List<Value<string>>
    EnvironmentVariables?: {[key: string]: Value<string>}
    LinuxProcessParams?: LambdaLinuxProcessParams

    constructor(properties: LambdaExecutionParameters) {
        Object.assign(this, properties)
    }
}

export interface ComponentVersionProperties {
    InlineRecipe?: Value<string>
    LambdaFunction?: LambdaFunctionRecipeSource
    Tags?: {[key: string]: Value<string>}
}

export default class ComponentVersion extends ResourceBase<ComponentVersionProperties> {
    static ComponentPlatform = ComponentPlatform
    static LambdaContainerParams = LambdaContainerParams
    static LambdaVolumeMount = LambdaVolumeMount
    static LambdaFunctionRecipeSource = LambdaFunctionRecipeSource
    static ComponentDependencyRequirement = ComponentDependencyRequirement
    static LambdaDeviceMount = LambdaDeviceMount
    static LambdaLinuxProcessParams = LambdaLinuxProcessParams
    static LambdaEventSource = LambdaEventSource
    static LambdaExecutionParameters = LambdaExecutionParameters

    constructor(properties?: ComponentVersionProperties) {
        super('AWS::GreengrassV2::ComponentVersion', properties || {})
    }
}
