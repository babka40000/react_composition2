import React from 'react'
import HeaderLink from '../../HeaderLink/HeaderLink'
import NewsBlock from './NewsBlock/NewsBlock'
import Currency from './Currency/Currency'

const HeaderLeft = props => {
    return (
        <div className='HeaderLeft'>
            {/* Левый верхний блок. Выводим в нем ссылки, блок новостей и курсы валют */}
            <div className='HeaderLinkBlock'>
                <HeaderLink />
                <HeaderLink />
                <HeaderLink />
                Текущая дата
            </div>
            <NewsBlock />
            <div className='CurrencyBlock'>
                <Currency />
                <Currency />
                <Currency />
            </div>

        </div>
    )
}

export default HeaderLeft