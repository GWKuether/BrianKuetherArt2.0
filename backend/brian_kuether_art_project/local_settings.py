# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-uxnih0w6ct&1rfjrp6s*6!#6k6h%+8$+=edghdi_@_724e%315'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'art_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}
