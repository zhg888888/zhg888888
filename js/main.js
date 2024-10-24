document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.getElementById('main-title');
    const description = document.getElementById('description');
    const learnMoreBtn = document.getElementById('learn-more');

    // 添加标题动画效果
    mainTitle.style.opacity = '0';
    mainTitle.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        mainTitle.style.transition = 'opacity 1s, transform 1s';
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
    }, 500);

    // 添加描述文字动画效果
    description.style.opacity = '0';
    setTimeout(() => {
        description.style.transition = 'opacity 1s';
        description.style.opacity = '1';
    }, 1000);

    // 添加按钮点击事件
    learnMoreBtn.addEventListener('click', function() {
        alert('Thank you for your interest! More information coming soon.');
    });
});
