from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages
import json, ast

def game(req):
    return render(req, 'save/game.html')

def signin(req):
    if 'id' in req.session:
        return redirect('/dashboard')
    return render(req, 'save/signin.html')

def save(req):
    if req.method == "POST":
        if 'id' not in req.session:
            return redirect('/')
        if 'char' not in req.session:
            return redirect('/dashboard')
        Character.objects.save_char(req.session['char'], req.POST)
    return HttpResponse()

def load(req):
    if 'id' not in req.session:
        return redirect('/')
    if 'char' not in req.session:
        return redirect('/dashboard')
    loaded = Character.objects.get(id=req.session['char'])
    if not loaded.character:
        data = {'name': req.session['charname']}
        data = json.dumps(data)
        return HttpResponse(data, content_type='application/json')
    character = loaded.character
    return HttpResponse(character, content_type='application/json')

def register(req):
    if req.method == "POST":
        errors = User.objects.validate_user(req.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(req, error, extra_tags=tag)
        else:
            user = User.objects.create_user(req.POST)
            if user:
                req.session['id'] = user.id
                return redirect('/intro')
            else:
                messages.error(req, "That username is already taken!", extra_tags="usernamelen")
    req.session['status'] = "register"
    return redirect('/')

def login(req):
    if req.method == "POST":
        res = User.objects.login(req.POST)
        if res['status']:
            req.session['id'] = res['user'].id
            return redirect('/dashboard')
        else:
            messages.error(req, res['error'], extra_tags="login")
    req.session['status'] = "login"
    return redirect('/')

def logout(req):
    req.session.clear()
    return redirect('/')

def intro(req):
    if 'id' not in req.session:
        return redirect('/')
    return render(req, 'save/intro.html')

def dashboard(req):
    if 'id' not in req.session:
        return redirect('/')
    context = {
        'user': User.objects.get(id=req.session['id']),
        'characters': [],
        'totalchars': []
    }
    characters = list(Character.objects.filter(user=context['user']))
    for character in characters:
        if character.character:
            loaded = json.loads(character.character)
            loaded['id'] = character.id
            context['characters'].append(loaded)
    totalchars = list(Character.objects.all())
    for character in totalchars:
        if character.character:
            loaded = json.loads(character.character)
            loaded['id'] = character.id
            context['totalchars'].append(loaded)
    context['totalchars'] = sorted(context['totalchars'], key=lambda k: k['xp'], reverse=True)
    return render(req, 'save/dashboard.html', context)

def newchar(req):
    if 'id' not in req.session:
        return redirect('/')
    if req.method == "POST":
        new = Character.objects.new_char(req.session['id'])
        if new:
            req.session['char'] = new.id
            req.session['charname'] = req.POST['charname']
            return redirect('/game')
        else:
            messages.error(req, "You may only have 3 characters. Please delete one to make another.", extra_tags="char")
    return redirect('/dashboard')

def start(req, charid):
    if 'id' not in req.session:
        return redirect('/')
    if Character.objects.filter(id=charid).exists():
        character = Character.objects.get(id=charid)
        if character.user.id == req.session['id']:
            req.session['char'] = character.id
            return redirect('/game')
    return redirect('/dashboard')

def character(req, charid):
    if 'id' not in req.session:
        return redirect('/')
    if Character.objects.filter(id=charid).exists():
        loaded = Character.objects.get(id=charid)
        chardata = json.loads(loaded.character)
        return render(req, 'save/char.html', {'character': chardata})
    return redirect('/dashboard')

def delete(req, charid):
    if 'id' not in req.session:
        return redirect('/')
    if Character.objects.filter(id=charid).exists():
        loaded = Character.objects.get(id=charid)
        if loaded.user.id == req.session['id']:
            Character.objects.delete_char(charid)
    return redirect('/dashboard')