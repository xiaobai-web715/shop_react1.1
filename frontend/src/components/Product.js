import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'


// 通过Props传进来的值在这个函数里面可以写props，然后后面使用props里面的属性的时候，就要props.product._id像这样
// 也可以这样写{product}，就是对props进行解构，就可以这样来写product._id
const Product = ({product}) => {
    return (
        <Card className='my-3' rounded>
            {/* 跳转的路由如何来设置 ,要注意路由可不是引号，而是波浪线符号那里 */}
            {/* 要跳转到指定商品的详情页，都需要获取产品id来作为路由参数,也就是${props.product._id} */}
            {/* 因此href要动态输出一个路径 */}
            <a href={`/products/${product._id}`}>
                {/* 图片，能实现点击通过路由跳转 */}
                <Card.Img src={product.image} variant = 'top'></Card.Img> 
            </a>
            <Card.Body>
                {/* 标题，也能实现点击通过路由进行跳转 */}
                <a href={`/products/${product._id}`}>
                    <Card.Title>{product.name}</Card.Title>
                </a>
                {/* 这里设置的是评分（要创建组件来实现），第三讲的内容 */}
                <Card.Text as='div'>
                    <div className='my-3'>
                        {/* {product.rating}是依据{product.numReviews}评价来实现的 */}
                        {/* 这里同样的将value与text传到子组件里面 */}
                        {/* 这个组件里面要使用Font Awesome，所以目前还没有办法 */}
                        <Rating value={product.rating} text={`${product.numReviews}条评价`} />
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                    <div className='my-3'>
                        ${product.price}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
