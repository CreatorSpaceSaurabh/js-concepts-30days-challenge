// ***** Problem statement : To group an output for resultant array****
let input = [
  { groupId: "groupA", users: ["user1", "user0"] },
  { groupId: "groupB", users: ["user2", "user0"] },
  { groupId: "groupC", users: ["user1", "user2"] },
];

// output = [
//     {user:"user0",groupIds:["groupA","groupB"]},
//     {user:"user1",groupIds:["groupA","groupC"]},
//     {user:"user2",groupIds:["groupB","groupC"]}
// ]

const mapData = (arr) => {
  let hashMap = {};
  arr.forEach((element) => {
    element.users.forEach((user) => {
      if (!hashMap[user]) {
        hashMap[user] = [];
      }
      hashMap[user].push(element.groupId);
    });
  });
  return hashMap;
};

let rawData = mapData(input);
let finalResult = Object.keys(rawData).map((user) => {
  return {
    user,
    groupIds: rawData[user],
  };
});

console.log("finalResult ==", finalResult);
