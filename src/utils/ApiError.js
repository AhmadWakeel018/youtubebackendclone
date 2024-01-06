class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stacktrace = ""
        ){
        super(message)
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors= errors;

        if(stacktrace){
            this.stack = stacktrace
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default ApiError;