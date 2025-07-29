import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/header/Header'

const Content = styled.div`
  /* min-height: 100vh; */
  background: lightgray;
  padding: 120px 0;
`

const H2 = styled.div`
  text-align: center;
`

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`

const Footer = () => <div style={{ backgroundColor: 'pink' }}>ФУТЕР</div>

function App() {
  //
  return (
    <AppColumn>
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
    </AppColumn>
  )
}

export default App
