# Next Level Week - Heat - Node.js
Node.js project developed during NLW Heat 🔥.
API used on [ReactJS](https://github.com/luizwhite/nlw-heat-reactjs/tree/main), [Expo](https://github.com/luizwhite/nlw-heat-expo/tree/main) and [Elixir](https://github.com/luizwhite/nlw-heat-elixir/tree/main) projects.

## 🚀 Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

## 🎨 Figma Layout
[`https://www.figma.com/community/file/1031699316177416916`](https://www.figma.com/community/file/1031699316177416916)

## 🧭 API Routes
> [localhost:4000](http://localhost:4000)
- **GET** Profile User `/profile --header Bearer <token>`
- **GET** Last 3 Msgs `/messages/last3`
- **POST** Create Message `/messages --header Bearer <token>`

## 💻 Local Installation
```bash
# Open terminal and clone this repository
$ git clone https://github.com/luizwhite/nlw-heat-node.git

# Create a .env.local file and add the requested environment variables
# based on the .env.example file in the project root

# Install dependencies
$ yarn

# Run migrations
$ yarn prisma migrate dev

# Start the application
$ yarn dev

# ------------------------- #

# Access prisma database with
yarn prisma studio
```
