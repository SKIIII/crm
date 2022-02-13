# author : whl
# time : 2022-01-25 16:27
from django.urls import path
from mgr import customer, sign_in_out, admin_user, product,order, upload

urlpatterns = [
    path('upload', upload.upload),  # 上传
    path('customers', customer.dispatcher),  # 客户
    path('products', product.dispatcher),  # 产品
    path('orders', order.dispatcher),  # 产品

    path('admin_user', admin_user.dispatcher),  # 用户
    path('signin', sign_in_out.signin),
    path('signout', sign_in_out.signout),
]
