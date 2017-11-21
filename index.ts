import {CloudformTemplate} from "./types/internal"

export default function cloudform(template: CloudformTemplate) {
    return JSON.stringify(template)
}