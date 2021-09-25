const faker = require("faker");
const fs = require("fs");
// Set local to use Vietnamese
faker.locale = "vi";

const randomCategoryList = (n) => {
  if (n <= 0) return [];
  const categoryList = [];

  //  loop and pust category
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      createAt: Date.now(),
      updateAt: Date.now(),
    };

    categoryList.push(category);
  });
  return categoryList;
};

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
};

// IFFE
(() => {
  //  random data
  const categoryList = randomCategoryList(4);
  const productList = randomProductList(categoryList, 5);
  // prepare db object
  const db = {
    categories: categoryList,
    product: productList,
    users: [
      {
        id: 1,
        username: "admin",
        password: "123123",
        fullName: "admin",
      },
    ],
    history: [
      {
        id: 1,
        city: 'Quan 9',
        address: '36 Le van viet, Quan 9, Thanh Pho Ho Chi Minh',
        searchValue: 'Quan 9',
      },
      {
        id: 2,
        city: 'Quan 12',
        address: '12 Quang Trung, Quan 12, Thanh Pho Ho Chi Minh',
        searchValue: 'Quan 12',
      },
      {
        id: 3,
        city: 'Quan 9',
        address: '245 Man Thien, Quan 9, Thanh Pho Ho Chi Minh',
        searchValue: 'Man Thien',
      },
      {
        id: 4,
        city: 'Quan 9',
        address: '10 Nguyen Xien, Quan 9, Thanh Pho Ho Chi Minh',
        searchValue: 'Nguyen Xien',
      }
    ],
  };

  // write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully =))");
  });
})();
