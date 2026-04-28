# Experiment 3.3: Full-Stack Cloud Deployment Guide

This guide details the steps to deploy the application in the `FS-9` folder to AWS and Firebase/Netlify.

## Part A: Deploy Backend on AWS EC2
1. **Launch EC2 Instance:**
   - Go to AWS Console > EC2 > Launch Instance.
   - Choose **Amazon Linux 2023 AMI**.
   - Select **t2.micro** (Free Tier).
   - Configure Security Group: Allow **SSH (22)**, **HTTP (80)**, and **Custom TCP (5000)**.
2. **Setup Docker on EC2:**
   - SSH into your instance: `ssh -i your-key.pem ec2-user@your-ip`
   - Run:
     ```bash
     sudo yum update -y
     sudo yum install -y docker
     sudo service docker start
     sudo usermod -a -G docker ec2-user
     ```
   - Log out and log back in for permissions to take effect.

## Part B: Deploy Frontend on Netlify/Firebase
1. **Netlify:**
   - Connect your GitHub repo to Netlify.
   - Set Build Command: `npm run build`
   - Set Publish Directory: `dist`
2. **Firebase:**
   - Install CLI: `npm install -g firebase-tools`
   - Run: `firebase init` -> Choose Hosting.
   - Run: `firebase deploy`.

## Part C: Load Balancing & Scalability
1. **Target Group:**
   - Create a Target Group in AWS EC2 Console.
   - Register your EC2 instance on port 80.
2. **Application Load Balancer (ALB):**
   - Create an ALB.
   - Set listeners to HTTP (80).
   - Point the listener to your Target Group.
3. **Scalability Testing:**
   - Use a tool like **Apache Benchmark (ab)** or **JMeter**.
   - Command: `ab -n 1000 -c 10 http://your-alb-dns/`
   - Observe CPU usage in EC2 metrics.

## Part D: CI/CD & Monitoring
1. **GitHub Secrets:** Add the following to your repo settings:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `EC2_HOST`
   - `EC2_SSH_KEY` (The content of your .pem file)
2. **CloudWatch Monitoring:**
   - In AWS Console, go to **CloudWatch**.
   - Create a **Dashboard**.
   - Add widgets for **EC2 CPU Utilization** and **ALB Request Count**.
   - Set an **Alarm** to notify you via SNS if CPU > 70%.

## Verification
- Access the Frontend URL provided by Netlify.
- It should successfully fetch data from the backend running on EC2 (ensure `App.jsx` uses the correct IP/DNS).
