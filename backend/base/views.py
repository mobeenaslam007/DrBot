from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .healthcare_chatbot_master import chat_bot

# Create your views here.

@api_view(["POST"])
def symptom_details(request):
    data = request.data
    name = data["name"]
    symptom = data["symptom"]
    days = data["days"]
    print(symptom, days, name)
    
    symptomsList = chat_bot.getSymptoms(symptom, int(days))
    # print(symptomsList)
    return Response({"sentDetails": data, "symptomsList": symptomsList})

@api_view(["POST"])
def disease_details(request):
    data = request.data
    name = data["basicData"]["name"]
    symptom = data["basicData"]["symptom"]
    days = data["basicData"]["days"]
    symptomsDetail = data["symptomDetails"]
    print(symptomsDetail, days, name, symptom)
    diseaseDetails = chat_bot.getDiseaseDetails(symptom, int(days), symptomsDetail)
    return Response(diseaseDetails)