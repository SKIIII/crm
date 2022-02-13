import os

from django.http import JsonResponse
import json
import datetime
import random
from django.core.paginator import Paginator
from django.forms.models import model_to_dict
from django.core.serializers import serialize

from common.models import Image


def upload(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'code': 0, 'msg': '图片不存在'})
    res = Image.objects.create(
        image=file
    )
    return JsonResponse({'code': 200, 'msg': '上传成功', 'data': {'url': res.image.url}})
