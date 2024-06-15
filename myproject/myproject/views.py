# myproject/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback  # Assuming you have a Feedback model defined in your app
import json
from django.shortcuts import render

@csrf_exempt
def receive_feedback(request):
    if request.method == 'POST':
        try:
            # Assuming the data is sent as JSON
            data = json.loads(request.body)  # Access POST data
            feedback = data.get('feedback')
            reaction = data.get('reaction')
            additional_comments = data.get('additional_comments')

            # Process and validate data (if needed)

            # Save data to the database
            try:
                feedback = Feedback.objects.create(
                    feedback=feedback,
                    reaction=reaction,
                    additional_comments=additional_comments
                )
                return JsonResponse({'message': 'Feedback received and stored successfully'})
            except Exception as e:
                print("Error saving feedback:", e)
                return JsonResponse({'error': 'Error saving feedback'}, status=500)
        except Exception as e:
            print("Error parsing request data:", e)
            return JsonResponse({'error': 'Invalid request data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def feedback_list(request):
    feedbacks = Feedback.objects.all()
    return render(request, 'feedback_list.html', {'feedbacks': feedbacks})
