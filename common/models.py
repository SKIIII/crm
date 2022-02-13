import datetime
import os

from django.db import models


def directory_path(instance, filename):
    ext = filename.split('.').pop()
    filename = '{0}{1}.{2}'.format(instance.name, instance.identity_card, ext)
    return os.path.join(instance.major.name, filename)  # 系统路径分隔符差异，增强代码重用性


# Create your models here.
class Customer(models.Model):
    # 客户名称
    name = models.CharField('客户名称', max_length=200)

    # 联系电话
    phonenumber = models.CharField('联系电话', max_length=200, null=True)

    # 地址
    address = models.CharField('地址', max_length=200, null=True)

    # 创建时间
    create_time = models.DateTimeField('保存日期', auto_now_add=True)

    # 更新时间
    update_time = models.DateTimeField('修改日期', auto_now=True)


class Product(models.Model):
    # 产品编号
    sn = models.CharField('产品编号', max_length=200, null=True)

    # 产品名称
    name = models.CharField('产品名称', max_length=200)

    # 尺寸规格
    spec = models.CharField('尺寸规格', max_length=200)

    # 图片
    image = models.CharField('照片', max_length=200, default='')

    # 价格
    price = models.DecimalField('价格', max_digits=11, decimal_places=3, default=0)

    # 客户ID
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT, default=0)

    # 创建时间
    create_time = models.DateTimeField('创建日期', auto_now_add=True)

    # 更新时间
    update_time = models.DateTimeField('修改日期', auto_now=True)


class Order(models.Model):
    # 订单编号
    sn = models.CharField('订单编号', max_length=200)

    # 创建时间
    create_time = models.DateTimeField('创建日期', auto_now_add=True)

    # 更新时间
    update_time = models.DateTimeField('修改日期', auto_now=True)

    # 数量
    num = models.IntegerField(default=0)

    # 价格
    price = models.DecimalField(max_digits=11, decimal_places=3, default=0)

    # 总价
    money = models.DecimalField(max_digits=11, decimal_places=3, default=0)

    # 客户ID
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT, default=0)

    # 产品ID
    product = models.ForeignKey(Product, on_delete=models.PROTECT, default=0)


class Image(models.Model):
    image = models.ImageField(upload_to='image')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    update_time = models.DateTimeField(auto_now=True, null=True)


from django.contrib import admin

admin.site.register(Customer)
admin.site.register(Image)
