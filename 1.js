const produk = [
    {
        id_produk: 1,
        nama_produk: 'Huawei P30 pro'
    },
    {
        id_produk: 2,
        nama_produk: 'Huawei Nova 5T'
    }
];

const stok_produk = [
    {
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 18
    }
];

var result = Object.values(stok_produk.flat().reduce((map, r) => { 
    if (!map[r._id]) map[r._id] = { _id: r._id, total: 0};
    map[r._id].total += r.total;
    return map;
}, {}));

console.log(result);