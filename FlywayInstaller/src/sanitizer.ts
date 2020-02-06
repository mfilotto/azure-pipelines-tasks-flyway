import { cleanVersion } from 'azure-pipelines-tool-lib/tool';

export function sanitizeVersion(inputVersion: string) : string {
    const version: string = cleanVersion(inputVersion);
    if(!version){
        throw new Error("The input version '" + inputVersion + "' is not a valid semantic version");
    }
    return version;
}