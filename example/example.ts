import cloudform from "../index"
import {StringParameter} from "../types/parameter"

cloudform({
    Parameters: {
        DeployEnv: new StringParameter({
            Description: 'Deploy environment name',
            AllowedValues: ['dev', 'stage', 'production']
        })
    }
})
