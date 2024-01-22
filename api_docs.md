# API Documentation

## Root URL

The root URL for this API is `api.zurly.me`.

## Routes

#### `/ip`

- Description: Retrieves the IP address of the client making the request.
- Method: GET
- Parameters: None
- Example Request: `GET /ip`
- Example Response:
    ```
    192.168.0.1
    ```

#### `/agent`

- Description: Retrieves the user agent string of the client making the request.
- Method: GET
- Parameters: None
- Example Request: `GET /agent`
- Example Response:
    ```
    Firefox 121.0.0 / Windows 10.0.0
    ```

## How to Use

1. Clone the repository: `git clone https://github.com/zurlyy/zurly-api`
2. Install dependencies: `pnpm install`
3. Start the server in development: `pnpm run dev`
4. Send requests to the desired routes using your preferred HTTP client.

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](/CONTRIBUTING.md) to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

