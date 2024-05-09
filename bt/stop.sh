jps | grep bt-web-1.10.6-SNAPSHOT.jar*  | awk '{print $1}' | xargs kill -9
