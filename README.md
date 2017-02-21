# TransIP HAIP switcher

We use the following simple script/Docker container to switch over some of our floating IPS.
If the script is requested without the `DESTINATION_VPS` variable, it will just print the current machine the HAIP redirect to.

You can use the container like this (assumed the private key is stored in `/tmp/privateKey`):
 
 ```bash
 docker run \
	 -v /tmp/privateKey:/opt/privateKey \
	 -e TRANSIP_USER=magnetme \
	 -e HAIP_NAME=magnetme-haip \
	 -e DESTINATION_VPS=magnetme-vps30 
	 magnetme/transip-haip-switcher
 ```
