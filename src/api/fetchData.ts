import { wrapPromise } from "./wrapPromise"

export const fetchData = (url : string) => {

    const promise = fetch(url).then(res => res.json())

    return wrapPromise(promise)
}