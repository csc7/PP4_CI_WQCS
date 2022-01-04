from django.db import models

# Create your models here.


class WindData(models.Model):
    date = models.DateField(max_length=200)
    wind_speed = models.FloatField(max_length=200)
    wind_direction = models.FloatField(max_length=200)


class TemperatureData(models.Model):
    date = models.ForeignKey(WindData, on_delete=models.CASCADE)
    temperature = models.FloatField(max_length=200)
    feels_like = models.FloatField(max_length=200)


class OtherWeatherData(models.Model):
    date = models.ForeignKey(WindData, on_delete=models.CASCADE)
    pressure = models.FloatField(max_length=200)
    humidity = models.FloatField(max_length=200)
    visibility = models.FloatField(max_length=200)
    sky = models.CharField(max_length=200)
    main = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    sunrise = models.CharField(max_length=200)
    sunset = models.CharField(max_length=200)

