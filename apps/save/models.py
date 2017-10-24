from __future__ import unicode_literals

from django.db import models
import re, bcrypt, jsonfield

PASSWORD_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$')

class MrUserManager(models.Manager):
    def validate_user(self, data):
        errors = {}
        if len(data['username']) < 4:
            errors['usernamelen'] = "Username must be at least 4 characters."
        if not data['username'].isalnum():
            errors['usernamechars'] = "Username may only contain letters and numbers."
        if len(data['pword']) < 8 or not PASSWORD_REGEX.match(data['pword']):
            errors['pword'] = "Password must be at least 8 characters and contain one lowercase, one uppercase, and one number."
        if data['pword'] != data['conf']:
            errors['pwconf'] = "Password did not match confirmation."
        return errors

    def create_user(self, data):
        if self.filter(username=data['username']).exists():
            return False
        return self.create(username=data['username'], password=bcrypt.hashpw(data['pword'].encode(), bcrypt.gensalt()))

    def login(self, data):
        if self.filter(username=data['username']).exists():
            user = self.get(username=data['username'])
            if bcrypt.checkpw(data['pword'].encode(), user.password.encode()):
                return {'status': True, 'user': user}
        return {'status': False, 'error': 'Login information invalid.'}

class MrCharacterManager(models.Manager):
    def save_char(self, charid, data):
        instance = self.get(id=charid)
        instance.character = data['character']
        instance.save()
        return True

    def new_char(self, userid):
        user = User.objects.get(id=userid)
        chars = self.filter(user=user)
        for char in list(chars):
            if not char.character:
                char.delete()
        if len(chars) < 3:
            new = self.create(user=user)
            return new
        else:
            return False

    def delete_char(self, charid):
        char = self.get(id=charid)
        char.delete()
        return True

class User(models.Model):
    username = models.CharField(max_length=45, unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MrUserManager()

class Character(models.Model):
    character = jsonfield.JSONField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name="characters", default=None)
    objects = MrCharacterManager()