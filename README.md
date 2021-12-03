# Dockerizing a 3-Tier App

Using the including `frontend`, `backend`, and `database` folders, create a `docker-compose.yml` connecting them.

## Docker Compose

### Backend

There is a functional `Dockerfile` in the `backend` directory that should be used.

The following environment variables must be set:

* `DATABASE_HOST`
* `DATABASE_USER`
* `DATABASE_NAME`
* `DATABASE_PASSWORD`
* `PORT` (should be set to 3000)

You additionally must make port 3000 available _on the host_.

### Frontend

Use an `nginx` image to host the files in the `frontend` directory. Map port 80 inside the container to port 8080 on the host.

### Database

Use a `postgresql` image to run the database. Make sure to mount its data to the `database` directory.

## Setup

Once your `docker-compose.yml` file is complete, you must migrate and seed the database. This command will do both:

```bash
npx knex migrate:latest && npx knex seed:run
```

---

If you did everything correctly, you should be able to launch all 3 services and see Bixby, Harmony, and Mesa listed as dogs at `http://localhost:8080` on your host computer.
