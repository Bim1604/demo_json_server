const faker = require('faker')
const fs = require('fs')
// Set local to use Vietnamese
faker.locale = 'vi'

const randomCategoryList = (n) => {
  if (n <= 0) return []
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
  if (numberOfProducts <= 0) return []
  const productList = []

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
      }

      productList.push(product)
    })
  }
  return productList
}

// IFFE
;(() => {
  //  random data
  const categoryList = randomCategoryList(4)
  const productList = randomProductList(categoryList, 5)
  // prepare db object
  const db = {
    categories: categoryList,
    product: productList,
    users: [
      {
        id: 1,
        username: 'admin',
        password: '123123',
        fullName: 'admin',
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
    requestCustomer: [
      {
        id: 1,
        description: '',
        star: 5,
        user: 'user',
      },
    ],
    user: [
      {
        id: 1,
        fullName: 'Trần Đại Đăng',
        avatar:
          'https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/26685354_1945336242460292_7151551022183058927_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=hJf4qGXVbS4AX8dJmLH&_nc_ht=scontent.fsgn2-5.fna&oh=c9cc310e5beb2694dfafac2de75c2057&oe=61A52F70',
        gender: 'Nam',
        DOB: '16/04/2000',
        phone: '0364909656',
        password: '123',
        role: "cus",
      },
      {
        id: 2,
        fullName: 'Trần Đại Đen',
        avatar:
          'https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/26685354_1945336242460292_7151551022183058927_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=hJf4qGXVbS4AX8dJmLH&_nc_ht=scontent.fsgn2-5.fna&oh=c9cc310e5beb2694dfafac2de75c2057&oe=61A52F70',
        gender: 'Nam',
        DOB: '16/04/2000',
        phone: '0852573133',
        password: '123',
        role: "mec",
      },
    ],
    vehicle: [
      {
        id: 1,
        cate: 'Xe máy',
        name: 'Subaru Impreza WRX STI RA Spec-C',
        number: '73B.263162',
        color: 'Trắng',
        userID: 1,
      },
      {
        id: 2,
        cate: 'Ô tô',
        name: 'Toyota Vios',
        number: '73B.283342',
        color: 'Trắng',
        userID: 1,
      },
      {
        id: 3,
        cate: 'Ô tô',
        name: 'Toyota Vios 2021',
        number: '73B.280442',
        color: 'Trắng',
        userID: 2,
      },
    ],
    historyCustomer: [
      {
        id: 1,
        name: 'Hoàng Quốc Khánh',
        avatar:
          'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/120706406_691578961460418_6923178654692172363_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SO6c6MX-laQAX_3WDGO&tn=ygiqbK0P1lV46Qek&_nc_ht=scontent.fsgn2-4.fna&oh=91c1ac6fcff0f5a5ecfdaba7c17b29b2&oe=61A827D8',
        phone: '0364909656',
        address: '132 Lê Văn Việt, Quận 9, Thành phố Hồ Chí Minh',
        detailsFix: [
          {
            fix: 'Bể bánh xe',
            unitPrice: 80000,
          },
        ],
        time: '15:16:58 30-10-2021',
        price: 80000,
        status: true,
        motor: 'Xe honda tay ga SH 2021',
        car: '',
        description: 'Bể bánh xe sau',
        reasonCancel: '',
        cusID: 1,
        image: [
          {
            link:
              'https://cdn.xehoiviet.com/images/car/cropthumb/1200x752/2020/08/13/0939636611/cam-do-thanh-ly-sh-da-ga-qua-khong-noi-2l4ggdkk7h4.jpg',
          },
          {
            link:
              'https://muaxegiatot.vn/wp-content/uploads/2019/11/can-truoc-honda-sh-2020-muaxegiatot-vn.jpg',
          },
          {
            link:
              'https://giaxe.2banh.vn/cache/dataupload/products/slides/520_368_66f9e0b774b551ea584e560c347f61a6.jpg',
          },
        ],
      },
      {
        id: 2,
        name: 'Nguyễn Hoàng Vi',
        avatar:
          'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/52005995_2228330520827528_8330242173291200512_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Oi_FAQQ5CRsAX_P_7na&_nc_ht=scontent.fsgn2-2.fna&oh=7163fdb04830fa6e07bb3eac088e7a18&oe=61A88F88',
        phone: '0852573133',
        address: '352 Lê Văn Việt, Quận 9, Thành phố Hồ Chí Minh',
        detailsFix: [
          {
            fix: 'Bể bánh xe',
            unitPrice: 300000,
          },
        ],
        cusID: 1,
        time: '18:19:58 30-10-2021',
        price: 300000,
        status: false,
        motor: '',
        car: 'Toyota Fortuner 2021',
        description: '',
        reasonCancel: 'Thợ bị công an bắt',
        image: [
          {
            link:
              'https://img1.oto.com.vn/crop/230x172/2021/10/26/20211026145928-0d7f_wm.jpg',
          },
          {
            link:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwBBj-Oj09iO9U1rkzwv3Fe9C3z3NxzRT8A&usqp=CAU',
          },
        ],
      },
      {
        id: 3,
        name: 'Nguyễn Hoàng Vi Diệu',
        avatar:
          'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/52005995_2228330520827528_8330242173291200512_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Oi_FAQQ5CRsAX_P_7na&_nc_ht=scontent.fsgn2-2.fna&oh=7163fdb04830fa6e07bb3eac088e7a18&oe=61A88F88',
        phone: '0852573133',
        address: '352 Lê Văn Việt, Quận 9, Thành phố Hồ Chí Minh',
        detailsFix: [
          {
            fix: 'Bể bánh xe',
            unitPrice: 300000,
          },
        ],
        cusID: 2,
        time: '18:19:58 30-10-2021',
        price: 300000,
        status: false,
        motor: '',
        car: 'Toyota Fortuner 2021',
        description: '',
        reasonCancel: 'Thợ bị công an bắt',
        image: [
          {
            link:
              'https://img1.oto.com.vn/crop/230x172/2021/10/26/20211026145928-0d7f_wm.jpg',
          },
          {
            link:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwBBj-Oj09iO9U1rkzwv3Fe9C3z3NxzRT8A&usqp=CAU',
          },
        ],
      },
    ],
  }

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))')
  })
})()
