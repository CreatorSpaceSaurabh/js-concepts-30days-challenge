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

# Steps to run build using compose command

- Create compose.yaml file and write all necessary commands required to run project
- To run command -
  - docker compose up

# Create images using docker hub

- Go to website hub.docker.com
- Signup / Sign in
- Create repository with name
- use repo name and add it using cmd -
  - docker build -t hub_account/repo_name path
  - e.g. - docker build -t creatorspacesaurabh/nodejs-app .
  - Push code -
    - docker push creatorspacesaurabh/nodejs-app
  - Pull Code -
    - docker pull creatorspacesaurabh/nodejs-app
  - Run code -
    - docker run --name container_name -p port:tcp_port image_name
    - e.g. - docker run --name hub_container -p 5000:5000 creatorspacesaurabh/nodejs-app

# Create build and run on live server -

    - i) docker buildx build --platform linux/amd64 -t repo_name path
        - e.g.-  docker buildx build --platform linux/amd64 -t creatorspacesaurabh/nodejs-demo-live-server .
    - ii) docker push image_name
        - docker push
    - iii) Now open website - play with docker - https://labs.play-with-docker.com/
        - Login with docker , start session - it will allow 4hrs for 1 session
        - Add new instance , type docker on instance terminal (its prebuilt with docker)
        - Type docker pull command from docker hub repository public view -
            - docker pull creatorspacesaurabh/nodejs-demo-live-server
        - After pull check whether docker image has been pulled or not using -
            - docker images
            - (will list all the images)
        - To run repo image -
            - docker run -p port:tcp_port public_repo_name
            - docker run -p 5000:5000 creatorspacesaurabh/nodejs-demo-live-server
