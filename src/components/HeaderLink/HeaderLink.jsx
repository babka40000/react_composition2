import React from 'react'

const HeaderLink = props => {
    return (
        <div className='HeaderLink'>
            {/* Большая синяя ссылка */}
            {/* Через props передаем текст ссылки и адрес ссылки */}
            <a href='#'>Ссылка</a>
        </div>
    )
}

export default HeaderLink