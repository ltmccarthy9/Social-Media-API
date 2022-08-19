# Social-Media-API

## Description
This application utilizes a mongoDB database to demonstrate
CRUD operations in a social media setting with users, posts, and friends.

## Technologies Used
* Javascript
* MongoDB
* Mongoose
* Express
* Git
* Visual Studio Code


## Demonstration
https://drive.google.com/file/d/16Z8ldTyVaVMG_xfHBiqY5bShxg81TceG/view

## Code
```JavaScript
   deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userID})
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
```
Finding user by id and delete.  Send error if there is no user.

## License

MIT License

Copyright (c) 2022 Liam McCarthy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
