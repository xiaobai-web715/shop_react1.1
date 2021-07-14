import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row> {/*行*/}
                {/* 'text-center py-3'是引入的bootstrap.min.css文件里面有这个类标签对应的css样式 */}
                    <Col className ='text-center py-3'>CopyRight &copy; 网上商城</Col>{/*列*/}
                </Row>
            </Container>
            {/* 标签小写 */}
        </footer>
    )
}

export default Footer
