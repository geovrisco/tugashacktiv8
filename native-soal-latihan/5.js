/**
 * GROUP BY GENUS
 * 
 * Function groupByGenus menerima input berupa array-of-strings yang merupakan kumpulan spesies,
 * setiap spesies memiliki genus (kata pertama dari spesies tsb). 
 * Function ini akan mengelompokkan spesies berdasarkan genusnya dan menyingkat nama genusnya 
 * 
 * Input :
 * [
 *  'Lactobacillus casei',
 *  'Staphylococcus epidermidis',
 *  'Streptococcus mutans',
 *  'Lactobacillus salivarius'
 * ]
 * 
 * 
 * Output : 
 * {
 *  Lactobacillus: [ 'L. casei', 'L. salivarius' ],
 *  Staphylococcus: [ 'S. epidermidis' ],
 *  Streptococcus: [ 'S. mutans' ]
 * }
 * 
 * 
 * RULES 
 * 1. TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
 * 
 */
function groupByGenus(list) {
}
console.log(groupByGenus([
    'Lactobacillus casei',
    'Staphylococcus epidermidis',
    'Streptococcus mutans',
    'Lactobacillus salivarius'
]))
/**
 * {
 *  Lactobacillus: [ 'L. casei', 'L. salivarius' ],
 *  Staphylococcus: [ 'S. epidermidis' ],
 *  Streptococcus: [ 'S. mutans' ]
 * }
 */
 console.log(groupByGenus([
     'Vulpes chama',
     'Felis chaus',
     'Felis bieti',
     'Vulpes velox',
     'Canis lupus',
     'Canis simenis',
     'Vulpes zerda',
     'Giraffe camelopardalis',
     'Vulpes ferrilata'
 ]))
/**
 * {
 * Vulpes: [ 'V. chama', 'V. velox', 'V. zerda', 'V. ferrilata' ],
 * Felis: [ 'F. chaus', 'F. bieti' ],
 * Canis: [ 'C. lupus', 'C. simenis' ],
 * Giraffe: [ 'G. camelopardalis' ]
 * }
 * 
 */