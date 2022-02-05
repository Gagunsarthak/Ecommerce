import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  list:any[]=[
    {
      id:"1",
      name:"Hp Laptop",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    {
      id:"2",
      name:"Dell Inspiron 5000",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    {
      id:"3",
      name:"Apple mac book",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
    },
    { id:"4",
      name:"Acer Laptop",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.macworld.com/wp-content/uploads/2022/01/macbook-pro-compare.jpg?quality=50&strip=all&w=1024"
    },
    { id:"5",
      name:"Dell Inspiron 5000",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"6",
      name:"Apple mac book",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
    },
    { id:"7",
      name:"Hp Laptop",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"8",
      name:"Dell Inspiron 5000",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"9",
      name:"Apple mac book",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
    },
    { id:"10",
      name:"Acer Laptop",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.macworld.com/wp-content/uploads/2022/01/macbook-pro-compare.jpg?quality=50&strip=all&w=1024"
    },
    { id:"11",
      name:"Dell Inspiron 5000",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"12",
      name:"Apple mac book",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
    },  { id:"13",
      name:"Hp Laptop",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"14",
      name:"Dell Inspiron 5000",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"15",
      name:"Apple mac book",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
    },
    { id:"16",
      name:"Acer Laptop",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.macworld.com/wp-content/uploads/2022/01/macbook-pro-compare.jpg?quality=50&strip=all&w=1024"
    },
    { id:"17",
      name:"Dell Inspiron 5000",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
    },
    { id:"18",
      name:"Apple mac book",
      description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
      price:"68,310",
      imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
    },
    { id:"19",
    name:"Apple mac book",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
  },
  { id:"20",
    name:"Acer Laptop",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://www.macworld.com/wp-content/uploads/2022/01/macbook-pro-compare.jpg?quality=50&strip=all&w=1024"
  },
  { id:"21",
    name:"Dell Inspiron 5000",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
  },
  { id:"22",
    name:"Apple mac book",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
  },  { id:"23",
    name:"Hp Laptop",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
  },
  { id:"24",
    name:"Dell Inspiron 5000",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
  },
  { id:"25",
    name:"Apple mac book",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
  },
  { id:"26",
    name:"Acer Laptop",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://www.macworld.com/wp-content/uploads/2022/01/macbook-pro-compare.jpg?quality=50&strip=all&w=1024"
  },
  { id:"27",
    name:"Dell Inspiron 5000",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
  },
  { id:"28",
    name:"Apple mac book",
    description:" Superb laptop with reyzen 5 processor. Very well suited for gaming",
    price:"68,310",
    imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/201116214440-9-macbook-air-review-silicon-underscoredjpg.jpg?q=w_2615,h_1556,x_0,y_0,c_fill"
  }
  ]
  private dataSource = new BehaviorSubject(this.list);
  currentData = this.dataSource.asObservable();
  constructor() { }
  changeData(newData: any){
    this.dataSource.next(newData); 
    //log("The data source is ",this.dataSource)
    }
}
