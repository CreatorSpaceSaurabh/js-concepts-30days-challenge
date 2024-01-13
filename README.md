# js-concepts-30days-challenge

JS concepts references files, explained in Videos on CreatorSpaceIn instagram handle

# Run docker file command

docker build -t js-concepts .

# To create docker image using terminal

- docker build -t js-concepts-img2 . (created js-concepts-img2)
- docker build -t js-concepts-img3 . (created js-concepts-img3)

# To see list of docker images

- docker images

# To delete particular image

- docker image rm image_name

# To delete particular image (which is already running, showing already in use)

- docker image rm image_name -f

# To list all containers

- docker ps -a

# To delete paricular container

- docker container rm container_name

# To delete paricular container(which is already running, showing already in use)

- docker container rm container_name -f

# To delete every image and container

- docker system prune -a

# To create image with versioning

- docker build -t image_name:version .
- where image_name will be js-concepts , version - v2

# To run image, created with versioning

- docker run --name container_name_version -p port:tcp_port image_name:version
- example - docker run --name js-concepts-container_v2 -p 5000:5000 js-concepts:v2

# To run image, created with versioning using VOLUME

- docker run --name container_name -p port:tcp_port --rm -v path_of_the_image_directory image:version
- docker run --name js_container -p 5000:5000 --rm -v /F:/CreatorSpace/clone-apps/CreatorSpaceSaurabh/JSConcepts30DaysChallenge/js-concepts-30days-challenge:/app js-concepts-image:v1
