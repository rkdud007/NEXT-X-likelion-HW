from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200,default = '')
    content = models.TextField(default = '')
    due_date = models.DateField(auto_now=False,null=True, blank=True)

    def __str__(self):
        return self.title