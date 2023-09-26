import React from 'react'
import News from './News/News'

const NewsBlock = props => {
  return (
    <div className='NewsBlock'>
      {/* Новостной блок */}
      {/* Берем из props массив с новостями и через map и компонент News публикуем новости */}
      <News />
      <News />
      <News />
      <News />
      <News />
    </div>
  )
}

export default NewsBlock