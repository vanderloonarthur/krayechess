# gallery/views.py

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback
import json
import logging

logger = logging.getLogger(__name__)

@csrf_exempt
def receive_feedback(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            logger.info(f"Received feedback data: {data}")

            feedback = data.get('feedback')
            reaction = data.get('reaction')
            additional_comments = data.get('additional_comments')

            logger.info(f"Feedback: {feedback}, Reaction: {reaction}, Additional comments: {additional_comments}")

            # Save data to the database
            try:
                Feedback.objects.create(
                    feedback=feedback,
                    reaction=reaction,
                    additional_comments=additional_comments
                )
                return JsonResponse({'message': 'Feedback received and stored successfully'})
            except Exception as e:
                logger.error(f"Error saving feedback: {e}")
                return JsonResponse({'error': 'Error saving feedback'}, status=500)
        except Exception as e:
            logger.error(f"Error parsing request data: {e}")
            return JsonResponse({'error': 'Invalid request data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def feedback_list(request):
    feedbacks = Feedback.objects.all()
    return render(request, 'feedback_list.html', {'feedbacks': feedbacks})

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')
