from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback  # Assuming you have a Feedback model defined in your app
import json
from django.shortcuts import render

@csrf_exempt
def receive_feedback(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            feedback = data.get('feedback')
            reaction = data.get('reaction')
            additional_comments = data.get('additional_comments')

            feedback = Feedback.objects.create(
                feedback=feedback,
                reaction=reaction,
                additional_comments=additional_comments
            )
            return JsonResponse({'message': 'Feedback received and stored successfully'})
        except Exception as e:
            return JsonResponse({'error': 'Error saving feedback'}, status=500)
    elif request.method == 'GET':
        # Handle GET request here, if needed
        return HttpResponse("This endpoint only accepts POST requests.")
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    
def feedback_list(request):
    feedbacks = Feedback.objects.all()
    return render(request, 'feedback_list.html', {'feedbacks': feedbacks})
# myproject/views.py

def my_view(request):
    return HttpResponse("This is my view.")

def home(request):
    return HttpResponse("Welcome to the Home Page")