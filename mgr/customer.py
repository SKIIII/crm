from django.http import JsonResponse
import json

from common.models import Customer
from django.core.paginator import Paginator
from django.forms.models import model_to_dict


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
    if action == 'list_customer':
        return listcustomers(request)
    elif action == 'add_customer':
        return addcustomer(request)
    elif action == 'modify_customer':
        return modifycustomer(request)
    elif action == 'del_customer':
        return deletecustomer(request)
    elif action == 'get_customer':
        return getcustomer(request)
    elif action == 'all_customer':
        return allcustomers(request)
    else:
        return JsonResponse({'code': 1, 'msg': '不支持该类型http请求'})


def listcustomers(request):
    page = request.GET.get('page')  # 第几页
    limit = request.GET.get('limit')  # 每页多少
    if page is None or limit is None:  # 默认返回
        page = 1
        limit = 10

    qs = Customer.objects.values()
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


def getcustomer(request):
    customerid = request.params['id']

    try:
        # 根据 id 从数据库中找到相应的客户记录
        customer = Customer.objects.get(id=customerid)
        res = model_to_dict(customer)
    except Customer.DoesNotExist:
        return {
            'code': 1,
            'msg': f'id 为`{customerid}`的客户不存在'
        }

    return JsonResponse({'code': 200, 'msg': '操作成功', 'data': res})


def allcustomers(request):
    qs = Customer.objects.values('id', 'name')
    retlist = list(qs)
    return JsonResponse({'code': 200, 'msg': '操作成功', 'data': {
        'list': retlist,
    }})


def addcustomer(request):
    info = request.params['data']

    # 从请求消息中 获取要添加客户的信息
    # 并且插入到数据库中
    # 返回值 就是对应插入记录的对象
    record = Customer.objects.create(name=info['name'],
                                     phonenumber=info['phonenumber'],
                                     address=info['address'])

    return JsonResponse({'code': 200, 'msg': '操作成功', 'data': {'id': record.id}})


def modifycustomer(request):
    # 从请求消息中 获取修改客户的信息
    # 找到该客户，并且进行修改操作

    customerid = request.params['data']['id']
    newdata = request.params['data']

    try:
        # 根据 id 从数据库中找到相应的客户记录
        customer = Customer.objects.get(id=customerid)
    except Customer.DoesNotExist:
        return {
            'code': 1,
            'msg': f'id 为`{customerid}`的客户不存在'
        }

    if 'name' in newdata:
        customer.name = newdata['name']
    if 'phonenumber' in newdata:
        customer.phonenumber = newdata['phonenumber']
    if 'address' in newdata:
        customer.address = newdata['address']

    # 注意，一定要执行save才能将修改信息保存到数据库
    customer.save()

    return JsonResponse({'code': 200, 'msg': '操作成功'})


def deletecustomer(request):
    customerids = request.params['ids']
    for i in customerids:
        # 如果id不为空，获取该字段，并将其删除，我们只删除book表，publisher表不变
        if i != '':
            obj = Customer.objects.get(id=i)
            obj.delete()
    # try:
    #     # 根据 id 从数据库中找到相应的客户记录
    #     customer = Customer.objects.get(id=customerid)
    # except Customer.DoesNotExist:
    #     return {
    #         'code': 1,
    #         'msg': f'id 为`{customerid}`的客户不存在'
    #     }

    # delete 方法就将该记录从数据库中删除了

    return JsonResponse({'code': 200, 'msg': '操作成功'})
