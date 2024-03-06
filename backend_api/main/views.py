from rest_framework import generics, permissions, pagination, viewsets
from . import serializers
from . import models

from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


class ExpertList(generics.ListCreateAPIView):
    queryset = models.Expert.objects.all()
    serializer_class=serializers.ExpertSerializer
    
class ExpertDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Expert.objects.all()
    serializer_class=serializers.ExpertDetailSerializer
    
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class=serializers.ProductListSerializer
    pagination_class=pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.GET['category']
        category = models.ProductCategory.objects.get(id=category)
        qs = qs.filter(category=category)
        return qs

class TagProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class=serializers.ProductListSerializer
    pagination_class=pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__icontains=tag)
        return qs
    
class RelatedProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class=serializers.ProductListSerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs = qs.filter(category=product.category).exclude(id=product_id)
        return qs
    
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class=serializers.ProductDetailSerializer
    
# Customers
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class=serializers.CustomerSerializer
    
class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer

@csrf_exempt
def customer_login(request):
    username=request.POST.get('username')
    password=request.POST.get('password')
    user=authenticate(username=username,password=password)
    if user:
      customer=models.Customer.objects.get(user=user)
      msg = {
          'bool': True,
          'user': user.username,
          'id': customer.id,
    }
    else:
        msg = {
          'bool': False,
          'msg': 'Invalid Username/Password'
        } 
    return JsonResponse(msg)

@csrf_exempt
def customer_register(request):
    first_name=request.POST.get('first_name')
    last_name=request.POST.get('last_name')
    username=request.POST.get('username')
    email=request.POST.get('email')
    phone_number=request.POST.get('phone_number')
    password=request.POST.get('password')
    try:
        user=User.objects.create(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
        )
        if user:
            try:
                # Create customer
                customer=models.Customer.objects.create(
                    user=user,
                    phone_number=phone_number
                )
                msg = {
                    'bool': True,
                    'user': user.id,
                    'customer': customer.id,
                    'msg': 'Registration successful. Proceed to login'
                }
            except IntegrityError:
                msg = {
                    'bool': False,
                    'msg': 'Phone number already exists.'
                }
        else:
            msg = {
                'bool': False,
                'msg': 'Something went wrong. Try again.'
            }
    except IntegrityError:
            msg = {
                'bool': False,
                'msg': 'Username already exists.'
            }
    return JsonResponse(msg)
    
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class=serializers.OrderSerializer

class OrderItemList(generics.ListCreateAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class=serializers.OrderItemSerializer

# Customer order item list
class CustomerOrderItemList(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class=serializers.OrderItemSerializer
    
    def get_queryset(self):
        qs=super().get_queryset()
        customer_id=self.kwargs['pk']
        qs=qs.filter(order__customer__id=customer_id)
        return qs
    
class OrderDetail(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class=serializers.OrderDetailSerializer
    
    def get_queryset(self):
        order_id=self.kwargs['pk']
        order=models.Order.objects.get(id=order_id)
        order_items=models.OrderItems.objects.filter(order=order)
        return order_items
    
class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CustomerAddressSerializer
    queryset=models.CustomerAddress.objects.all()
    
class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.ProductRatingSerializer
    queryset=models.ProductRating.objects.all()
    
# Category list API
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class=serializers.CategorySerializer
    
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class=serializers.CategoryDetailSerializer

@csrf_exempt
def update_order_status(request, order_id):
    if request.method=='POST':
        updateRes=models.Order.objects.filter(id=order_id).update(order_status=True)
        msg = {
                'bool': False,
            }
        if updateRes:
           msg = {
                'bool': True,
            } 
    return JsonResponse(msg)