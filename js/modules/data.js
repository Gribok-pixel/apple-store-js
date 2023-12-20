"use strict"

class GetData {

    constructor(url) {
        this.url = url;
    }

    async getAllProducts() {
        try {
            const res = await fetch(this.url)
            return await res.json()
        } catch (err) {
            console.log('ERROR yoy !!!!!!!!!!!!!!!! ' + err)
        }
    }
    
}

export {GetData}