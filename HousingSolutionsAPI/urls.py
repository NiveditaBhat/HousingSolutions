"""HousingSolutionsAPI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from graphene_django.views import GraphQLView
from graphqlAPI.schema import schema
from django.conf.urls import url

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^graphql/', GraphQLView.as_view(graphiql=True, schema=schema)),
]

admin.site.site_header = "HousingSolutions Admin"
admin.site.site_title = "HousingSolutions Admin Portal"
admin.site.index_title = "Welcome to HousingSolutions Admin Portal"
