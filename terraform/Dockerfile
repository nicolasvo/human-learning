FROM ubuntu

WORKDIR /app
COPY . .

RUN apt update && \
    apt install -y curl && \
    apt install -y wget && \
    apt install -y unzip && \
    apt install -y vim && \
    apt install -y openssh-client
RUN wget -O ~/terraform.zip https://releases.hashicorp.com/terraform/0.12.19/terraform_0.12.19_linux_amd64.zip && \
    unzip ~/terraform.zip -d ~/
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash
RUN wget -O ~/packages-microsoft-prod.deb -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
    dpkg -i ~/packages-microsoft-prod.deb && \
    apt update && \
    apt install -y powershell

RUN echo "alias terraform=~/terraform" >> ~/.bashrc
RUN /bin/bash -c "source ~/.bashrc"

ENTRYPOINT ["/bin/bash"]