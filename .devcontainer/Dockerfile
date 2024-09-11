FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

# Install any additional tools or packages here
RUN apt-get update && apt-get install -y git curl

# Install Daytona
RUN curl -sf -L https://download.daytona.io/daytona/v0.29/daytona-linux-amd64 -o /usr/local/bin/daytona && \
   chmod +x /usr/local/bin/daytona

