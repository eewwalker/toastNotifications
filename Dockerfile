# Base image
FROM ubuntu:18.04

# Installing Required Packages
RUN     apt-get update && \
        apt-get upgrade -y && \
        apt-get install -y git curl

# Installing NodeJS
RUN     curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
        apt-get install -y nodejs

# Creating the educative directory and downloading the code for the application in it
RUN     git clone https://github.com/joeattardi/svelte-toast.git
RUN     cd svelte-toast && npm install

        