[![Magnet.me Logo](https://cdn.magnet.me/images/logo-2015-full.svg)](https://magnet.me?ref=github-transip-haip-switcher "Discover the best companies, jobs and internships at Magnet.me")

[![GitHub release](https://img.shields.io/github/release/magnetme/transip-haip-switcher.svg)](https://github.com/Magnetme/transip-haip-switcher/releases)
[![Docker pulls](https://img.shields.io/docker/pulls/magnetme/transip-haip-switcher.svg)](https://hub.docker.com/r/magnetme/transip-haip-switcher/)
[![Docker build](https://img.shields.io/docker/automated/magnetme/transip-haip-switcher.svg)](https://hub.docker.com/r/magnetme/transip-haip-switcher/)
[![Code Climate](https://img.shields.io/codeclimate/github/magnetme/transip-haip-switcher.svg)](https://codeclimate.com/github/Magnetme/transip-haip-switcher)
[![Github stars](https://img.shields.io/github/stars/magnetme/transip-haip-switcher.svg?style=social&label=Star)](https://github.com/Magnetme/transip-haip-switcher)

# TransIP HAIP switcher

We use the following simple script/Docker container at [Magnet.me](https://magnet.me?ref=github-transip-haip-switcher "Discover the best companies, jobs and internships at Magnet.me") to switch over some of our floating IPS.
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
