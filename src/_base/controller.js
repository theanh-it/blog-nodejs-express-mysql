module.exports = class Controller {
    constructor({model}){
        this.model = model;
        this.responseSuccess    = this.responseSuccess.bind(this);
        this.responseError      = this.responseError.bind(this);
        this.create             = this.create.bind(this);
        this.index              = this.index.bind(this);
        this.show               = this.show.bind(this);
        this.edit               = this.edit.bind(this);
        this.delete             = this.delete.bind(this);
    }

    responseSuccess(response, {status = 200, messgae = "success", data = null}){
        return response.status(status).json({
            message: messgae,
            result: data
        });
    }

    responseError(response, {status = 422, messgae = "error", data = null}){
        return response.status(status).json({
            message: messgae,
            result: data
        });
    }

    create(request, response){
        return this.model
        .create(request.body)
        .then(results => this.responseSuccess(response, {data: results}))
        .catch(error => this.responseError(response, {data: error}));
    }

    index(request, response){
        return this.model
        .getAll()
        .then(results => this.responseSuccess(response, {data: results}))
        .catch(error => this.responseError(response, {data: error}));
    }

    show(request, response){
        return this.model
        .getSingle(request.params.id)
        .then(results => this.responseSuccess(response, {data: results}))
        .catch(error => this.responseError(response, {data: error}));
    }

    edit(request, response){
        return this.model
        .edit(request.params.id, request.body)
        .then(results => this.responseSuccess(response, {data: results}))
        .catch(error => this.responseError(response, {data: error}));
    }

    delete(request, response){
        return this.model
        .delete(request.params.id)
        .then(results => this.responseSuccess(response, {data: results}))
        .catch(error => this.responseError(response, {data: error}));
    }
}