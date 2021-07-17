import React , {useState , useEffect}from 'react'
import {Link} from 'react-router-dom'
// 为了可以实现跳转到首先
import {Row , Col , Image , ListGroup , Card , Button} from 'react-bootstrap'
// 行 列 图片 包裹作为项目项 Card表格 按钮
// import products from '../poducts'
import Rating from '../components/Rating'
import axios from 'axios'

// 会继承Route里面的三个属性location ，match ，history
const ProductScreen = ({match}) => {
    // 数组的find方法（当然这种写法是用的本地的数据，前后端传输的话，这里就会写一个请求接口来请求数据）
    // const product = products.find(product => product._id === match.params.id)
    // console.log(product)
    // 这里就相应的拿到了我们的产品数据了

    //修改之前的方式这里直接通过发起请求的方式来获取到数据
    const [product , setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async() =>{
            
            // const res = await axios.get(`/api/products/${match.params.id}`)
            //这里应该都是传过来的对象形式的
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            // console.log(match)
            // 这个match传进来的也是一个对象，里面有一个params，里面的内容就是id : '1'，感觉是对应路由里面的:id
            // console.log(res)
            setProduct(data)
        }
        fetchProduct()
    },[match])
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
