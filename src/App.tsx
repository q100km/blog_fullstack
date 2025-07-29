import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
  background: lightgray;
  padding: 120px 0;
`

const H2 = styled.div`
  text-align: center;
`

function App() {
  const Header = () => <div>ХЕДЕР</div>
  const Footer = () => <div>ФУТЕР</div>
  //
  return (
    <>
      <Header />

      <Content>
        <H2>КОНТЕНТ СТРАНИЦЫ</H2>

        <Routes>
          <Route path='/' element={<div> Главная страница</div>} />
          <Route path='/login' element={<div> Авторизация </div>} />
          <Route path='/register' element={<div> Регистрация </div>} />
          <Route path='/users' element={<div> Пользователи </div>} />
          <Route path='/post' element={<div> Статья </div>} />
          <Route path='/post/:postid' element={<div> Новая статья </div>} />

          <Route path='*' element={<div> Ошибка </div>} />
        </Routes>
      </Content>

      <Footer />
    </>
  )
}

export default App
