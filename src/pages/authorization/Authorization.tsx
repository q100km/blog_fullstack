import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { server } from '../../backend for front/bff'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { IStyledProps } from '../../components/Icon/Icon'
import Input from '../../components/input/Input'
import Button from '../../components/button/button'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/actionts'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { useStore } from 'react-redux'
import { selectUserRole } from '../../redux/selectors'
import { ROLE } from '../../constants/role'

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Логин обязателен')
    .matches(/^\w+$/, 'Неверный логин')
    .min(3, 'Минимальное количество символов: 3')
    .max(15, 'Максимальное количество символов: 15'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .matches(/^[\w#%]+$/, 'Допускаются буквы,цифры и знаки % #')
    .min(6, 'Минимальное количество символов: 6')
    .max(15, 'Максимальное количество символов: 15'),
})

const AuthorizationContainer = ({ className }: IStyledProps) => {
  //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  })

  const [formError, setFormError] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const store = useStore()
  const roleId = useAppSelector(selectUserRole)

  const errorMessage = errors?.login?.message || errors?.password?.message || formError

  const onSubmit = ({ login, password }: { login: string; password: string }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setFormError(`Ошибка запроса ${error || 'Пустой ответ от сервера'}`)
        return
      }

      dispatch(setUser(res))
    })
  }

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout

    return store.subscribe(() => {
      let prevWasLogout = currentWasLogout
      currentWasLogout = store.getState().app.wasLogout

      if (currentWasLogout !== prevWasLogout) {
        reset()
      }
    })

    //
  }, [reset, store])

  if (roleId !== ROLE.GUEST) return <Navigate to={'/'} />

  return (
    <div className={className}>
      <h2 style={{ margin: '40px 0' }}>Authorization</h2>
      Текст юзер не найден' в BFF - авторизация error: 'юзер не найден' исправить
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          placeholder='Логин'
          {...register('login', {
            onChange: () => setFormError(null),
          })}
        />
        <Input
          type='text'
          placeholder='Пароль'
          {...register('password', {
            onChange: () => setFormError(null),
          })}
        />

        <Button type='submit' disabled={!!errorMessage}>
          Авторизоваться
        </Button>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <StyledNavLink to='/register'>Зарегистрироваться</StyledNavLink>
      </form>
    </div>
  )
}

const Authorization = styled(AuthorizationContainer)`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`

const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
`

const ErrorMessage = styled.div`
  width: 100%;
  background-color: #fcadad;
  font-size: 18px;
  margin: 10px 0;
  padding: 10px;
`

export default Authorization
