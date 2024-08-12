## TECH STACK: Rectjx, Nodejs, MySql, Docker, AWS, Nginx

### **Docker**: Containerizes the project, creating a consistent and portable environment that streamlines deployment and ensures reliable operation across various systems.

### **AWS**: Used to deploy website.

### Nginx: Used as a reverse proxy to manage and redirect requests from `aman-meenia.workd.mg` to the appropriate backend services, ensuring efficient traffic handling and streamlined routing within your application.

## Website Link

link -> [Website Link](http:aman-meenia.work.gd)

## Only http works , https not work because certbot is not able to generate the ssl certifcate for this domain

## RUN CODE

```
cd frontend

docker build -t frontend .


cd backend

docker build -t backend .

docker-compose up -d

```
![30ecaeb7f609301a408f2daf9f8b7535](https://github.com/user-attachments/assets/4168e4a0-2ad9-4c41-921e-0b52b0575fcb)


![29e16b2ef44c0546cc50aae1da1eb0a1](https://github.com/user-attachments/assets/3a4e52a0-b8a7-4744-8317-c5c0e2cb5343)
![3611eb2a5d45ca44335579f562fc910d](https://github.com/user-attachments/assets/d3d56982-a1b9-4851-b749-70fac52ab0d9)
