import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';

const Header = () => {
    return (
        <div class="Header">
            {/* Верхний блок. Делим его на два блока правый и левый */}
            <HeaderLeft />
            <HeaderRight />
        </div>
    )
}

export default Header;