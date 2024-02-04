# Todo App using React

## Features

- **Create Todo:** Add new tasks to your to-do list.
- **View Todos:** See a list of all existing tasks.
- **Mark as Done:** Mark tasks as completed when they are done.

## Project Setup

### Backend

1. **Create Backend Folder:**
    ```bash
    mkdir backend-todo
    ```

2. **Initialize Node Project:**
    ```bash
    cd backend-todo
    npm init
    ```

    - Set name to `backend-todo`.
    - Set version to `1.0.0`.
    - Other fields are optional for now.

3. **Install Express:**
    ```bash
    npm install express
    ```

    The `node_modules` folder will be created to hold the installed libraries locally.

### Frontend (React)

1. **Create Frontend Folder:**
    ```bash
    mkdir frontend-todo
    ```

2. **Initialize React Project:**
    ```bash
    cd frontend-todo
    npx create-react-app .
    ```

    This will set up a new React project in the current directory.

3. **Start the React App:**
    ```bash
    npm start
    ```

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the default React app.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
