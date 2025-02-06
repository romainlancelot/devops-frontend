# Frontend Deployment on Kubernetes

This document explains how to deploy your frontend application to a Kubernetes cluster within the "borg" namespace.

## Prerequisites:

- A Kubernetes cluster with the "borg" namespace created.
- Docker installed and configured.
- Your frontend Docker image built and pushed to a Docker registry (e.g., Docker Hub).

## Technologies Used:

- Docker: Containerization platform for building and running frontend code.
- Kubernetes: Container orchestration platform for managing container deployments and scaling.
- Nginx: Reverse proxy server for routing external traffic to the frontend application.

## Deployment Steps:

### 1. Frontend Docker Image:

- Ensure you have a Dockerfile that builds your frontend project and copies the static assets to a designated directory (e.g., `/app/dist`).
- Build and push the image to your Docker registry.

### 2. Kubernetes Resources:

- The provided YAML files define the deployment configuration for your frontend and the external Nginx server.
- These files utilize the "borg" namespace for deployment.

### 3. Deployment Commands:

- Apply the YAML files in the following order (assuming they are in the same directory):

  ```bash
  kubectl apply -f . -n borg
  ```

- Alternatively, apply them individually:

  ```bash
  kubectl apply -f frontend-deployment.yaml -n borg
  kubectl apply -f frontend-service.yaml -n borg
  kubectl apply -f external-nginx-configmap.yaml -n borg
  kubectl apply -f external-nginx-deployment.yaml -n borg
  kubectl apply -f external-nginx-service.yaml -n borg
  ```

### 2. Verification:

- After deployment, check the status of pods, deployments, and services using:

  ```bash
  kubectl get deployments -n borg
  kubectl get pods -n borg
  kubectl get services -n borg
  ```

### 3. Accessing the Frontend:

- If the `external-nginx-service` is of type `LoadBalancer`, you should receive an external IP address. Access your frontend application through this IP address and port (typically 80).

## How it Works:

1.  **Frontend Image:** Your frontend code is packaged as a Docker image, ensuring a consistent and isolated environment.
2.  **Frontend Deployment:** A Kubernetes Deployment manages multiple replicas of your frontend container for redundancy and scalability.
3.  **Frontend Service:** A Kubernetes Service exposes the frontend deployment internally within the cluster, making it accessible to other services.
4.  **External Nginx:** A separate Nginx deployment serves as a reverse proxy, receiving external traffic and forwarding it to the internal frontend service.
5.  **Load Balancing:** The external Nginx service (e.g., LoadBalancer) distributes traffic across available frontend pods.

### Benefits of this Approach:

- **Scalability:** You can easily scale your frontend application by adding more replicas to the deployment.
- **High Availability:** Kubernetes ensures that your frontend pods are restarted if they fail.
- **Separation of Concerns:** The frontend image remains focused on serving static content, while the external Nginx handles external traffic management.
- **Centralized Configuration:** Using a ConfigMap for Nginx configuration makes it easy to manage and update.

### Additional Notes:

- You might need to adjust resource requests and limits in the deployment YAML files based on your application's needs.
- Consider using tools like Helm charts for a more packaged and standardized deployment approach.
