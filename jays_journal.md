# timetable
4 hours

# Tech Stack
Front End:
React, Redux, TypeScript

Back End:
Django, Python, PostgreSQL 

GitHub 


## backend planning


API:

restful API:
/api/health/ get all the health data points
/api/health/1 get a single data point



# Django
- install django project
- install django app
  - register config of app to settings.py
- install postgres
  - resource: https://docs.djangoproject.com/en/4.1/ref/databases/ 
  - resource: https://www.enterprisedb.com/postgres-tutorials/how-use-postgresql-django
- `pip install psycopg2`
- update `settings.py` to include database engine update

```
DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.postgresql',
       'NAME': 'barnabus',
       'USER': 'barnabus',
       'PASSWORD': '',
       'HOST': 'localhost', # default is empty - local host
       'PORT': '5432',
   }
}
```

- Build default schema
  - python manage.py makemigrations
  - python manage.py migrate
- Build out models
  - register model in admin.py

- setup views

- setup URLS in projects, then AP

### Web scraping
