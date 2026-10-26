# CloudCart — Production-Ready DevOps Platform

A hands-on DevOps project demonstrating automated CI/CD, container security, infrastructure as code, Kubernetes deployments, and monitoring.

## Project Overview

CloudCart is a containerized e-commerce API designed to demonstrate how application code moves from development to a monitored Kubernetes deployment through a repeatable CI/CD pipeline.

## Architecture

See [Architecture Documentation](docs/architecture.md) for the system design and CI/CD workflow.

## Technology Stack

- Application: Node.js and Express
- Containers: Docker
- CI/CD: GitHub Actions
- Security: Trivy
- Container Registry: AWS ECR
- Infrastructure as Code: Terraform
- Orchestration: Kubernetes and Amazon EKS
- Deployment: Helm
- Monitoring: Prometheus and Grafana

## Planned Features

- Automated tests on pull requests
- Container image vulnerability scanning
- Versioned image publishing
- Infrastructure provisioning with Terraform
- Kubernetes deployments using Helm
- Health checks and rollback
- Monitoring dashboards and alerts

## Project Status

Day 1 — Project scope, repository setup, and architecture documentation.

Implementation is in progress. Features will be marked complete after they are implemented and verified.

## Documentation

- [Architecture](docs/architecture.md)
- [Setup Guide](docs/setup.md)
- [Deployment Guide](docs/deployment.md)
- [Troubleshooting](docs/troubleshooting.md)
- [Incident Recovery](docs/incident-recovery.md)

## Security

Never commit AWS credentials, API keys, tokens, private keys, or other secrets. Use appropriate secret-management and identity controls for deployment workflows.

## License

MIT