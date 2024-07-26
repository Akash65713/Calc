from django.http import JsonResponse
from .calculator import calculate

def calculate_view(request):
    expression = request.GET.get('expression')
    result = calculate(expression)
    return JsonResponse({'result': result})