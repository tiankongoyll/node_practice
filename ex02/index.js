module.exports.compose = middlewares => {
    return function () {
        // 排序
        return dispatch(0)
        function dispatch(i) {
            let fn = middlewares[i]
            if(!fn){
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next(){
                    return dispatch(i + 1)
                })
            )
        }
    }
}
