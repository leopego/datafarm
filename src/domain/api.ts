import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://job.minhafazenda.ag/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    TokenAuthorization:
      'eyJhbGciOiJIUzUxMiJ9.eyJpZFVzZXIiOjEyOTQ5LCJzdWIiOiJsZW9uYXJkb3BlZ29tYXJ0aW5zQGdtYWlsLmNvbSIsImlkUGFydG5lciI6MzcyLCJyb2xlIjoiUk9MRV9VU1VBUklPIiwiY3JlYXRlZCI6MTY5NTk4ODkwODUzMiwiZXhwIjoxNjk2NTkzNzA4fQ.j-hl3dDbv0S-iW2kYzr1KtqHfpmALYL2QVdjwjwaj-xHCLfaSYMZi52__iYi_DbuNJxtvBT78NGcRHl9V22eHQ',
  },
});
