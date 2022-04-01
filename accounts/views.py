from django.shortcuts import render

# Create your views here.

# Create your views here.
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response 

from django.contrib.auth import get_user_model
User = get_user_model()

#from .serializers import *

class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request, format=None):
        data = request.data

        name = data['name']
        email = data['email']
        email = email.lower()
        password = data['password']
        re_password = data['re_password']

        if password == re_password:
            if len(password) >=8:
                if not User.objects.filter(email=email).exists():
                     User.objects.create_user(name=name, email=email, password=password)
                     return Response(
                                {'success': 'User created successfully'},
                                status=status.HTTP_201_CREATED
                            )
                else:
                    return Response(
                            {'error': 'User with this email already exists'},
                            status=status.HTTP_400_BAD_REQUEST
                        )

            else:
                return Response(
                        {'error': 'Password must be at least 8 characters long'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
        
        else:
            return Response(
                    {'error': 'Passwords do not match'},
                    status=status.HTTP_400_BAD_REQUEST
                )

