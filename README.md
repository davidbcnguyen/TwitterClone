# TwitterClone
A Twitter clone made using Spring Boot and React

## Running with Docker
The easiest way to run this application is through Docker using the provided `docker-compose.yaml` file. This will create 3 containers to run:
- Frontend (React static files served by Nginx)
- Backend (Spring Boot)
- Database (MySQL)

### Build
`docker compose build`
### Run
`docker compose up`

## Extras
For more details on running without docker (compose), check the individual folders and their README files.