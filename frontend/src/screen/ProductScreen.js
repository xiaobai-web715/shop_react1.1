import React from 'react'
import {Link} from 'react-router-dom'
// 为了可以实现跳转到首先
import {Row , Col , Image , ListGroup , Card , Button} from 'react-bootstrap'
// 行 列 图片 包裹作为项目项 Card表格 按钮
import products from '../poducts'
import Rating from '../components/Rating'

// 会继承Route里面的三个属性location ，match ，history
const ProductScreen = ({match}) => {
    // 数组的find方法（当然这种写法是用的本地的数据，前后端传输的话，这里就会写一个请求接口来请求数据）
    const product = products.find(product => product._id === match.params.id)
    // console.log(product)
    // 这里就相应的拿到了我们的产品数据了
    return (
        <>
            <Link className='btn btn-dark rounded my-3' to='/' >
                返回首页
            </Link>
            <Row>
                <Col md={6}>
                {/* fluid设置图片有自适应的填充 */}
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item><h3>{product.name}</h3></ListGroup.Item>
                        <ListGroup.Item><Rating value={product.rating} text={`${product.numReviews}条评论`}/></ListGroup.Item>
                        <ListGroup.Item>价格:${product.price}</ListGroup.Item>
                        <ListGroup.Item>描述:{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>价格:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>库存:</Col>
                                    <Col>
                                        <strong>{product.countInStock > 0 ? '有货' : '无货'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            {/* disabled={product.countInStock === 0}当返回true的时候button按钮无法点击 */}
                                <Button disabled={product.countInStock === 0}>添加到购物车</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
