function returnValues() {
    const id = $("#id").val();
    const dat = $("#dat").val();
    const hoin = $("#hoin").val();
    const hot = $("#hot").val();
    const eve = $("#eve").val();
    const des = $("#des").val();
    const st = $("#st").val();
    return {
        id,
        dat,
        hoin,
        hot,
        eve,
        des,
        st
    }
}

export { returnValues }