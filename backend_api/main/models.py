from django.db import models
from django.contrib.auth.models import User

class Expert(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)
    
    def __str__(self):
        return self.user.username
    
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)
    
    def __str__(self):
        return self.title
    
class Product(models.Model):
    category=models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,
                               related_name='category_product')
    expert=models.ForeignKey(Expert,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=200)
    slug=models.CharField(max_length=300,unique=True,null=True)
    detail=models.TextField(null=True)
    price=models.DecimalField(max_digits=10,decimal_places=2)
    tags=models.TextField(null=True)
    image=models.ImageField(upload_to='product_imgs/',null=True)
    demo_url=models.URLField(null=True,blank=True)
    product_file=models.FileField(upload_to='product_files/',null=True)
    
    def __str__(self):
        return self.title
    
    def tag_list(self):
        tagList=self.tags.split(',')
        return tagList
    
# Customer model
class Customer(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    phone_number=models.PositiveBigIntegerField(unique=True)
    
    def __str__(self):
        return self.user.username


# Order model
class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_orders')
    order_time=models.DateTimeField(auto_now_add=True)
    order_status=models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return '%s' % (self.order_time)
    
# Order items model
class OrderItems(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE,related_name='order_items')
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    qty=models.IntegerField(default=1)
    price=models.DecimalField(max_digits=10,decimal_places=2,default=10)
    
    def __str__(self):
        return self.product.title
    
# Customer address model
class CustomerAddress(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_addresses')
    address=models.TextField()
    default_address=models.BooleanField(default=False)
    
    def __str__(self):
        return self.address
    
class ProductRating(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customers')
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_ratings')
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.rating} - {self.reviews}'  
    
    
# Product Images model
class ProductImage(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_imgs')
    image=models.ImageField(upload_to='product_imgs/', null=True)
    
    
    def __str__(self):
        return self.image.url
    

    # class Meta:
    #     verbose_name = _("")
    #     verbose_name_plural = _("s")

    # def __str__(self):
    #     return self.name

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})
