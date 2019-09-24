export const errorMessage = (errorMessageText) => {
    switch (errorMessageText) {
        case 'some_error':
            return 'Ошибка сервера';
        case 'service_unavailable':
            return 'Сервер недоступен';
        case 'wrong_email_or_password':
            return 'Неправильный email или пароль';
        case 'user_not_found':
            return 'Пользователь не найден';
        default:
            break;
    }
}