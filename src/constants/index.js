export default {
    urls: {
        auth: 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
        profile: 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/',
        news: 'https://mysterious-reef-29460.herokuapp.com/api/v1/news'
    },
    messages: {
        authIncorrect: 'Имя пользователя или пароль введены не верно.',
        unKnownError: 'Что-то пошло не так. Попробуйте позже.',
        serverError: 'Сервер временно недоступен. Попробуйте позже.'
    }
};
