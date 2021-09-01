FROM nginx:1.15.8-alpine
#configuration
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./.htpasswd /etc/nginx
#content, comment out the ones you dont need!
COPY . /usr/share/nginx/html/
#copy ./*.css /usr/share/nginx/html/
#copy ./*.png /usr/share/nginx/html/
#copy ./*.js /usr/share/nginx/html/
RUN apt-get install apache2-utils \
    && chown root:nobody /etc/nginx/.htpasswd \
    && chmod 640  /etc/nginx/.htpasswd

# docker build -t webserver-image:v1 . 
# sudo docker run –d –p 80:80 mywebserver


# https://stackoverflow.com/questions/12467900/nginx-password-protect-not-working