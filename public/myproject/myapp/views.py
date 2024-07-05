# myapp/views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return HttpResponse("Hello, world. You're at the index.")

@csrf_exempt
def receive_feedback(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        feedback = data.get('feedback')
        reaction = data.get('reaction')
        additional_comments = data.get('additionalComments')

        # Optionally, save feedback to database
        # feedback_obj = Feedback.objects.create(feedback=feedback, reaction=reaction, additional_comments=additional_comments)

        return JsonResponse({'message': 'Feedback received successfully'}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
# Inside myproject/views.py

from django.shortcuts import render


