const fs = require('fs')
module.exports.parser = path => {
    console.log('path',path)
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    // 二分查找
    return new Promise(resolve => {
        readStream.on('data', data => {
            reqData.push(data);
            console.log('size',size)
            size += data.length;
            console.log('size2',size)
        });
        readStream.on('end', function () {
            const data = Buffer.concat(reqData, size);
            let body = data.toString()
            console.log('size3',size)
            body=JSON.parse(body)
            resolve(body)
        });
    })
}
