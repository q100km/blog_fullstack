Области хранения данных:
-БД на json
-BFF
-редакс стор

Сущности приложения:
-пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
-роль пользователя : БД(список ролей), BFF(сессия пользователя с ролью), стор(использование на клиенте )
-статья: БД(список статей), стор(отображение в браузере)
-комментарии: БД (список комментариев),стор(отображение я браузере)

Таблицы БД:
-пользователи - users : id / login / password / registred_at / role_id
-роли - roles : id / name
-посты - posts: id / title /image_url / content / published_at
-комментарии - comments: id /author_id / post_id / contents

Схема состоиния на BFF:
-схема текущего пользователя: login / password / role

Схема для редакс стор на клиенте:
-user: id / login / roleId / session
-posts: []post : id / title / imageUrl / published_at / commentsCount
-post: id / title / imageUrl / content / publushedAt / comments: []comment : id / author / content / publishedAt
-users: []user: id / login / registredAt / role
