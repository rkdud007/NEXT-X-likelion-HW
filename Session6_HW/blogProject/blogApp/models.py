from django.db import models

# Create your models here.

choices = (
              ('movie', 'movie'),
              ('drama', 'drama'),
              ('programming', 'programming'),
    )

class Article(models.Model):
    choice = models.CharField(max_length =11, choices= choices, default='movie')
    title = models.CharField(max_length=200, help_text="최대 200자까지 입력가능합니다.")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
        return self.title
    
    