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
        city: '605 Lê Văn Việt',
        address: 'Tân Phú, Thủ Đức, Hồ Chí Minh',
        searchValue: '605 Lê Văn Việt',
        latitude: 10.849204613,
        longitude: 106.809063143,
      },
      {
        id: 2,
        city: 'Bệnh viện quận 10',
        address: '571 Sư Vạn Hạnh, Phường 13, Quận 10, Hồ Chí Minh',
        searchValue: 'Bệnh viện quận 10',
        latitude: 10.776170924,
        longitude: 106.666653019,
      },
      {
        id: 3,
        city: 'Binh Duong International General Hospital',
        address: 'Lái Thiêu, Thuận An, Bình Dương',
        searchValue: 'Binh Duong',
        latitude: 10.9042557380001,
        longitude: 106.710889879,
      },
    ],
  };

  // write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully =))");
  });
})();
