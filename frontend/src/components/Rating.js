import React from 'react'
// {value , text}的意思是props解构出这两个属性，可以在后面直接调用了
// 如何判定这里面的值符不符合传递的类型（这里如果是TS的话就会很好来设置）
// 但是这个案例里面还是js所以用了另一种方式propTypes(注意这里必须小写)
// import propTypes from 'prop-types'

const Rating = ({value , text ,color}) => {
    return (
        <div className='rating'>
            <span>
                <i 
                // 两个花括号
                style={{color : color}}
                className={
                    value >= 1 
                        ? 'fas fa-star'
                        : value >= 0.5 
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i className={
                    value >= 2 
                        ? 'fas fa-star'
                        : value >= 1.5 
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i className={
                    value >= 3 
                        ? 'fas fa-star'
                        : value >= 2.5 
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i className={
                    value >= 4 
                        ? 'fas fa-star'
                        : value >= 3.5 
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i className={
                    value >= 5 
                        ? 'fas fa-star'
                        : value >= 4.5 
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
            <span>{text ? text : undefined}</span>
        </div>
    )
}


// 在子组件里面设置默认属性值（因为星星显示不出来，所以还没法验证）
//测试过了text，把父组件那里text删掉，这里的默认值就会生效
// Rating.defaultProps = {
//     color : '#f8e825',
//     text : 10
// }

// 这里是js方式对变量的属性进行定义
// Rating.propTypes = {
//     value : propTypes.number.isRequired,
//     text : propTypes.string.isRequired,
//     color : propTypes.string,
// }

export default Rating
