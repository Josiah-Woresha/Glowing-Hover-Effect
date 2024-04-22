document.querySelectorAll(".box").forEach(item => {
    item.onmousemove = e => {
        item.style.setProperty('--x', (e.pageX - item.offsetLeft) + 'px');
        item.style.setProperty('--y', (e.pageY - item.offsetTop) + 'px');
    };
})