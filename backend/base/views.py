from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .healthcare_chatbot_master import chat_bot
import re

# Create your views here.


@api_view(["POST"])
def symptom_details(request):
    data = request.data
    name = data["name"]
    symptom = data["symptom"]
    days = data["days"]
    print(symptom, days, name)
    symptom = re.sub(' +', " ", symptom.strip())
    try:
        symptomsList = chat_bot.getSymptoms(symptom, int(days))
        # print(symptomsList)
        return Response({"sentDetails": data, "symptomsList": symptomsList})
    except Exception as e:
        try:
            symptomsList = chat_bot.getSymptoms(
                symptom.replace(" ", "_"), int(days))
            return Response({"sentDetails": data, "symptomsList": symptomsList})

        except:
            print(str(e))
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def disease_details(request):
    data = request.data
    name = data["basicData"]["name"]
    symptom = data["basicData"]["symptom"]
    days = data["basicData"]["days"]
    symptomsDetail = data["symptomDetails"]
    print(symptomsDetail, days, name, symptom)
    symptom = re.sub(' +', " ", symptom.strip())

    try:
        diseaseDetails = chat_bot.getDiseaseDetails(
            symptom, int(days), symptomsDetail)
        return Response(diseaseDetails)
    except Exception as e:
        try:
            diseaseDetails = chat_bot.getDiseaseDetails(
                symptom.replace(" ", "_"), int(days), symptomsDetail)
            return Response(diseaseDetails)

        except:
            print(str(e))
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
