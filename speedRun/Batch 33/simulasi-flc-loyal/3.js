$_$wp(1);
function closestToZero(arr) {
    $_$wf(1);
    if ($_$w(1, 0), arr.length == 0) {
        return $_$w(1, 1), 0;
    }
    let temp = ($_$w(1, 2), Math.abs(0 - arr[0]));
    let tempNum = ($_$w(1, 3), 0);
    for (let i = 1; $_$w(1, 4), i < arr.length; i++) {
        if ($_$w(1, 5), Math.abs(0 - arr[i]) < temp) {
            $_$w(1, 6), temp = Math.abs(0 - arr[i]);
            $_$w(1, 7), tempNum = i;
        } else if ($_$w(1, 8), ($_$w(1, 9), Math.abs(0 - arr[i]) == temp) && ($_$w(1, 10), arr[i] >= 0)) {
            $_$w(1, 11), temp = Math.abs(0 - arr[i]);
            $_$w(1, 12), tempNum = i;
        }
    }
    return $_$w(1, 13), arr[tempNum];
}
$_$w(1, 14), $_$tracer.log(closestToZero([
    1,
    -2,
    -8,
    4,
    5
]), 'closestToZero([\n    1,\n    -2,\n    -8,\n ...', 1, 14);
$_$w(1, 15), $_$tracer.log(closestToZero([
    -12,
    -50,
    -137
]), 'closestToZero([\n    -12,\n    -50,\n    -1...', 1, 15);
$_$w(1, 16), $_$tracer.log(closestToZero([
    42,
    -5,
    12,
    21,
    5,
    24
]), 'closestToZero([\n    42,\n    -5,\n    12,\n...', 1, 16);
$_$w(1, 17), $_$tracer.log(closestToZero([
    42,
    5,
    12,
    21,
    -5,
    24
]), 'closestToZero([\n    42,\n    5,\n    12,\n ...', 1, 17);
$_$w(1, 18), $_$tracer.log(closestToZero([
    -5,
    -4,
    -2,
    12,
    -40,
    4,
    2,
    18,
    11,
    5
]), 'closestToZero([\n    -5,\n    -4,\n    -2,\n...', 1, 18);
$_$w(1, 19), $_$tracer.log(closestToZero([
    -5,
    8,
    62,
    -48,
    0,
    -59,
    -76,
    2,
    1,
    -56,
    37,
    -98,
    -1
]), 'closestToZero([\n    -5,\n    8,\n    62,\n ...', 1, 19);
$_$w(1, 20), $_$tracer.log(closestToZero([]), 'closestToZero([])', 1, 20);
$_$wpe(1);