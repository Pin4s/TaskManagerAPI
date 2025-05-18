class AppError {
    message: String
    statusCode: Number

    constructor(message: String, statusCode: Number = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}

export { AppError }