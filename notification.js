noaNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)

function noaNotifications (expenditure, d) {
    let n = 0;
    let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ];
    let m1, m2;

    let cs = new Array(201).fill(0);
    for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++;

    for (let i = d, l = expenditure.length; i < l; i++) {

        for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
        for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
        let m = (m1 + m2) / 2;

        if (expenditure[i] >= m * 2) n++;
        cs[expenditure[i-d]]--;
        cs[expenditure[i]]++;
    }

    console.log(n);
}