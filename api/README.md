# Booking Beaver API

RESTful API of the Booking Beaver project using hapi.js 


## Docker Commands

Build the docker image:
```
docker image build -t chrskllr/booking-beaver-api .
```

Run the docker image:
```
docker container run -it -p 7500:7500 -v C:\code\booked-beaver\api:/app chrskllr/booking-beaver-api
```