from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic.base import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect

from letrista.draft import Draft

class EditorPageView(TemplateView):

	template_name = "editor.html"

@csrf_protect
def get_marke37(request):
	if request.method == 'POST':
		# Get the draft text
		draft_text = request.POST['text']
		draft_json = __get_letrista_draft(draft_text)

		return JsonResponse(draft_json)

def __get_letrista_draft(text):
	"""Gets the processed text thru the `Draft` object."""

	draft = Draft(text)

	draft.process_lines()

	as_json = {
		'lyrics': draft.text,
		'word_count': draft.word_count,
		'line_count': draft.line_count
	}

	return as_json
