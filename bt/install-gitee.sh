# 相关材料已上传天翼云盘（下载速度能达3M,但下载地址动态动化） https://cloud.189.cn/web/main/share/sendout
#下载 wget https://cswbw.gitee.io/gp/bt/install-gitee.sh

wget https://cswbw.gitee.io/gp/bt/dk-8u333-linux-x64.z01
wget https://cswbw.gitee.io/gp/bt/dk-8u333-linux-x64.z02
wget https://cswbw.gitee.io/gp/bt/dk-8u333-linux-x64.z03
wget https://cswbw.gitee.io/gp/bt/dk-8u333-linux-x64.zip

wget https://cswbw.gitee.io/gp/bt/bt-web-1.10.6-SNAPSHOT.jar

wget https://cswbw.gitee.io/gp/bt/lib.z01
wget https://cswbw.gitee.io/gp/bt/lib.z02
wget https://cswbw.gitee.io/gp/bt/lib.z03
wget https://cswbw.gitee.io/gp/bt/lib.zip
# 下载常用命令
wget https://cswbw.gitee.io/gp/bt/stop.sh
wget https://cswbw.gitee.io/gp/bt/start.sh
wget https://cswbw.gitee.io/gp/bt/auto.sh
wget https://cswbw.gitee.io/gp/bt/bak.sh
# 命令赋权
chmod 777 *.sh
# 解压jdk
tar zxf jdk-8u333-linux-x64.tar.gz
# 解压lib
unzip -o lib.zip -d ./
# 启动
nohup ./jdk1.8.0_333/bin/java -jar bt-web-1.10.6-SNAPSHOT.jar &

