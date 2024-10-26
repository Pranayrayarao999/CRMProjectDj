"""
WSGI config for DJFinalProject project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DJFinalProject.settings')

application = get_wsgi_application()

#check you have requirements.txt and versel.json before hosting to versel 
# we need to create versel.json and add the code inside it, then add here this, check in setting added in hosts(vercel.app)
app = application
