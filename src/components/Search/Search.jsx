import React from 'react'
import HeaderLink from '../HeaderLink/HeaderLink'

const Search = props => {
    return (
        <div className='Search'>
            {/* Блок поиска */}
            <div className='HeaderLinkBlock'>
                <HeaderLink />
                <HeaderLink />
                <HeaderLink />
                <HeaderLink />
                <HeaderLink />
                <HeaderLink />
            </div>
            <div className='SearchGroup'>
                <img src='/123.ipg' alt='Логотип Яндекс'></img>
                <form>
                    <input type="text" />
                    <button>Найти</button>
                </form>
                Найдется все! Например...
            </div>
        </div>
    )
}

export default Search