$_$wp(1);
function multiplicationTable(table) {
    $_$wf(1);
    for (let i = 1; $_$w(1, 0), i < table.length; i++) {
        for (let j = 1; $_$w(1, 1), j < table[i].length; j++) {
            if ($_$w(1, 2), table[i][j] == 0) {
                $_$w(1, 3), table[i][j] = table[i][0] * table[0][j] + table[0][0];
            }
        }
    }
    return $_$w(1, 4), table;
}
$_$w(1, 5), $_$tracer.log(multiplicationTable([
    [
        3,
        1,
        2,
        3,
        4
    ],
    [
        5,
        0,
        0,
        0,
        0
    ],
    [
        6,
        0,
        0,
        0,
        0
    ],
    [
        7,
        0,
        0,
        0,
        0
    ],
    [
        8,
        0,
        0,
        0,
        0
    ]
]), 'multiplicationTable([\n    [\n        3,\n ...', 1, 5);
$_$w(1, 6), $_$tracer.log(multiplicationTable([
    [
        5,
        3,
        5,
        7,
        9
    ],
    [
        2,
        0,
        0,
        0,
        0
    ],
    [
        4,
        0,
        0,
        0,
        0
    ],
    [
        6,
        0,
        0,
        0,
        0
    ],
    [
        8,
        0,
        0,
        0,
        0
    ]
]), 'multiplicationTable([\n    [\n        5,\n ...', 1, 6);
$_$wpe(1);