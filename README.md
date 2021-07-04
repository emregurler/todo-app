# Todo App

Simple single page Todo Application that you can add, delete, toggle, edit todos. There is no authentication, pagination or lazy loading.

If user has not any todo, No Content components is shown.
User can easily add new todos with `Add` Button on the right. After clicking button, a form comes with animation.
Editing and deleting operations are located inside each TodoItem. When you hover the todoItem, these buttons are shown

Check [playground](https://todo-app-theta-rose.vercel.app/)

## Techs

This app uses libraries listed below:

- React
- Redux
- Redux-Saga
- Eslint
- Prettier
- Husky
- Json-server
- Ant-Design
- Moment

## Installation

App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies

```sh
cd todo-app
npm install
```

### For development

In development mode, app uses local json-server. It runs in port 5000.
On the other hand dev server runs on port 3000
To start json-server and dev server.

```sh
npm run dev
```

#### Note

Requests are handled depending on NODE_ENV. In development mode it restrictly uses port 5000 until you change json-server port

In prod mode, you can pass `API_URL` externally with `REACT_APP_API_URL`.

## License

MIT
