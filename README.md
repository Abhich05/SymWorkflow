# SymplyChain

> Supply-chain management platform — Hackathon MVP

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Backend     | Django 5 / Django REST Framework    |
| Frontend    | React 18 (Vite)                     |
| Task Queue  | Celery + Redis (ElastiCache)        |
| Database    | PostgreSQL (AWS RDS)                |
| Storage     | AWS S3 + CloudFront CDN             |
| Hosting     | AWS EC2 (staging & production)      |
| CI/CD       | GitHub Actions                      |

## Repository Layout

```
.
├── .github/
│   └── workflows/
│       ├── staging-deploy.yml      # Deploy on push to staging
│       └── production-deploy.yml   # Deploy on push to main
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   └── symplychain/               # Django project package
│       ├── __init__.py
│       ├── settings.py
│       ├── urls.py
│       ├── wsgi.py
│       └── celery.py
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── main.tsx
│       └── App.tsx
├── .env.example
└── README.md
```

## Deployment Flow

1. **Staging** — push to `staging` branch → GitHub Actions deploys frontend to S3 (staging bucket) and backend to the staging EC2 instance.
2. **Production** — push to `main` branch → GitHub Actions deploys frontend to S3 (prod bucket) and backend to the production EC2 instance.

## Local Development

```bash
# Backend
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd frontend
npm install
npm run dev
```

## Required GitHub Secrets

| Secret                        | Description                              |
| ----------------------------- | ---------------------------------------- |
| `AWS_ACCESS_KEY_ID`           | IAM access key                           |
| `AWS_SECRET_ACCESS_KEY`       | IAM secret key                           |
| `AWS_REGION`                  | e.g. `ap-south-1`                        |
| `EC2_SSH_KEY`                 | PEM private key for EC2 SSH access       |
| `STAGING_EC2_HOST`            | Public IP / DNS of staging EC2           |
| `PROD_EC2_HOST`               | Public IP / DNS of production EC2        |
| `STAGING_CF_DISTRIBUTION_ID`  | CloudFront distribution (staging)        |
| `PROD_CF_DISTRIBUTION_ID`     | CloudFront distribution (production)     |
