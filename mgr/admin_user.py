from django.http import JsonResponse
import json

from django.contrib.auth.models import User


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
    if action == 'profile':
        return profile(request)
    # elif action == 'user_list':
    #     return user_list(request)
    # elif action == 'modify_customer':
    #     return modifycustomer(request)
    # elif action == 'del_customer':
    #     return deletecustomer(request)

    else:
        return JsonResponse({'code': 1, 'msg': '不支持该类型http请求'})


def profile(request):
    # qs = User.objects.values()
    # 将 QuerySet 对象 转化为 list 类型
    # 否则不能 被 转化为 JSON 字符串
    # retlist = list(qs)
    return JsonResponse({'code': 200, 'data': {
        'username': request.user.username,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
    }})
