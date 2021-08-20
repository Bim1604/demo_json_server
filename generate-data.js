const faker = require('faker')
const fs = require('fs')
// Set local to use Vietnamese
faker.locale ="vi"

const randomCategoryList = (n) => {
    if (n <= 0) return [];
    const categoryList = []

    //  loop and pust category
    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            createAt: Date.now(),
            updateAt: Date.now(),
        }

        categoryList.push(category)
    })
    return categoryList
}

const randomProductList = (categoryList, numberOfProducts) => {
    if (numberOfProducts <= 0) return [];
    const productList = [];

    // random data
    for (const category of categoryList) {
        Array.from(new Array(numberOfProducts)).forEach(() => {
            const product = {
                categoryID: category.id,
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                color: faker.commerce.color(),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),
                createAt: Date.now(),
                updateAt: Date.now(),
                thumbnailUrl: faker.image.imageUrl(400, 400),
            };

            productList.push(product);
        });
    }
    return productList;
}

// IFFE
(() => {
    //  random data
    const categoryList = randomCategoryList(4)
    const productList = randomProductList(categoryList, 5);
    // prepare db object
    const db = {
        categories: categoryList,
        product: productList,
        profile: {
            name: "po"
        },
    };

    // write db object to db.json
    fs.writeFile('db.json', JSON.stringify(db), () => {
        console.log("Generate data successfully =))");
    })
})()