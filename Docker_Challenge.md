1)For the first challenge, I was able to get the curl installed inside the container but could not figure out how to make the curl work as I was always getting the error: "could not resolve proxy: myproxy.local" I could not figure out if this was a mistake with my local setup(/etc/hosts file /etc/resolv.conf file missing configuration) or problem with configuration within my container. I tried changing and adding routes for the ip I got for google.com by pinging and adding that to resolv.conf but that also did not work. Finally I checked the ~/.curlrc file within the container and saw the entry : "proxy=http://myproxy.local:3128" and I commented this out and then voila; the curl worked like charm.Additinally I also exposed the port 80 while running the container itself with:docker run -it --expose=80 circleci/challenge-1. Reference : https://askubuntu.com/questions/347384/curl-5-couldnt-resolve-proxy-hproxy-iitm-ac-in

2)For the second troubleshooting scenario, we simply need to map the container in quoestion the port 8000 in order for it to be able to ot the website properly for which we use the following command: docker -d run -p 8000:8000 circleci/challenge-2

3)For the second troubleshooting scenario, we simply need to map the code of the static page at the index.html code at the location /usr/share/nginx/html and then it will show the "Hello world" page. Alternatively we can change the nginx's default page through dockerfile and then launch it by running a container.
Reference: https://stackoverflow.com/questions/49864764/how-to-change-nginxs-default-homepage-via-a-dockerfile-and-then-launch-it-by-ru

4)For the fourth challenge, there are couple of options:
a) we can use docker stats but that only gives container level info,so alternatively we can exec and then use (||)with the linux command which we want to run which in this case will either be ps or top
b)we can login to the container and do either top with 'm' option or lsof to get the process/file consuming maximum space and then stop(kill)/close them accordingly 
c)furthermore the path /proc/processname/exe or /proc/processname/cmdline help in identifying which process was the root cause for starting the process with maximum memory usage.
d)using third party app like prometheus is an option but it is not straightforward enough 


