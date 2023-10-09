export const useGetRealIdx = (url:string) => {
    const urlArr = url.split('/')
    return urlArr[urlArr.length - 2]
}