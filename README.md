# Kubernetes Microservices Project

## Overview
This project demonstrates a **microservices architecture** on Kubernetes using:
- **Frontend (Node.js)**
- **Backend (Flask API)**
- Deployed with **Minikube** and **kubectl**

## Features
- Frontend calls backend via Kubernetes **ClusterIP service**
- Frontend exposed using **NodePort**
- Scalable deployments
- Docker images pushed to DockerHub

## Run
1. Start Minikube: `minikube start --driver=docker`
2. Deploy: `kubectl apply -f k8s/`
3. Access frontend: `minikube service frontend-service`

## Outcome
- Learned Pods, Deployments, Services
- Implemented inter-service communication
- Practiced scaling and monitoring

