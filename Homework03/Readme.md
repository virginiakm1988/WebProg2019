# 1. 連接到 MongoDB
```
//in backend/src/index.js
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/GraphQL",  //<please paste your own URL here>
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
```
# 2. start the backend and frontend

```
git cd backend
npm start

git cd frontend
npm start`
```
# 3.  create your user
在前端create user 的功能尚未製作完成，所以要在後端的playground `localhost:4000` 新增 user。
####example:
```
mutation {
  createUser(user: {
    name: "Michael Jackson"
    age: 60
    email: "ILoveBillieJean@gmail.com"
  }) {
		
    name
    age
    email
  }
}
```

# 4.  Post something new!
You can now post at the frontend.


