# Booking Beaver UI

The UI of the Booking Beaver project.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It follows this [Guideline](https://www.peterbe.com/plog/how-to-create-react-app-with-docker) on how tu use Create React App with Docker.


## Docker Commands

Build the Docker image:
```
docker image build -t chrskllr/booking-beaver-ui .
```

Run the Docker image:
```
docker container run -it -p 3000:3000 -p 35729:35729 -v C:\code\booked-beaver\ui:/app  chrskllr/booking-beaver-ui
```




