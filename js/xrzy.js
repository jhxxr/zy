// 调用一次
gethtmlfontsize();
// 添加监听事件(resize是监听的意思)
window.addEventListener('resize', gethtmlfontsize);

function gethtmlfontsize() {
    // 三个步骤:
    // 1.获取html的宽,
    //有些浏览器documentEleme获取不nt到,那就使用后面的body
    let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 2.htmlDom
    let htmlDom = document.getElementsByTagName("html")[0]
    //3.设置根元素样式
    htmlDom.style.fontSize = htmlwidth / 10 + 'px';
}

// 按钮切换页面功能代码
$(function () {
    $('div.left > ul > li:nth-child(2)').addClass('l-btn-active');
})

function showDetails(this_, i) {
    $(this_).addClass('l-btn-active').siblings().removeClass('l-btn-active')
    $('.items-box:eq(' + i + ')').removeClass('cnmsb').siblings().addClass('cnmsb')
    if (parseInt(i) >= 20) {
        alert('以下界面正在开发中……有问题请邮件联系站长')
    }
}