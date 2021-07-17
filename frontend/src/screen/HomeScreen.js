import React , {useState , useEffect} from 'react'
import {Row , Col} from 'react-bootstrap'
// import products from '../poducts'
import Product from '../components/Product'
import axios from 'axios'

//这里就涉及到我通过请求拿到了相应的产品数据存储在哪里，这里就用到了Hook(useState ， useEffect)
//使用useState状态可以保存从后台里面拿到的数据
const HomeScreen = () => {
    const [products , setProducts] = useState([])
    // 这里给products设置默认值是空数组,因为产品数据都是保存在数组里面的
    // const [product, setProduct] = useState(products)
    // useEffect(() => {
    //     return () => {
    //         // console.log(product)
    //     }
    // }, [product])

    useEffect(() => {
        // console.log('hello')
        // axios.get()来获取后台返回的数据,axios在进行请求的时候我们需要设置一个异步函数
        //所以应该标记整个函数为async(这里要注意，不能直接将useEffect里面的箭头函数设置为asunc，这样的标记方式是错误的，应该在里面新建一个函数来实现异步)
        const fetchProducts = async () => {
        //   const res  = await axios.get('/api/products')  
          const {data}  = await axios.get('/api/products') 
        //   '/api/products'对应的就是后台服务器里面设置的路由
        // console.log(res)这里可以打印出返回的数据，里面有的是我们不需要的,可以自己打印查看一下
        //数据是在保存在对象的data里面,我们这里直接解构出来（目前还不清楚是不是只有对象形式的数据可以这样来解构）
           setProducts(data) 
        }
        // axios.get()（因为axios.get()应该是一个异步的，所以写成上面的样式，另起一个函数）  
        fetchProducts()//这里去调用这个函数才能去执行

        //编写到这里要注意一件事,就是前台与后台服务器的端口是不同的，一个是3000，一个是5000，所以这里要去前端部分的package.json里面添加一个代理端口"proxy" : "http://127.0.0.1:5000",然后前后台服务器都重新运行一下
    },[])
// 自己添加测试的hook方法
    return (
        <>
           <h1>最新产品</h1>
           <Row>
               {//去掉这里的大括号的话，里面的product会被定义为未被定义的参数而报错
                   products.map((product) =>(//.map的数组方法会将前面的数组的参数一一传入，最终返回一个由结果组成的数组
                    // 使用react循环生成子组件的时候，加一个key来区分每一个组件，可以解除一个警告
                       <Col key={product._id} sm={12} md={6} xl={4}>
                           {/* 这里就可以写入一个组件来显示商品的信息，来替代这里的和h3标签 */}
                            {/* <h3>{product.name}</h3> */}
                            {/* Product作为HomeScreen的子组件，可以通过Props进行传值，而这里的Props也就是可以使得UI组件重新加载的一个引火点 ，这里product就是要传进去的*/}
                            {/* product={product}第一个就是传进去的Props，第二个就是拿到的值，这里是遍历products拿到的，大括号的意思应该是动态插入值 */}
                            <Product product={product}/>
                       </Col>
                   ))
               }
            </Row> 
        </>
    )
}

export default HomeScreen

