# Create virtual enviroment

```bash
virtualenv venv
```

# Install requirements

```bash
pip install -r requirements.txt
```

# Create a project

```bash
django-admin startproject project-name .
```

# Settings Database (In our case Postgresql)

```bash
sudo su - postgres
psql
postgres=# CREATE DATABASE inertiademodb;
postgres=# CREATE USER username WITH PASSWORD 'userpass';
postgres=# ALTER ROLE username SET client_encoding TO 'utf8';
postgres=# ALTER ROLE username  SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE username  SET timezone TO 'UTC';
postgres=# GRANT ALL PRIVILEGES ON DATABASE inertiademodb TO username;
postgres=# \q
```

# Run migrations and load fixtures
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata fixtures/*.yaml
```


# Install npm package
```bash
npm install
```

# To export django routes to js_route run

```bash
python manage.py dump_routes_resolver --format=default --output=static/js/routes/resolver.js
```

# Run npm to Dev

```bash
npm run dev
```

### or run on different terminals

```bash
npm run parcel
```

```bash
python manage.py runserver 0.0.0.0:8000
```