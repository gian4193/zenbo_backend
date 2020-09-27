from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from backend.models import Login_id, current_room_patient_record,Patient_temperature,Patient_bloodpressure

# Create your views here.

def insert_login(request):
    if request.method == "GET":
        try:
            user = request.GET['user']
            Login_id.objects.create(user=user)
            return HttpResponse("success")
        except Exception as e:
            print(e)
            return HttpResponse("should include keyword")
    else :
        return HttpResponse("please use GET")


def upload_temperature(request):
    if request.method == "GET":
        try:
            room = request.GET['room']
            temperature = request.GET['temperature']
            patient_id = current_room_patient_record.objects.filter(room_num=room)[0].patient_id
            Patient_temperature.objects.create(patient_id=patient_id,temperature=temperature)
            return HttpResponse("success")
        except Exception as e:
            print(e)
            return HttpResponse("should include keyword")
    else :
        return HttpResponse("please use GET")


def update_room_patient(request):
    if request.method == "GET":
        try:
            room_num = request.GET['room']
            patient = request.GET['patient']
            room = current_room_patient_record.objects.filter(room_num=room_num)
            print(len(room))
            if len(room) != 0:
                 room.update(patient_id=patient)
            else:
                current_room_patient_record.objects.create(room_num=room_num,patient_id=patient)
            return HttpResponse("success")
        except Exception as e:
            print(e)
            return HttpResponse("should include keyword")
    else :
        return HttpResponse("please use GET")


def validate_login(request):
    if request.method == "GET":
        try:
            user = request.GET['user']
            print(user)
            check = Login_id.objects.filter(user=user)
            if len(check) == 0:
                return HttpResponse("invalid")
            return HttpResponse("valid")
        except Exception as e:
            print(e)
            return HttpResponse("should include keyword")
    else:
        return HttpResponse("please use GET")

def get_patient_temperature(request):
    if request.method == "GET":
        try:
            patient = request.GET['patient']
            data = Patient_temperature.objects.filter(patient_id=patient)
            result_arr = []
            for index in range(0,len(data)):
                if index > 29 :
                    break
                record = {
                    "date" : str(data[index].create_date).split('.')[0],
                    "temperature" : data[index].temperature
                }
                result_arr.append(record)
            return JsonResponse(result_arr,safe=False)
        except Exception as e:
            print(e)
            return HttpResponse("should include keyword")
    else :
        return HttpResponse("please use GET")




