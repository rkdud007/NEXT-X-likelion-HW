from django.shortcuts import render

# Create your views here.
def count(request):
    return render(request,'count.html')

def result(request):
    text = request.POST['text']
    total_len = len(text)
    input_text = text
    not_strip = len(text.replace(' ',''))
    split_text = len(text.split())

    return render(request, 'result.html',{'total_len': total_len, 'input_text': input_text, 'not_strip':not_strip, 'split_text':split_text})