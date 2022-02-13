import os

from django.http import JsonResponse
import json
import datetime
import random
from django.core.paginator import Paginator
from django.forms.models import model_to_dict
from django.core.serializers import serialize

from common.models import Product

import logging


def dispatcher(request):
    # 根据session判断用户是否是登录的管理员用户
    if 'usertype' not in request.session:
        return JsonResponse({
            'code': 302,
            'msg': '未登录',
            'redirect': '/mgr/sign.html'},
            status=302)

    if request.session['usertype'] != 'mgr':
        return JsonResponse({
            'code': 302,
            'msg': '用户非mgr类型',
            'redirect': '/mgr/sign.html'},
            status=302)
    # 将请求参数统一放入request 的 params 属性中，方便后续处理

    # GET请求 参数在url中，同过request 对象的 GET属性获取
    if request.method == 'GET':
        request.params = request.GET

    # POST/PUT/DELETE 请求 参数 从 request 对象的 body 属性中获取
    elif request.method in ['POST', 'PUT', 'DELETE']:
        # 根据接口，POST/PUT/DELETE 请求的消息体都是 json格式
        request.params = json.loads(request.body)

    # 根据不同的action分派给不同的函数进行处理
    action = request.params['action']
    if action == 'list_product':
        return listproducts(request)
    elif action == 'add_product':
        return addproduct(request)
    elif action == 'modify_product':
        return modifyproduct(request)
    elif action == 'del_product':
        return deleteproduct(request)
    elif action == 'get_product':
        return getproduct(request)

    else:
        return JsonResponse({'code': 1, 'msg': '不支持该类型http请求'})


def getordernum():
    todaytime = datetime.datetime.now()
    offset = datetime.timedelta(hours=8)  # 服务器时间少8小时
    re_date = (todaytime + offset).strftime('%Y%m%d%H%M%S')
    num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    res = re_date + random.choice(num) + random.choice(num) + random.choice(num)
    return res


# Student.objects.filter(grade=1,country__name='中国').values()
def listproducts(request):
    page = request.GET.get('page')  # 第几页
    limit = request.GET.get('limit')  # 每页多少
    if page is None or limit is None:  # 默认返回
        page = 1
        limit = 10
    qs = Product.objects.values('id', 'image', 'name', 'price', 'sn', 'spec',
                                'update_time', 'create_time',
                                'customer__name')
    paginator = Paginator(qs, limit)  # Show 20 contacts per page.
    total = paginator.count
    page_obj = paginator.page(page)
    retlist = list(page_obj)
    # retlist = json.loads(serializers.serialize('json', page_obj,ensure_ascii=False))

    return JsonResponse({'code': 200, 'msg': '操作成功', 'data': {
        'list': retlist,
        'totalCount': total,
        'currentPage': int(page),
    }})


def getproduct(request):
    productid = request.params['id']

    try:
        # 根据 id 从数据库中找到相应的客户记录
        product = Product.objects.select_related('customer').get(pk=productid)
        res = model_to_dict(product)
        res['customer__r'] = model_to_dict(product.customer)
        # qs = Customer.objects.values('id', 'name')
        # retlist = list(qs)
    except Product.DoesNotExist:
        return {
            'code': 1,
            'msg': f'id 为`{productid}`的产品不存在'
        }
    return JsonResponse({'code': 200, 'msg': '操作成功',
                         'data': {'product': res}})  # 'customer_list': retlist


def addproduct(request):
    info = request.params['data']

    # 从请求消息中 获取要添加客户的信息
    # 并且插入到数据库中
    # 返回值 就是对应插入记录的对象
    record = Product.objects.create(sn=getordernum(),
                                    name=info['name'],
                                    spec=info['spec'],
                                    price=info['price'],
                                    customer_id=info['customer_id'],
                                    image=info['image'], )

    return JsonResponse({'code': 200, 'msg': '操作成功', 'data': {'id': record.id}})


def modifyproduct(request):
    # 从请求消息中 获取修改客户的信息
    # 找到该客户，并且进行修改操作

    productid = request.params['data']['id']
    newdata = request.params['data']

    try:
        # 根据 id 从数据库中找到相应的客户记录
        product = Product.objects.get(id=productid)
    except Product.DoesNotExist:
        return {
            'code': 1,
            'msg': f'id 为`{productid}`的客户不存在'
        }

    if 'name' in newdata:
        product.name = newdata['name']
    if 'spec' in newdata:
        product.spec = newdata['spec']
    if 'price' in newdata:
        product.price = newdata['price']
    if 'image' in newdata:
        product.image = newdata['image']
    if 'customer_id' in newdata:
        product.customer_id = newdata['customer_id']

    # 注意，一定要执行save才能将修改信息保存到数据库
    product.save()

    return JsonResponse({'code': 200, 'msg': '操作成功'})


def deleteproduct(request):
    logging.debug(request)
    productids = request.params['ids']
    for i in productids:
        # 如果id不为空，获取该字段，并将其删除，我们只删除book表，publisher表不变
        if i != '':
            obj = Product.objects.get(id=i)
            obj.delete()
    # try:
    #     # 根据 id 从数据库中找到相应的客户记录
    #     product = Product.objects.get(id=productid)
    # except Product.DoesNotExist:
    #     return {
    #         'code': 1,
    #         'msg': f'id 为`{productid}`的客户不存在'
    #     }

    # delete 方法就将该记录从数据库中删除了

    return JsonResponse({'code': 200, 'msg': '操作成功'})
