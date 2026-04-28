# Experiment 3.3: Full-Stack Cloud Deployment (AWS + Firebase)

This project demonstrates a complete full-stack deployment pipeline.

## 🚀 Live Status
- **Backend (EC2):** [http://54.242.232.156/](http://54.242.232.156/)
- **Last Deployment:** 28 April 2026

## 🛠️ Project Structure
- `/backend`: Node.js Express server with Docker.
- `/frontend`: React (Vite) app.
- `.github/workflows`: CI/CD automation for AWS & Firebase.

## 🔐 Required GitHub Secrets
To enable the automatic deployment, go to **Settings > Secrets and variables > Actions** in this repository and add:

| Secret Name | Description |
| ----------- | ----------- |
| `AWS_ACCESS_KEY_ID` | Your AWS Access Key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS Secret Key |
| `EC2_HOST` | `54.242.232.156` |
| `EC2_SSH_KEY` | Content of your `.pem` file |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Service Account JSON |

## 🧪 Testing
Run the scalability test locally:
```bash
node scalability-test.js
```
