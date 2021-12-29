FROM tomcat:8.0
LABEL maintainer="rabindrapatra825@gmail.com"

ADD dist/ /usr/local/tomcat/dist
COPY setenv.sh /usr/local/tomcat/bin/

EXPOSE 8080 8000
