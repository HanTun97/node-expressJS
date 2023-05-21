let db = [];
let counter = 0;

module.exports = class Product {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save(){
        this.id = ++counter;
        db.push(this);
        return this;
    }

    edit(){
        const index = db.findIndex(prod => prod.id == this.id);
        if (index != -1){
            db.splice(index, 1, this);
        } 
        return this;
    }

    static getAll(){
        return db;
    }

    static getByTitle(title) {
        return db.filter(s => s.title == title)
    }

    static deleteById(prodId){
        const index = db.findIndex(prod => prod.id == prodId);
        const deletedProd = db[index];
        db.splice(index, 1);
        return deletedProd;
    }



}