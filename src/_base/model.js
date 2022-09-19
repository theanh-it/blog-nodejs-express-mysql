module.exports = class Model {
    _table;
    _primarKey;
    constructor({table, primarKey = "id"}){
        this._table     = table;
        this.primarKey  = primarKey;
    }

    query(sql, data = false) {
        return new Promise((resolve, reject) => {
            if (data) {
                DB.query(sql, data, (error, results) => {
                    if (error) return reject(error);
                    return resolve(results);
                })
            } else DB.query(sql, (error, results) => {
                if (error) return reject(error);
                return resolve(results);
            });
        });
    }

    getAll(){
        var sql = `SELECT * FROM ${this._table}`;

        return this.query(sql);
    }

    getSingle(id){
        var sql = `SELECT * FROM ${this._table} WHERE ${this._primarKey}=?`;
        
        return this.query(sql, [id]);
    }

    create(data){
        var sql = `INSERT INTO ${this._table} SET ?`;

        return this.query(sql, [data]);
    }

    edit(id, data){
        var sql = `UPDATE ${this._table} SET ? WHERE ${this._primarKey}=?`;

        return this.query(sql, [data, id]);
    }

    delete(id){
        var sql = `DELETE FROM ${this._table} WHERE ${this._primarKey}=?`;

        return this.query(sql, [id]);
    }
}