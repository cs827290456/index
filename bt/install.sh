wget http://192.168.1.29:8899/file/jdk-8u333-linux-x64.tar.gz
wget http://192.168.1.29:8899/file/bt-web-1.10.6-SNAPSHOT.jar
wget http://192.168.1.29:8899/file/lib.zip
# 下载常用命令
wget http://192.168.1.29:8899/file/stop.sh
wget http://192.168.1.29:8899/file/start.sh
wget http://192.168.1.29:8899/file/auto.sh
wget http://192.168.1.29:8899/file/bak.sh
# 命令赋权
chmod 777 *.sh
# 解压jdk
tar zxf jdk-8u333-linux-x64.tar.gz
# 解压lib
unzip -o lib.zip -d ./
# 启动
nohup ./jdk1.8.0_333/bin/java -jar bt-web-1.10.6-SNAPSHOT.jar &
#下载 wget http://192.168.1.29:8899/file/install.sh
