# Create virtual enviroment

virtualenv venv

# Install requirements

pip install -r requirements.txt

# Create a project

django-admin startproject project-name .

# Settings Database (In our case Postgresql)

```bash
sudo su - postgres
psql
postgres@wagtail-sandbox:~$ psql
# psql (9.3.10)
# Type "help" for help.
postgres=# CREATE DATABASE inertiademodb;
postgres=# CREATE USER username WITH PASSWORD 'userpass';
postgres=# ALTER ROLE username SET client_encoding TO 'utf8';
postgres=# ALTER ROLE username  SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE username  SET timezone TO 'UTC';
postgres=# GRANT ALL PRIVILEGES ON DATABASE inertiademodb TO usernamenameuser;
postgres=# \q
```
# Install npm package

npm init
npm install
npm install @inertiajs/inertia @inertiajs/inertia-vue vue
