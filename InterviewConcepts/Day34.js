// Technical interview sample for - Javascript, Object oriented programming, MongoDB schema relationships and Joins (aggregations)

const mul = (num) => {
  return (val) => {
    if (val) {
      return mul(val * num);
    }
    return num;
  };
};

const result = mul(2)(3)(4)(2);
console.log("Result mul =", result());

class Car {
  constructor(type) {
    this.type = type;
  }

  display() {
    console.log(`Car model is ${this.type}`);
  }
}

class Model extends Car {
  constructor(type) {
    super(type);
  }
}

let obj = new Model("BMW");
obj.display();

let arr = [1, 2, 2, 4, 5, 6, 6];
arr[100] = 30;

let resultArr = [...new Set(arr)];

// console.log("Unique arr =", resultArr);

//  MongoDB schema relationships - User - Order collection

//  User schema
// {
//     _id : { type: mongoose.Types.ObjectId},
//     name,
//     email,
//     address
// }

// Order schema
// {
//     _id : { type: mongoose.Types.ObjectId},
//     userId : {type: mongoose.Types.ObjectId, ref: 'user'}
// }

// aggregation piepline

let query = [
  {
    $lookup: {
      from: "user",
      foreignField: "userId",
      localField: "_id",
      as: "userDetails",
    },
  },
  {
    $project: {
      name: "$userDetails.name",
      email: "$userDetails.email",
      address: "$userDetails.address",
      totalValue: 1,
    },
  },
];

let orderDetails = await orderModel.aggregate(query);
