import http from "axios";

const api = http.create({
    baseURL: "/",
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '70335667-2408-4011-a994-ea3e7042d96f'
      }
});

export { api };
