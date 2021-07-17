// require语法是node.js里面提供的规范性语法,通过require来引入文件
//并且在导出文档的时候是通过module.exports =  products;语法来导出
import express  from 'express'
import dotenv from 'dotenv'
import products from './data/poducts.js'
//这样的都不是文件,而是安装的
// 调用config()进行设置(此时就可以使用.env文件里面的常量)
dotenv.config()

const app = express()

// app.get()方法，两个参数，第一个是路由参数，根据前端的路由，在这里返回不同的数据;第二个参数是一个箭头函数,req是请求时发送的内容 、 res是返回时传递的内容

//这个是根路径情况下返回的数据
app.get('/' , (req , res) => {
    res.send('服务器已经运行...')
    //这是后台相应的值
})

// 当get的路由是/api/products的时候，后台需要返回产品信息(因为这里还不涉及到从数据库获取信息，所以就是直接将文件进行引入)
//这里是返回所有的产品
app.get('/api/products' , (req , res) =>{
    // 这里是想要将信息以json的形式进行传递
    res.json(products)
})
//这里设置返回单个的产品(这里要设置一个判断来返回复合的产品)
app.get('/api/products/:id' , (req ,res) => { 
    //这里要去匹配id来获得对应的产品,用(目前保存的产品数据是一个数组)数组的.find方法(会将满足里面判断要求的元素拿出来)
    //product，应该是遍历数组的每一个元素，作为参数传到箭头函数里面(数组里面遍历出来的就是对象形式的数据)
    // req.params.id,这是通过路由拿到传进的数据(也就是前面写的:id)
    const product = products.find((product) => product._id === req.params.id)
    //这个打印会在服务器请求这个的时候，在下面终端上打印,req.params.id是string数据
    // console.log(typeof(req.params.id) , req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

// app.listen实现服务器的搭建
app.listen(PORT , console.log(`服务器在${process.env.NODE_ENV}模型下${PORT}号运行`))
//接下来可以测试是不是成功运行了(node backend/server,这个文件的路径)
//不过我在package.json里面修改了运行命令，直接npm start就可以