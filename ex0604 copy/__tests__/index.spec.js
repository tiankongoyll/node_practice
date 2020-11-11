const Sequelize = require('sequelize');
test('练习04 完成一个一对多查询', async () => {

    const sequelize = new Sequelize("kaikeba", "root", "tiankong", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false
    });

    // 初始化模型
    const { initModel } = require('../index')
    const { Product, User } = await initModel(sequelize)

    // 设置数据
    user = await User.create({
        name: 'mamn',
    })
    // await Product.create({
    //     name: '商品一'
    // })
    // await Product.create({
    //     name: '商品二'
    // })
    // await user.createProduct({
    //     title: '商品一'
    // })
    // await user.createProduct({
    //     title: '商品二'
    // })
    
    const ret = await Product.findAll({
        attributes: ['name']
    })
    const ret2 = await User.findAll({
        attributes: ['name']
    })
    console.log('8888',JSON.parse(JSON.stringify(ret)));
    console.log('9999',JSON.parse(JSON.stringify(ret2)));
    expect(JSON.parse(JSON.stringify(ret))).toEqual([{"title": "商品一"}, {"title": "商品二"}])
})