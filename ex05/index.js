const {EventEmitter} = require('events')
module.exports = class Connection {
    // 搜索算法
    constructor(conf) {
        this.emmiter = new EventEmitter()
    }
    onConn(cb){
        this.emmiter.on('someEvent', cb)
    }
    connection(arg){
        
        this.emmiter.emit('someEvent', arg); 
    }
    // 搜索算法
}
