//===================================CallBacks============================

/* CallBack Example */

function cbexample(cb) {
    cb();
}

function add(){
    return 5+3;
}

cbexample(add);