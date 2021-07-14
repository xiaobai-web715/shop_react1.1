import React from 'react'
import {Row , Col} from 'react-bootstrap'
import products from '../poducts'
import Product from '../components/Product'
import { useState , useEffect } from 'react'
const HomeScreen = () => {
    const [product, setProduct] = useState(products)
    useEffect(() => {
        return () => {
            // console.log(product)
        }
    }, [product])
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

