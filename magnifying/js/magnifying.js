$(function(){
    showBig();
    function showBig(){
        /*获取放大镜显示区域小黄块*/
        var $mask=$('#mask');
        /*获取绑定事件的透明遮罩*/
        var $maskTop=$('#maskTop');
        /*获取中图、大图和大图容器*/
        var $mediumImg=$('#mediumImg');
        var $largeImg=$('#largeImg');
        var $largeImgContainer=$('#largeImgContainer');
        /*获取小黄块的宽高*/
        var maskWidth=$mask.width();
        var maskHeight=$mask.height();
        var mediumImgWidth=$mediumImg.width();
        var mediumImgHeight=$mediumImg.height();
        /*给透明遮罩绑定事件*/
        $maskTop.hover(function () {
          $mask.show();
          $largeImg.show();
          $largeImgContainer.show();
        },function () {
            $mask.hide();
            $largeImg.hide();
            $largeImgContainer.hide();
           /*为透明遮罩绑定mouseover事件*/
        }).mousemove(function (event) {
            var left=0;
            var top=0;
            /*获取事件相对于容器的的坐标*/
            var offsetX=event.offsetX;
            var offsetY=event.offsetY;
            left=offsetX-(maskWidth/2);
            top = offsetY-(maskHeight/2);
            /*小黄块边界值的判断*/
            //横向判断
            if (left < 0){
                left = 0;
            }else if (left>mediumImgWidth-maskWidth){
                left = mediumImgWidth-maskWidth;
            }
            //纵向判断
            if (top < 0){
                top = 0;
            }else if (top > mediumImgHeight - maskHeight){
                top = mediumImgHeight - maskHeight;
            }
            $mask.css({
                left:left,
                top:top
            });
            /*按比例显示大图*/
            left=-left/mediumImgWidth*$largeImg.width();
            top=-top/mediumImgHeight*$largeImg.height();
            $largeImg.css({
                left:left,
                top:top
            })

            })


    }



})